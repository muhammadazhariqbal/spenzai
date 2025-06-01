import { ExpenseCategoryDetails } from '../types';

export const CATEGORIES: ExpenseCategoryDetails[] = [
  {
    id: 'food',
    name: 'Food & Drinks',
    icon: 'utensils',
    color: '#FF6B6B'
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: 'car',
    color: '#4ECDC4'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'film',
    color: '#FFD166'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: 'shopping-bag',
    color: '#6A0572'
  },
  {
    id: 'utilities',
    name: 'Utilities',
    icon: 'home',
    color: '#457B9D'
  },
  {
    id: 'health',
    name: 'Health',
    icon: 'heart',
    color: '#F25F5C'
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: 'plane',
    color: '#65B891'
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'book',
    color: '#8338EC'
  },
  {
    id: 'other',
    name: 'Other',
    icon: 'more-horizontal',
    color: '#5E6472'
  }
];

export const getCategoryDetails = (categoryId: string): ExpenseCategoryDetails => {
  return CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};