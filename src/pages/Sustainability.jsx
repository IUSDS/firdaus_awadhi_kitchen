import HeroSection from "../components/Hero";
import { contactHero } from "../assets/images";
import CommitmentSection from "../components/sustainability/commitmentSection";
import IngredientsSection from "../components/sustainability/ingredientsSection";
import EcoPracticesSection from "../components/sustainability/ecoPracticesSection";
import CommunitySection from "../components/sustainability/comunitySection";

const Sustainability = () => {
  return (
    <div className="">
      <HeroSection
      image={contactHero}
      title="SUSTAINABILITY"
      focus="center"
    />
    <CommitmentSection />
    <IngredientsSection />
    <EcoPracticesSection />
    <CommunitySection/>
    </div>
  );
};

export default Sustainability;