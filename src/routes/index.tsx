import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/hooks/useTheme';
import { themes } from '@/lib/themes';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { theme, themeId, setThemeId } = useTheme();

  return (
    <main className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      {/* Soft glow that follows the active theme's accent color */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--theme-accent)] opacity-15 blur-3xl transition-colors duration-500"
      />

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--theme-accent)] transition-colors duration-500">
        A tiny theme demo
      </p>
      <h1 className="mt-4 text-6xl font-extrabold tracking-tight sm:text-7xl">
        Hello, World!
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed opacity-80 sm:text-lg">
        Currently dressed in the {theme.name} palette — pick a swatch below to
        restyle the whole page.
      </p>

      {/* Theme palette picker */}
      <div className="mt-12 flex flex-wrap items-start justify-center gap-6 sm:gap-8">
        {themes.map((t) => {
          const isActive = t.id === themeId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setThemeId(t.id)}
              aria-pressed={isActive}
              className="group flex cursor-pointer flex-col items-center gap-2.5"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-300 sm:h-16 sm:w-16 ${
                  isActive
                    ? 'scale-110 outline-2 outline-offset-4 outline-[var(--theme-accent)]'
                    : 'opacity-70 group-hover:scale-105 group-hover:opacity-100'
                }`}
                style={{ backgroundColor: t.colors.bg }}
              >
                <span
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: t.colors.accent }}
                />
              </span>
              <span
                className={`text-xs font-semibold tracking-wide transition-opacity duration-300 ${
                  isActive ? '' : 'opacity-60 group-hover:opacity-100'
                }`}
              >
                {t.name}
              </span>
            </button>
          );
        })}
      </div>
    </main>
  );
}
