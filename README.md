# Mind Renewal Blueprint - Sales Page

A high-converting sales page for **The Mind Renewal Blueprint (MRB)** — the 5-pillar system for reversing dementia naturally, backed by 64 medical studies.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Radix UI** components (Accordion, Tooltip)
- **Lucide React** icons
- **Wouter** for routing
- **Sonner** for toast notifications

## Design System

- **Color Palette:** Sage Green (`#6B9E7F`), Warm Cream (`#F5F1E8`), Warm Coral (`#E8876B`), Deep Charcoal (`#2C2C2C`)
- **Typography:** Playfair Display (headlines) + Inter (body)
- **Layout:** Asymmetric sections with alternating text-image blocks, generous whitespace

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
cd client
pnpm install
```

### Development

```bash
cd client
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
cd client
pnpm build
```

## Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Main sales page
│   │   └── NotFound.tsx      # 404 page
│   ├── components/
│   │   ├── ErrorBoundary.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── sonner.tsx
│   │       └── tooltip.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Page Sections

1. **Hero** — Headline, subheadline, CTA button, guarantee badge
2. **Science** — Breakthrough discovery story, statistics
3. **Problem/Solution** — Old Way vs. MRB Way comparison
4. **5 Pillars** — The five core pillars of the blueprint
5. **Results** — Testimonials and social proof
6. **FAQ** — Frequently asked questions (accordion)
7. **Footer** — Navigation links, privacy policy
