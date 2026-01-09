import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhoWeAre from "./components/WhoWeAre";
import WhyChoose from "./components/WhyChoose/WhyChoose";


export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <WhoWeAre />
      </div>
      <div className="mt-16">
        <Services />
      </div>
      <div className="mt-16">
        <WhyChoose />
      </div>
      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  );
}
