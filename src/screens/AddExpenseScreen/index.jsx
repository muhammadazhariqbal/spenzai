import { useState } from "react";
import { Calendar, Check, ChevronLeft, Delete } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import CategoryScroller from "../../components/CategoryScroller";
import { addExpense } from "../../utils/localStorage";

const AddExpenseScreen = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("0");
  const [note, setNote] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handlePress = async (value) => {
    switch (value) {
      case "home":
        navigate("/home");
        break;

      case "delete":
        setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        break;

      case "calendar":
        setShowCalendar(true);
        break;

      case "ok":
        if (step === 1 && amount !== "0") {
          setStep(2);
        } else if (step === 2 && selectedCategory) {
          setStep(3);
        } else if (step === 3) {
          await addExpense({
            amount: 200,
            category: "Food",
            date: "2025-07-08",
            note: "Lunch",
          });
          alert(`✅ Expense Added:
Amount: $${amount}
Category: ${selectedCategory.name}
Note: ${note}
Date: ${format(date, "yyyy-MM-dd")}`);
          // Reset
          setAmount("0");
          setSelectedCategory(null);
          setNote("");
          setStep(1);
        }
        break;

      default:
        setAmount((prev) => {
          if (value === ".") {
            if (prev.includes(".")) return prev; // Prevent multiple dots
            return prev + ".";
          }

          return prev === "0" ? value : prev + value;
        });
        break;
    }
  };

  const keys = [
    "1",
    "2",
    "3",
    "delete",
    "4",
    "5",
    "6",
    "calendar",
    "7",
    "8",
    "9",
    "home",
    "0",
    ".",
    "",
  ];

  return (
    <div className="h-screen flex flex-col bg-white max-w-sm mx-auto">
      {/* Header - Fixed */}
      <div className="flex items-center gap-2 p-4 border-b sticky top-0 bg-white z-10">
        <button onClick={() => navigate("/home")}>
          {/* <ChevronLeft className="w-6 h-6" /> */}
        </button>
        <h1 className="text-lg font-semibold mx-auto">Add Expense</h1>
      </div>

      <div className="flex-1 overflow-y-auto ">
        <div className="min-h-full flex flex-col items-center justify-center px-4 py-6">
          {step === 1 && (
            <div className="text-center  p-4 rounded w-full">
              <p className="text-gray-500 text-sm">Enter amount</p>
              <h2 className="text-4xl font-bold mt-2">
                <span className="text-gray-400 text-2xl">{`$ `}</span>
                <span className="text-gray-400 text-5xl">{`${amount}`}</span>
              </h2>
            </div>
          )}

          {step === 2 && (
            <div className="w-full">
              <p className="text-gray-500 text-sm text-center mb-2">
                Choose category
              </p>
              <CategoryScroller
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          )}

          {step === 3 && (
            <div className="text-center w-full">
              <p className="text-gray-500 text-sm">Add optional note</p>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. Dinner with friends"
                className="w-full mt-3 px-4 py-2 rounded-lg border border-gray-200 text-[16px] text-center"
              />
            </div>
          )}
        </div>
      </div>

      {/* Keypad - Fixed */}
      <div className="p-4 border-t sticky bottom-0 bg-white z-10">
        <div className="grid grid-cols-4 grid-rows-4 gap-3">
          {keys.map((key, index) => {
            if (key === "") return <div key={index} />;
            return (
              <button
                key={index}
                onClick={() => handlePress(key)}
                className={`flex items-center justify-center text-xl rounded-xl h-16 ${
                  key === "calendar"
                    ? "bg-cyan-200"
                    : key === "delete"
                    ? "bg-green-200"
                    : key === "home"
                    ? "bg-yellow-200"
                    : "bg-gray-100"
                }`}
              >
                {key === "delete" ? (
                  <Delete className="w-6 h-6" />
                ) : key === "calendar" ? (
                  <Calendar className="w-6 h-6" />
                ) : key === "home" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-house-icon lucide-house"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                ) : (
                  key
                )}
              </button>
            );
          })}

          {/* OK button */}
          <button
            onClick={() => handlePress("ok")}
            className="col-start-4 row-start-3 row-span-2 bg-black text-white flex items-center justify-center rounded-xl text-xl"
          >
            <Check className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
            <h2 className="text-center font-semibold mb-2">Select Date</h2>
            <input
              type="date"
              className="w-full border px-4 py-2 rounded text-sm"
              value={format(date, "yyyy-MM-dd")}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowCalendar(false)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExpenseScreen;
