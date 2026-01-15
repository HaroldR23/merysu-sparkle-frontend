import { motion } from "motion/react";
import { Service } from "../../types/types";

const ServiceCard = ({ service }: { service: Service }) => {
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
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden"
  >
    <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10`}></div>
    
    <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110`}>
      {service.icon}
    </div>
    
    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
    <p className="text-gray-600">{service.desc}</p>
    
  </motion.div>
  );
};

export default ServiceCard;
