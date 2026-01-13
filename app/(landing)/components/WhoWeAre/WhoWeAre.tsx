'use client';
import { motion } from "motion/react";
import Image from "next/image";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import { Languages } from "@/app/contexts/models";
import WhoWeAreItems from "./WhoWeAreItems";

const WhoWeAre = ({ language }: { language: Languages }) => {
  return (
      <section id="nosotros" className="py-24 bg-linear-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-400 rounded-3xl transform -rotate-3 opacity-20"></div>
                <Image 
                  src="/avatar_1.jpeg" 
                  alt="About Us"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {WEBSITE_COPY[language].WHO_WE_ARE_TITLE[0]} <span className="bg-linear-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent">{WEBSITE_COPY[language].WHO_WE_ARE_TITLE[1]}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {WEBSITE_COPY[language].WHO_WE_ARE_DESC[0]} <strong>MerySu Sparkle Cleaning</strong>,{WEBSITE_COPY[language].WHO_WE_ARE_DESC[1]}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {WEBSITE_COPY[language].WHO_WE_ARE_DESC[2]} <strong>{WEBSITE_COPY[language].WHO_WE_ARE_DESC[3]}</strong>
                {WEBSITE_COPY[language].WHO_WE_ARE_DESC[4]} {WEBSITE_COPY[language].WHO_WE_ARE_DESC[5]}
              </p>

              <WhoWeAreItems language={language} />
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default WhoWeAre;
