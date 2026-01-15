'use client';

import { motion } from "motion/react";
import { WhyChooseItem } from "../../types/types";

const WhyChooseCard = ({ item }: { item: WhyChooseItem }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5
          }
        }
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20"
      >
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-cyan-100">{item.desc}</p>
  </motion.div>
  );
};

export default WhyChooseCard;
