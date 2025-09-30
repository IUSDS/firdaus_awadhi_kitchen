import HeroSection from "../components/Hero";
import { workshopHero } from "../assets/images";
import WorkshopBannerSection from "../components/Workshop/workshopBanner";
import UpcomingWorkshopSection from "../components/Workshop/upcomingWorkshopSection";
import NewsletterSection from "../components/newsletterSection";
import WorkshopInfoSection from "../components/Workshop/workshopInfoSection";

const Workshop = () => {
  return (
    <div className="">
      <HeroSection
      image={workshopHero}
      title="WORKSHOPS"
      focus="center"
    />
    <WorkshopBannerSection />
    <UpcomingWorkshopSection />
    <WorkshopInfoSection />
    <NewsletterSection />
    </div>
  );
};

export default Workshop;