import { items } from "../../constants/whyChooseItems";
import { WhyChooseItem } from "../../types/types";
import { WhyChooseCard } from "./WhyChooseCard";

export default function WhyChoose() {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Why Choose MerySu Sparkle Cleaning?
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map((i: WhyChooseItem) => (
            <WhyChooseCard key={i.title} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
