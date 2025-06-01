import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Expense } from '../types';
import { getCategoryDetails, formatCurrency } from '../utils/categories';

interface ExpenseItemProps {
  expense: Expense;
  onClick?: () => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onClick }) => {
  const categoryDetails = getCategoryDetails(expense.category);
  
  return (
    <div 
      className="flex items-center p-4 mb-3 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-full mr-4"
        style={{ backgroundColor: `${categoryDetails.color}20` }}
      >
        <span className="text-lg" style={{ color: categoryDetails.color }}>
          {categoryDetails.icon === 'utensils' && '🍴'}
          {categoryDetails.icon === 'car' && '🚗'}
          {categoryDetails.icon === 'film' && '🎬'}
          {categoryDetails.icon === 'shopping-bag' && '🛍️'}
          {categoryDetails.icon === 'home' && '🏠'}
          {categoryDetails.icon === 'heart' && '❤️'}
          {categoryDetails.icon === 'plane' && '✈️'}
          {categoryDetails.icon === 'book' && '📚'}
          {categoryDetails.icon === 'more-horizontal' && '📌'}
        </span>
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-slate-800">{expense.description}</h3>
        <div className="flex items-center mt-1 text-xs text-slate-500">
          <span className="flex items-center mr-3">
            <Tag size={12} className="mr-1" />
            {categoryDetails.name}
          </span>
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {format(new Date(expense.date), 'MMM d, yyyy')}
          </span>
        </div>
      </div>
      
      <div className="text-right">
        <span className="font-semibold text-slate-800">
          {formatCurrency(expense.amount)}
        </span>
      </div>
    </div>
  );
};

export default ExpenseItem;