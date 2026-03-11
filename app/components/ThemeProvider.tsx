'use client';

/**
 * Verse ThemeProvider — application-level theme state management.
 *
 * Built on top of Lattice's lower-level theme utilities (applyTheme,
 * darkTheme, defaultTheme) rather than being a core Lattice primitive.
 * This follows Lattice's philosophy: primitives are structural, and
 * theme state management belongs in the consuming application.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { applyTheme, darkTheme, defaultTheme } from '@jbatte47/lattice';
import type { Theme } from '@jbatte47/lattice';

type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  /** Current resolved theme (light or dark) */
  theme: Theme;
  /** Current mode selection */
  mode: ThemeMode;
  /** Whether the resolved theme is dark */
  isDark: boolean;
  /** Switch theme mode */
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export type ThemeProviderProps = {
  /** Light theme (defaults to lattice defaultTheme) */
  lightTheme?: Theme;
  /** Dark theme (defaults to lattice darkTheme) */
  darkTheme?: Theme;
  /** Initial mode */
  defaultMode?: ThemeMode;
  children: ReactNode;
};

export function ThemeProvider({
  lightTheme: light = defaultTheme,
  darkTheme: dark = darkTheme,
  defaultMode = 'dark',
  children,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [systemDark, setSystemDark] = useState(false);

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDark(mq.matches);

    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isDark = mode === 'dark' || (mode === 'system' && systemDark);
  const theme = isDark ? dark : light;

  // Apply CSS variables using lattice's applyTheme utility
  useEffect(() => {
    if (typeof document === 'undefined') return;
    applyTheme(theme, document);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [theme, isDark]);

  const setModeStable = useCallback((m: ThemeMode) => setMode(m), []);

  const value = useMemo(
    () => ({ theme, mode, isDark, setMode: setModeStable }),
    [theme, mode, isDark, setModeStable],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
