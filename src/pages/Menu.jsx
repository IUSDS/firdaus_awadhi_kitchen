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

const menuJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/menu#webpage",
      "url": "https://www.firdausawadhikitchen.com/menu",
      "name": "Menu | Firdaus Awadhi Kitchen",
      "description": "Explore the Firdaus Awadhi Kitchen menu featuring authentic Awadhi and Mughlai cuisine from Lucknow. The menu highlights traditional kebabs, slow-cooked dum biryanis, aromatic kormas, rich curries, artisanal breads, and seasonal specialties inspired by the royal kitchens of the City of Nawabs. Crafted using time-honoured techniques and balanced spices, the offerings are available for dine-in, takeaway, bulk orders, and catering across Lucknow and Gomti Nagar.",
      "keywords": [
        "Awadhi food",
        "Awadhi restaurant",
        "Authentic Awadhi cuisine",
        "Mughlai cuisine",
        "Lucknowi cuisine",
        "Lucknow kebabs",
        "Best Awadhi kitchen near me",
        "Best Awadhi kitchen in Lucknow",
        "Best Awadhi kitchen in Gomti Nagar",
        "Mughlai restaurant in Gomti Nagar",
        "Awadhi biryani",
        "Lucknowi biryani",
        "Chicken Korma",
        "Dum biryani",
        "Galouti kebab",
        "Kakori kebab",
        "Awadhi kebabs",
        "Shami kebabs",
        "Mutton biryani",
        "Paya",
        "Khaliya Salan",
        "Chicken Korma meal box",
        "Aam ka achaar",
        "Mirch ka achaar",
        "Galouti kebab in Gomti Nagar",
        "Awadhi biryani in Lucknow",
        "Firdaus Awadhi Kitchen Gomti Nagar",
        "UNESCO City of Gastronomy",
        "Awadhi restaurant in Gomti Nagar",
        "Awadhi food in Gomti Nagar",
        "Best Mughlai restaurant in Gomti Nagar",
        "Lucknowi cuisine in Gomti Nagar",
        "Awadhi restaurant in Lucknow",
        "Authentic Awadhi cuisine in Lucknow",
        "Mughlai cuisine in Lucknow",
        "Awadhi food bulk order",
        "Awadhi catering in Lucknow",
        "Mughlai catering in Lucknow",
        "Bulk biryani order Lucknow",
        "Kebabs bulk order Lucknow",
        "Awadhi catering in Gomti Nagar",
        "Bulk food order in Gomti Nagar",
        "Biryani bulk order Gomti Nagar"
      ],
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/#restaurant"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen",
      "sameAs": [
        "https://www.instagram.com/firdausawadhikitchen/",
        "https://www.facebook.com/firdausawadhkitchen/",
        "https://restaurant-guru.in/Firdaus-Awadhi-Kitchen-Lucknow",
        "https://www.zomato.com/lucknow/firdaus-awadhi-kitchen-gomti-nagar",
        "https://www.linkedin.com/company/firdaus-awadhi-kitchen"
      ]
    }
  ]
}


const Menu = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Our Menu | Awadhi and Mughlai Specialties "
        description="Explore a curated menu of authentic Awadhi food and Mughlai cuisine inspired by the royal kitchens of Lucknow; India’s UNESCO City of Gastronomy. Experience kebabs, biryanis, and award-worthy classics."
        canonical={`${SITE_URL}${pathname}`}
         jsonLd={menuJsonLd}
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
