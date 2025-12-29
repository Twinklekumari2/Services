import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Custom = () => {
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
          end:"top 5%",
          scrub:true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="custom-section"
      className={`py-32 px-6 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-linear-to-r from-gray-900 via-gray-800 to-gray-700"
            : "bg-linear-to-r from-gray-200 via-gray-100 to-gray-50"
        }`}
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl font-extrabold mb-10
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Custom IT Services
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <p
            className={`text-lg leading-relaxed
              ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            We provide tailored technical solutions to meet your unique business
            needs. Whether it’s automation, workflow management, or
            enterprise-grade applications, we create robust, scalable, and
            secure solutions designed for long-term growth.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {[
              "Custom software development",
              "Automation & workflow solutions",
              "Scalable and secure architecture",
              "Integration with existing systems",
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

export default Custom;
