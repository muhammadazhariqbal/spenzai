import localforage from "localforage";

const INSTANCE_KEY = "spenzai-local";

// Create stores
export const expenses = localforage.createInstance({
  name: INSTANCE_KEY,
  storeName: "expenses",
});

export const user = localforage.createInstance({
  name: INSTANCE_KEY,
  storeName: "user",
});

/**
 * Get all expenses from local storage
 */

export const initUserLocal = async (userData) => {
  const id = user.id || generateId();
  const payload = { ...userData, id };

  await user.setItem("user-profile", payload);
  return payload;
};
export const getUserLocal = async () => {
  // replace "profile" with whatever key you used in setItem(...)
  const u = await user.getItem("user-profile");
  return u; // either your user object or null
};
export const getExpenses = async () => {
  const all = [];
  await expenses.iterate((value) => {
    all.push(value);
  });
  return all;
};
export const updateUserQuoteType = async (quoteType) => {
  try {
    const existingUser = await user.getItem("user-profile");

    if (!existingUser) throw new Error("No user found in local storage");

    const updatedUser = {
      ...existingUser,
      quoteType, // add or update quoteType field
    };

    await user.setItem("user-profile", updatedUser);
    return updatedUser;
  } catch (err) {
    console.error("Error updating quote type in user:", err);
    return null;
  }
};

export const getUser = async () => {
  const id = user.id || generateId();
  const payload = { ...userData, id };

  await user.setItem(id, payload);
  return payload;
};

/**
 * Add a new expense to local storage
 */
export const addExpense = async (expense) => {
  const id = expense.id || generateId();
  const payload = { ...expense, id };
  await expenses.setItem(id, payload);
  return payload;
};

/**
 * Update an existing expense in local storage
 */
export const updateExpense = async (updatedExpense) => {
  if (!updatedExpense.id) throw new Error("Expense ID is required");
  await expenses.setItem(updatedExpense.id, updatedExpense);
  return updatedExpense;
};

/**
 * Delete an expense from local storage
 */
export const deleteExpenseLocal = async (id) => {
  try {
    await expenses.removeItem(id);
  } catch (err) {
    console.error("Error deleting expense:", err);
  }
};

/**
 * Get total expenses amount
 */
export const getTotalExpenses = async (all) => {
  return all.reduce((sum, e) => sum + Number(e.amount || 0), 0);
};

/**
 * Get expenses grouped by category
 */
export const getExpensesByCategory = async () => {
  const all = await getExpenses();
  const grouped = {};
  for (const exp of all) {
    const key = exp.category || "Uncategorized";
    grouped[key] = (grouped[key] || 0) + Number(exp.amount || 0);
  }
  return grouped;
};

/**
 * Get expenses for the current month
 */
export const getCurrentMonthExpenses = async () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const all = await getExpenses();
  return all.filter((e) => {
    const d = new Date(e.date);
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
  });
};

/**
 * Generate a unique ID for a new expense
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
};

export const resetAllData = async () => {
  await expenses.clear();
  await user.clear();
};

export const resetUserQuoteType = async () => {
  try {
    const userData = await user.getItem("user-profile");
    if (!userData) return;

    const { quoteType, ...rest } = userData;
    await user.setItem("user-profile", rest);
    return rest;
  } catch (err) {
    console.error("Error resetting quote type:", err);
  }
};
