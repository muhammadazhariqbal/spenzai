import React, { useContext, useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../utils/categories";
import { AppContext } from "../utils/AppContext";

const ExpenseSummary = () => {
  const { user, saveUser, expenses, saveExpense, isLoading, totalSpent } =
    useContext(AppContext);
  const [summary, setSummary] = useState({ totalSpent, currency: "" });

  useEffect(() => {
    setSummary({ totalSpent, currency: user?.settings?.currency });
  }, [expenses, user, isLoading, totalSpent]);

  return (
    <div className="bg-black rounded-lg shadow-sm p-4 mb-2">
      <h2 className="text-md font-semibold mb-3 text-white">This Month</h2>

      <div className="text-3xl font-bold  text-white">
        {formatCurrency(totalSpent, user?.settings?.currency || "USD")}
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
