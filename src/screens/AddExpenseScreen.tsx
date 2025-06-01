import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { CATEGORIES } from '../utils/categories';
import { addExpense, generateId } from '../utils/storage';
import { ExpenseCategory } from '../types';

const AddExpenseScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const receiptImage = location.state?.receiptImage;
  
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<ExpenseCategory>('other');
  const [date, setDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [imageUrl, setImageUrl] = useState<string | undefined>(receiptImage);
  
  const [errors, setErrors] = useState<{
    amount?: string;
    description?: string;
  }>({});
  
  useEffect(() => {
    if (receiptImage) {
      setImageUrl(receiptImage);
    }
  }, [receiptImage]);
  
  const validateForm = (): boolean => {
    const newErrors: {
      amount?: string;
      description?: string;
    } = {};
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Please enter a description';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const newExpense = {
      id: generateId(),
      amount: Number(amount),
      description,
      category,
      date,
      imageUrl
    };
    
    addExpense(newExpense);
    navigate('/');
  };
  
  const clearImage = () => {
    setImageUrl(undefined);
  };
  
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pb-16">
      <Header title="Add Expense" showBackButton />
      
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                $
              </span>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="input-field pl-8"
                step="0.01"
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-xs text-red-500">{errors.amount}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What did you spend on?"
              className="input-field"
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            )}
          </div>
          
          <div>
            <label className="form-label">Category</label>
            <div className="grid grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id as ExpenseCategory)}
                  className={`flex flex-col items-center justify-center rounded-lg p-3 transition-colors ${
                    category === cat.id
                      ? 'bg-primary-light text-primary'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-lg" style={{ color: cat.color }}>
                    {cat.icon === 'utensils' && '🍴'}
                    {cat.icon === 'car' && '🚗'}
                    {cat.icon === 'film' && '🎬'}
                    {cat.icon === 'shopping-bag' && '🛍️'}
                    {cat.icon === 'home' && '🏠'}
                    {cat.icon === 'heart' && '❤️'}
                    {cat.icon === 'plane' && '✈️'}
                    {cat.icon === 'book' && '📚'}
                    {cat.icon === 'more-horizontal' && '📌'}
                  </span>
                  <span className="mt-1 text-xs">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
            />
          </div>
          
          {imageUrl && (
            <div className="relative mb-4 rounded-lg border border-slate-200 p-2">
              <button
                type="button"
                onClick={clearImage}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white"
              >
                <X size={16} />
              </button>
              <img
                src={imageUrl}
                alt="Receipt"
                className="h-32 w-full rounded object-cover"
              />
            </div>
          )}
          
          <button type="submit" className="btn btn-primary w-full">
            <Check size={20} className="mr-2" />
            Save Expense
          </button>
        </form>
      </main>
      
      <Navigation />
    </div>
  );
};

export default AddExpenseScreen;