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

function App() {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <SEO canonical={canonical} />
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
