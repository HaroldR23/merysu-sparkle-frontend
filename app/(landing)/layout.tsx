import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import PreferencesProvider from '../contexts/Preferences/PreferencesProvider';
import '../../app/globals.css';
import React from "react";
import Footer from '../common_components/Footer';

export const metadata = {
  title: 'MerySu Sparkle Cleaning',
  description: 'Professional cleaning services for homes, offices and vacation rentals.',
  
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <PreferencesProvider> 
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <LanguageSelector />
          <Footer />
        </PreferencesProvider>
      </body>
    </html>
  );
}
