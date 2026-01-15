import { Award, CheckCircle2, Clock, HeartHandshake, Leaf, Shield } from "lucide-react";
import { WEBSITE_COPY } from "./textContent/textContent";
import { Languages } from "@/app/contexts/models";

export const whyChooseItems = (language: Languages) => ([
    {
      icon: <Shield className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[0].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[0].desc
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[1].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[1].desc
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[2].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[2].desc
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[3].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[3].desc
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[4].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[4].desc
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[5].title,
      desc: WEBSITE_COPY[language].WHY_CHOOSE_ITEMS[5].desc
    }
]);
