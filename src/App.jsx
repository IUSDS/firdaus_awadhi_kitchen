import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Workshop from "./pages/Workshop";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Sustainability from "./pages/Sustainability";
import Chef from "./pages/Chef";

import { SEO } from "./seo/SEO";
import { SITE_URL } from "./seo/siteMeta";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import RamzanPopup from "./components/Popups/ramzanPopup";

function App() {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

   useEffect(() => {
    AOS.init({      // default animation duration
      easing: "ease-out-quad",
      offset: 24,           // trigger slightly before element is in view
      once: true,           // animate only once per element
    });

    // If your pages load content dynamically, refresh on route/content changes:
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <SEO
       canonical={canonical}
       includeTitle={false}
       includeDescription={false}
     />
     <RamzanPopup
      delayMs={1400}
      storageKey="firdaus_ramzan_popup_dismissed_v1"
      learnMoreTargetId="iftari-boxes"
    />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshop" element={<Workshop />} />

          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
