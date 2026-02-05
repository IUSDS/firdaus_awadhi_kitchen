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
"keywords": [
        "Awadhi food",
        "Awadhi cooking workshops",
        "Awadhi cooking classes",
        "Awadhi cooking workshops near me",
        "Awadhi cooking classes near me",
        "Awadhi cooking workshops in Gomti Nagar",
        "Awadhi cooking classes in Gomti Nagar",
        "Awadhi cooking workshops in Lucknow",
        "Awadhi cooking classes in Lucknow",
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
        title="Awadhi Cooking Workshops and Masterclasses"
        description="Join Chef Asma Alvi for hands-on Awadhi cooking workshops and learn traditional culinary techniques, recipes, and royal Nawabi flavors from expert chefs."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={workshopJsonLd}
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
