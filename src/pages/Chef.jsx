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
      "worksFor": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/chef#webpage",
      "url": "https://www.firdausawadhikitchen.com/chef",
      "name": "Meet the Chef | Firdaus Awadhi Kitchen",
      "description": "Meet Chef Asma Alvi, the founder and head chef of Firdaus Awadhi Kitchen in Lucknow. Born and raised in the heart of the City of Nawabs, Chef Asma brings a deep respect for Awadhi culinary heritage, drawing inspiration from royal kitchens, age-old dum techniques, and family recipes passed down through generations. Her approach blends authenticity with thoughtful reinvention, focusing on slow-cooked biryanis, traditional kebabs, rich Mughlai gravies, and seasonal Awadhi specialties. Through Firdaus Awadhi Kitchen, she is committed to preserving the cultural legacy of Lucknowi cuisine while making it accessible to modern diners, bulk orders, and catering across Lucknow and Gomti Nagar.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/chef#chef-asma"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen",
      "keywords": [
        "Awadhi Chef",
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
      "servesCuisine": [
        "Awadhi",
        "North Indian",
        "Mughlai"
      ],
      "telephone": "+91-7311109091",
      "email": "firdausawadhikitchen@gmail.com",
      "priceRange": "INR 200–600",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-10, Gomti Nagar Road, Opposite Dayal Gateway, Kisan Bazar",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Sunday",
            "Monday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "12:30",
          "closes": "22:30"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/firdausawadhikitchen/",
        "https://www.facebook.com/firdausawadhkitchen/",
        "https://restaurant-guru.in/Firdaus-Awadhi-Kitchen-Lucknow",
        "https://www.zomato.com/lucknow/firdaus-awadhi-kitchen-gomti-nagar"
      ],
      "hasMenu": "https://www.firdausawadhikitchen.com/menu#menu"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/#homepage",
      "url": "https://www.firdausawadhikitchen.com/",
      "name": "Firdaus Awadhi Kitchen | Heritage Awadhi Cuisine",
      "description": "Home page of Firdaus Awadhi Kitchen – heritage Awadhi kitchen in Lucknow with slow-fire dum biryani, kebabs and seasonal plates.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.firdausawadhikitchen.com/#website",
      "url": "https://www.firdausawadhikitchen.com/",
      "name": "Firdaus Awadhi Kitchen",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
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



const Chef = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Meet the Chef | Chef Asma Alvi"
        description="Discover the culinary journey of chef Asma Alvi, the chef behind Firdaus Awadhi Kitchen, an expert in authentic Awadhi food, Mughlai cuisine, and Lucknow’s award-winning gastronomic traditions."
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
