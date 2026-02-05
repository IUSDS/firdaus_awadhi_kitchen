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
      "keywords": [
        "Awadhi food",
        "Awadhi restaurant",
        "Authentic Awadhi cuisine",
        "Mughlai cuisine",
        "Lucknowi cuisine",
        "Lucknow kebabs",
        "Best Awadhi kitchen near me",
        "Best Awadhi kitchen in Lucknow",
        "Best Awadhi kitchen in Gomti Nagar",
        "Mughlai restaurant in Gomti Nagar",
        "Awadhi biryani",
        "Lucknowi biryani",
        "Chicken Korma",
        "Dum biryani",
        "Galouti kebab",
        "Kakori kebab",
        "Awadhi kebabs",
        "Galouti kebab in Gomti Nagar",
        "Awadhi biryani in Lucknow",
        "Firdaus Awadhi Kitchen Gomti Nagar",
        "UNESCO City of Gastronomy",
        "Awadhi restaurant in Gomti Nagar",
        "Awadhi food in Gomti Nagar",
        "Best Mughlai restaurant in Gomti Nagar",
        "Lucknowi cuisine in Gomti Nagar",
        "Awadhi restaurant in Lucknow",
        "Authentic Awadhi cuisine in Lucknow",
        "Mughlai cuisine in Lucknow",
        "Awadhi food bulk order",
        "Awadhi catering in Lucknow",
        "Mughlai catering in Lucknow",
        "Bulk biryani order Lucknow",
        "Kebabs bulk order Lucknow",
        "Awadhi catering in Gomti Nagar",
        "Bulk food order in Gomti Nagar",
        "Biryani bulk order Gomti Nagar"
      ],
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
      "name": "Firdaus Awadhi Kitchen",
      "telephone": "+91-7311109091",
      "email": "firdausawadhikitchen@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-10, Gomti Nagar Road, Opposite Dayal Gateway, Kisan Bazar",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/firdausawadhikitchen/",
        "https://www.facebook.com/firdausawadhkitchen/",
        "https://www.linkedin.com/company/firdaus-awadhi-kitchen"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.instagram.com/firdausawadhikitchen/#profile",
      "url": "https://www.instagram.com/firdausawadhikitchen/",
      "name": "Firdaus Awadhi Kitchen on Instagram",
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.facebook.com/firdausawadhkitchen/#profile",
      "url": "https://www.facebook.com/firdausawadhkitchen/",
      "name": "Firdaus Awadhi Kitchen on Facebook",
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.linkedin.com/company/firdaus-awadhi-kitchen/#profile",
      "url": "https://www.linkedin.com/company/firdaus-awadhi-kitchen",
      "name": "Firdaus Awadhi Kitchen on LinkedIn",
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    }
  ]
}


const Contact = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Contact Us | Order Awadhi Cuisine and Mughlai Favourites"
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
