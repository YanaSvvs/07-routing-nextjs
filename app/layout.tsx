import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NoteHub', 
  description: 'A simple note-taking application built with Next.js', 
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode; 
}

export default function RootLayout({
  children,
  modal, 
}: RootLayoutProps) {
  return (
    <html lang="en">
      {}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {}
        <TanStackProvider>
          {}
          <Header />

          {/* Основний вміст сторінки */}
          <main>
            {children}
          </main>

          {}
          {modal}

          {}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
