import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ExpenseItem from '../components/ExpenseItem';
import { getExpenses } from '../utils/storage';
import { Expense } from '../types';

const HistoryScreen: React.FC = () => {
  const navigate = useNavigate();
  const allExpenses = useMemo(() => getExpenses(), []);
  const [filter, setFilter] = useState<string>('all');
  
  // Group expenses by date
  const groupedExpenses = useMemo(() => {
    const grouped: Record<string, Expense[]> = {};
    
    allExpenses.forEach(expense => {
      const dateKey = format(new Date(expense.date), 'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(expense);
    });
    
    return grouped;
  }, [allExpenses]);
  
  // Sort dates in descending order
  const sortedDates = useMemo(() => 
    Object.keys(groupedExpenses).sort((a, b) => 
      new Date(b).getTime() - new Date(a).getTime()
    ), 
    [groupedExpenses]
  );
  
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pb-16">
      <Header title="Expense History" showBackButton />
      
      <div className="flex border-b border-slate-200 bg-white">
        <button
          className={`flex-1 py-3 text-center text-sm font-medium ${
            filter === 'all' ? 'tab-active' : 'text-slate-600'
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`flex-1 py-3 text-center text-sm font-medium ${
            filter === 'thisMonth' ? 'tab-active' : 'text-slate-600'
          }`}
          onClick={() => setFilter('thisMonth')}
        >
          This Month
        </button>
        <button
          className={`flex-1 py-3 text-center text-sm font-medium ${
            filter === 'lastMonth' ? 'tab-active' : 'text-slate-600'
          }`}
          onClick={() => setFilter('lastMonth')}
        >
          Last Month
        </button>
      </div>
      
      <main className="flex-1 p-4">
        {sortedDates.length > 0 ? (
          <div>
            {sortedDates.map(dateKey => (
              <div key={dateKey} className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-slate-500">
                  {format(new Date(dateKey), 'EEEE, MMMM d, yyyy')}
                </h3>
                
                <div className="space-y-3">
                  {groupedExpenses[dateKey].map(expense => (
                    <ExpenseItem 
                      key={expense.id} 
                      expense={expense}
                      onClick={() => navigate(`/expense/${expense.id}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center text-center">
            <p className="text-slate-500">No expenses found.</p>
            <button
              onClick={() => navigate('/add')}
              className="mt-4 btn btn-primary"
            >
              Add New Expense
            </button>
          </div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default HistoryScreen;