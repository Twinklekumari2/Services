import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Website = () => {
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
          start: "top 50%",
          toggleActions: "play none none none",
          scrub:true
        },
      });
    },
    { scope: sectionRef } 
  );

  return (
    <section
      ref={sectionRef}
      id="website-section"
      className={`py-32 px-6 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 text-white"
            : "bg-linear-to-r from-gray-50 via-gray-100 to-gray-300 text-gray-900"
        }`}
    >
      <div className="max-w-6xl mx-auto" ref={headingRef}>
        {/* Heading */}
        <h1
          className={`text-5xl font-extrabold mb-10
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          Website Development
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <p
            className={`text-lg leading-relaxed
              ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
          >
            We build responsive, high-performance websites that represent your
            brand perfectly. From landing pages to full-scale web applications,
            we ensure clean UI/UX, SEO-friendly structure, and fast load times.
            Our websites are scalable and maintainable, giving your business
            room to grow.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {[
              "Custom website design & development",
              "Mobile-friendly, responsive layouts",
              "SEO optimization & performance tuning",
              "CMS integration (WordPress, Strapi, etc.)",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
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

export default Website;
