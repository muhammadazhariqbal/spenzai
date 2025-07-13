// AppContext.js
import React, { createContext, useEffect, useState } from "react";
import {
  addExpense,
  deleteExpenseLocal,
  getExpenses,
  getTotalExpenses,
  getUserLocal,
  initUserLocal,
} from "./localStorage";
import { isDateMatchFilter } from "./helpers";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState("today");
  const [totalToday, setTotalToday] = useState("00");
  const [totalWeek, setTotalWeek] = useState("00");
  const [totalMonth, setTotalMonth] = useState("00");

  const checkExistingUser = async () => {
    try {
      setIsLoading(true);

      const existingUser = await getUserLocal();
      setUser(existingUser);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error checking existing user:", error);
    }
  };

  useEffect(() => {
    handleCalculateTotal();
  }, [duration, totalSpent]);
  const handleDurationContext = (value) => {
    setDuration(value);
  };

  const handleCalculateTotal = async () => {
    const allExpenses = await getExpenses();

    const totalToday = allExpenses
      .filter((item) => isDateMatchFilter(item.date, "today"))
      .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalWeek = allExpenses
      .filter((item) => isDateMatchFilter(item.date, "week"))
      .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalMonth = allExpenses
      .filter((item) => isDateMatchFilter(item.date, "month"))
      .reduce((sum, item) => sum + Number(item.amount), 0);

    // Set these values to state if needed
    setTotalToday(totalToday);
    setTotalWeek(totalWeek);
    setTotalMonth(totalMonth);
  };

  // for user
  useEffect(() => {
    checkExistingUser();
  }, []);
  const getAllExpenses = async () => {
    try {
      setIsLoading(true);

      const allExpenses = await getExpenses();
      setTotalSpent(await getTotalExpenses(allExpenses));
      await handleCalculateTotal();
      setExpenses(allExpenses);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("error on getting all expenses", error);
    }
  };

  // for expenses
  useEffect(() => {
    getAllExpenses();
  }, []);

  const saveExpense = async (expense) => {
    const expenseDetails = await addExpense(expense);

    // update expenses
    setExpenses((prev) => {
      const updatedExpenses = [...prev, expenseDetails];

      // recalculate total
      setTotalSpent(
        updatedExpenses.reduce((sum, item) => sum + item.amount, 0)
      );

      return updatedExpenses;
    });
  };

  const deleteExpense = async (itemId, expensesData) => {
    await deleteExpenseLocal(itemId);
    await getAllExpenses();
  };

  const saveUser = async (user) => {
    setIsLoading(true);
    await initUserLocal(user);
    setUser(user);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        saveUser,
        expenses,
        saveExpense,
        isLoading,
        totalSpent,
        deleteExpense,
        getAllExpenses,
        checkExistingUser,
        handleDurationContext,
        duration,
        totalMonth,
        totalWeek,
        totalToday,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
