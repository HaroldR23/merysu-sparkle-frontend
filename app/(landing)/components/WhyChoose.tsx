export default function WhyChoose() {
  const items = [
    { title: "Trusted Professionals", desc: "Experienced, reliable, and background-checked cleaners." },
    { title: "Attention to Detail", desc: "We clean every corner — nothing gets overlooked." },
    { title: "Flexible Scheduling", desc: "We work around your time and needs." },
    { title: "Eco-Friendly Products", desc: "Safe for your family, pets, and the planet." },
    { title: "Satisfaction Guaranteed", desc: "Your happiness is our top priority." }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center">Why Choose MerySu Sparkle Cleaning?</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(i => (
          <div key={i.title} className="flex gap-4 items-start">
            <div className="mt-1 text-accent text-2xl">✓</div>
            <div>
              <h4 className="font-semibold">{i.title}</h4>
              <p className="text-slate-600">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
