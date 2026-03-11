'use client';

/**
 * Lattice adapter — wires @jbatte47/lattice into the DesignSystemConfig interface.
 * This is the default design system for verse.
 *
 * Note: ThemeProvider lives in verse (app/components/ThemeProvider.tsx), not in
 * lattice core. Lattice provides the lower-level theme utilities; verse owns
 * the application-level theme state management.
 */

import type { ReactNode } from 'react';
import type { DesignSystemConfig } from './types';
import { ThemeProvider } from '@/app/components/ThemeProvider';

function LatticeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider defaultMode="dark">{children}</ThemeProvider>;
}

export const latticeDesignSystem: DesignSystemConfig = {
  name: 'lattice',
  Provider: LatticeProvider,
};
