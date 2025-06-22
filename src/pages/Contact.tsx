import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";

function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+420 234 567 890",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@adelrestaurant.cz",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Wenceslas Square 1, Prague",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon-Sun: 11:00 - 23:00",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const services = [
    {
      icon: Calendar,
      title: "Reservations",
      description: "Book your table in advance",
    },
    {
      icon: MessageCircle,
      title: "Private Events",
      description: "Host your special occasions",
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
            {t("contact.title")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${item.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.info}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg cursor-pointer group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-orange-600" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>

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

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-orange-50 border border-orange-200 rounded-2xl px-8 py-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-orange-800 font-medium text-lg">
              📞 Ready to make a reservation? Call us now!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
