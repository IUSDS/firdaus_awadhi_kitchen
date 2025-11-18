import HeroSection from "../components/Hero";
import { workshopHero } from "../assets/images";
import WorkshopBannerSection from "../components/Workshop/workshopBanner";
import UpcomingWorkshopSection from "../components/Workshop/upcomingWorkshopSection";
import NewsletterSection from "../components/newsletterSection";
import WorkshopInfoSection from "../components/Workshop/workshopInfoSection";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const workshopJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationEvent",
      "@id": "https://www.firdausawadhikitchen.com/workshop#awadhi-workshops",
      "name": "Awadhi Workshops & Culinary Masterclasses",
      "description": "Hands-on sessions in dum cooking, spice tempering and kebab craft that teach the signature flavours and techniques of Firdaus Awadhi Kitchen.",
"keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
          "location": {
        "@type": "Place",
        "name": "Firdaus Awadhi Kitchen",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C-10, Gomti Nagar Road, Opposite Dayal Gateway, Kisan Bazar",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226010",
          "addressCountry": "IN"
        }
      },
      "organizer": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/workshop#webpage",
      "url": "https://www.firdausawadhikitchen.com/workshop",
      "name": "Workshops & Masterclasses | Firdaus Awadhi Kitchen",
      "description": "Awadhi cooking workshops and masterclasses hosted by Firdaus Awadhi Kitchen, covering dum techniques, kebab craft, spice tempering and seasonal menus.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/workshop#awadhi-workshops"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}


const Workshop = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Awadhi Cooking Workshops – Firdaus Awadhi Kitchen"
        description="Join hands-on Awadhi cooking workshops and learn traditional culinary techniques, recipes, and royal Nawabi flavors from expert chefs."
        canonical={`${SITE_URL}${pathname}`}
      />
      <div className="">
        <HeroSection
          image={workshopHero}
          title="WORKSHOPS"
          headingAlign="center"
          imgScale={1}
          offsetX={-20}
          offsetY={-80}
        />
        <WorkshopBannerSection />
        <UpcomingWorkshopSection />
        <WorkshopInfoSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Workshop;
