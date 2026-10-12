---
status: pending
title: Hello World App
option: classic-minimal :: Classic Minimal :: A single elegant page with a centered "Hello, World!" message and clean typography.
option: personalized-greeter :: Personalized Greeter :: An interactive page where the visitor types their name and gets a friendly custom greeting.
option: playful-animated :: Playful Animated :: A lively page with animated gradients, floating shapes, and a button that cycles through greetings.
recommended: personalized-greeter
---

# Hello World App

## Common steps

1. Scaffold the project base: `package.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, and `src/main.tsx` mounting the app with TanStack Router.
   - Expected outcome: the dev server can start and renders a blank routed app.
2. Create `src/styles/global.css` starting with `@import "tailwindcss";` and import it once in `src/main.tsx`.
   - Expected outcome: Tailwind utility classes work everywhere.
3. Create the app shell in `src/routes/__root.tsx` with a full-viewport centered layout.
   - Expected outcome: every route sits inside a centered, full-height container.
4. Create the home route in `src/routes/index.tsx` (the actual hello world content depends on the chosen option below).
   - Expected outcome: visiting `/` shows the hello world experience.

## Option: Classic Minimal

5. Build the home route as a single centered "Hello, World!" heading with a short subtitle, using generous whitespace and refined typography (large display text, muted subtitle, subtle accent underline).
   - Expected outcome: a calm, polished one-screen page that simply says hello.
6. Add a small footer line with the current year.
   - Expected outcome: the page feels finished and intentional.

## Option: Personalized Greeter

5. Build the home route with a text input asking for the visitor's name and a "Say hello" button; below it, show a live greeting that updates to "Hello, <name>!" as they type, defaulting to "Hello, World!" when empty.
   - Expected outcome: typing a name instantly personalizes the greeting on screen.
6. Add a small set of greeting-style chips (e.g. "Hey", "Hola", "Bonjour") that swap the greeting word when clicked.
   - Expected outcome: the visitor can play with different greetings without typing.
7. Add a subtle entrance transition when the greeting text changes.
   - Expected outcome: greeting changes feel smooth rather than abrupt.

## Option: Playful Animated

5. Build the home route with a bold "Hello, World!" headline over an animated gradient background, plus a few softly floating decorative shapes.
   - Expected outcome: the page feels alive and colorful on load.
6. Add a "Say it differently" button that cycles the headline through greetings in several languages with a short pop/fade animation on each change.
   - Expected outcome: each click swaps the greeting with a satisfying animation.
7. Add a light confetti burst the first time the button is clicked.
   - Expected outcome: the interaction feels celebratory and fun.
