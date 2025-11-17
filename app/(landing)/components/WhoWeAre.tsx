import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/spray_cleaning.png"
            alt="Professional cleaner smiling"
            className="order-2 md:order-1 object-center rounded-2xl shadow-lg"
            width={600}
            height={600}
          />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold">MerySu Sparkle Cleaning</span>,
            we are committed to delivering spotless, reliable, and friendly
            cleaning services. Whether it&apos;s a home, office, or vacation rental,
            we treat every space like our own — with care, precision, and a smile.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is simple:  
            <span className="font-semibold"> to make your life easier and your spaces cleaner.</span>  
            With trained staff, eco-friendly products, and a personalized
            service approach, we ensure a sparkling experience every time.
          </p>
        </div>
      </div>
    </section>
  );
}
