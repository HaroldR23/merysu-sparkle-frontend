import { BriefcaseBusiness, BrushCleaning, Construction, Home, HouseHeart, PartyPopper, Truck } from "lucide-react";
import { Service } from "../types/types";


const iconProps = { color: "#23B5A6", width: 50, height: 50 };

export const services: Service[] = [
  { title: "Home Cleaning", desc: "Keep your home fresh, tidy, and inviting.", icon: <HouseHeart {...iconProps} /> },
  { title: "Office Cleaning", desc: "Create a spotless and productive workspace.", icon: <BriefcaseBusiness {...iconProps} /> },
  { title: "Deep Cleaning", desc: "We go beyond the surface to make every detail sparkle.", icon: <BrushCleaning {...iconProps} /> },
  { title: "Move-in / Move-out", desc: "Leave your old or new place immaculate.", icon: <Truck {...iconProps} /> },
  { title: "Airbnb / Vacation Rental", desc: "Fast turnovers to impress every guest.", icon: <Home {...iconProps} /> },
  { title: "Post-Construction Cleaning", desc: "Remove dust, debris, and residue after renovations for a flawless finish.", icon: <Construction {...iconProps} /> },
  { title: "Event Cleanup", desc: "Efficient before-and-after cleaning for parties, gatherings, and social events.", icon: <PartyPopper {...iconProps} /> },
];
