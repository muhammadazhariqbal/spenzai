import { Expense } from '../types';

const EXPENSES_KEY = 'expense-tracker-expenses';

/**
 * Get all expenses from local storage
 */
export const getExpenses = (): Expense[] => {
  const storedExpenses = localStorage.getItem(EXPENSES_KEY);
  return storedExpenses ? JSON.parse(storedExpenses) : [];
};

/**
 * Add a new expense to local storage
 */
export const addExpense = (expense: Expense): void => {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
};

/**
 * Update an existing expense in local storage
 */
export const updateExpense = (updatedExpense: Expense): void => {
  const expenses = getExpenses();
  const index = expenses.findIndex((exp) => exp.id === updatedExpense.id);
  if (index !== -1) {
    expenses[index] = updatedExpense;
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  }
};

/**
 * Delete an expense from local storage
 */
export const deleteExpense = (id: string): void => {
  const expenses = getExpenses();
  const updatedExpenses = expenses.filter((exp) => exp.id !== id);
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(updatedExpenses));
};

/**
 * Get total expenses amount
 */
export const getTotalExpenses = (): number => {
  const expenses = getExpenses();
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

/**
 * Get expenses grouped by category
 */
export const getExpensesByCategory = (): Record<string, number> => {
  const expenses = getExpenses();
  return expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * Get expenses for the current month
 */
export const getCurrentMonthExpenses = (): Expense[] => {
  const expenses = getExpenses();
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && 
           expenseDate.getFullYear() === currentYear;
  });
};

/**
 * Generate a unique ID for a new expense
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};