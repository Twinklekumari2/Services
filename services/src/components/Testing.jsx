import React, {useRef} from "react";
import img5 from "./../assets/img2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testing = () => {
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
    <section ref={sectionRef} id="testing-section" className="py-20 bg-linear-to-r from-gray-100 to-gray-300">
      <div ref={headingRef}
      className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Testing & Launch Phase
            </h1>

            <p className="text-gray-800 leading-relaxed mb-6">
              Before your product goes live, we ensure everything works exactly
              as expected. This phase is critical to delivering a stable and
              high-quality solution to your users.
              <br />
              <br />
              We test functionality, performance, and compatibility to make sure
              your product performs smoothly across devices and platforms.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What we do in this phase:
              </h4>

              <ul className="space-y-3 text-gray-800 list-disc list-inside">
                <li>Functional testing of all features</li>
                <li>UI and usability testing</li>
                <li>Performance and speed optimization</li>
                <li>Cross-browser and cross-device testing</li>
                <li>Fixing bugs and refining details</li>
                <li>Final deployment and launch support</li>
              </ul>

              <h3 className="mt-6 font-semibold text-blue-600">
                Result: A production-ready product that users can trust from day one.
              </h3>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={img5}
              alt="Testing and Launch"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testing;
