import React from "react";
import IntroHome from "../components/Home/introHome";
import MeetTheChefBanner from "../components/Home/meetTheChefbanner";
import AboutSection from "../components/Home/aboutSection";
import SignatureDishes from "../components/Home/signatureDishes";
import GallerySection from "../components/Home/eventsGallery";
import QuoteBanner from "../components/Home/quotesBanner";
import SustainabilitySection from "../components/Home/sustainabilitySection";
import Testimonials from "../components/testimonials";
import NewsletterSection from "../components/newsletterSection";

const Home = () => {
  return (
    <div className="">
      <IntroHome />
      <MeetTheChefBanner />
      <AboutSection />
      <SignatureDishes />
      <GallerySection/>
      <QuoteBanner />
      <SustainabilitySection />
      <Testimonials />
      <NewsletterSection />
    </div>
  );
};

export default Home;
