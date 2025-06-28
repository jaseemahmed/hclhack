# 💼 Portfolio Management System

A React-based trading platform that allows customers to manage their portfolios, book trades, and view transaction histories — with support for TDD, styled-components, and a mock backend.

---

## 🚀 Features

- 🔍 **Portfolio Summary**  
  View holdings, asset allocation, and performance by filtering using Order Ref No, Security Name, Transaction Type, and Date Range.

- 🧾 **Order Entry**  
  Book trades (Buy/Sell) against available funds. Includes input validation, balance check, and legacy backend simulation.

- 📜 **Transaction History**  
  Search past orders using filters like Order Status, Transaction Type, and Date Range. Includes hourly report simulation.

- 🔐 **Audit Logging**  
  All actions like search, trade booking are logged for audit using `AUDIT_ACTION` table.

- 📈 **Live Tick Feed (optional)**  
  Simulated trading prices via WebSocket or polling for real-time-like experience.

---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🎨 styled-components
- 🧪 Vitest + React Testing Library (TDD)
- 📦 json-server (Mock backend)
- 🌐 WebSocket (for real-time price updates - optional)
- 🗃️ Modular mock database structure (ORDER_DETAIL, ACCOUNT_DETAIL, etc.)

---

## 📂 Folder Structure

src/
├── assets/                # Static files (images, logos, icons)
├── components/            # Shared UI components (Buttons, Inputs, Layout)
├── features/              # Domain-specific modules
│   ├── portfolio/         # Portfolio Summary + Performance
│   │   ├── components/    # UI specific to portfolio
│   │   ├── services/      # API calls (json-server or backend)
│   │   ├── hooks/         # Custom hooks for fetching/validation
│   │   ├── utils/         # Validation, date helpers, etc.
│   │   ├── PortfolioPage.tsx
│   │   └── index.ts
│   ├── orders/            # Order entry + status flow
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── OrderEntryPage.tsx
│   │   └── index.ts
│   ├── transactions/      # Transaction History screen
│   │   ├── components/
│   │   ├── services/
│   │   ├── TransactionHistoryPage.tsx
│   │   └── index.ts
│   └── audit/             # Audit user login & actions
│       └── services/      # For audit logging
├── layouts/               # Page layouts (Header/Footer/Sidebar)
├── router/                # React Router config
│   └── index.tsx
├── styles/                # Tailwind base + global styles
│   ├── tailwind.config.js
│   └── index.css
├── tests/                 # Vitest unit & integration tests
│   ├── portfolio/
│   ├── orders/
│   ├── transactions/
│   └── setup.ts           # RTL + vitest setup
├── App.tsx
├── main.tsx
└── types/                 # TypeScript types (Order, Portfolio, User, etc.)
