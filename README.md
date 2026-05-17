# Manoj Kumar Chatti Portfolio Website

A modern personal portfolio website built with **React + Vite + Tailwind CSS**.

## Features

- Modern dark theme
- Responsive design
- Hero section
- About section
- Professional experience
- Featured projects
- Skills section
- Education section
- Contact section
- Resume button
- GitHub and LinkedIn buttons

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Setup

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to Vercel.
3. Import your GitHub repository.
4. Keep framework as Vite.
5. Click Deploy.

## Update Links

In `src/App.jsx`, update these values:

```js
linkedin: "https://www.linkedin.com/",
github: "https://github.com/",
```

Replace them with your real LinkedIn and GitHub profile URLs.

## Resume

Place your resume PDF inside the `public` folder and name it:

```bash
Manoj_Kumar_Chatti_Resume.pdf
```

The resume button is already linked to that file.
