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
  },
  {
    id: "what",
    title: "What Spenzai Does",
    description:
      "Track your spending in seconds. See where your money goes. That's it.",
    subdescription:
      "No complicated setup. No linking bank accounts. No subscriptions. Just a simple way to know what you're spending on.",
  },
  {
    id: "how",
    title: "How It Works",
    steps: [
      {
        number: 1,
        title: "Enter the Amount",
        text: "Use the calculator interface. Type what you spent. Takes 2 seconds.",
      },
      {
        number: 2,
        title: "Pick a Category",
        text: "Groceries? Coffee? Rent? One tap to categorize.",
      },
      {
        number: 3,
        title: "See Your Spending",
        text: "View totals by day, month, or year. See which categories take most of your money.",
      },
    ],
    closing: "That's the whole thing.",
  },
  {
    id: "features",
    title: "What You Get",
    items: [
      {
        title: "Calculator-Style Entry",
        text: "Fast input. No forms to fill out. Just numbers and categories.",
      },
      {
        title: "Wants, Needs & Savings",
        text: "Automatically see how much goes to essentials vs. enjoyment vs. future.",
      },
      {
        title: "Your Data, Your Device",
        text: "Everything stays on your phone. I don't see it, store it, or sell it.",
      },
      {
        title: "Works Offline",
        text: "No internet needed. Track anywhere, anytime.",
      },
      {
        title: "Export Anytime",
        text: "Download your data whenever you want. It's yours.",
      },
      {
        title: "No Ads, No Fees",
        text: "Free to use. Forever. No premium version, no hidden costs.",
      },
    ],
  },
  {
    id: "users",
    title: "Who Uses Spenzai",
    quotes: [
      {
        type: "Students",
        text: "I needed something simple that doesn't make me feel bad about my spending.",
      },
      {
        type: "First-Time Budgeters",
        text: "Other apps had too many features I didn't understand. This one just works.",
      },
      {
        type: "Privacy-Focused Users",
        text: "My financial data stays on my device. That's how it should be.",
      },
      {
        type: "Anyone Who Tried Other Apps and Quit",
        text: "I actually use this one because it doesn't feel like homework.",
      },
    ],
  },
  {
    id: "different",
    title: "Why Spenzai Is Different",
    content: [
      "Most expense trackers try to do everything. Investment tracking, credit scores, financial advice, account syncing. That's great if you need all that.",
      "Spenzai does one thing: helps you see where your money goes.",
      "No judgment about your spending. No pressure to hit strict budgets. Just awareness. Because knowing where your money goes is the first step to making better choices.",
      "I built this because existing apps felt overwhelming. I wanted something I'd actually use every day.",
    ],
  },
  {
    id: "details",
    title: "Features That Matter",
    list: [
      "Multi-currency support (works in any country)",
      "Custom categories for your life",
      "Daily, monthly, yearly views",
      "Spending history with all your transactions",
      "Change language anytime",
      "Install as an app on any device (PWA)",
      "Reset data if you want a fresh start",
    ],
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Is it really free?",
        a: "Yes. No premium tier, no ads, no catch.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. Open it and start tracking.",
      },
      {
        q: "Where is my data stored?",
        a: "On your device only. I can't access it.",
      },
      {
        q: "Does it work on iPhone and Android?",
        a: "Yes. It's a web app, so it works on any phone, tablet, or computer.",
      },
      {
        q: "Can I use it offline?",
        a: "Yes. Internet is only needed for the first visit. After that, works offline.",
      },
      {
        q: "What if I want to stop using it?",
        a: "Export your data and delete the app. That's it.",
      },
      {
        q: "Can I track income too?",
        a: "Not right now. Spenzai focuses only on expenses.",
      },
    ],
  },
];

const Footer = () => (
  <footer className="mt-12 text-center text-xs text-gray-400">
    <div className="mb-2">
      <strong>Spenzai</strong>
      <br />
      Simple expense tracking for real people.
    </div>
    <div className="text-gray-500 mb-2">
      No account required • Works offline • Your data stays yours
    </div>
    <div className="space-x-4 mt-2">
      <a href="/privacy" className="hover:text-gray-600">
        Privacy
      </a>
      <a
        href="https://github.com/muhammadazhariqbal"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600"
      >
        GitHub
      </a>
    </div>
    <div className="mt-4 text-gray-500 text-sm">
      <p>© 2025 Spenzai. Built for awareness, not anxiety.</p>
      <p className="mt-1">
        Muhammad Azhar Iqbal —{" "}
        <a
          href="https://www.linkedin.com/in/muhammadazhariqbal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/muhammadazhariqbal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
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
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded-full text-sm hover:scale-105 transition"
        >
          Get Started Free
        </button>
      </section>

      {/* What Spenzai Does */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[1].title}</h2>
        <p className="text-gray-700 mb-2">{sections[1].description}</p>
        <p className="text-sm text-gray-600">{sections[1].subdescription}</p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[2].title}</h2>
        <ol className="space-y-4 mb-4">
          {sections[2].steps.map(({ number, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full text-xs flex-shrink-0">
                {number}
              </div>
              <div>
                <h4 className="font-medium">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-sm text-gray-700 italic">{sections[2].closing}</p>
      </section>

      {/* Screenshots */}
      <section className="mb-12">
        <h2 className="text-xl mb-4 text-center">Clean & Simple UI</h2>
        <div className="flex gap-4 overflow-x-auto px-2">
          {[five, one, two, three, four].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="w-64 h-auto flex-shrink-0 rounded-xl border shadow"
            />
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[3].title}</h2>
        <div className="grid gap-4">
          {sections[3].items.map(({ title, text }) => (
            <div key={title} className="p-4 border rounded-md">
              <h3 className="font-medium mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Uses Spenzai */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[4].title}</h2>
        <div className="space-y-4">
          {sections[4].quotes.map(({ type, text }) => (
            <div key={type} className="border-l-4 border-black pl-4">
              <h4 className="font-medium text-sm mb-1">{type}</h4>
              <p className="text-sm text-gray-600 italic">"{text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Different */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[5].title}</h2>
        <div className="space-y-3 text-gray-700 text-sm">
          {sections[5].content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Features That Matter */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[6].title}</h2>
        <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
          {sections[6].list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl mb-4">{sections[7].title}</h2>
        <div className="space-y-4">
          {sections[7].items.map(({ q, a }) => (
            <div key={q} className="border-l-2 border-gray-300 pl-4">
              <h4 className="font-medium text-sm mb-1">{q}</h4>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center my-12">
        <h2 className="text-2xl mb-2">Start Tracking Today</h2>
        <p className="text-gray-600 text-sm mb-4">
          You don't need a perfect system. You need one you'll actually use.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Spenzai takes 2 seconds per entry. Open it when you buy something.
          Enter the amount. Pick the category. Done.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Do that for a week and you'll know more about your spending than you
          do right now.
        </p>
        <button
          data-umami-event="Start Tracking Now Click"
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition"
        >
          Get Started - It's Free
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
