import React, { useContext, useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../utils/categories";
import { AppContext } from "../utils/AppContext";
import { capitalizeFirst } from "../utils/helpers";

const ExpenseSummary = ({ category }) => {
  const {
    user,
    saveUser,
    expenses,
    saveExpense,
    isLoading,
    totalSpent,
    duration,
    totalMonth,
    totalWeek,
    totalToday,
  } = useContext(AppContext);
  const [summary, setSummary] = useState({ totalSpent, currency: "" });

  useEffect(() => {
    if (!expenses || !user) return;

    const now = new Date();
    let startDate = null;

    if (duration === "today") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (duration === "week") {
      const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)
      const diff = now.getDate() - dayOfWeek;
      startDate = new Date(now.getFullYear(), now.getMonth(), diff);
    } else if (duration === "month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    const filteredExpenses = expenses.filter((e) => {
      const expenseDate = new Date(e.date);
      const matchCategory = category === "all" || e.category === category;
      const matchDate = !startDate || expenseDate >= startDate;
      return matchCategory && matchDate;
    });

    const totalFiltered = filteredExpenses.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );

    setSummary({
      totalSpent: totalFiltered,
      currency: user?.settings?.currency,
    });
  }, [expenses, user, duration, category]);

  return (
    <div className="bg-black rounded-lg shadow-sm p-4 mb-2">
      <h2 className="text-md  mb-3 text-white">
        {duration !== "today"
          ? `This ${capitalizeFirst(duration)}`
          : capitalizeFirst(duration)}
      </h2>
      <p className="text-white text-sm ">{category}</p>

      <div className="text-3xl    text-white">
        {formatCurrency(summary.totalSpent, user?.settings?.currency || "USD")}
      </div>

      {/* {topCategories.length > 0 ? (
        <div>
          <p className="text-sm text-slate-500 mb-2">
            Top spending categories:
          </p>
          <div className="space-y-2">
            {topCategories.map(([category, amount]) => (
              <div key={category} className="flex justify-between">
                <span className="text-sm text-slate-700">{category}</span>
                <span className="text-sm font-medium text-slate-800">
                  {formatCurrency(amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-white">
          No expenses recorded this month yet.
        </p>
      )} */}
    </div>
  );
};

export default ExpenseSummary;
