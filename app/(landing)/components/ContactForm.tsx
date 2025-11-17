import Button from "./Button";

export default function ContactForm() {
  return (
    <section id="contact" className="px-6">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Get in Touch
        </h2>
        <p className="text-center text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto">
          Have a question or want a free quote? Fill out the form and we’ll reply soon.
        </p>

        <form
          className="mt-10 grid gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200"
          action="https://formspree.io/f/{your_form_id}"
          method="POST"
        >
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          />

          <select
            name="service"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          >
            <option>Home Cleaning</option>
            <option>Office Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-in / Move-out</option>
            <option>Airbnb / Vacation Rental</option>
            <option>Post-Construction Cleaning</option>
            <option>Event & Party Cleanup</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition resize-none"
          ></textarea>

          <div className="flex justify-end">
            <Button>Send Message</Button>
          </div>
        </form>

        <div className="mt-10 text-center text-slate-600 leading-relaxed">
          <p>Email: hello@merysusparkle.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Hours: Mon–Sat, 8:00 AM – 6:00 PM</p>
        </div>
      </div>
    </section>
  );
}
