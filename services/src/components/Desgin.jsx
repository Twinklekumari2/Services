import React, {useRef} from "react";
import img4 from "./../assets/img4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
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
        start: "top 50%", 
        toggleActions: "play none none none",
        scrub:true
      },
    })}, [])

  return (
    <section ref={sectionRef} id="design-section" className="py-20 bg-white">
      <div ref={headingRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src={img4}
              alt="Design and Development"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Design & Development Phase
            </h1>

            <p className="text-gray-800 leading-relaxed mb-6">
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

            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What we do in this phase:
              </h4>

              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Wireframing and UI/UX design based on user behavior</li>
                <li>Designing responsive layouts for all devices</li>
                <li>Frontend development using modern frameworks</li>
                <li>Backend development with secure APIs and databases</li>
                <li>Clean, maintainable, and scalable code structure</li>
                <li>Regular updates and feedback cycles</li>
              </ul>

              <h3 className="mt-6 font-semibold text-blue-600">
                Result: A fast, modern, and reliable digital product built to industry standards.
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Design;
