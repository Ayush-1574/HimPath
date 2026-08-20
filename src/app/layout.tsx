import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const metadata: Metadata = {
  title: 'HiMPaTH | Centre of Excellence | IIT Ropar',
  description:
    'HiMPaTH — Himalayan Pathways for Transport and Highways, Centre of Excellence at Department of Civil Engineering, IIT Ropar. Advancing sustainable, climate-resilient and technology-driven transportation infrastructure for the Indian Himalayan Region.',
  keywords: [
    'HiMPaTH',
    'IIT Ropar',
    'Himalayan Pathways for Transport and Highways',
    'Centre of Excellence',
    'Department of Civil Engineering',
    'Dr. Surya Kant Sahdeo',
    'Climate-Resilient Roads',
    'Sustainable Pavements',
    'Porous Asphalt',
    'Pervious Concrete',
    'Full-Depth Reclamation',
    'RAP RCCP',
    'Himalayan Infrastructure',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-[#fbfcfa] text-[#273943]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
