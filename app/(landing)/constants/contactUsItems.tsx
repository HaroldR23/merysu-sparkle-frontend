import { Languages } from "@/app/contexts/models";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { WEBSITE_COPY } from "./textContent/textContent";

export const contactUsItems = (language: Languages) => ([
  {
    href: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}/?text=${encodeURIComponent(WEBSITE_COPY[language].CONTACT_WHATSAPP_MESSAGE)}`,
    cardColor: "from-green-400 to-emerald-500",
    icon: < MessageCircle className="w-8 h-8" />,
    title: "WhatsApp",
    description: WEBSITE_COPY[language].CONTACT_US_ITEMS[0]
  },
  {
    href: `tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
    cardColor: "from-cyan-400 to-blue-500",
    icon: <Phone className="w-8 h-8" />,
    title: WEBSITE_COPY[language].CONTACT_US_ITEMS_PHONE_TITLE,
    description: WEBSITE_COPY[language].CONTACT_US_ITEMS[1]
  },
  {
    href: "mailto: contact@merysu-cleaning.com",
    cardColor: "from-purple-400 to-indigo-500",
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    description: WEBSITE_COPY[language].CONTACT_US_ITEMS[2]
  }
]);
