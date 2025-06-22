import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Users, Clock, MapPin, Heart } from "lucide-react";

function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Clock,
      title: "Since 1995",
      description: "Nearly 30 years of culinary excellence",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Passionate chefs and friendly staff",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Heart of the city center",
    },
    {
      icon: Heart,
      title: "Family Owned",
      description: "Traditional recipes passed down generations",
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
            {t("about.title")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-12 h-12 text-orange-600" />
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded in 1995, Adel Restaurant has been serving authentic Czech
              cuisine with a modern twist. Our family-owned establishment
              combines traditional recipes passed down through generations with
              contemporary culinary techniques, creating an unforgettable dining
              experience in the heart of Prague.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every dish tells a story of our heritage, crafted with the finest
              local ingredients and prepared with love by our team of expert
              chefs. We believe that great food brings people together, and
              that's exactly what we aim to do every single day.
            </p>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4 mx-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6 text-orange-600" />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
