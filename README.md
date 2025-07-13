# 🏦 Spenzai - Personal Expense Tracker

> A modern, Islamic finance-focused Progressive Web App for mindful expense tracking and financial wellness.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-green.svg)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Development Guide](#-development-guide)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🌟 Overview

Spenzai is a sophisticated Progressive Web App (PWA) designed for personal expense tracking with a focus on Islamic finance principles and mindful spending. The app provides real-time analytics, category-based expense management, and motivational financial wisdom to help users make better financial decisions.

### Key Highlights

- **📱 PWA Ready**: Install as a native app on any device
- **🌍 Multi-Currency**: Support for 332 countries with automatic currency detection
- **📊 Smart Analytics**: Real-time spending insights and category breakdowns
- **🕌 Islamic Finance**: Integration of Islamic financial wisdom and ethical spending
- **💾 Offline-First**: Works without internet using IndexedDB
- **🎨 Modern UI**: Clean, intuitive design with smooth animations

## ✨ Features

### Core Functionality

- **Multi-step expense entry** with custom keypad
- **15 expense categories** organized by type (Needs/Wants/Savings)
- **Real-time analytics** and spending insights
- **Date-based filtering** (Today/Week/Month)
- **Receipt scanning** capability (placeholder)
- **Hold-to-delete** expense management

### Smart Analytics

- **Spending breakdown** by category and type
- **Progress bars** for Needs vs Wants vs Savings
- **Financial wisdom quotes** (Islamic & General)
- **Trend analysis** and spending patterns
- **Customizable quote preferences**

### User Management

- **Country/currency selection** during onboarding
- **Local data storage** with IndexedDB
- **PIN-based authentication** system
- **Data backup/restore** functionality
- **Profile management** with editable settings

## 🛠 Tech Stack

### Frontend

- **React 18.3.1** - UI library with hooks
- **Vite 5.4.2** - Build tool and dev server
- **React Router DOM 6.22.3** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Icons & UI

- **Lucide React 0.344.0** - Beautiful icon library
- **React Checkmark 2.1.1** - Success animations
- **Recharts 2.15.3** - Chart components

### Data & Storage

- **LocalForage 1.10.0** - IndexedDB wrapper
- **Date-fns 3.3.1** - Date manipulation utilities

### PWA & Performance

- **Vite PWA Plugin 0.18.2** - PWA generation
- **Workbox Window 7.0.0** - Service worker management

### Development Tools

- **TypeScript 5.5.3** - Type safety
- **ESLint 9.9.1** - Code linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **yarn** 3.6.4)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/spenzai.git
   cd spenzai
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. **Start development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# PWA Development
npm run build        # Build with PWA assets
npm run preview      # Preview PWA build
```

## 📁 Project Structure

```
spenzai/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── service-worker.js  # Service worker
│   └── icons/            # PWA icons
├── src/
│   ├── assets/           # Images, fonts, etc.
│   │   ├── fonts/        # Clash Grotesk font family
│   │   └── images/       # App images and icons
│   ├── components/       # Reusable UI components
│   │   ├── Alert.jsx     # Notification component
│   │   ├── Navigation.jsx # Bottom navigation
│   │   ├── QuoteBox.jsx  # Financial wisdom display
│   │   └── ...           # Other components
│   ├── screens/          # Main application screens
│   │   ├── WelcomeScreen/    # Onboarding
│   │   ├── HomeScreen/       # Main dashboard
│   │   ├── AddExpenseScreen/ # Expense entry
│   │   ├── HistoryScreen/    # Analytics
│   │   ├── CameraScreen/     # Receipt scanning
│   │   ├── Profile/          # User settings
│   │   └── Auth/             # Authentication
│   ├── utils/           # Utility functions
│   │   ├── AppContext.jsx    # Global state management
│   │   ├── localStorage.js   # Data persistence
│   │   ├── categories.js     # Expense categories
│   │   ├── helpers.js        # Helper functions
│   │   ├── countries.js      # Country/currency data
│   │   └── financeQoutes.js  # Financial wisdom
│   ├── types/           # TypeScript definitions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🏗 Architecture

### State Management

The app uses **React Context API** for global state management through `AppContext.jsx`:

```javascript
// Key state variables
const [user, setUser] = useState(null); // User profile & settings
const [expenses, setExpenses] = useState([]); // All expenses
const [totalsByCategory, setTotalsByCategory] = useState({}); // Category totals
const [totalsByType, setTotalsByType] = useState({}); // Type totals
const [percentByType, setPercentByType] = useState({}); // Type percentages
```

### Data Flow

1. **User Onboarding**: Country selection → User creation → Local storage
2. **Expense Entry**: Amount → Category → Note → Save to IndexedDB
3. **Data Processing**: Real-time calculations and analytics
4. **Display**: Filtered views with currency formatting
5. **Persistence**: LocalForage for offline-first experience

### Component Architecture

```
App.jsx
├── AppProvider (Context)
├── InstallPrompt (PWA)
└── Router
    ├── WelcomeScreen
    ├── HomeScreen
    │   ├── HomeHeader
    │   ├── ExpenseSummary
    │   ├── CategoryList
    │   └── ActivitiesSection
    ├── AddExpenseScreen
    │   ├── CategoryScroller
    │   └── Custom Keypad
    ├── HistoryScreen
    │   ├── SpentCard
    │   ├── QuoteBox
    │   └── WisdomPreferenceModal
    ├── CameraScreen
    ├── Profile
    └── Auth
```

## 💻 Development Guide

### Adding New Features

1. **Create new component**

   ```bash
   # Create component file
   touch src/components/NewComponent.jsx

   # Create screen file
   mkdir src/screens/NewScreen
   touch src/screens/NewScreen/index.jsx
   ```

2. **Follow naming conventions**

   - Components: `PascalCase` (e.g., `ExpenseSummary.jsx`)
   - Screens: `PascalCase` (e.g., `HomeScreen/index.jsx`)
   - Utilities: `camelCase` (e.g., `localStorage.js`)

3. **Use existing patterns**
   - Import from `AppContext` for global state
   - Use `localStorage.js` utilities for data persistence
   - Follow Tailwind CSS classes for styling

### Styling Guidelines

- **Use Tailwind CSS** utility classes
- **Follow mobile-first** responsive design
- **Maintain consistency** with existing color scheme
- **Use custom fonts** (Clash Grotesk) for headings

```javascript
// Example component styling
<div className="flex min-h-screen flex-col items-center bg-white">
  <div className="w-full max-w-md bg-white flex flex-col min-h-screen relative">
    {/* Content */}
  </div>
</div>
```

### State Management Patterns

```javascript
// Using AppContext
const { user, expenses, saveExpense, deleteExpense } = useContext(AppContext);

// Local state for component-specific data
const [isLoading, setIsLoading] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("all");
```

### Data Persistence

```javascript
// Adding new expense
import { addExpense } from "../utils/localStorage";

const newExpense = await addExpense({
  amount: 100,
  category: "food",
  date: "2024-01-15",
  note: "Lunch",
  currency: "USD",
});
```

### Error Handling

```javascript
// Component error handling
try {
  await saveExpense(expenseData);
} catch (error) {
  console.error("Failed to save expense:", error);
  // Show user-friendly error message
}
```

## 📚 API Reference

### AppContext Methods

| Method                  | Description             | Parameters        |
| ----------------------- | ----------------------- | ----------------- |
| `saveUser(user)`        | Save user profile       | `user: Object`    |
| `saveExpense(expense)`  | Add new expense         | `expense: Object` |
| `deleteExpense(id)`     | Delete expense          | `id: string`      |
| `getAllExpenses()`      | Fetch all expenses      | None              |
| `handleQuoteType(type)` | Update quote preference | `type: string`    |

### LocalStorage Utilities

| Function                 | Description            | Parameters        |
| ------------------------ | ---------------------- | ----------------- |
| `addExpense(expense)`    | Add expense to storage | `expense: Object` |
| `getExpenses()`          | Get all expenses       | None              |
| `deleteExpenseLocal(id)` | Delete expense         | `id: string`      |
| `initUserLocal(user)`    | Initialize user        | `user: Object`    |
| `getUserLocal()`         | Get user data          | None              |

### Helper Functions

| Function                           | Description        | Parameters                         |
| ---------------------------------- | ------------------ | ---------------------------------- |
| `formatCurrency(amount, currency)` | Format currency    | `amount: number, currency: string` |
| `isDateMatchFilter(date, filter)`  | Check date filter  | `date: string, filter: string`     |
| `capitalizeFirst(str)`             | Capitalize string  | `str: string`                      |
| `generateId()`                     | Generate unique ID | None                               |

## 🚀 Deployment

### Building for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

### PWA Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to hosting service**

   - **Netlify**: Drag `dist` folder to Netlify
   - **Vercel**: Connect repository to Vercel
   - **Firebase**: Use Firebase Hosting

3. **Configure PWA settings**
   - Update `public/manifest.json` for app metadata
   - Configure service worker in `vite.config.ts`
   - Test PWA installation on mobile devices

### Environment Variables

Create `.env` file for environment-specific settings:

```env
VITE_APP_NAME=Spenzai
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.example.com
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make changes** following coding standards
4. **Test thoroughly** on different devices
5. **Commit changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create Pull Request**

### Coding Standards

- **ESLint**: Follow existing linting rules
- **Prettier**: Use consistent code formatting
- **TypeScript**: Add types for new functions
- **Testing**: Add tests for new features
- **Documentation**: Update README for new features

### Commit Message Format

```
type(scope): description

feat(expense): add receipt scanning functionality
fix(ui): resolve navigation bar overlap issue
docs(readme): update installation instructions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Clash Grotesk** font family for beautiful typography
- **Lucide React** for comprehensive icon library
- **Tailwind CSS** for utility-first styling
- **LocalForage** for seamless IndexedDB integration
- **Vite** for lightning-fast development experience

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/spenzai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/spenzai/discussions)
- **Email**: support@spenzai.com

---

**Made with ❤️ for mindful financial management**
