import React, { useMemo } from 'react';
import { formatCurrency } from '../utils/categories';
import { getExpensesByCategory, getCurrentMonthExpenses } from '../utils/storage';

const ExpenseSummary: React.FC = () => {
  const monthlyExpenses = useMemo(() => getCurrentMonthExpenses(), []);
  const categoryTotals = useMemo(() => getExpensesByCategory(), []);
  
  const totalMonthlyExpense = useMemo(() => 
    monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0), 
    [monthlyExpenses]
  );
  
  // Find top 3 categories
  const topCategories = useMemo(() => {
    return Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
  }, [categoryTotals]);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <h2 className="text-lg font-semibold mb-3">This Month</h2>
      
      <div className="text-3xl font-bold text-slate-800 mb-4">
        {formatCurrency(totalMonthlyExpense)}
      </div>
      
      {topCategories.length > 0 ? (
        <div>
          <p className="text-sm text-slate-500 mb-2">Top spending categories:</p>
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
        <p className="text-sm text-slate-500">
          No expenses recorded this month yet.
        </p>
      )}
    </div>
  );
};

export default ExpenseSummary;