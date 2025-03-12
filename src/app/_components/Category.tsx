"use client";

import { useState, useEffect } from "react";

const categories = [
  {
    name: "Plant Care",
    subcategories: [
      "Watering Schedules",
      "Sunlight Requirements",
      "Soil & Fertilization",
      "Pest Control",
    ],
  },
  {
    name: "Furniture Selection",
    subcategories: [
      "Choosing the Right Sofa",
      "Wood vs. Metal Furniture",
      "Space-Saving Designs",
      "Eco-Friendly Materials",
    ],
  },
  {
    name: "Home Aesthetic Tips",
    subcategories: [
      "Mixing Plants with Interior",
      "Creating a Relaxing Space",
      "Minimalist & Modern Styles",
      "Balancing Colors & Textures",
    ],
  },
];

const CategorySidebar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`w-64 p-6 bg-white shadow-xl rounded-xl transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-28 right-7 border border-gray-200" : "relative"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-green-800">Explore Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
              className="font-semibold text-green-700 hover:text-green-500 w-full text-left flex justify-between items-center"
            >
              {category.name}
              <span>{expandedCategory === index ? "▲" : "▼"}</span>
            </button>
            {expandedCategory === index && category.subcategories.length > 0 && (
              <ul className="ml-4 mt-2 text-gray-600 transition-all">
                {category.subcategories.map((sub, i) => (
                  <li key={i} className="text-sm py-1 border-l-2 border-green-400 pl-2 hover:text-green-600">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;