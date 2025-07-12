// AppContext.js
import React, { createContext, useEffect, useState } from "react";
import { addExpense, getUserLocal, initUserLocal } from "./localStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const saveExpense = async (expense) => {
    await addExpense(expense);
    setExpenses((prev) => [...prev, expense]);
  };

  const saveUser = async (user) => {
    setIsLoading(true);
    await initUserLocal(user);
    setUser(user);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{ user, saveUser, expenses, saveExpense, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
