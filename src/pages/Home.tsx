import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import FeaturedDishes from "../components/FeaturedDishes";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import CTASection from "../components/CTASection";
import Reviews from "../components/Reviews";
import ContactSection from "../components/ContactSection";

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("home.metaDescription"));
    }
  }, [t]);
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Dishes Section */}
      <FeaturedDishes />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <CTASection />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default Home;
