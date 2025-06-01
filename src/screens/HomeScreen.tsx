import React, { useMemo } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseItem from "../components/ExpenseItem";
import { getExpenses } from "../utils/storage";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const expenses = useMemo(() => getExpenses().slice(0, 5), []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pb-16">
      {/* <Header title="Expense Tracker" showMenuButton /> */}

      <main className="flex-1 p-4">
        <ExpenseSummary />

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            Recent Expenses
          </h2>
          <button
            onClick={() => navigate("/history")}
            className="text-sm font-medium text-primary"
          >
            See all
          </button>
        </div>

        {expenses.length > 0 ? (
          <div className="space-y-3">
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onClick={() => navigate(`/expense/${expense.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
            <PlusCircle size={48} className="mb-2 text-slate-400" />
            <h3 className="mb-1 text-xl font-medium text-slate-700">
              No expenses yet
            </h3>
            <p className="mb-4 text-slate-500">
              Start tracking your expenses by adding your first expense.
            </p>
            <button
              onClick={() => navigate("/add")}
              className="btn btn-primary"
            >
              Add Expense
            </button>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default HomeScreen;
