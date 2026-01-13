import { Languages } from "@/app/contexts/models";
import { Award, Leaf, Shield, Users } from "lucide-react";
import { WEBSITE_COPY } from "./textContent/textContent";

export const TrustBadgesItems = (language: Languages) => ([
  {
    description: WEBSITE_COPY[language].TRUST_BADGES_DESCRIPTION_ITEMS[0],
    icon: <Shield className="w-12 h-12 text-cyan-500 mb-2" />
  },
  {
    description: WEBSITE_COPY[language].TRUST_BADGES_DESCRIPTION_ITEMS[1],
    icon: <Award className="w-12 h-12 text-cyan-500 mb-2" />
  },
  {
    description: WEBSITE_COPY[language].TRUST_BADGES_DESCRIPTION_ITEMS[2],
    icon: <Users className="w-12 h-12 text-cyan-500 mb-2" />
  },
  {
    description: WEBSITE_COPY[language].TRUST_BADGES_DESCRIPTION_ITEMS[3],
    icon: <Leaf className="w-12 h-12 text-cyan-500 mb-2" />
  }
]);
