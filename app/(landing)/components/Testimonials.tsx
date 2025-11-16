const quotes = [
  { name: "Sarah J.", text: "MerySu Sparkle Cleaning transformed my apartment! Everything looked and smelled amazing." },
  { name: "Daniel R.", text: "They're always on time and super friendly. Highly recommended!" }
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
        {quotes.map((q, idx) => (
          <blockquote key={idx} className="bg-lightbg p-6 rounded-lg">
            <p className="text-slate-700">“{q.text}”</p>
            <cite className="block mt-3 text-sm text-slate-500">— {q.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
