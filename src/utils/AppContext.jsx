// AppContext.js
import React, { createContext, useEffect, useState } from "react";
import {
  addExpense,
  deleteExpenseLocal,
  getExpenses,
  getTotalExpenses,
  getUserLocal,
  initUserLocal,
  updateUserQuoteType,
} from "./localStorage";
import { isDateMatchFilter } from "./helpers";
import localforage from "localforage";

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
  const [quoteType, setQuoteType] = useState(false);

  const [totalsByCategory, setTotalsByCategory] = useState({});
  const [totalsByType, setTotalsByType] = useState({
    needs: 0,
    wants: 0,
    save: 0,
  });
  const [percentByType, setPercentByType] = useState({
    needs: "0.0",
    wants: "0.0",
    save: "0.0",
  });
  const [grandTotal, setGrandTotal] = useState(0);

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
    const fetchQuoteType = async () => {
      try {
        const user = await getUserLocal();
        console.log(user, "user get user local");
        if (user?.quoteType) {
          setQuoteType(user.quoteType);
        } else {
          setQuoteType(false);
        }
      } catch (err) {
        console.error("Error fetching quote type from user profile:", err);
      }
    };

    fetchQuoteType();
  }, [quoteType, user]);

  const handleQuoteType = async (value) => {
    console.log(value, "value contexx");

    try {
      await updateUserQuoteType(value);
      setQuoteType(value);
      console.log(value, "success contexx");
    } catch (error) {
      console.error("Failed to save quote type in user profile:", error);
    }
  };

  useEffect(() => {
    handleCalculateTotal();
  }, [duration, totalSpent]);
  const handleDurationContext = (value) => {
    setDuration(value);
  };
  const calculateSpentByCategory = (expenses) => {
    const categoryMap = {
      food: "needs",
      transportation: "needs",
      utilities: "needs",
      health: "needs",
      education: "needs",
      entertainment: "wants",
      shopping: "wants",
      travel: "wants",
      other: "wants",
      emergency: "save",
      investment: "save",
      goal: "save",
      retirement: "save",
      donation: "save",
    };

    const totalsByCategory = {};
    const totalsByType = { needs: 0, wants: 0, save: 0 };
    let grandTotal = 0;

    expenses.forEach((item) => {
      const category = item.category;
      const amount = Number(item.amount || 0);
      const type = categoryMap[category] || "wants";

      totalsByCategory[category] = (totalsByCategory[category] || 0) + amount;
      totalsByType[type] += amount;
      grandTotal += amount;
    });

    const percentByType = {
      needs: ((totalsByType.needs / grandTotal) * 100 || 0).toFixed(1),
      wants: ((totalsByType.wants / grandTotal) * 100 || 0).toFixed(1),
      save: ((totalsByType.save / grandTotal) * 100 || 0).toFixed(1),
    };

    setTotalsByCategory(totalsByCategory);
    setTotalsByType(totalsByType);
    setPercentByType(percentByType);
    setGrandTotal(grandTotal);
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
    calculateSpentByCategory(allExpenses);
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
      calculateSpentByCategory(allExpenses);
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
        calculateSpentByCategory,
        totalsByCategory,
        totalsByType,
        percentByType,
        grandTotal,
        handleQuoteType,
        quoteType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
