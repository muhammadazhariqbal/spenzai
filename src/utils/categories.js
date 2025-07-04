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
    color: "#6A0572",
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
    color: "#8338EC",
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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};
