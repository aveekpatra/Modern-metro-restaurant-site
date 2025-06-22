import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n"; // Initialize i18n
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LanguageRouter from "./components/LanguageRouter";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <LanguageRouter>
        <div className="min-h-screen bg-black">
          <Navigation />
          <main className="pt-20">
            <Routes>
              {/* Czech routes (default) */}
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />

              {/* English routes */}
              <Route path="/en" element={<Home />} />
              <Route path="/en/" element={<Home />} />
              <Route path="/en/menu" element={<Menu />} />
              <Route path="/en/gallery" element={<Gallery />} />
              <Route path="/en/contact" element={<Contact />} />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageRouter>
    </Router>
  );
}

// 404 Not Found component
function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("common.notFound")}</h1>
      <p className="text-lg text-gray-600">{t("common.notFoundMessage")}</p>
    </div>
  );
}

export default App;
