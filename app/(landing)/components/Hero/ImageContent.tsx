import { Languages } from "@/app/contexts/models";
import { CheckCircle2, Leaf } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";

const ImageContent = ({ language }: { language: Languages }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-400 rounded-3xl transform rotate-3 opacity-20"></div>
        <Image
          src="/avatar_2.jpeg" 
          width={500}
          height={600}
          alt="Cleaning Service" 
          className="relative rounded-3xl shadow-2xl w-full"
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">{WEBSITE_COPY[language].HERO_FLOATING_CERTIFIED[0]}</div>
            <div className="text-xs text-gray-600">{WEBSITE_COPY[language].HERO_FLOATING_CERTIFIED[1]}</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">{WEBSITE_COPY[language].HERO_FLOATING_ECO_FRIENDLY[0]}</div>
            <div className="text-xs text-gray-600">{WEBSITE_COPY[language].HERO_FLOATING_ECO_FRIENDLY[1]}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageContent;
