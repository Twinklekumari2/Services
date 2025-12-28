import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const UI = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 45%", 
        end:"top 5%",
        toggleActions: "play none none none",
        scrub:true
      },
    })},[]);
  return (
    <section ref={sectionRef}
      id="uiux-section"
      className="py-32 px-6 bg-linear-to-r from-blue-400 to-blue-600"
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          UI / UX Design
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Description */}
          <p className="text-lg text-gray-900 leading-relaxed">
            A great product is not just functional, it’s delightful to use.
            Our UI/UX design services focus on intuitive interfaces, consistent
            branding, and user-centered design. We ensure your users have a
            smooth and engaging experience across all platforms.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                Wireframing & prototyping
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                User research & persona development
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                Interactive design & animations
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                Responsive and accessible design
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default UI;
