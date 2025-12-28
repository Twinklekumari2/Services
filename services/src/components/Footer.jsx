import React from "react";
import devnest from "./../assets/devnest.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={devnest} alt="DevNest Logo" className="h-10 w-auto" />

            <h2 className="text-2xl mb-1 font-extrabold tracking-widest bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              DevNest
            </h2>
          </div>
          <p className="text-white leading-relaxed">
            Building modern, scalable, and user-friendly digital solutions for
            startups and growing businesses.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li className=" cursor-pointer hover:text-blue-500 ">
              Website Development
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">
              Mobile App Development
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">
              Custom Solutions
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">UI/UX Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Work</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>
              Email:
              <span className="text-blue-400 ml-1 cursor-pointer">
                hello@devnest.com
              </span>
            </li>
            <li className="hover:text-blue-500">Location: India</li>
            <li className="flex gap-4 mt-4">
              <span className="hover:text-blue-500 cursor-pointer">LinkedIn</span>
              <span className="hover:text-blue-500 cursor-pointer">GitHub</span>
              <span className="hover:text-blue-500 cursor-pointer">Twitter</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
