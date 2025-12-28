import React, {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppDev = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
    //   duration: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 45%", 
        end:"top 5%",
        toggleActions: "play none none none",
        scrub:true
      },
    })});

  return (
    <section ref={sectionRef}
      id="mobile-section"
      className="py-32 px-6 bg-linear-to-r from-blue-400 to-blue-600"
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
          Mobile App Development
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Description */}
          <p className="text-lg text-gray-800 leading-relaxed">
            Our team develops cross-platform mobile apps for iOS and Android.
            We focus on intuitive design, smooth performance, and seamless user
            experience, turning your ideas into powerful mobile solutions.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                React Native / Flutter based apps
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                Smooth UI animations & transitions
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                Backend integration & API support
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white font-bold">✓</span>
              <span className="text-white font-bold">
                App store deployment & updates
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default AppDev;
