# 🚀 Professional Portfolio | 2026

A high-performance, server-first professional portfolio built with the latest web technologies. This project showcases our work, technical skills, and contributions to the TTRPG and software development communities.

## 🛠 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Lightning CSS engine)
- **Backend/Hosting:** [Firebase App Hosting](https://firebase.google.com/products/app-hosting) & Firestore
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [MagicUI](https://magicui.design/) & Framer Motion
- **Language:** TypeScript

## ✨ Key Features

- **SSR & Streaming:** Leveraging Next.js Server Components for near-instant page loads and optimal SEO.
- **Bento Grid Layout:** Modern project showcase powered by MagicUI.
- **Dynamic Content:** Projects and blog posts are fetched directly from Firestore, allowing for real-time updates without redeploying.
- **Tailwind v4:** Utilizing the latest CSS variables-first approach for a streamlined, high-performance design system.
- **Dark Mode:** Native system-preference detection with zero layout shift.

## 📁 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Pages & Server Actions)
│   ├── components/     
│   │   ├── ui/         # shadcn/ui components
│   │   ├── magicui/    # MagicUI animated components
│   │   └── portfolio/  # Custom shared compositions
│   ├── lib/            # Firebase config and utility functions
│   └── styles/         # Global CSS with Tailwind v4 @theme blocks
├── public/             # Static assets
├── apphosting.yaml     # Firebase App Hosting configuration
└── firebase.json       # Firebase CLI & Emulator settings
