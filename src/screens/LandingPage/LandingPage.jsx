import React from "react";
import { useNavigate } from "react-router-dom";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
const sections = [
  {
    id: "hero",
    title: "Free Expense Tracker App - 2 Taps a Day Keep the Broke Away",
    description:
      "Simple budget tracking made easy. Spenzai is the best free personal finance app to track your spending, manage your budget, and build mindful money habits",
    buttons: ["Start Tracking Expenses Free"],
  },
  {
    id: "why",
    title: "Why Choose Spenzai Expense Tracker?",
    items: [
      {
        emoji: "🎯",
        title: "Simple Expense Tracking, Not Overwhelming",
        text: "No complex budgeting features you'll never use. Just intuitive expense tracking to see where your money goes with clear spending insights.",
      },
      {
        emoji: "💰",
        title: "Completely Free Budget App Forever",
        text: "No subscriptions. No hidden fees. No premium features locked away. Just a free expense tracker that actually works.",
      },
      {
        emoji: "📱",
        title: "Cross-Platform Money Management App",
        text: "Install on your phone, tablet, or computer. Works offline for expense tracking. Your financial data stays completely private.",
      },
      {
        emoji: "🕌",
        title: "Mindful & Ethical Spending Tracker",
        text: "Get gentle reminders about mindful spending, ethical money management, and optional Islamic finance principles for conscious financial decisions.",
      },
    ],
  },
  {
    id: "how",
    title: "How to Track Expenses with Spenzai",
    steps: [
      {
        number: 1,
        title: "Quick Expense Entry & Categorization",
        text: "Tap the + button, enter amount, choose from 15+ expense categories, add a note. Lightning-fast expense logging in seconds.",
      },
      {
        number: 2,
        title: "Spending Analysis & Budget Insights",
        text: "View detailed spending patterns by category, day, week, or month. Understand your financial habits with visual expense reports.",
      },
      {
        number: 3,
        title: "Financial Motivation & Money Wisdom",
        text: "Get daily wisdom quotes about mindful spending, budgeting tips, and financial wellness to stay motivated on your money journey.",
      },
    ],
  },
  {
    id: "testimonials",
    title: "What Users Say About Our Expense Tracker",
    quotes: [
      {
        text: "Finally found a free expense tracker that doesn't overwhelm me with features I don't need. Simple, clean, and helps me understand my spending habits.",
        name: "Ahmed",
      },
      {
        text: "Switched from using my notes app to track expenses. Spenzai's budget tracking is so much better organized and it's completely free!",
        name: "Ayesha",
      },
      {
        text: "Love the Islamic finance quotes in this expense tracker. Reminds me to spend mindfully according to my values while managing my budget.",
        name: "Omar",
      },
    ],
  },
  {
    id: "features",
    title: "Essential Expense Tracker Features",
    list: [
      "Quick Expense Logging - Add amount, category, and note in seconds to stay on top of your spending",
      "Smart Budget Categories - Needs, wants, and savings breakdown for better financial decisions",
      "Daily to Yearly Tracking - See totals by day, week, month, or year to monitor habits easily",
      "Last Month's Report - Automatically view your full summary from the previous month",
      "Offline Expense Tracking - Log expenses without internet; perfect for travel or remote areas",
      "Private Data - Your financial data stays on your device",
      "Install as Native App - Works like a real app on mobile, tablet, or desktop (PWA support)",
      "Optional Wisdom Quotes - Get inspired by financial tips and quotes you can toggle on/off",
    ],
  },
  {
    id: "coming",
    title: "Upcoming Expense Tracker Features",
    list: [
      "Multi-Language Budget App - English, Urdu, Arabic, and more for global expense tracking",
      "Monthly Expense Email Reports - Get spending summaries and trends sent to your inbox",
      "Secure Cloud Backup - Backup and restore your data while keeping it fully private",
    ],
  },
];

const Footer = () => (
  <footer className="mt-12 text-center text-xs text-gray-400">
    <div>Spenzai - Made with ❤️ for mindful financial management</div>
    <div className="space-x-4 mt-2">
      <a href="/privacy">Privacy</a>

      <a href="https://github.com/muhammadazhariqbal">GitHub</a>
    </div>
    <div className="mt-4 text-gray-500 text-sm">
      <p>Muhammad Azhar Iqbal — Built Spenzai for simpler expense tracking.</p>
      <p>
        <a
          href="https://www.linkedin.com/in/muhammadazhariqbal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/muhammadazhariqbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
    </div>
  </footer>
);

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-black bg-white font-sans px-6 py-8 max-w-3xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-3xl mb-4">{sections[0].title}</h1>
        <p className="text-gray-600 mb-6">{sections[0].description}</p>
        <div className="flex gap-3 justify-center">
          {/* {sections[0].buttons.map((btn) => (
            <button
              key={btn}
              className="bg-black text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition"
            >
              {btn}
            </button>
          ))} */}
        </div>
      </section>

      {/* Why Spenzai */}
      <section className="mb-12">
        <h2 className="text-xl  mb-4">{sections[1].title}</h2>
        <div className="grid gap-4">
          {sections[1].items.map(({ emoji, title, text }) => (
            <div key={title} className="p-4 border rounded-md">
              <h3 className=" ">
                {emoji} {title}
              </h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-xl   mb-4">{sections[2].title}</h2>
        <ol className="space-y-4">
          {sections[2].steps.map(({ number, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs  ">
                {number}
              </div>
              <div>
                <h4 className=" ">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mb-12">
        <h2 className="text-xl mb-4 text-center">Clean & Simple UI</h2>
        <div className="flex gap-4 overflow-x-auto px-2">
          <img
            key={"5"}
            src={five}
            alt={`Screenshot ${5}`}
            className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
          />
          <img
            key={"1"}
            src={one}
            alt={`Screenshot ${1}`}
            className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
          />
          <img
            key={"2"}
            src={two}
            alt={`Screenshot ${2}`}
            className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
          />
          <img
            key={"3"}
            src={three}
            alt={`Screenshot ${3}`}
            className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
          />
          <img
            key={"4"}
            src={four}
            alt={`Screenshot ${4}`}
            className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-xl   mb-4">{sections[3].title}</h2>
        <div className="space-y-4">
          {sections[3].quotes.map(({ text, name }) => (
            <blockquote
              key={name}
              className="text-sm text-gray-700 border-l-4 border-black pl-4 italic"
            >
              “{text}” — <span className="not-italic font-medium">{name}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-xl   mb-4">{sections[4].title}</h2>
        <ul className="list-disc pl-6 text-gray-600 text-sm">
          {sections[4].list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Coming Soon */}
      <section className="mb-12">
        <h2 className="text-xl   mb-4">{sections[5].title}</h2>
        <ul className="list-disc pl-6 text-gray-600 text-sm">
          {sections[5].list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center my-12">
        <h2 className="text-2xl   mb-2">Start Today</h2>
        <p className="text-sm text-gray-600 mb-4">Free. Simple. Effective.</p>
        <button
          data-umami-event="Start Tracking Now Click"
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded-full   hover:scale-105 transition"
        >
          Start Tracking Now
        </button>
        {/* <p className="text-xs text-gray-500 mt-2">
          Join thousands who've ditched their notes app for better expense
          tracking
        </p> */}
        <p className="text-xs text-gray-400 mt-1">
          More features coming soon! 🌟
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
