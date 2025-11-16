import Button from "./Button";

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <p className="text-center text-slate-600 mt-2">Have a question or want a free quote? Fill out the form and we&apos;ll reply soon.</p>

      <form
        className="mt-6 grid gap-3"
        action="https://formspree.io/f/{your_form_id}" 
        method="POST"
      >
        <input name="name" placeholder="Name" required className="w-full rounded-md border px-4 py-2"/>
        <input type="email" name="email" placeholder="Email" required className="w-full rounded-md border px-4 py-2"/>
        <select name="service" className="w-full rounded-md border px-4 py-2">
          <option>Home Cleaning</option>
          <option>Office Cleaning</option>
          <option>Deep Cleaning</option>
          <option>Move-in / Move-out</option>
          <option>Airbnb / Vacation Rental</option>
        </select>
        <textarea name="message" placeholder="Message" rows={4} className="w-full rounded-md border px-4 py-2"></textarea>

        <div className="flex justify-end">
          <Button>
            Send Message
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center text-slate-600">
        <p>Email: hello@merysusparkle.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Hours: Mon–Sat, 8:00 AM – 6:00 PM</p>
      </div>
    </section>
  );
}
