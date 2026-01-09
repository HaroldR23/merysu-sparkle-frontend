import { Languages } from "@/app/contexts/models";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import FeedbackItems from "./FeedbackItems";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";

const TextContent = ({ language }: { language: Languages }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full mb-6"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">{WEBSITE_COPY[language].HERO_CLEANING_SERVICE_TAGLINE}</span>
      </motion.div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        {WEBSITE_COPY[language].HERO_TITLE[0]}{' '}
        <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          {WEBSITE_COPY[language].HERO_TITLE[1]}
        </span>{' '}
        <br />{WEBSITE_COPY[language].HERO_TITLE[2]}
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        {WEBSITE_COPY[language].HERO_SUBTITLE}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow text-center"
        >
          {WEBSITE_COPY[language].HEADER_CTA}
        </motion.a>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 text-center"
        >
          {WEBSITE_COPY[language].HEADER_SERVICES}
        </motion.a>
      </div>
      <FeedbackItems language={language} />

    </motion.div>
  );

};

export default TextContent;
