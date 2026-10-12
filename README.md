# Job Portal UI · Frontend Test (Transviti)

A job-search dashboard built with React, TypeScript and SCSS Modules as a frontend assessment for Transviti. It turns a design into a responsive, component-driven layout with typed data.

## Features

- Profile card sidebar with cover image, avatar, title and location
- Accessible job search bar (keyword, location and job type) with a typed `onSearch` callback
- Featured and recommended job grids rendered from typed mock data (`Job` type)
- Reusable building blocks: `Button`, `Header`, `JobCard`, `Layout`, `ProfileCard`, `SearchBar`, `SearchInput`
- Design tokens and mixins in SCSS partials (`_variables`, `_mixins`, `_reset`, `_fonts`)

## Tech stack

- React 18 + TypeScript
- Vite (SWC)
- SCSS Modules
- React Router
- React Icons
- Moment.js
- ESLint (typescript-eslint)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). `npm run build` creates a production build.

## Project structure

```
src/
├── components/   # Button, Header, JobCard, Layout, ProfileCard, SearchBar, SearchInput
├── pages/Home/   # Home page + jobs.mock.ts
├── styles/       # SCSS variables, mixins, reset, fonts, global
└── types/job.ts  # Job type
```


## Author

**Muhammad Kabir Kaka**, Frontend Engineer (React · Next.js · TypeScript)  
[GitHub](https://github.com/KabirKaka) · [LinkedIn](https://www.linkedin.com/in/muhammad-kabir-kaka)
