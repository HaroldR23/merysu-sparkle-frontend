'use client';

import { motion } from "motion/react";
import { howItWorks } from "../constants/howItWorksItems";
import { Languages } from "@/app/contexts/models";
import { WEBSITE_COPY } from "../constants/textContent/textContent";

const HowItWorks = ({ language }: { language: Languages }) => {
  return (
    <section className="py-24 relative overflow-hidden" id="howItWorks">
        <div className="absolute inset-0 bg-linear-to-b from-white via-cyan-50/30 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {WEBSITE_COPY[language].HOW_IT_WORKS_TITLE[0]} <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{WEBSITE_COPY[language].HOW_IT_WORKS_TITLE[1]}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks(language).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full border border-gray-100">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-linear-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 mt-4 text-cyan-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-cyan-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
