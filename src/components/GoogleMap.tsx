import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MapPin, ExternalLink } from "lucide-react";

function GoogleMap() {
  const { t } = useTranslation();

  // Restaurant coordinates: Vlašim Castle
  const restaurantLocation = {
    lat: 49.7072979,
    lng: 14.8950185,
    address: "Zámek 1, 258 01 Vlašim",
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurantLocation.lat},${restaurantLocation.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.lat},${restaurantLocation.lng}`;

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
        <div className="text-center mb-12">
          <motion.p
            className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FIND US
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white tracking-wide"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            LOCATION & DIRECTIONS
          </motion.h2>
        </div>

        {/* Map Container */}
        <motion.div
          className="border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Map Embed */}
          <div className="relative h-96 md:h-[500px] bg-zinc-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.190617733517!2d14.894931900000003!3d49.707212999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c882de0bc9ad9%3A0xebdf74f2e10b71c6!2zUmVzdGF1cmFjZSBVIEJsYW5pY2vDvWNoIHJ5dMOtxZnFrw!5e0!3m2!1sen!2scz!4v1750562486015!5m2!1sen!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Map Info Overlay */}
          <div className="bg-zinc-900 border-t border-white/20 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 border border-white/20 rounded">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {t("contact.location.title")}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t("contact.location.address")}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t("contact.location.subtitle")}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  GET DIRECTIONS
                </motion.a>
                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm uppercase tracking-wide hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MapPin className="w-4 h-4" />
                  VIEW ON GOOGLE MAPS
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Note */}
        <motion.div
          className="text-center mt-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-white/20 rounded px-8 py-4">
            <p className="text-gray-400 text-sm font-light">
              {t("contact.locationNote")}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default GoogleMap;
