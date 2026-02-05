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
      "name": "Culinary Events and Awadhi Catering for Parties",
      "description": "Firdaus Awadhi Kitchen offers curated culinary events and Awadhi catering services across Lucknow and Gomti Nagar, bringing the richness of traditional Awadhi and Mughlai cuisine to private parties, corporate gatherings, and festive celebrations. From intimate tasting experiences to large-scale catering and bulk orders, menus feature signature kebabs, slow-cooked dum biryanis, aromatic kormas, and festive spreads prepared using time-honoured techniques inspired by the royal kitchens of Lucknow, delivering authentic flavour and refined hospitality for every occasion.",
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
        "Awadhi catering for parties",
        "Awadhi bulk orders for parties",
        "Awadhi food tasting",
        "seasonal tastings Awadhi food",
        "Awadhi masterclass"
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
      "@id": "https://www.firdausawadhikitchen.com/event#webpage",
      "url": "https://www.firdausawadhikitchen.com/event",
      "name": "Events & Catering | Firdaus Awadhi Kitchen",
      "description": "Firdaus Awadhi Kitchen offers curated culinary events and Awadhi catering services across Lucknow and Gomti Nagar, bringing the richness of traditional Awadhi and Mughlai cuisine to private parties, corporate gatherings, and festive celebrations. From intimate tasting experiences to large-scale catering and bulk orders, menus feature signature kebabs, slow-cooked dum biryanis, aromatic kormas, and festive spreads prepared using time-honoured techniques inspired by the royal kitchens of Lucknow, delivering authentic flavour and refined hospitality for every occasion.",
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
        title="Events & Premium Catering | Awadhi & Mughlai Cuisine for Celebrations"
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
