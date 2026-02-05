import React from "react";
import { SEO } from "../seo/SEO"; // ⬅️ add
import { SITE_URL } from "../seo/siteMeta";
import IntroHome from "../components/Home/introHome";
import MeetTheChefBanner from "../components/Home/meetTheChefbanner";
import AboutSection from "../components/Home/aboutSection";
import SignatureDishes from "../components/Home/signatureDishes";
import GallerySection from "../components/Home/eventsGallery";
import QuoteBanner from "../components/Home/quotesBanner";
import SustainabilitySection from "../components/Home/sustainabilitySection";
import Testimonials from "../components/testimonials";
import NewsletterSection from "../components/newsletterSection";
import { useLocation } from "react-router-dom";
import EntryOverlay from "../components/entryOverlay";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen",
      "url": "https://www.firdausawadhikitchen.com/",
      "description": "Firdaus Awadhi Kitchen is a Lucknow-based heritage restaurant and cloud kitchen specializing in authentic Awadhi and Mughlai cuisine. Located in Gomti Nagar, Lucknow, Firdaus Awadhi Kitchen brings the royal flavors of Lucknowi cuisine to modern diners with time-honoured recipes, slow-cooked dum biryanis, and traditional Awadhi kebabs. Known for dishes like kebabs, Awadhi biryani, Lucknowi biryani, and classic chicken korma, the kitchen follows age-old Awadhi cooking techniques rooted in the culinary traditions of the UNESCO City of Gastronomy. Firdaus Awadhi Kitchen serves both regular and bulk food orders, offering Awadhi catering and Mughlai catering services across Lucknow and Gomti Nagar. Whether you are looking for the best Awadhi restaurant in Lucknow, an authentic Mughlai restaurant in Gomti Nagar, or premium bulk biryani and kebab orders for events, Firdaus Awadhi Kitchen delivers a refined yet soulful Awadhi dining experience.",
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
      "servesCuisine": ["Awadhi", "North Indian", "Mughlai"],
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
      },
       {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen",
      "sameAs": [
        "https://www.instagram.com/firdausawadhikitchen/",
        "https://www.facebook.com/firdausawadhkitchen/",
        "https://restaurant-guru.in/Firdaus-Awadhi-Kitchen-Lucknow",
        "https://www.zomato.com/lucknow/firdaus-awadhi-kitchen-gomti-nagar",
        "https://www.linkedin.com/company/firdaus-awadhi-kitchen"
      ]
    }
  ]
}


const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Best Awadhi & Mughlai Cuisine in Gomti Nagar, Lucknow"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow, the UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
        canonical={`${SITE_URL}${pathname}`}
        jsonLd={homeJsonLd}
      />

      <div className="">
        <EntryOverlay
          text="FIRDAUS"
          heroSelector="#introTitle"
          coverNavbar={true}
          hold={220}
          oncePerSession={false} // ✅ prevents replay when navigating back to Home in same tab
        />

        <IntroHome />
        <MeetTheChefBanner />
        <AboutSection />
        <SignatureDishes />
        <GallerySection />
        <QuoteBanner />
        <SustainabilitySection />
        <Testimonials />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
