'use client';

import { Card, Text, Badge, Stack, Button } from '@jbatte47/lattice/components';
import { ThemeToggle } from './components/ThemeToggle';

/**
 * Instance metadata — all values come from environment variables.
 * Operators configure these in their Cloudflare Pages project settings.
 *
 * Env vars (set in Cloudflare dashboard):
 *   NEXT_PUBLIC_SITE_NAME       - Display name of this instance
 *   NEXT_PUBLIC_SITE_VERSION    - Version label
 */

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Verse';
const siteVersion = process.env.NEXT_PUBLIC_SITE_VERSION || '0.1.0';

const instanceInfo = [
  { label: 'Instance', value: siteName },
  { label: 'Version', value: siteVersion },
  { label: 'Framework', value: 'Next.js 15' },
  { label: 'Runtime', value: 'Cloudflare Workers' },
  { label: 'Design System', value: 'Lattice' },
  { label: 'Status', value: 'Running' },
];

const featureStubs = [
  {
    name: 'Lore Wiki',
    icon: '📚',
    status: 'coming soon' as const,
    description: 'Interconnected knowledge bases for your worlds.',
  },
  {
    name: 'Art Gallery',
    icon: '🎨',
    status: 'coming soon' as const,
    description: 'Showcase concept art, maps, and visual assets.',
  },
  {
    name: 'Text Reader',
    icon: '📖',
    status: 'coming soon' as const,
    description: 'Publish prose with beautiful typography.',
  },
];

export function InstanceDashboard() {
  return (
    <main
      id="main-content"
      className="min-h-screen p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto"
    >
      <Stack gap="xl">
        {/* Header */}
        <Stack direction="row" align="center" justify="between" className="flex-wrap">
          <Stack direction="row" align="center" gap="md">
            <Text variant="h2" as="h1">
              ✦ {siteName}
            </Text>
            <Badge variant="success">● Running</Badge>
          </Stack>
          <ThemeToggle />
        </Stack>

        {/* Instance Metadata */}
        <Card>
          <Stack gap="lg">
            <Text variant="h3">Instance Info</Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {instanceInfo.map((item) => (
                <Stack key={item.label} gap="xs">
                  <Text variant="label" color="muted">
                    {item.label.toUpperCase()}
                  </Text>
                  <Text variant="body">{item.value}</Text>
                </Stack>
              ))}
            </div>
          </Stack>
        </Card>

        {/* Feature Stubs */}
        <Stack gap="md">
          <Text variant="h3">Features</Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureStubs.map((feature) => (
              <Card key={feature.name} interactive>
                <Stack gap="md">
                  <Stack direction="row" align="center" justify="between">
                    <Text variant="h3">
                      {feature.icon} {feature.name}
                    </Text>
                    <Badge>{feature.status}</Badge>
                  </Stack>
                  <Text color="secondary">{feature.description}</Text>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>

        {/* Footer Link */}
        <Stack direction="row" align="center" justify="center" gap="md" className="pt-8 border-t border-border-subtle">
          <Text color="muted" variant="body-sm">
            Powered by
          </Text>
          <Button
            variant="ghost"
            size="sm"
            href="/about"
          >
            Verse →
          </Button>
        </Stack>
      </Stack>
    </main>
  );
}
