import { BriefcaseBusiness, BrushCleaning, Construction, Home, HouseHeart, PartyPopper, Truck } from "lucide-react";
import { Service } from "../types/types";
import { WEBSITE_COPY } from "./textContent/textContent";


const iconProps = { color: "#23B5A6", width: 50, height: 50 };

export const services = (language: "english" | "spanish"): Service[] => ([
  { title: WEBSITE_COPY[language].SERVICES_HOME_CLEANING, desc: WEBSITE_COPY[language].SERVICES_HOME_CLEANING_DESC, icon: <HouseHeart {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING, desc: WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING_DESC, icon: <BriefcaseBusiness {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_DEEP_CLEANING, desc: WEBSITE_COPY[language].SERVICES_DEEP_CLEANING_DESC, icon: <BrushCleaning {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT, desc: WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT_DESC, icon: <Truck {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING, desc: WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING_DESC, icon: <Home {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION, desc: WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION_DESC, icon: <Construction {...iconProps} /> },
  { title: WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP, desc: WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP_DESC, icon: <PartyPopper {...iconProps} /> },
]);
