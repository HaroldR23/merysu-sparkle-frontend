import { Languages } from "@/app/contexts/models";
import { WEBSITE_COPY } from "./textContent/textContent";

export const whoWeAreItems = (language : Languages) => ([
  {
    title: WEBSITE_COPY[language].WHO_WE_ARE_TITLE_ITEMS[0],
    description: WEBSITE_COPY[language].WHO_WE_ARE_DESC_ITEMS[0],
  },
  {
    title: WEBSITE_COPY[language].WHO_WE_ARE_TITLE_ITEMS[1],
    description: WEBSITE_COPY[language].WHO_WE_ARE_DESC_ITEMS[1],
  },
  {
    title: WEBSITE_COPY[language].WHO_WE_ARE_TITLE_ITEMS[2],
    description: WEBSITE_COPY[language].WHO_WE_ARE_DESC_ITEMS[2],
  },
  {
    title: WEBSITE_COPY[language].WHO_WE_ARE_TITLE_ITEMS[3],
    description: WEBSITE_COPY[language].WHO_WE_ARE_DESC_ITEMS[3],
  }
]);
