import HeroSection from "../components/HeroSection";
import FeaturedDishes from "../components/FeaturedDishes";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import CTASection from "../components/CTASection";
import Reviews from "../components/Reviews";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="bg-black text-white overflow-hidden font-mono">
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
