import {
  Utensils,
  Car,
  Film,
  ShoppingBag,
  Home,
  Heart,
  Plane,
  Book,
  MoreHorizontal,
} from "lucide-react";
import { getUserLocal } from "./localStorage";
export const CATEGORIES = [
  {
    id: "food",
    name: "Food & Drinks",
    icon: "Utensils",
    color: "#FF6B6B",
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: "Car",
    color: "#4ECDC4",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "Film",
    color: "#FFD166",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "ShoppingBag",
    color: "#6A09",
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "Home",
    color: "#457B9D",
  },
  {
    id: "health",
    name: "Health",
    icon: "Heart",
    color: "#F25F5C",
  },
  {
    id: "travel",
    name: "Travel",
    icon: "Plane",
    color: "#65B891",
  },
  {
    id: "education",
    name: "Education",
    icon: "Book",
    color: "#D291BC",
  },
  {
    id: "other",
    name: "Other",
    icon: "MoreHorizontal",
    color: "#5E6472",
  },
];

export const getCategoryDetails = (categoryId) => {
  return (
    CATEGORIES.find((cat) => cat.id === categoryId) ||
    CATEGORIES[CATEGORIES.length - 1]
  );
};
export const formatCurrency = (amount) => {
  // Get user from localStorage synchronously (assuming it's cached or available)
  const user = getUserLocal();
  const currency = user?.settings?.currency || "USD";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

export const ICON_MAP = {
  Utensils,
  Car,
  Film,
  ShoppingBag,
  Home,
  Heart,
  Plane,
  Book,
  MoreHorizontal,
};
