---
status: pending
title: Hello World App
option: light-dark-toggle :: Light & Dark Toggle :: A clean hello world page with a simple switch that flips between light and dark themes.
option: theme-palette-picker :: Theme Palette Picker :: A hello world page with a row of color-theme swatches (Ocean, Sunset, Forest, Mono) that restyle the whole page.
option: system-aware-themes :: System-Aware Themes :: The page matches the visitor's device light/dark setting automatically, with buttons to override it.
recommended: theme-palette-picker
---

# Hello World App

## Common steps

1. Scaffold the project base: `package.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, and `src/main.tsx` mounting the app with TanStack Router.
   - Expected outcome: the dev server can start and renders a blank routed app.
2. Create `src/styles/global.css` starting with `@import "tailwindcss";` and import it once in `src/main.tsx`. Define each theme's colors (background, text, accent) as CSS custom properties so themes can be swapped by changing one attribute on the page root.
   - Expected outcome: Tailwind utility classes work everywhere, and colors are driven by swappable theme variables.
3. Create the app shell in `src/routes/__root.tsx` with a full-viewport centered layout that applies the active theme's background and text colors with a smooth color transition.
   - Expected outcome: every route sits inside a centered, full-height container whose colors follow the active theme.
4. Add a theme helper in `src/hooks/useTheme.ts` that holds the active theme name, applies it to the root element, and exposes a way to switch themes.
   - Expected outcome: theme state is managed in one place and applies app-wide.
5. Create the home route in `src/routes/index.tsx` showing a large "Hello, World!" headline with a short subtitle, plus the theme controls (which depend on the chosen option below).
   - Expected outcome: visiting `/` shows the hello world page with working theme controls.

## Option: Light & Dark Toggle

6. Add a sun/moon toggle button in the top corner that flips between a light theme (soft white background, dark text) and a dark theme (deep charcoal background, light text).
   - Expected outcome: clicking the toggle instantly switches the whole page between light and dark.
7. Remember the visitor's choice in browser storage so the theme persists on reload.
   - Expected outcome: returning visitors see the theme they last picked.

## Option: Theme Palette Picker

6. Define four named themes (Ocean, Sunset, Forest, Mono), each with its own background, text, and accent colors, and show a row of labeled color swatches under the headline.
   - Expected outcome: clicking a swatch restyles the entire page in that theme's colors.
7. Highlight the active swatch, show the active theme's name in the subtitle, and animate color changes with a smooth transition.
   - Expected outcome: switching themes feels polished and the current theme is always clear.

## Option: System-Aware Themes

6. Detect the visitor's device light/dark preference on load and apply the matching theme automatically; add "Light", "Dark", and "Auto" buttons so the visitor can override it.
   - Expected outcome: the page matches the device setting by default and can be manually overridden at any time.
7. While set to "Auto", keep the page in sync if the device preference changes while the page is open.
   - Expected outcome: the theme follows the system live without needing a reload.
