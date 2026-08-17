import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const metadata: Metadata = {
  title: 'CEVA: Centre of Excellence on Sustainable Vernacular Architecture | IIT Ropar',
  description:
    'Center of Excellence on sustainable Vernacular Architecture (CEVA) established at IIT Ropar and funded by National Mission on Himalayan Studies (NMHS), Ministry of Environment, Forest & Climate Change (MoEF&CC).',
  keywords: [
    'CEVA',
    'IIT Ropar',
    'Vernacular Architecture',
    'Kath-Kuni',
    'Dhajji-Dewari',
    'Himalayan Studies',
    'NMHS',
    'Sustainable Architecture',
    'Earthquake Resilience',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-orange-100 selection:text-orange-900 bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
