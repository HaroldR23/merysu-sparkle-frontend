'use client'

import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import usePreferencesContext from "../../hooks/usePreferencesContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { language } = usePreferencesContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {WEBSITE_COPY[language].COMPANY_NAME}
              </span>
            </motion.div>
            <DesktopMenu language={language} />
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <MobileMenu language={language} />
        )}
      </motion.nav>

  );
};

export default Header;
