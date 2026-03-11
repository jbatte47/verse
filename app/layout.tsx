import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { DesignSystemProvider } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Verse',
    default: 'Verse',
  },
  description:
    'An open source content management platform for world builders and storytellers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </body>
    </html>
  );
}
