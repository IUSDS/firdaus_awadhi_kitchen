import React from "react";
import { SEO } from "../seo/SEO"; // ⬅️ add
import { SITE_URL } from "../seo/siteMeta";
import IntroHome from "../components/Home/introHome";
import MeetTheChefBanner from "../components/Home/meetTheChefbanner";
import AboutSection from "../components/Home/aboutSection";
import SignatureDishes from "../components/Home/signatureDishes";
import GallerySection from "../components/Home/eventsGallery";
import QuoteBanner from "../components/Home/quotesBanner";
import SustainabilitySection from "../components/Home/sustainabilitySection";
import Testimonials from "../components/testimonials";
import NewsletterSection from "../components/newsletterSection";
import { useLocation } from "react-router-dom";


const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Heritage Awadhi Cuisine, Elevated"
        description="Firdaus Awadhi Kitchen celebrates slow-fire dum, melt-in-the-mouth kebabs and refined seasonal plates—heritage technique, balanced spice and quiet elegance in every course."
        canonical={`${SITE_URL}${pathname}`}
      />

      <div className="">
        <IntroHome />
        <MeetTheChefBanner />
        <AboutSection />
        <SignatureDishes />
        <GallerySection />
        <QuoteBanner />
        <SustainabilitySection />
        <Testimonials />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
