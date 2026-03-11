'use client';

import { useTheme } from '@/app/components/ThemeProvider';

export function ThemeToggle() {
  const { mode, setMode, isDark } = useTheme();

  const cycleMode = () => {
    const modes = ['light', 'dark', 'system'] as const;
    const currentIndex = modes.indexOf(mode);
    setMode(modes[(currentIndex + 1) % modes.length]);
  };

  const modeLabels = {
    light: '☀️ Light',
    dark: '🌙 Dark',
    system: '💻 System',
  };

  return (
    <button
      onClick={cycleMode}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm
        bg-bg-surface-muted text-text-secondary border border-border-subtle
        hover:bg-bg-layer-2 hover:text-text-primary
        transition-all duration-150 cursor-pointer"
      aria-label={`Current theme: ${mode}${mode === 'system' ? (isDark ? ' (dark)' : ' (light)') : ''}`}
    >
      {modeLabels[mode]}
    </button>
  );
}
