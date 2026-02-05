import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import CommitmentSection from "../components/sustainability/commitmentSection";
import IngredientsSection from "../components/sustainability/ingredientsSection";
import EcoPracticesSection from "../components/sustainability/ecoPracticesSection";
import CommunitySection from "../components/sustainability/comunitySection";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const sustainabilityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/sustainability#webpage",
      "url": "https://www.firdausawadhikitchen.com/sustainability",
      "name": "Sustainability | Firdaus Awadhi Kitchen",
      "description": "Learn how Firdaus Awadhi Kitchen integrates sustainability into Awadhi cuisine through ethical sourcing, low-waste practices and responsible kitchen operations, inspired by UNESCO City of Gastronomy’s legacy.",
      "inLanguage": "en-IN",
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
        "Biryani bulk order Gomti Nagar",
        "Sustainable Dining",
        "Ethical Sourcing"
      ],
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
      "url": "https://www.facebook.com/firdausawdhkitchen/",
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


const Sustainability = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Sustainable Awadhi Cuisine in Lucknow | Ethical & Low-Waste Cooking
"
        description="Discover how Firdaus Awadhi Kitchen preserves Awadhi culinary heritage through ethical sourcing, low-waste kitchen practices, sustainable cooking methods, and responsible partnerships, rooted in Lucknow, a UNESCO City of Gastronomy."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={sustainabilityJsonLd}
      />
      <div className="">
        <HeroSection
          image={contactHero}
          title="SUSTAINABILITY"
          focus="center"
        />
        <CommitmentSection />
        <IngredientsSection />
        <EcoPracticesSection />
        <CommunitySection />
      </div>
    </>
  );
};

export default Sustainability;
