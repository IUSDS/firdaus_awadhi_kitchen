import { asmaimg,} from "../assets/images";
import CardGallerySection from "../components/Chef/cardsGallery";
import ChefHistory from "../components/Chef/chefHistory";
import ChefStorySection from "../components/Chef/chefStorySection";
import EverydayRituals from "../components/Chef/everydayRituals";
import FirdauMemorySection from "../components/Chef/firdausMemorySection";
import PhilosophySection from "../components/Chef/philosophySection";
import TimelineSection from "../components/Chef/timelineSection";
import ContactSection from "../components/contactUS";
import HeroSection from "../components/Hero";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const chefJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.firdausawadhikitchen.com/chef#chef-asma",
      "name": "Chef Asma Alvi",
      "jobTitle": "Founder & Head Chef",
      "description": "Chef Asma Alvi is the young Lucknow-born chef behind Firdaus Awadhi Kitchen, dedicated to preserving and reimagining Awadhi cuisine …",
      "keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
      "worksFor": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/chef#webpage",
      "url": "https://www.firdausawadhikitchen.com/chef",
      "name": "Meet the Chef | Firdaus Awadhi Kitchen",
      "description": "Meet Chef Asma Alvi, the founder and head chef of Firdaus Awadhi Kitchen, and discover her journey, philosophy and approach to Awadhi heritage cuisine.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#chef-asma"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}



const Chef = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Meet the Chef – Curator of Authentic Awadhi & Mughlai Cuisine | Firdaus Awadhi Kitchen"
        description="Discover the culinary journey of the chef behind Firdaus Awadhi Kitchen—an expert in authentic Awadhi food, Mughlai cuisine, and Lucknow’s award-winning gastronomic traditions."
        canonical={`${SITE_URL}${pathname}`}
         jsonLd={chefJsonLd}
      />
      <div className="">
        <HeroSection
          image={asmaimg}
          title="CHEF ASMA"
          headingAlign="left"
          imgScale={1}
          offsetX={40}
          offsetY={-50}
        />
        <ChefHistory />
        <EverydayRituals />
        <ChefStorySection />
        <FirdauMemorySection />
        <PhilosophySection />
        <TimelineSection />
        <CardGallerySection />
        <ContactSection />
      </div>
    </>
  );
};

export default Chef;
