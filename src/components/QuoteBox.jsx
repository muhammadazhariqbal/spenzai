import React from "react";
import { FINANCE_QUOTES } from "../utils/financeQoutes";

const QuoteBox = ({ showType = "all" }) => {
  const filteredQuotes =
    showType === "all"
      ? FINANCE_QUOTES
      : FINANCE_QUOTES.filter((q) => q.type === showType);

  const randomQuote =
    filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

  return (
    <div className="mt-6 mb-6 p-4 bg-slate-50 rounded-xl border text-sm text-slate-700 italic">
      💡 <span className="font-semibold">Finance Wisdom:</span>
      <br />“{randomQuote.quote}”<br />
      <span className="text-xs text-slate-500">— {randomQuote.source}</span>
    </div>
  );
};

export default QuoteBox;
