import { motion } from "motion/react";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import { Languages } from "@/app/contexts/models";

const MobileMenu = ({ language }: { language: Languages }) => {
  const anchorStyle = "block py-2 text-gray-700 hover:text-cyan-600";
  return  (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-white border-t"
    >
      <div className="px-4 py-4 space-y-3">
        <a href="#services" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_SERVICES}</a>
        <a href="#about" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_ABOUT}</a>
        <a href="#testimonials" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_TESTIMONIALS}</a>
        <a href="#faq" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_FAQ}</a>
        <a href="#contact" className="block py-2 px-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full text-center">
          {WEBSITE_COPY[language].HEADER_CTA}
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
