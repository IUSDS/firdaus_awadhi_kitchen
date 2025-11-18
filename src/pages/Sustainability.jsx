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
      "description": "Learn how Firdaus Awadhi Kitchen integrates sustainability into Awadhi cuisine through ethical sourcing, low-waste practices and responsible kitchen operations, inspired by Lucknow’s UNESCO City of Gastronomy legacy.",
      "inLanguage": "en-IN",
      "keywords": [
        "Awadhi Cuisine",
        "Awadhi Food",
        "Mughlai Cuisine",
        "Lucknow",
        "UNESCO City of Gastronomy",
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
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}


const Sustainability = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Sustainability at Firdaus Awadhi Kitchen | Ethical Sourcing & Responsible Awadhi Cuisine"
        description="Discover how Firdaus Awadhi Kitchen preserves Awadhi culinary heritage through ethical sourcing, low-waste kitchen practices, sustainable cooking methods, and responsible partnerships—rooted in Lucknow, a UNESCO City of Gastronomy.
-"
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
