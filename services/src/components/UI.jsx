import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const UI = () => {
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
          scrub:true,
        },
      });
    },
    { scope: sectionRef } 
  );

  return (
    <section
      ref={sectionRef}
      id="uiux-section"
      className={`py-32 px-6 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-linear-to-r from-blue-900 to-blue-950"
            : "bg-linear-to-r from-blue-400 to-blue-600"
        }`}
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">
        <h1
          className={`text-5xl font-extrabold mb-6
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          UI / UX Design
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p
            className={`text-lg leading-relaxed
              ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}
          >
            A great product is not just functional, it’s delightful to use.
            Our UI/UX design services focus on intuitive interfaces, consistent
            branding, and user-centered design. We ensure your users have a
            smooth and engaging experience across all platforms.
          </p>

          <ul className="space-y-4">
            {[
              "Wireframing & prototyping",
              "User research & persona development",
              "Interactive design & animations",
              "Responsive and accessible design",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className={`font-bold
                    ${theme === "dark" ? "text-blue-400" : "text-white"}`}
                >
                  ✓
                </span>
                <span
                  className={`font-bold
                    ${theme === "dark" ? "text-gray-200" : "text-white"}`}
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

export default UI;
