# iplays1_ Portfolio

A beautiful, Apple-inspired glass morphism portfolio showcasing small applications and projects.

## Features

- 🎨 Glass morphism design with Apple-like aesthetics
- 📱 Responsive layout
- 💻 CodePen-style viewer (code on right, preview on left)
- 🔢 Sample calculator application
- ✨ Smooth animations and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is ready to deploy on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and deploy

## Adding New Projects

To add a new project:

1. Create a new component in `projects/` directory
2. Add the project to `data/projects.tsx` with:
   - id, title, description, icon
   - component (your React component)
   - sourceCode (string of the source code)

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Glass morphism design

