import type { Metadata } from 'next';
import { InstanceDashboard } from './dashboard';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Your Verse instance dashboard.',
};

export default function HomePage() {
  return <InstanceDashboard />;
}
