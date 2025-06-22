import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface Dish {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface FeaturedDishesProps {
  dishes?: Dish[];
}

function FeaturedDishes({ dishes }: FeaturedDishesProps) {
  const { t } = useTranslation();

  const defaultDishes: Dish[] = [
    {
      name: t("featuredDishes.dishes.svickova.name"),
      image: "/dishes/JHK09587.jpg",
      price: t("featuredDishes.dishes.svickova.price"),
      description: t("featuredDishes.dishes.svickova.description"),
    },
    {
      name: t("featuredDishes.dishes.gulas.name"),
      image: "/dishes/JHK09580.jpg",
      price: t("featuredDishes.dishes.gulas.price"),
      description: t("featuredDishes.dishes.gulas.description"),
    },
    {
      name: t("featuredDishes.dishes.kachna.name"),
      image: "/dishes/JHK09573.jpg",
      price: t("featuredDishes.dishes.kachna.price"),
      description: t("featuredDishes.dishes.kachna.description"),
    },
    {
      name: t("featuredDishes.dishes.rizek.name"),
      image: "/dishes/JHK09591.jpg",
      price: t("featuredDishes.dishes.rizek.price"),
      description: t("featuredDishes.dishes.rizek.description"),
    },
  ];

  const featuredDishes = dishes || defaultDishes;

  return (
    <motion.section
      className="py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <motion.p
            className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("featuredDishes.subtitle")}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white tracking-wide"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("featuredDishes.title")}
          </motion.h2>
        </div>

        {/* Metro Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/20">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={index}
              className="relative bg-zinc-900 border-r border-white/20 last:border-r-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 border-t border-white/20">
                <h3 className="text-white font-bold text-lg mb-2 font-sans tracking-wide">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed font-light">
                  {dish.description}
                </p>
                <div className="text-white font-bold text-xl font-sans">
                  {dish.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <motion.button
            className="text-white font-medium text-lg tracking-wide hover:text-gray-300 transition-colors duration-300 font-sans"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {t("featuredDishes.viewFullMenu")}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedDishes;
