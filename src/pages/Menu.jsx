import FirstMenuSection from "../components/Menu/firstMenuSection";
import FourthMenuSection from "../components/Menu/fourthMenuSection";
import SecondMenuSection from "../components/Menu/secondMenuSection";
import ThirdMenuSection from "../components/Menu/thirdMenuSection";
import ComingSoonSection from "../components/Menu/comingSoonSection";
import InfoSection from "../components/Menu/infoSection";
import HeroSection from "../components/Hero";
import { menuHero } from "../assets/images";

const Menu = () => {
  return (
    <div className="">
      <HeroSection
      image={menuHero}
      title="MENU"
      imgScale={1}
  offsetX={40} offsetY={-50}
    />
      <FirstMenuSection />
      <SecondMenuSection />
      <ThirdMenuSection />
      <FourthMenuSection />
      <ComingSoonSection />
      <InfoSection />
    </div>
  );
};

export default Menu;