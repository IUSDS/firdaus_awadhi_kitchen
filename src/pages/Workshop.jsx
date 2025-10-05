import HeroSection from "../components/Hero";
import { workshopHero } from "../assets/images";
import WorkshopBannerSection from "../components/Workshop/workshopBanner";
import UpcomingWorkshopSection from "../components/Workshop/upcomingWorkshopSection";
import NewsletterSection from "../components/newsletterSection";
import WorkshopInfoSection from "../components/Workshop/workshopInfoSection";
import { SEO } from "../seo/SEO";
import { SITE_URL } from "../seo/siteMeta";
import { useLocation } from "react-router-dom";


const Workshop = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Firdaus Workshops | Awadhi Workshops & Culinary Masterclasses"
        description="Hands-on sessions in dum cooking, spice tempering and kebab craft—learn the techniques that shape the signature flavours of Firdaus Awadhi Kitchen"
        canonical={`${SITE_URL}${pathname}`}
      />
      <div className="">
        <HeroSection
          image={workshopHero}
          title="WORKSHOPS"
          headingAlign="center"
          imgScale={1}
          offsetX={-20}
          offsetY={-50}
        />
        <WorkshopBannerSection />
        <UpcomingWorkshopSection />
        <WorkshopInfoSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Workshop;
