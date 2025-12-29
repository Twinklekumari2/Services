import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const ECommerce = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const theme = useSelector((state) => state.theme.mode);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none none",
          scrub:true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="ecommerce-section"
      className={`py-32 px-6 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-linear-to-r from-gray-900 via-gray-800 to-gray-700"
            : "bg-linear-to-r from-gray-50 via-gray-100 to-gray-300"
        }`}
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl font-extrabold mb-6
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          E-Commerce Solutions
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <p
            className={`text-lg leading-relaxed
              ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            We create powerful e-commerce platforms that drive sales and enhance
            customer experience. From product catalog design to secure payment
            integration, our solutions are built to scale with your online
            business and maximize conversions.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {[
              "Online store development (Shopify, WooCommerce, custom)",
              "Secure payment gateway integration",
              "Product management & inventory system",
              "Optimized for conversions & performance",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className={`font-bold
                    ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                >
                  ✓
                </span>
                <span
                  className={`font-bold
                    ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
