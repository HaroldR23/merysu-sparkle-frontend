import { motion } from "motion/react";
import { ContactUsProps } from "../../types/props";

const ContactUsItem = ({
  href,
  cardColor,
  icon,
  title,
  description,
}: ContactUsProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className={`bg-linear-to-r ${cardColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl text-white text-center group`}
    >
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-cyan-100 mb-4">{description[0]}</p>
      <div className="inline-block px-6 py-2 bg-white/20 rounded-full font-medium">
        {description[1]}
      </div>
    </motion.a>
  );

};

export default ContactUsItem;
