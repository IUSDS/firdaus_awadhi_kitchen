import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import Testimonials from "../components/testimonials";
import ContactBannerSection from "../components/ContactUS/contactBanner";
import ContactForm from "../components/ContactUS/contactForm";

const Contact = () => {
  return (
    <div className="pb-20">
      <HeroSection
      image={contactHero}
      title="CONTACT US"
      focus="center"
    />
    <ContactBannerSection />
    <ContactForm/>
    <Testimonials />
    </div>
  );
};

export default Contact;