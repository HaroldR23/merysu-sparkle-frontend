'use client';

import { CheckCircle2 } from "lucide-react";
import { WhyChooseItem } from "../../types/types";

export function WhyChooseCard({ item }: { item: WhyChooseItem }) {
  return (
    <div
      className="flex gap-4 items-start p-1 md:p-2 lg:p-4 rounded-xl hover:bg-slate-50 transition"
    >
      <CheckCircle2 className="text-accent w-7 h-7 shrink-0" />
      <div>
        <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
      </div>
    </div>
  );
};
