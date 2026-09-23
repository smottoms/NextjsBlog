# Fresh Ideas — Modern Next.js Editorial Blog

A sleek, responsive, and accessible modern blog built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## Features

- **Editorial Home Page**: Hero banner with gradient overlay, featured story showcase, responsive category filtering, and weekly digest subscription.
- **Article Deep-Dives (`/[slug]`)**: Dynamic case-insensitive slug routing, structured Q&A sections, social share links (X, LinkedIn, Facebook, Copy Link), and recommended **Trending Articles** sidebar.
- **Topic Directory (`/topic`)**: Clean, icon-free topic cards and a drill-down architecture revealing core subtopics and section headings with direct jump anchors.
- **Interactive Search (`<SearchBar />`)**: Direct navbar search with live multi-field filtering, thumbnail previews, clear button (`✕`), click-outside, and <kbd>Esc</kbd> dismissal.
- **About Page (`/about`)**: Publication mission, stats bar, editorial vision, 4 guiding principles, and topics covered.
- **Contact Page (`/contact`)**: Interactive inquiry form with topic categorization, live dispatch feedback, direct email channels, social links, and an editorial FAQ grid.
- **Production-Ready**: 0 TypeScript warnings, static page prerendering with Turbopack, and safe image fallbacks.

---

## Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.5` | App Router, SSR & Static Site Generation (SSG) |
| **React** | `19.2.8` | UI Library & Server Components |
| **Tailwind CSS** | `4.0.0` | Utility-first responsive styling & dark theme |
| **TypeScript** | `5.0.0` | Static typing & interface definitions |
| **Lucide React** | `1.47.0` | Crisp UI icons |
| **Slugify** | `1.6.9` | URL-safe strict routing |

---

## Getting Started

### 1. Prerequisites
- **Node.js**: `v18.18.0` or higher (Recommended: `v20+` or `v22+`)
- **npm** or **pnpm**

### 2. Installation
Install dependencies inside the `blog` application folder:

```bash
cd blog
npm install
```

### 3. Environment Configuration
Copy the sample environment file:

```bash
cp .env.example .env.local
```

### 4. Running the Development Server
From the root directory or inside `blog/`:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## Project Structure

```text
nextjsBlog/
├── blog/                      # Next.js Application
│   ├── app/
│   │   ├── [slug]/page.tsx    # Dynamic Article Post & Sidebar
│   │   ├── about/page.tsx     # Mission & Principles Page
│   │   ├── contact/page.tsx   # Interactive Contact & FAQ Page
│   │   ├── topic/page.tsx     # Topic Directory & Drill-down
│   │   ├── layout.tsx         # Root Shell (Header + Body + Footer)
│   │   ├── page.tsx           # Homepage & Featured Story
│   │   └── globals.css        # Tailwind v4 Theme Variables
│   ├── component/
│   │   ├── footer/            # Footer & Social Links
│   │   ├── header/            # Navbar & Responsive SearchBar
│   │   └── search.tsx         # Reusable Autocomplete SearchBar
│   ├── dummy_context.json     # Blog Data & Structured Sections
│   ├── public/                # Static Images & SVGs
│   ├── .env.example           # Example Environment Variables
│   └── package.json           # Application Dependencies
├── .gitignore                 # Root Git Ignore Configuration
├── package.json               # Root Workspace Scripts
├── requirements.txt           # Dependency & Runtime Reference
└── README.md                  # Project Documentation
```

