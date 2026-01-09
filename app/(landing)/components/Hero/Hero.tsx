"use client"

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import BackgroundStyle from "./BackgroundStyle";
import TextContent from "./TextContent";
import usePreferencesContext from "../../hooks/usePreferencesContext";
import ImageContent from "./ImageContent";

const Hero = () => {
  const { language } = usePreferencesContext();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundStyle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <TextContent language={language} />
          <ImageContent language={language} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>

  );
};

export default Hero;
