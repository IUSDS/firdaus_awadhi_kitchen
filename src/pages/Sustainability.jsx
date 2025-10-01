import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import CommitmentSection from "../components/sustainability/commitmentSection";
import IngredientsSection from "../components/sustainability/ingredientsSection";
import EcoPracticesSection from "../components/sustainability/ecoPracticesSection";
import CommunitySection from "../components/sustainability/comunitySection";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";

const Sustainability = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Sustainability - Sourcing, Seasonality & Responsible Craft"
        description="Firdaus Awadhi Kitchen champions traceable produce, whole-spice traditions and low-waste kitchens—honouring the seasons while preserving authentic Awadhi flavour."
        canonical={`${SITE_URL}${pathname}`}
      />
      <div className="">
        <HeroSection
          image={contactHero}
          title="SUSTAINABILITY"
          focus="center"
        />
        <CommitmentSection />
        <IngredientsSection />
        <EcoPracticesSection />
        <CommunitySection />
      </div>
    </>
  );
};

export default Sustainability;
