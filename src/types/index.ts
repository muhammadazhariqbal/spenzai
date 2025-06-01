export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  imageUrl?: string;
}

export type ExpenseCategory = 
  | 'food' 
  | 'transportation' 
  | 'entertainment' 
  | 'shopping' 
  | 'utilities' 
  | 'health' 
  | 'travel' 
  | 'education' 
  | 'other';

export interface ExpenseCategoryDetails {
  id: ExpenseCategory;
  name: string;
  icon: string;
  color: string;
}