import HeroSection from "../components/Hero";
import { eventsHero } from "../assets/images";
import EventsIntroSection from "../components/Events/eventsIntro";
import EventHighlights from "../components/Events/eventsHighlights";
import HostWithUs from "../components/Events/hostWithUs";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const eventsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": "https://www.firdausawadhikitchen.com/event#event",
      "name": "Awadhi Pop-up & Culinary Events",
      "description": "Curated events and pop-ups by Firdaus Awadhi Kitchen, featuring Awadhi small plates, festive menus and pairing experiences across Lucknow.",
"keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
      "startDate": "2025-01-01T18:00:00+05:30",
      "endDate": "2025-12-31T23:00:00+05:30",
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
      "@id": "https://www.firdausawadhikitchen.com/event#webpage",
      "url": "https://www.firdausawadhikitchen.com/event",
      "name": "Events & Pop-Ups | Firdaus Awadhi Kitchen",
      "description": "Curated events, collaborations and pop-ups by Firdaus Awadhi Kitchen, featuring Awadhi small plates, festive menus and pairing experiences across Lucknow.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/event#event"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}


const Events = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Events & Premium Catering – Awadhi & Mughlai Cuisine for Weddings & Celebrations"
        description="Host unforgettable events with premium Awadhi and Mughlai catering inspired by Lucknow’s UNESCO-recognized City of Gastronomy. Perfect for weddings, corporate events, and private gatherings."
        canonical={`${SITE_URL}${pathname}`}
         jsonLd={eventsJsonLd}
      />
      <div className="">
        <HeroSection
          image={eventsHero}
          title="EVENTS"
          focus="center"
          imgScale={1}
          offsetX={1}
          offsetY={40}
        />
        <EventsIntroSection />
        <EventHighlights />
        <HostWithUs />
      </div>
    </>
  );
};

export default Events;
