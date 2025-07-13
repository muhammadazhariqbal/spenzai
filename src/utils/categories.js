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
  Rows3,
  ShieldCheck,
  TrendingUp,
  Target,
  Briefcase,
  HandHeart,
} from "lucide-react";
import { getUserLocal } from "./localStorage";
export const CATEGORIES = [
  {
    id: "all",
    name: "All",
    icon: "Rows3",
    color: "#788876",
  },
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
  {
    id: "emergency",
    name: "Emergency Fund",
    icon: "ShieldCheck",
    color: "#3F88C5",
  },
  {
    id: "investment",
    name: "Investment",
    icon: "TrendingUp",
    color: "#06D6A0",
  },
  {
    id: "goal",
    name: "Goal",
    icon: "Target",
    color: "#FFD166",
  },
  {
    id: "retirement",
    name: "Retirement",
    icon: "Briefcase",
    color: "#8D99AE",
  },
  {
    id: "donation",
    name: "Charity",
    icon: "HandHeart",
    color: "#EF476F",
  },
];

export const getCategoryDetails = (categoryId) => {
  return (
    CATEGORIES.find((cat) => cat.id === categoryId) ||
    CATEGORIES[CATEGORIES.length - 1]
  );
};
export const formatCurrency = (amount, currency, maxDigits = 9) => {
  try {
    if (!currency) {
      throw new Error("Invalid amount or currency");
    }

    const [integerPart] = Math.abs(amount).toString().split(".");
    if (integerPart.length > maxDigits) {
      // Custom fallback for large amounts
      if (amount >= 1_000_000_000) return `>1B ${currency}`;
      if (amount >= 1_000_000) return `>1M ${currency}`;
      return `>${maxDigits}d ${currency}`;
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(amount);
  } catch (err) {
    console.error("formatCurrency error:", err.message);
    return `Invalid ${currency}`;
  }
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
  Rows3,
  ShieldCheck,
  TrendingUp,
  Target,
  Briefcase,
  HandHeart,
};
