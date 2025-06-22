import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Search, Wine, ArrowUpDown } from "lucide-react";

interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

function Menu() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = t("menu.title");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("menu.metaDescription"));
    }
  }, [t]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByPrice, setSortByPrice] = useState<"none" | "asc" | "desc">(
    "none"
  );

  const categories = [
    { id: "all", nameKey: "menu.categories.all" },
    { id: "appetizers", nameKey: "menu.categories.appetizers" },
    { id: "soups", nameKey: "menu.categories.soups" },
    { id: "mains", nameKey: "menu.categories.mains" },
    { id: "desserts", nameKey: "menu.categories.desserts" },
    { id: "drinks", nameKey: "menu.categories.drinks" },
  ];

  const menuItems: MenuItem[] = [
    // Appetizers
    {
      id: "chlebicky",
      nameKey: "menu.items.chlebicky.name",
      descriptionKey: "menu.items.chlebicky.description",
      price: 150,
      category: "appetizers",
      image: "/dishes/JHK09437.jpg",
    },
    {
      id: "smazeny-syr",
      nameKey: "menu.items.smazenySyr.name",
      descriptionKey: "menu.items.smazenySyr.description",
      price: 180,
      category: "appetizers",
      image: "/dishes/JHK09551.jpg",
    },
    {
      id: "uzene-maso",
      nameKey: "menu.items.uzeneMaso.name",
      descriptionKey: "menu.items.uzeneMaso.description",
      price: 220,
      category: "appetizers",
      image: "/dishes/JHK09553.jpg",
    },

    // Soups
    {
      id: "gulasova-polevka",
      nameKey: "menu.items.gulasPolevka.name",
      descriptionKey: "menu.items.gulasPolevka.description",
      price: 120,
      category: "soups",
      image: "/dishes/JHK09557.jpg",
    },
    {
      id: "bramborova-polevka",
      nameKey: "menu.items.bramborovaPolevka.name",
      descriptionKey: "menu.items.bramborovaPolevka.description",
      price: 110,
      category: "soups",
      image: "/dishes/JHK09567.jpg",
    },
    {
      id: "cesnecka",
      nameKey: "menu.items.cesnecka.name",
      descriptionKey: "menu.items.cesnecka.description",
      price: 100,
      category: "soups",
      image: "/dishes/JHK09573.jpg",
    },

    // Main Courses
    {
      id: "svickova",
      nameKey: "menu.items.svickova.name",
      descriptionKey: "menu.items.svickova.description",
      price: 280,
      category: "mains",
      image: "/dishes/JHK09579.jpg",
      featured: true,
    },
    {
      id: "hovezi-gulas",
      nameKey: "menu.items.hoveziGulas.name",
      descriptionKey: "menu.items.hoveziGulas.description",
      price: 250,
      category: "mains",
      image: "/dishes/JHK09580.jpg",
      featured: true,
    },
    {
      id: "pecena-kachna",
      nameKey: "menu.items.pecenaKachna.name",
      descriptionKey: "menu.items.pecenaKachna.description",
      price: 320,
      category: "mains",
      image: "/dishes/JHK09587.jpg",
      featured: true,
    },
    {
      id: "rizek",
      nameKey: "menu.items.rizek.name",
      descriptionKey: "menu.items.rizek.description",
      price: 180,
      category: "mains",
      image: "/dishes/JHK09591.jpg",
    },
    {
      id: "pecene-veprove",
      nameKey: "menu.items.peceneVeprove.name",
      descriptionKey: "menu.items.peceneVeprove.description",
      price: 260,
      category: "mains",
      image: "/dishes/JHK09597.jpg",
    },

    // Desserts
    {
      id: "palacinky",
      nameKey: "menu.items.palacinky.name",
      descriptionKey: "menu.items.palacinky.description",
      price: 140,
      category: "desserts",
      image: "/dishes/JHK09437.jpg",
    },
    {
      id: "ovocne-knedliky",
      nameKey: "menu.items.ovocneKnedliky.name",
      descriptionKey: "menu.items.ovocneKnedliky.description",
      price: 160,
      category: "desserts",
      image: "/dishes/JHK09551.jpg",
    },
    {
      id: "strudl",
      nameKey: "menu.items.strudl.name",
      descriptionKey: "menu.items.strudl.description",
      price: 120,
      category: "desserts",
      image: "/dishes/JHK09553.jpg",
    },

    // Drinks
    {
      id: "pilsner-urquell",
      nameKey: "menu.items.pilsnerUrquell.name",
      descriptionKey: "menu.items.pilsnerUrquell.description",
      price: 45,
      category: "drinks",
      image: "/drinks/JHK09400.jpg",
    },
    {
      id: "moravske-vino",
      nameKey: "menu.items.moravskeVino.name",
      descriptionKey: "menu.items.moravskeVino.description",
      price: 80,
      category: "drinks",
      image: "/drinks/JHK09504-Enhanced-NR.jpg",
    },
    {
      id: "becherovka",
      nameKey: "menu.items.becherovka.name",
      descriptionKey: "menu.items.becherovka.description",
      price: 60,
      category: "drinks",
      image: "/drinks/JHK09509-Enhanced-NR.jpg",
    },
  ];

  const filteredItems = menuItems
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        t(item.nameKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(item.descriptionKey).toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortByPrice === "asc") return a.price - b.price;
      if (sortByPrice === "desc") return b.price - a.price;
      return 0;
    });

  const handlePriceSort = () => {
    if (sortByPrice === "none") setSortByPrice("asc");
    else if (sortByPrice === "asc") setSortByPrice("desc");
    else setSortByPrice("none");
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
              {t("menu.subtitle")}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-8 font-sans text-white tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("menu.title")}
            </motion.h1>

            {/* Search and Sort Controls - Metro Design */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex border border-white/20">
                {/* Search Bar */}
                <div className="relative bg-zinc-900 border-r border-white/20">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={t("menu.searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-none pl-12 pr-6 py-3 text-white placeholder-gray-400 focus:outline-none text-sm w-64"
                  />
                </div>

                {/* Price Sort Button */}
                <button
                  onClick={handlePriceSort}
                  className={`flex items-center gap-2 px-6 py-3 text-sm bg-zinc-900 transition-all duration-300 ${
                    sortByPrice !== "none"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="font-medium tracking-wide">
                    {sortByPrice === "asc" && "PRICE: LOW TO HIGH"}
                    {sortByPrice === "desc" && "PRICE: HIGH TO LOW"}
                    {sortByPrice === "none" && "SORT BY PRICE"}
                  </span>
                </button>
              </div>
            </motion.div>

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

          {/* Menu Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative bg-zinc-900 border-r border-b border-white/20 last:border-r-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg font-sans tracking-wide">
                      {t(item.nameKey)}
                    </h3>
                    <span className="text-white font-bold text-xl font-sans">
                      {item.price} Kč
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-xl">{t("menu.noResults")}</p>
            </motion.div>
          )}

          {/* Wine Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block border border-white/20 rounded px-8 py-4">
              <p className="text-gray-400 text-sm font-light flex items-center justify-center gap-2">
                <Wine className="w-4 h-4" />
                {t("menu.wineNote")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Menu;
