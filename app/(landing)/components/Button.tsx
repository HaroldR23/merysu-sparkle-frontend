'use client';
import { motion } from "motion/react";

import { ButtonProps } from "../types/props";

export default function Button({ children, onClick, color, disabled = false, type = "button" }: ButtonProps) {
  return (
    <motion.button
      disabled={disabled}
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex justify-around w-full p-2 items-center gap-2 lg:px-8 lg:py-4 cursor-pointer bg-linear-to-r ${color} text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow`}
    >
      {children}
    </motion.button>
  );
}
