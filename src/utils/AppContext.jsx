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

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // for user
  useEffect(() => {
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

    checkExistingUser();
  }, []);
  const getAllExpenses = async () => {
    try {
      setIsLoading(true);

      const allExpenses = await getExpenses();
      setTotalSpent(await getTotalExpenses(allExpenses));
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
