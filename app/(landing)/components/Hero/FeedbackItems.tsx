import { Languages } from "@/app/contexts/models";
import { motion } from "motion/react";
import { feedbackItems } from "../../constants/feedbackItems";

const FeedbackItem = ({ language }: { language: Languages }) => {
  return (
    <>
      {feedbackItems(language).map((item) => (
        <motion.div
        whileHover={{ y: -5 }}
        className="text-center"
        key={item.name}
        >
          <div className="text-3xl font-bold text-cyan-600">{item.name}</div>
          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
        </motion.div>
      ))}
    </>
  );
};


const FeedbackItems = ({ language }: { language: Languages }) => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      <FeedbackItem language={language} />
    </div>
  );

};

export default FeedbackItems;
