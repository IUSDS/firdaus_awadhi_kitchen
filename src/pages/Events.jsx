import HeroSection from "../components/Hero";
import { eventsHero } from "../assets/images";
import EventsIntroSection from "../components/Events/eventsIntro";
import EventHighlights from "../components/Events/eventsHighlights";
import HostWithUs from "../components/Events/hostWithUs";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";


const Events = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Firdaus | Private Dining & Bespoke Awadhi Experiences"
        description="Host intimate celebrations and corporate gatherings in New Delhi with curated Awadhi menus, bespoke décor and concierge-level planning at our fine dining restaurant."
        canonical={`${SITE_URL}${pathname}`}
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
