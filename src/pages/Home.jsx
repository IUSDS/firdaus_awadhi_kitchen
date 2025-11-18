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
      "description": "Firdaus Awadhi Kitchen is a Lucknow-based restaurant and cloud kitchen serving Awadhi heritage cuisine …",
      "keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
      "servesCuisine": ["Awadhi", "North Indian", "Mughlai"],
      "telephone": "+91-7311109091",
      "email": "firdausawadhikitchen@gmail.com",
      "priceRange": "INR 200–400",
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
    }
  ]
}


const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Firdaus Awadhi Kitchen – Authentic Awadhi & Mughlai Cuisine Inspired by Lucknow’s City of Gastronomy"
        description="Experience authentic Awadhi cuisine and Mughlai delicacies inspired by Lucknow—India’s UNESCO-recognized City of Gastronomy. Firdaus Awadhi Kitchen brings award-worthy heritage food, catering, and workshops rooted in Nawabi tradition."
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
