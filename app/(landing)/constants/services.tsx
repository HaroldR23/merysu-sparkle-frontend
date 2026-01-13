import { Building2, Calendar, Drill, Home, PartyPopper, Sparkles, Truck } from "lucide-react";
import { Service } from "../types/types";
import { WEBSITE_COPY } from "./textContent/textContent";
import { Languages } from "@/app/contexts/models";

export const services = (language: Languages): Service[] => ([
    {
      icon: <Home className="w-8 h-8" />,
      title:  WEBSITE_COPY[language].SERVICES_HOME_CLEANING,
      desc: WEBSITE_COPY[language].SERVICES_HOME_CLEANING_DESC,
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING,
      desc: WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING_DESC,
      color: "from-teal-400 to-emerald-400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_DEEP_CLEANING,
      desc: WEBSITE_COPY[language].SERVICES_DEEP_CLEANING_DESC,
      color: "from-violet-400 to-purple-400"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT,
      desc: WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT_DESC,
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING,
      desc: WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING_DESC,
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <Drill className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION,
      desc: WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION_DESC,
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP,
      desc: WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP_DESC,
      color: "from-fuchsia-400 to-pink-400"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: WEBSITE_COPY[language].SERVICES_RECURRING_SERVICES,
      desc: WEBSITE_COPY[language].SERVICES_RECURRING_SERVICES_DESC,
      color: "from-cyan-400 to-teal-400"
    }
  ]);
