# Diya Chauhan — Portfolio

Premium, dark-theme portfolio for **Diya Chauhan**, UI/UX Designer & Frontend Developer. Built as an interactive product experience — glassmorphism, animated gradients, and scroll-driven motion throughout.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
- [Lucide](https://lucide.dev) icons

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

- `src/app` — root layout, global styles, page composition
- `src/components/sections` — Hero, About, Skills, Process, Projects, Experience, Achievements, Contact
- `src/components/ui` — shared primitives (magnetic buttons, tilt cards, section headings, animated counters)
- `src/data/content.ts` — all site copy and content in one place

## Content

All profile, project, and experience details live in [`src/data/content.ts`](src/data/content.ts) — edit that file to update copy without touching component code.
