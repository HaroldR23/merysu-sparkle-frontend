import { Service } from "../../types/types";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm flex flex-col items-center text-center">
      <div className="h-12 w-12 bg-lightbg rounded-md flex items-center justify-center mb-4">{service.icon || "🧼"}</div>
      <h3 className="font-semibold text-xl">{service.title}</h3>
      <p className="text-slate-600 mt-2">{service.desc}</p>
    </div>
  );
};

export default ServiceCard;
