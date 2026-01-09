import { Languages } from "@/app/contexts/models";
import { WEBSITE_COPY } from "./textContent/textContent";

export const feedbackItems = (language: Languages) => [
  {
    name: "500+",
    description: WEBSITE_COPY[language].HERO_FEEDBACK_HAPPY_CLIENTS
  },
  {
    name: "5★",
    description: WEBSITE_COPY[language].HERO_FEEDBACK_RATING
  },
  {
    name: "100%",
    description: WEBSITE_COPY[language].HERO_FEEDBACK_GUARANTEED
  }
];
