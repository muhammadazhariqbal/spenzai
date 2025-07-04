import React, { useMemo } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseItem from "../components/ExpenseItem";
import { getExpenses } from "../utils/storage";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ActivitiesSection from "../components/ActivitiesSection";

const HomeScreen = () => {
  const navigate = useNavigate();
  const expenses = useMemo(() => getExpenses().slice(0, 5), []);

  return (
    <div className="flex min-h-screen flex-col bg-white pb-16">
      {/* <Header title="Expense Tracker" showMenuButton /> */}
      <HomeHeader name="Ali" />

      <main className="flex-1 p-4">
        <ExpenseSummary />

        <div className="mb-4 flex items-center">
          <CategoryList name="CATG1" id={1} icon="" />
          <CategoryList name="CATG2" id={2} icon="" />
          <CategoryList name="CATG3" id={3} icon="" />
        </div>

        <ActivitiesSection />
      </main>

      <Navigation />
    </div>
  );
};

export default HomeScreen;
