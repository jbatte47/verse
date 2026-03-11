'use client';

import { designSystem } from '@/lib/design-system';

export function DesignSystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Provider } = designSystem;
  return <Provider>{children}</Provider>;
}
