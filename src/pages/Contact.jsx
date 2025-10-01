import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import Testimonials from "../components/testimonials";
import ContactBannerSection from "../components/ContactUS/contactBanner";
import ContactForm from "../components/ContactUS/contactForm";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";


const Contact = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Contact Us - Reservations, Enquiries & Private Dining"
        description="Reach the concierge team at Firdaus Awadhi Kitchen for reservations, bespoke menus, tasting experiences and collaboration requests."
        canonical={`${SITE_URL}${pathname}`}
      />
      <div className="pb-20">
        <HeroSection image={contactHero} title="CONTACT US" focus="center" />
        <ContactBannerSection />
        <ContactForm />
        <Testimonials />
      </div>
    </>
  );
};

export default Contact;
