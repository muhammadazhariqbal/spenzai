import React from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "hero",
    title: "2 taps a day keep the broke away",
    description:
      "All it takes is a quick add, Spenzai keeps your spending in check",
    buttons: ["Get Started Free"],
  },
  {
    id: "why",
    title: "Why Spenzai?",
    items: [
      {
        emoji: "🎯",
        title: "Simple, Not Stupid",
        text: "No overwhelming features. Just what you need to track expenses and see where your money goes.",
      },
      {
        emoji: "💰",
        title: "Free Forever",
        text: "No subscriptions. No hidden fees. No premium features. Just a free app that works.",
      },
      {
        emoji: "📱",
        title: "Works Everywhere",
        text: "Install on your phone, tablet, or computer. Works offline. Your data stays private.",
      },
      {
        emoji: "🕌",
        title: "Mindful Spending",
        text: "Get gentle reminders about Islamic finance principles and ethical spending habits.",
      },
    ],
  },
  {
    id: "how",
    title: "How It Works",
    steps: [
      {
        number: 1,
        title: "Add Your Expense",
        text: "Tap the + button, enter amount, choose category, add a note. Done.",
      },
      {
        number: 2,
        title: "See Your Patterns",
        text: "View spending by category, day, week, or month. Understand your habits.",
      },
      {
        number: 3,
        title: "Stay Motivated",
        text: "Get daily wisdom quotes about mindful spending and financial wellness.",
      },
    ],
  },
  {
    id: "testimonials",
    title: "What People Say",
    quotes: [
      {
        text: "Finally, an expense tracker that doesn't make me feel overwhelmed. Simple and actually useful.",
        name: "Ahmed",
      },
      {
        text: "I was using notes app before. This is so much better and it's free!",
        name: "Ayesha",
      },
      {
        text: "Love the Islamic finance quotes. Reminds me to spend mindfully.",
        name: "Omar",
      },
    ],
  },
  {
    id: "features",
    title: "Features That Matter",
    list: [
      "15 Smart Categories - Food, transport, shopping, and more",
      "Real-time Insights - See your spending patterns instantly",
      "Offline Works - No internet needed",
      "Private - Your data stays on your device",
      "Install as App - Works like a native app on any device",
    ],
  },
  {
    id: "coming",
    title: "Coming Soon",
    list: [
      "Multi-Language Support - English, Arabic, Urdu, and more",
      "Monthly Email Reports - Get a detailed spending summary delivered to your inbox",
      "Data Backup - Backup and restore your data easily",
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
      <p>
        <strong>Muhammad Azhar Iqbal</strong> — Built Spenzai for simpler
        expense tracking.
      </p>
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
        <h1 className="text-3xl font-bold mb-4">{sections[0].title}</h1>
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
        <h2 className="text-xl font-bold mb-4">{sections[1].title}</h2>
        <div className="grid gap-4">
          {sections[1].items.map(({ emoji, title, text }) => (
            <div key={title} className="p-4 border rounded-md">
              <h3 className="font-semibold">
                {emoji} {title}
              </h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">{sections[2].title}</h2>
        <ol className="space-y-4">
          {sections[2].steps.map(({ number, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs font-bold">
                {number}
              </div>
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">{sections[3].title}</h2>
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
        <h2 className="text-xl font-bold mb-4">{sections[4].title}</h2>
        <ul className="list-disc pl-6 text-gray-600 text-sm">
          {sections[4].list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Coming Soon */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">{sections[5].title}</h2>
        <ul className="list-disc pl-6 text-gray-600 text-sm">
          {sections[5].list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center my-12">
        <h2 className="text-2xl font-semibold mb-2">Start Today</h2>
        <p className="text-sm text-gray-600 mb-4">Free. Simple. Effective.</p>
        <button
          data-umami-event="Start Tracking Now Click"
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
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
