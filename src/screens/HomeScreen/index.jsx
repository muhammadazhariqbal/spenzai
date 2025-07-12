import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
import ExpenseSummary from "../../components/ExpenseSummary";
import CategoryList from "../../components/CategoryList";
import ActivitiesSection from "../../components/ActivitiesSection";
import Navigation from "../../components/Navigation";

import { CATEGORIES } from "../../utils/categories";
import { AppContext } from "../../utils/AppContext";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { expenses } = useContext(AppContext);
  console.log("expense in home screen:", expenses);

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen relative">
        {/* Header - Fixed */}
        <div className="sticky top-0 bg-white z-10 pt-4 px-4 pb-2">
          <HomeHeader />
          <ExpenseSummary />

          {/* Category Scroll */}
          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar mt-2 pb-2">
            {CATEGORIES.map((cat) => (
              <CategoryList
                key={cat.id}
                id={cat.id}
                name={cat.name}
                icon={cat.icon}
                selected={selectedCategory === cat.id}
                onSelect={setSelectedCategory}
                bgColor="bg-[#F4F4F4]"
              />
            ))}
          </div>
        </div>

        {/* Scrollable Activities Section */}
        <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24">
          <ActivitiesSection selectedCategory={selectedCategory} />
        </div>

        {/* Fixed Navigation */}
        <Navigation />
      </div>
    </div>
  );
};

export default HomeScreen;
