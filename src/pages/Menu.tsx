import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Coffee, Salad, Fish, Cake, Wine, Pizza } from "lucide-react";

function Menu() {
  const { t } = useTranslation();

  const menuCategories = [
    {
      icon: Coffee,
      name: "Breakfast",
      count: "12 items",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Salad,
      name: "Appetizers",
      count: "8 items",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Fish,
      name: "Main Courses",
      count: "15 items",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Pizza,
      name: "Specialties",
      count: "6 items",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Cake,
      name: "Desserts",
      count: "10 items",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Wine,
      name: "Beverages",
      count: "20 items",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("menu.title")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t("menu.subtitle")}
          </motion.p>
        </motion.div>

        {/* Menu Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg cursor-pointer group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto ${category.color}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-orange-600 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {category.name}
                </motion.h3>

                <motion.p
                  className="text-gray-500 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {category.count}
                </motion.p>

                <motion.div
                  className="mt-6 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-orange-50 border border-orange-200 rounded-2xl px-8 py-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-orange-800 font-medium">
              🍽️ Detailed menu with prices coming soon! Stay tuned.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Menu;
