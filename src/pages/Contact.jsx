import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import Testimonials from "../components/testimonials";
import ContactBannerSection from "../components/ContactUS/contactBanner";
import ContactForm from "../components/ContactUS/contactForm";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.firdausawadhikitchen.com/contact#webpage",
      "url": "https://www.firdausawadhikitchen.com/contact",
      "name": "Contact Us | Firdaus Awadhi Kitchen",
      "description": "Contact Firdaus Awadhi Kitchen in Lucknow for orders, bulk catering, events and workshop enquiries by phone, email or contact form.",
 "keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}


const Contact = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Contact Firdaus Awadhi Kitchen – Authentic Awadhi Cuisine Catering & Workshops"
        description="Get in touch for catering, events, workshops, and enquiries related to authentic Awadhi and Mughlai cuisine inspired by Lucknow’s gastronomic heritage."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={contactJsonLd}
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
