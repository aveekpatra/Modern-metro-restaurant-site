import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import ImageModal from "../components/ImageModal";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  index: number;
  onClick: () => void;
}

function LazyImage({ src, alt, className, index, onClick }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(imgRef, { once: true, margin: "100px" });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={imgRef}
      className={`relative overflow-hidden bg-zinc-900 cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={
        inView ? { opacity: 1, y: isLoaded ? 0 : 50 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onClick={onClick}
    >
      {isInView && (
        <>
          <div
            className={`absolute inset-0 bg-zinc-800 animate-pulse transition-opacity duration-500 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </motion.div>
  );
}

function GalleryPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = t("gallery.title");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("gallery.title"));
    }
  }, [t]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", nameKey: "gallery.categories.all" },
    { id: "dishes", nameKey: "gallery.categories.dishes" },
    { id: "drinks", nameKey: "gallery.categories.drinks" },
    { id: "bar", nameKey: "gallery.categories.bar" },
    { id: "interior", nameKey: "gallery.categories.interior" },
    { id: "menu", nameKey: "gallery.categories.menu" },
  ];

  const allImages: GalleryImage[] = [
    // Dishes
    {
      src: "/dishes/JHK09437.jpg",
      alt: "Czech cuisine dish",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09551.jpg",
      alt: "Traditional Czech meal",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09553.jpg",
      alt: "Gourmet Czech dish",
      category: "dishes",
    },
    { src: "/dishes/JHK09557.jpg", alt: "Czech specialty", category: "dishes" },
    {
      src: "/dishes/JHK09567.jpg",
      alt: "Traditional Czech food",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09573.jpg",
      alt: "Czech culinary art",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09579.jpg",
      alt: "Czech restaurant dish",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09580.jpg",
      alt: "Traditional Czech cuisine",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09587.jpg",
      alt: "Czech gourmet meal",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09591.jpg",
      alt: "Czech specialty dish",
      category: "dishes",
    },
    {
      src: "/dishes/JHK09597.jpg",
      alt: "Traditional Czech plate",
      category: "dishes",
    },

    // Drinks
    { src: "/drinks/JHK09400.jpg", alt: "Czech beer", category: "drinks" },
    {
      src: "/drinks/JHK09504-Enhanced-NR.jpg",
      alt: "Wine selection",
      category: "drinks",
    },
    {
      src: "/drinks/JHK09509-Enhanced-NR.jpg",
      alt: "Czech beverages",
      category: "drinks",
    },
    {
      src: "/drinks/JHK09516-Enhanced-NR.jpg",
      alt: "Traditional drinks",
      category: "drinks",
    },
    {
      src: "/drinks/JHK09520-Enhanced-NR.jpg",
      alt: "Beverage presentation",
      category: "drinks",
    },
    { src: "/drinks/JHK09605.jpg", alt: "Drink service", category: "drinks" },

    // Bar
    {
      src: "/bar/JHK09445-Enhanced-NR.jpg",
      alt: "Restaurant bar area",
      category: "bar",
    },
    {
      src: "/bar/JHK09513-Enhanced-NR.jpg",
      alt: "Bar service",
      category: "bar",
    },
    { src: "/bar/JHK09542.jpg", alt: "Bar atmosphere", category: "bar" },

    // Menu
    { src: "/menu/JHK09462.jpg", alt: "Restaurant menu", category: "menu" },
    { src: "/menu/JHK09469.jpg", alt: "Menu presentation", category: "menu" },
    { src: "/menu/JHK09473.jpg", alt: "Menu design", category: "menu" },
    { src: "/menu/JHK09480.jpg", alt: "Menu layout", category: "menu" },

    // Interior/Atmosphere (main directory images)
    { src: "/JHK09343.jpg", alt: "Restaurant interior", category: "interior" },
    { src: "/JHK09345.jpg", alt: "Dining atmosphere", category: "interior" },
    { src: "/JHK09347.jpg", alt: "Restaurant ambiance", category: "interior" },
    { src: "/JHK09351.jpg", alt: "Interior design", category: "interior" },
    { src: "/JHK09361.jpg", alt: "Dining room", category: "interior" },
    { src: "/JHK09363.jpg", alt: "Restaurant setting", category: "interior" },
    { src: "/JHK09366.jpg", alt: "Interior atmosphere", category: "interior" },
    { src: "/JHK09371.jpg", alt: "Dining space", category: "interior" },
    {
      src: "/JHK09373.jpg",
      alt: "Restaurant environment",
      category: "interior",
    },
    { src: "/JHK09377.jpg", alt: "Interior view", category: "interior" },
    { src: "/JHK09378.jpg", alt: "Dining area", category: "interior" },
    { src: "/JHK09380.jpg", alt: "Restaurant interior", category: "interior" },
    { src: "/JHK09384.jpg", alt: "Atmosphere", category: "interior" },
    { src: "/JHK09387.jpg", alt: "Interior design", category: "interior" },
    { src: "/JHK09388.jpg", alt: "Restaurant space", category: "interior" },
    { src: "/JHK09391.jpg", alt: "Dining atmosphere", category: "interior" },
    { src: "/JHK09402.jpg", alt: "Interior ambiance", category: "interior" },
    {
      src: "/JHK09405-Edit.jpg",
      alt: "Restaurant setting",
      category: "interior",
    },
    {
      src: "/JHK09408-Enhanced-NR-Edit.jpg",
      alt: "Interior view",
      category: "interior",
    },
    {
      src: "/JHK09409-Enhanced-NR.jpg",
      alt: "Dining environment",
      category: "interior",
    },
    {
      src: "/JHK09411-Enhanced-NR.jpg",
      alt: "Restaurant atmosphere",
      category: "interior",
    },
    {
      src: "/JHK09415-Enhanced-NR.jpg",
      alt: "Interior space",
      category: "interior",
    },
    {
      src: "/JHK09424-Enhanced-NR.jpg",
      alt: "Dining area",
      category: "interior",
    },
    { src: "/JHK09440.jpg", alt: "Restaurant interior", category: "interior" },
    {
      src: "/JHK09444-Enhanced-NR.jpg",
      alt: "Interior design",
      category: "interior",
    },
    { src: "/JHK09447.jpg", alt: "Dining atmosphere", category: "interior" },
    { src: "/JHK09448.jpg", alt: "Restaurant setting", category: "interior" },
    {
      src: "/JHK09452-Enhanced-NR.jpg",
      alt: "Interior ambiance",
      category: "interior",
    },
    {
      src: "/JHK09458-Enhanced-NR.jpg",
      alt: "Dining space",
      category: "interior",
    },
    {
      src: "/JHK09486-Enhanced-NR.jpg",
      alt: "Restaurant environment",
      category: "interior",
    },
    { src: "/JHK09487.jpg", alt: "Interior atmosphere", category: "interior" },
    { src: "/JHK09490.jpg", alt: "Dining area", category: "interior" },
    { src: "/JHK09493.jpg", alt: "Restaurant interior", category: "interior" },
    { src: "/JHK09524.jpg", alt: "Interior view", category: "interior" },
    { src: "/JHK09525.jpg", alt: "Dining atmosphere", category: "interior" },
    { src: "/JHK09526.jpg", alt: "Restaurant space", category: "interior" },
    { src: "/JHK09528.jpg", alt: "Interior design", category: "interior" },
    { src: "/JHK09535.jpg", alt: "Dining environment", category: "interior" },
    {
      src: "/JHK09538.jpg",
      alt: "Restaurant atmosphere",
      category: "interior",
    },
  ];

  const filteredImages = allImages.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <motion.section
        className="py-16 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 mt-8">
            <motion.p
              className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {t("gallery.subtitle")}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-8 font-sans text-white tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("gallery.title")}
            </motion.h1>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 text-sm uppercase tracking-wide font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "text-white border-b-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t(category.nameKey)}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid - 3 Columns */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredImages.map((image, index) => (
              <LazyImage
                key={`${image.src}-${selectedCategory}`}
                src={image.src}
                alt={image.alt}
                className="aspect-square border-r border-b border-white/20 last:border-r-0"
                index={index}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </motion.div>

          {/* Image Count */}
          <motion.div
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block border border-white/20 rounded px-8 py-4">
              <p className="text-gray-400 text-sm font-light">
                {filteredImages.length}{" "}
                {filteredImages.length === 1 ? "image" : "images"}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        currentIndex={currentImageIndex}
        images={filteredImages}
        onClose={() => setModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default GalleryPage;
