import { useEffect, useState } from 'react';
import { DEFAULT_THEME, themes, type Theme, type ThemeId } from '@/lib/themes';

interface UseThemeResult {
  theme: Theme;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

// Single source of truth for the active theme: holds its name and applies it
// app-wide by setting data-theme on the root element.
export function useTheme(): UseThemeResult {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    document.documentElement.dataset.theme = themeId;
  }, [themeId]);

  const theme = themes.find((t) => t.id === themeId) ?? themes[0];

  return { theme, themeId, setThemeId };
}
