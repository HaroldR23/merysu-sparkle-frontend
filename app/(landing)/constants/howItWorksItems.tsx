import { Languages } from "@/app/contexts/models";
import { Calendar, MessageCircle, Sparkles, Star } from "lucide-react";
import { WEBSITE_COPY } from "./textContent/textContent";

export const howItWorks = (language : Languages) => ([
  {
    step: "01",
    title: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_1_TITLE,
    description: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_1_DESCRIPTION,
    icon: <MessageCircle className="w-8 h-8" />
  },
  {
    step: "02",
    title: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_2_TITLE,
    description: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_2_DESCRIPTION,
    icon: <Calendar className="w-8 h-8" />
  },
  {
    step: "03",
    title: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_3_TITLE,
    description: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_3_DESCRIPTION,
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    step: "04",
    title: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_4_TITLE,
    description: WEBSITE_COPY[language].HOW_IT_WORKS_STEP_4_DESCRIPTION,
    icon: <Star className="w-8 h-8" />
  }
]);
