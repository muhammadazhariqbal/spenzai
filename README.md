# Spenzai - Personal Expense Tracker

A modern expense tracking app with Islamic finance principles and smart analytics.

## What is Spenzai?

Spenzai is a Progressive Web App (PWA) that helps you track your expenses mindfully. It works offline, supports multiple currencies, and provides real-time insights into your spending habits.

## Features

- **Easy Expense Entry** - Add expenses quickly with a custom keypad
- **15 Categories** - Organize spending into Needs, Wants, and Savings
- **Real-Time Analytics** - See where your money goes instantly
- **Multi-Currency** - Supports 332 countries with automatic currency detection
- **Works Offline** - All data stored locally on your device
- **PWA Ready** - Install as an app on any device
- **Islamic Finance Focus** - Includes ethical spending wisdom and guidance

## Tech Stack

- React 18.3.1
- Vite 5.4.2
- Tailwind CSS 3.4.1
- LocalForage (IndexedDB)
- React Router DOM

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:5173`

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run code linting
```

## Project Structure

```
spenzai/
├── public/          # Static assets & PWA files
├── src/
│   ├── components/  # Reusable UI components
│   ├── screens/     # App screens (Home, History, Profile, etc.)
│   ├── utils/       # Helper functions & data management
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
└── package.json     # Dependencies
```

## How It Works

1. **Onboarding** - Select your country and currency
2. **Add Expenses** - Enter amount, choose category, add optional note
3. **View Analytics** - See spending breakdown by category and type
4. **Track History** - Filter expenses by day, week, or month
5. **Manage Profile** - Update settings and preferences

## Key Components

- **AppContext** - Global state management
- **LocalStorage** - Data persistence with IndexedDB
- **Categories** - 15 pre-defined expense categories
- **Analytics** - Real-time spending calculations
- **PWA** - Offline functionality and app installation

## Building for Production

```bash
npm run build
```

Deploy the `dist` folder to any hosting service (Netlify, Vercel, Firebase, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

---

Made for mindful financial management
