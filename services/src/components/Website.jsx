import React, {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Website = () => {
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
        toggleActions: "play none none none",
        scrub:true
      },
    }
    )})
  return (
    <section ref={sectionRef}
      id="website-section"
      className="py-32 px-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-300"
    >
      <div className="max-w-6xl mx-auto" ref={headingRef}>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
          Website Development
        </h1>

        {/* Content Wrapper */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Description */}
          <p className="text-lg text-gray-800 leading-relaxed">
            We build responsive, high-performance websites that represent your
            brand perfectly. From landing pages to full-scale web applications,
            we ensure clean UI/UX, SEO-friendly structure, and fast load times.
            Our websites are scalable and maintainable, giving your business
            room to grow.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Custom website design & development
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Mobile-friendly, responsive layouts
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                SEO optimization & performance tuning
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                CMS integration (WordPress, Strapi, etc.)
              </span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Website;
