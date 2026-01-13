'use client';

import { motion } from "motion/react";
import { TrustBadgesItems } from "../constants/trustBadgesItems";
import { Languages } from "@/app/contexts/models";

const TrustBadges = (language: { language: Languages }) => {
  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {
            TrustBadgesItems(language.language).map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {badge.icon}
                <p className="text-sm font-medium text-gray-700">{badge.description}</p>
              </div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
