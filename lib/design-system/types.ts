/**
 * Design System Provider Interface
 *
 * This is the abstraction layer that allows verse consumers to swap
 * the design system. By default, verse ships with lattice as the provider,
 * but consumers can implement this interface to bring their own design system.
 */

import type { ReactNode } from 'react';

export interface DesignSystemConfig {
  /** Display name of the design system */
  name: string;

  /**
   * React component that wraps the app to provide theming context.
   * Must accept children and apply design tokens to the DOM.
   */
  Provider: React.ComponentType<{ children: ReactNode }>;

  /**
   * Optional CSS file paths to include in the document head.
   * These are loaded as <link> tags by the root layout.
   */
  stylesheets?: string[];
}
