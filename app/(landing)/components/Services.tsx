import { BriefcaseBusiness, BrushCleaning, Home, HouseHeart, Truck } from "lucide-react";
import Button from "./Button";

const iconProps = { color: "#23B5A6", width: 50, height: 50 };

const services = [
  { title: "Home Cleaning", desc: "Keep your home fresh, tidy, and inviting.", icon: <HouseHeart {...iconProps} /> },
  { title: "Office Cleaning", desc: "Create a spotless and productive workspace.", icon: <BriefcaseBusiness {...iconProps} /> },
  { title: "Deep Cleaning", desc: "We go beyond the surface to make every detail sparkle.", icon: <BrushCleaning {...iconProps} /> },
  { title: "Move-in / Move-out", desc: "Leave your old or new place immaculate.", icon: <Truck {...iconProps} /> },
  { title: "Airbnb / Vacation Rental", desc: "Fast turnovers to impress every guest.", icon: <Home {...iconProps} /> }
];

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-3xl font-bold text-center">Our Cleaning Services</h2>
      <p className="text-center text-slate-600 mt-2">Services tailored to homes, businesses, and rentals.</p>
      <div className="flex center flex-col items-center mt-6 max-w-5xl mx-auto px-4 gap-11">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border rounded-lg p-6 bg-white shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-lightbg rounded-md flex items-center justify-center mb-4">{s.icon || "🧼"}</div>
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <Button>
          Explore All Services
        </Button>
      </div>
    </section>
  );
}