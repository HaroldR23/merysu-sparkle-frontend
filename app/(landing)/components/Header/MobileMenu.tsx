import { motion } from "motion/react";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import { Languages } from "@/app/contexts/models";

const MobileMenu = ({ language }: { language: Languages }) => {
  const anchorStyle = "block py-2 text-gray-700 hover:text-cyan-600";
  return  (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-white border-t pb-5"
    >
      <div className="px-4 py-4 flex flex-col gap-4">
        <a href="#services" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_SERVICES}</a>
        <a href="#about" className={anchorStyle}>{WEBSITE_COPY[language].HEADER_ABOUT}</a>
        <a href="#howItWorks" className={anchorStyle}>{WEBSITE_COPY[language].HOW_IT_WORKS_TITLE.map(element => `${element} `)}</a>
        <a href="#whyChooseUs" className={anchorStyle}>{WEBSITE_COPY[language].WHY_CHOOSE_TITLE}</a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 w-fit bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow"
        >
          {WEBSITE_COPY[language].HEADER_CTA}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
