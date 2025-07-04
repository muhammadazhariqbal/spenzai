import { useState } from "react";
import { Calendar, Check, ChevronLeft, Delete, Wallet } from "lucide-react";
import { format } from "date-fns";

const AddExpenseScreen = () => {
  const [amount, setAmount] = useState("0");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [note, setNote] = useState("");

  const handlePress = (value) => {
    if (value === "delete") {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "calendar") {
      setShowCalendar(!showCalendar);
    } else if (value === "ok") {
      console.log("✅ Submitted:");
      console.log("Amount:", amount);
      console.log("Note:", note);
      console.log("Date:", format(date, "yyyy-MM-dd"));
    } else {
      setAmount((prev) => (prev === "0" ? value : prev + value));
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
    "$",
    "0",
    ".",
  ];

  return (
    <div className="min-h-screen bg-white p-4 max-w-sm mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <ChevronLeft className="w-6 h-6" />
        <h1 className="text-lg font-semibold mx-auto">Add Expense</h1>
      </div>

      {/* Categories */}
      <div className="flex justify-around gap-4">
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <Wallet className="w-4 h-4" />
          <span>Cash</span>
        </div>
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <Wallet className="w-4 h-4" />
          <span>Essentials</span>
        </div>
      </div>

      {/* Amount */}
      <div className="text-center">
        <p className="text-gray-500 text-sm">Money went to…</p>
        <h2 className="text-4xl font-bold mt-2">
          <span className="text-gray-400 text-2xl">$</span>
          {amount}
        </h2>

        {/* Note input */}
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add Note..."
          className="w-full mt-3 px-4 py-2 rounded-lg border border-gray-200 text-sm text-center"
        />
      </div>

      {/* Calendar input (native for now) */}
      {showCalendar && (
        <input
          type="date"
          className="border p-2 rounded text-sm"
          value={format(date, "yyyy-MM-dd")}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      )}

      {/* Keypad Grid */}
      <div className="grid grid-cols-4 grid-rows-4 gap-3 relative">
        {keys.slice(0, 15).map((key, index) => {
          if (key === "") return <div key={index} />;
          return (
            <button
              key={index}
              onClick={() => handlePress(key)}
              className={`
                flex items-center justify-center text-xl rounded-xl h-16
                ${key === "calendar" ? "bg-cyan-200" : ""}
                ${key === "delete" ? "bg-green-200" : ""}
                ${key === "$" ? "bg-yellow-200" : ""}
                ${
                  key !== "calendar" && key !== "delete" && key !== "$"
                    ? "bg-gray-100"
                    : ""
                }
              `}
            >
              {key === "delete" ? (
                <Delete className="w-6 h-6" />
              ) : key === "calendar" ? (
                <Calendar className="w-6 h-6" />
              ) : (
                key
              )}
            </button>
          );
        })}

        {/* ✅ OK Button manually placed */}
        <button
          onClick={() => handlePress("ok")}
          className="col-start-4 row-start-3 row-span-2 bg-black text-white flex items-center justify-center rounded-xl text-xl"
        >
          <Check className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AddExpenseScreen;
