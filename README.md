# Imran Hossen - Personal Portfolio

A high-end, futuristic portfolio website built with React, TypeScript, Three.js (React Three Fiber), Framer Motion, and Tailwind CSS.

## 🛠 Tech Stack

-   **Frontend**: React, TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **3D Elements**: Three.js, @react-three/fiber, @react-three/drei
-   **Icons**: Lucide React
-   **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (version 16 or higher) installed on your system.

### Installation

1.  Clone the repository or download the source code.
2.  Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will run at `http://localhost:5173`.

## 📦 Production Build

To create a production-ready build:

```bash
npm run build
```

This command generates a `dist` folder containing the compiled assets (HTML, CSS, JS) optimized for production.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Log in to [Vercel](https://vercel.com).
3.  Click **"Add New..."** > **"Project"**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect Vite. Ensure the settings are:
    *   **Framework Preset**: Vite
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
6.  Click **Deploy**.

### Netlify

1.  Push your code to GitHub.
2.  Log in to [Netlify](https://netlify.com).
3.  Click **"Add new site"** > **"Import from existing project"**.
4.  Connect GitHub and select your repository.
5.  Build settings:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
6.  Click **Deploy**.

## 📁 Project Structure

```
.
├── components/         # React components
│   ├── 3d/            # Three.js 3D scenes
│   └── ui/            # UI components (Cursor, Magnetic buttons)
├── index.html         # Entry HTML
├── index.tsx          # Entry React file
├── App.tsx            # Main Application component
├── types.ts           # TypeScript definitions
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite config
```