# Demopolly 🗳️

A full-stack monorepo web application for creating and managing polls.

This repository contains:

- **Frontend UI** — built with [Vite](https://vitejs.dev/) in `apps/ui`
- **Backend API** — built with [NestJS](https://nestjs.com/) (or another Node.js backend) in `apps/api`
- **Monorepo setup** — using [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces) for managing multiple apps

---

## 📁 Project Structure

demopolly/
├── apps/
│ ├── api/ # Backend (NestJS or Node.js)
│ └── ui/ # Frontend (Vite + React/TS)
├── package.json # Root monorepo config
├── node_modules/
└── README.md


---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/SreejithTShaji/DemoPolly.git
cd demopolly

```

### 2. Install Dependencies
Install all dependencies for both apps using npm workspaces:

```bash
npm install
```


### 3. Run the Apps in Dev Mode
This will run both the backend and frontend simultaneously:

```bash
npm run dev
```

Frontend: http://localhost:5173

Backend:  http://localhost:4000 

## 🛠️ Individual App Commands
### ▶️ Frontend (apps/ui)
```bash
cd apps/ui

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### ▶️ Backend (apps/api)
```bash
cd apps/api

# Start dev server (NestJS with watch mode)
npm run start:dev

# Build production server
npm run build

# Start production server
npm run start:prod
```


## 📦 Built With

- [**Vite**](https://vitejs.dev/) — Lightning-fast frontend tooling
- [**React**](https://react.dev/) — JavaScript library for building user interfaces *(optional, based on your template)*
- [**NestJS**](https://nestjs.com/) — Progressive Node.js framework for building efficient server-side apps
- [**npm Workspaces**](https://docs.npmjs.com/cli/v9/using-npm/workspaces) — Native monorepo support from npm
- [**Concurrently**](https://www.npmjs.com/package/concurrently) — Run multiple npm scripts concurrently
