import React, {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Custom = () => {
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
    })})
  return (
    <section ref={sectionRef}
      id="custom-section"
      className="py-32 px-6 bg-linear-to-r from-gray-200 via-gray-100 to-gray-50"
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
          Custom IT Services
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide tailored technical solutions to meet your unique business
            needs. Whether it’s automation, workflow management, or
            enterprise-grade applications, we create robust, scalable, and
            secure solutions designed for long-term growth.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Custom software development
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Automation & workflow solutions
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Scalable and secure architecture
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Integration with existing systems
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Custom;
