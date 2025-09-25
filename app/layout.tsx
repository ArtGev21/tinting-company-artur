import './globals.css';
import type { Metadata } from 'next';
import { Asap } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const asap = Asap({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rodeo Tint - Premium Mobile Auto Spa Services',
  description: 'Professional mobile window tinting and paint protection film services. We bring luxury auto spa services directly to your location with premium materials and expert installation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={asap.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}