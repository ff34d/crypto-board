# 📈 Crypto Dashboard

A modern, responsive cryptocurrency dashboard built with React and TypeScript.
The application provides clean market data visualization, coin analytics, and interactive dashboards.
Real API structure is implemented, but data is mocked based on real CoinGecko responses for stability and testing.

## 🚀 Overview

Crypto Dashboard is a frontend-only showcase project demonstrating production-grade architecture and development practices.
It focuses on clarity, modularity, and testability — not backend integration.

![App architecture](./docs/app-architecture.drawio.svg)

## ✨ Features

### Core Functionality

- Cryptocurrency Market Overview — price, cap, and volume tables
- Coin Analytics — per-coin dashboard with charts and statistics
- Search & Filter — instant filtering and search across coins
- Responsive Layout — adaptive interface for desktop and mobile
- Mocked API Layer — realistic mocked responses based on CoinGecko API

### Technical Excellence

- Type-Safe Development — full TypeScript support
- Modular Architecture — FSD-based project structure
- Comprehensive Testing — unit, integration, and E2E coverage
- Clean UI — built with Shadcn components and SCSS modules
- Automated Code Quality — linting, formatting, and pre-commit checks

## 🧭 Use Case Flow

- Open main dashboard with a list of coins
- Use search or sort to filter results
- Select a coin to open its detail dashboard
- View statistics, price charts, and metadata

_(A simple yet realistic flow for demonstrating architecture and UI composition.)_

![use case](./docs/use-case.drawio.svg)

## 🏗️ Architecture

### Project Structure

```text
src/
├── app/        # App entry point, router setup
├── pages/      # Page-level components
├── widgets/    # Composite UI blocks (e.g., dashboard sections)
├── features/   # Isolated business features (search, sort, etc.)
├── entities/   # Core business entities (Coin, etc.)
├── shared/     # Reusable utilities, configs, and UI primitives
│ ├── lib/      # Helper functions and classes
│ ├── ui/       # Shared UI components (buttons, inputs)
│ ├── api/      # Mock API clients
│ ├── stores/   # Zustand global store
│ └── styles/   # Global SCSS and theme files
```

### Technology Stack

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| Framework        | React 18 + TypeScript              |
| Build            | Tool Vite                          |
| Routing          | React Router                       |
| UI Components    | Shadcn/ui + SCSS Modules           |
| State Management | Zustand                            |
| API Layer        | Axios (mocked CoinGecko endpoints) |
| Testing          | Vitest + Testing Library + Cypress |
| Code Quality     | ESLint + Stylelint + Prettier      |
| Git Hooks        | Husky + lint-staged                |
| CI/CD            | GitHub Actions                     |

## 🧪 Testing Strategy

- Unit Tests — logic and utility validation
- Integration Tests — component and feature interaction
- E2E Tests — user flow coverage via Cypress

```bash
npm run test:unit # Run unit tests
npm run test:e2e # Run E2E tests
```

## ⚙️ Setup & Scripts

### Installation

```bash
git clone https://github.com/ff34d/crypto-board.git
cd crypto-board
npm install
```

### Development

```bash
npm run dev # Start development server
npm run build # Build production bundle
npm run preview # Preview production build
npm run lint # Run linters
npm run format # Format code
```

## 🧩 Key Architectural Decisions

- Feature-Sliced Design (FSD) — promotes scalability and modularity
- Mocked API Layer — isolates frontend logic from network constraints
- State Isolation — shared Zustand store + local component states
- Reusable Components — composable and type-safe UI units
- Clean Testing Strategy — ensures correctness and reliability

## 🧱 Example Feature Structure

```text
widgets/
└── coin-dashboard/
├── lib/        # Business logic and helpers
├── types/      # TypeScript definitions
├── ui/         # UI components
├── styles/     # SCSS modules
├── configs/    # Widget configs
├── stores/     # Zustand store (if needed)
├── hooks/      # Custom React hooks
└── index.ts    # Public entry point
```

## 🚀 Deployment

The project can be deployed as static output (via Vite or GitHub Pages).
Alternatively, host dynamically on Vercel or Netlify for live demo.

```bash
npm run build
npm run preview
```

🙏 Acknowledgments

- CoinGecko API — for reference data structure
- Shadcn/UI — for modern accessible design components
- FSD Community — for architectural methodology inspiration

---

🔑 License: [Apache-2.0](LICENSE)\
Author: Vladimir Volkov

---

Built with ❤️ precision and modern web engineering practices.
