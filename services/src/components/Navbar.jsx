import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import devnest from './../assets/devnest.png'

const menuData = {
  Home: {
    info: [
      { name: "What service we provide?", id: "services-section" },
      { name: "Why Choose us?", id: "choose-section" },
      { name: "How it works?", id: "work-section" },
      { name: "Testimonials", id: "testimonial-section" },
      { name: "Our Tech stack", id: "tech-section" },
      { name: "CTA", id: "cta-section" },
    ],
    route: "/",
  },
  Services: {
    info: [
      { name: "Website Development", id: "website-section" },
      { name: "Mobile App Development", id: "mobile-section" },
      { name: "Custom Technical Solutions", id: "custom-section" },
      { name: "UI/UX Design", id: "uiux-section" },
      { name: "E-commerce Solutions", id: "ecommerce-section" },
    ],
    route: "/services",
  },
  Process: {
    info: [
      { name: "Discovery & Planning", id: "discovery-section" },
      { name: "Design & Development", id: "design-section" },
      { name: "Testing & Launch", id: "testing-section" },
      { name: "Support & Growth", id: "support-section" },
    ],
    route: "/process",
  },
  About: {
    info: [
      { name: "Our Mission", id: "mission-section" },
      { name: "Our Vision", id: "vision-section" },
      { name: "Meet the Team", id: "team-section" },
      { name: "Company Values", id: "values-section" },
    ],
    route: "/about-us",
  },
  Contact: {
    info: [
      { name: "Get in Touch", id: "contact-form-section" },
      { name: "Office Location", id: "location-section" },
      { name: "Support & Queries", id: "support-section" },
    ],
    route: "/contact-us",
  },
  CaseStudio: {
    info: [
      { name: "Client Case Studies", id: "case-study-section" },
      { name: "Project Highlights", id: "project-section" },
      { name: "Success Stories", id: "success-section" },
    ],
    route: "/case-studio",
  },
};


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element){
        element.scrollIntoView({behavior: "smooth"})
    }
    setOpenMenu(false);
  }

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
                          onClick={() => scrollToSection(item.id)}
                          className="px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-black hover:text-white transition"
                        >
                          {item.name}
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
