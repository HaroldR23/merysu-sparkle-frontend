import Header from './components/Header/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import PreferencesProvider from '../contexts/Preferences/PreferencesProvider';
import '../../app/globals.css';
import React from "react";
import Footer from '../common_components/Footer';
import WhatsAppContact from './components/WhatsAppContact';

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
          <WhatsAppContact />
          <LanguageSelector />
          <Footer />
        </PreferencesProvider>
      </body>
    </html>
  );
}
