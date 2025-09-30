import HeroSection from "../components/Hero";
import { eventsHero } from "../assets/images";
import EventsIntroSection from "../components/Events/eventsIntro";
import EventHighlights from "../components/Events/eventsHighlights";
import HostWithUs from "../components/Events/hostWithUs";

const Events = () => {
  return (
    <div className="">
      <HeroSection
      image={eventsHero}
      title="EVENTS"
      focus="center"
      imgScale={1}
  offsetX={-2} offsetY={-50}
    />
    <EventsIntroSection />
    <EventHighlights />
    <HostWithUs />
    </div>
  );
};

export default Events;