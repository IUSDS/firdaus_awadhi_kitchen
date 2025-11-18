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
      "@type": "Menu",
      "@id": "https://www.firdausawadhikitchen.com/menu#menu",
      "name": "Firdaus Awadhi Kitchen Menu",
      "url": "https://www.firdausawadhikitchen.com/menu",
      "description": "Menu of Kebabs, Dum Biryani, Kormas, Artisanal Breads & Seasonal Plates reflecting Awadhi cuisine.",
       "keywords": ["Awadhi Food", "Mughlai Cuisine", "Lucknow Cuisine", "City of Gastronomy", "UNESCO"],
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "@id": "https://www.firdausawadhikitchen.com/menu#kebabs",
          "name": "Kebabs",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "@id": "https://www.firdausawadhikitchen.com/menu#shami-kebab",
              "name": "Shami Kebab",
              "description": "Melt-in-the-mouth Awadhi shami kebabs, pan-seared and served with chutneys.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "InStock"
              }
            },
            {
              "@type": "MenuItem",
              "@id": "https://www.firdausawadhikitchen.com/menu#chapli-kebab",
              "name": "Chapli Kebab",
              "description": "Juicy chapli kebabs with coarse mince, whole spices and a crisp exterior.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "InStock"
              }
            }
          ]
        },
        {
          "@type": "MenuSection",
          "@id": "https://www.firdausawadhikitchen.com/menu#biryani",
          "name": "Dum Biryani",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "@id": "https://www.firdausawadhikitchen.com/menu#mutton-biryani",
              "name": "Mutton Biryani",
              "description": "Awadhi-style mutton dum biryani served with raita, salan and accompaniments.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "InStock"
              }
            }
          ]
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.firdausawadhikitchen.com/menu#webpage",
      "url": "https://www.firdausawadhikitchen.com/menu",
      "name": "Menu | Firdaus Awadhi Kitchen",
      "description": "Explore the Firdaus Awadhi Kitchen menu of kebabs, dum biryanis, kormas, curries, breads and seasonal plates.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.firdausawadhikitchen.com/#website"
      },
      "about": {
        "@id": "https://www.firdausawadhikitchen.com/menu#menu"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.firdausawadhikitchen.com/#restaurant",
      "name": "Firdaus Awadhi Kitchen"
    }
  ]
}


const Menu = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SEO
        title="Awadhi Food Menu – Royal Nawabi & Mughlai Specialties | Firdaus Awadhi Kitchen"
        description="Explore a curated menu of authentic Awadhi food and Mughlai cuisine inspired by the royal kitchens of Lucknow—India’s UNESCO City of Gastronomy. Experience kebabs, biryanis, and award-worthy classics."
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
