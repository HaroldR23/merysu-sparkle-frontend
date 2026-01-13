import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { whoWeAreItems } from "../../constants/whoWeAreItems";
import { Languages } from "@/app/contexts/models";

const WhoWeAreItems = ({ language }: { language: Languages }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {
        whoWeAreItems(language).map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md"
        >
          <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </motion.div> 
      ))}
    </div>
  );
};

export default WhoWeAreItems;
