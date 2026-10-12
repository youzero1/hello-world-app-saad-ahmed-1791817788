export type ThemeId = 'ocean' | 'sunset' | 'forest' | 'mono';

export interface ThemeColors {
  bg: string;
  text: string;
  accent: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  colors: ThemeColors;
}

export const DEFAULT_THEME: ThemeId = 'ocean';

// The page itself reads colors from the CSS custom properties in
// src/styles/global.css (swapped via the data-theme attribute). These hex
// values mirror them so swatch previews can show each theme's real colors —
// keep the two in sync.
export const themes: Theme[] = [
  {
    id: 'ocean',
    name: 'Ocean',
    colors: { bg: '#082f49', text: '#e0f2fe', accent: '#38bdf8' },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    colors: { bg: '#450a0a', text: '#fee2e2', accent: '#fb7185' },
  },
  {
    id: 'forest',
    name: 'Forest',
    colors: { bg: '#052e16', text: '#dcfce7', accent: '#4ade80' },
  },
  {
    id: 'mono',
    name: 'Mono',
    colors: { bg: '#09090b', text: '#fafafa', accent: '#a1a1aa' },
  },
];
