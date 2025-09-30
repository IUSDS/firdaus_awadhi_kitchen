import { asmaimg, chefHero } from "../assets/images";
import CardGallerySection from "../components/Chef/cardsGallery";
import ChefHistory from "../components/Chef/ChefHistory";
import ChefStorySection from "../components/Chef/chefStorySection";
import EverydayRituals from "../components/Chef/everydayRituals";
import FirdauMemorySection from "../components/Chef/firdausMemorySection";
import PhilosophySection from "../components/Chef/philosophySection";
import TimelineSection from "../components/Chef/timelineSection";
import ContactSection from "../components/contactUS";
import HeroSection from "../components/Hero";

const Chef = () => {
  return (
    <div className="">
      <HeroSection
        image={asmaimg}
        title="CHEF ASMA"
        headingAlign="left"
        imgScale={1}
  offsetX={40} offsetY={-50}
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
  );
};

export default Chef;
