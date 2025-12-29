import React, { useRef } from "react";
import img4 from "./../assets/img4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const theme = useSelector((state) => state.theme.mode);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        // duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          wnd: "top 5%",
          scrub:true,
          // toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="design-section"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div ref={headingRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src={img4}
              alt="Design and Development"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h1
              className={`text-4xl font-extrabold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Design & Development Phase
            </h1>

            <p
              className={`leading-relaxed mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Once the planning is finalized, we transform your idea into a real
              product. Our design and development process focuses on creating
              clean, user-friendly interfaces combined with powerful, scalable
              backend systems.
              <br />
              <br />
              We believe good design is not just about looks — it’s about
              usability, accessibility, and performance. Every screen and
              feature is crafted to deliver a smooth user experience.
            </p>

            <div
              className={`rounded-xl shadow-md p-6 transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-50 text-gray-700"
              }`}
            >
              <h4
                className={`text-lg font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                What we do in this phase:
              </h4>

              <ul className="space-y-3 list-disc list-inside">
                <li>Wireframing and UI/UX design based on user behavior</li>
                <li>Designing responsive layouts for all devices</li>
                <li>Frontend development using modern frameworks</li>
                <li>Backend development with secure APIs and databases</li>
                <li>Clean, maintainable, and scalable code structure</li>
                <li>Regular updates and feedback cycles</li>
              </ul>

              <h3
                className={`mt-6 font-semibold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Result: A fast, modern, and reliable digital product built to
                industry standards.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
