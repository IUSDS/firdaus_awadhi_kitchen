import FirstMenuSection from "../components/Menu/firstMenuSection";
import FourthMenuSection from "../components/Menu/fourthMenuSection";
import SecondMenuSection from "../components/Menu/secondMenuSection";
import ThirdMenuSection from "../components/Menu/thirdMenuSection";
import ComingSoonSection from "../components/Menu/comingSoonSection";
import InfoSection from "../components/Menu/infoSection";
import HeroSection from "../components/Hero";
import { menuHero } from "../assets/images";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";


const Menu = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Awadhi Menu | Kebabs, Dum Biryani & Seasonal Plates"
        description="Explore kebabs, dum biryani, kormas and artisanal breads—signature Awadhi preparations with layered spices, clarified butter and slow cooking at Firdaus Awadhi Kitchen."
        canonical={`${SITE_URL}${pathname}`}
      />
      <div className="">
        <HeroSection
          image={menuHero}
          title="MENU"
          imgScale={1}
          offsetX={40}
          offsetY={-50}
        />
        <FirstMenuSection />
        <SecondMenuSection />
        <ThirdMenuSection />
        <FourthMenuSection />
        <ComingSoonSection />
        <InfoSection />
      </div>
    </>
  );
};

export default Menu;
