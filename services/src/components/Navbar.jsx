import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import devnest from './../assets/devnest.png'

const menuData = {
  Home: {
    info: [
      "What is Rabbit?",
      "Rabbit Breeds",
      "Average Lifespan",
      "Male vs Female",
      "Indoor vs Outdoor",
      "Myths vs Facts",
    ],
    route: "/",
  },
  Services: {
    info: [
      "Digestive Diseases",
      "Skin Diseases",
      "Dental Problems",
      "Eye & Ear Diseases",
      "Viral Diseases",
      "Parasites",
    ],
    route: "/services",
  },
  Process: {
    info: ["Not Eating", "Loose Stool", "Head Tilt", "Fur Loss", "Sneezing"],
    route: "/process",
  },
  About: {
    info: [
      "Daily Diet",
      "Safe Foods",
      "Dangerous Foods",
      "Hay Importance",
      "Water Intake",
      "Baby Rabbit Diet",
      "Sick Rabbit Diet",
    ],
    route: "/about-us",
  },
  Contact: {
    info: [
      "Housing",
      "Cleaning Routine",
      "Exercise Time",
      "Sleep Cycle",
      "Bonding & Handling",
      "Seasonal Care",
    ],
    route: "/contact-us",
  },
  CaseStudio: {
    info: ["When to Visit Vet", "First Aid", "Emergency Signs"],
    route: "/case-studio",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        > 
          <img src={devnest} alt="" className="w-16 h-12"/>
          <span className="text-2xl font-extrabold tracking-widest bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            DevNest
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-3 font-semibold">
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => navigate(menuData[menu].route)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 text-black hover:bg-green-50 hover:text-blue-600 ${
                    location.pathname === menuData[menu].route
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-black/1000 hover:bg-green-50 hover:text-blue-600"
                  }`}
              >
                {menu}
              </button>

              {/* DROPDOWN */}
              <AnimatePresence>
                {openMenu === menu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-xl p-3"
                  >
                    <ul className="space-y-1">
                      {menuData[menu].info.map((item, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-black hover:text-white transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
          <i className="ri-menu-3-line text-3xl cursor-pointer"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
