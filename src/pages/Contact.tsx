import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/GoogleMap";
import Reviews from "../components/Reviews";
import CTASection from "../components/CTASection";

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("contact.pageTitle");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("contact.metaDescription"));
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-black">
      {/* Contact Section */}
      <ContactSection />

      {/* Google Map */}
      <GoogleMap />

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default Contact;
