import Footer from './(landing)/components/Footer';
import Header from './(landing)/components/Header';
import './globals.css';
import React from "react";

export const metadata = {
  title: 'MerySu Sparkle Cleaning',
  description: 'Professional cleaning services for homes, offices and vacation rentals.',
  
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
