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
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";


const Chef = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Asma Alvi - The Chef’s Story & Culinary Philosophy"
        description="Meet Chef Asma, the heart of our New Delhi restaurant. Discover her heritage recipes, everyday rituals and the philosophy behind our refined Awadhi cuisine."
        canonical={`${SITE_URL}${pathname}`}
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
