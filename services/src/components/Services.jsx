import React, { useRef } from "react";
import img3 from "./../assets/img4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const imgRef = useRef(null);
  const imgParent = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const theme = useSelector((state) => state.theme.mode);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        scrub: true,
      },
    });

    gsap.from(imgParent.current, {
      y: 40,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgParent.current,
        start: "top 55%",
        end: "top 45%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className={`w-full py-22 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1
          ref={headingRef}
          className={`text-3xl md:text-4xl font-extrabold mb-12 text-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          What Services We Provide?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={`p-6 border-2 rounded-xl transition-all cursor-pointer ease-in-out hover:scale-105 hover:border-0 ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-blue-600"
                  : "border-gray-200 hover:bg-blue-600"
              } hover:text-white`}
            >
              <h2 className="text-xl font-bold mb-2">
                Website Development
              </h2>
              <p>
                High-performance, responsive, and scalable websites tailored to your business needs.
              </p>
            </div>

            <div
              className={`p-6 border-2 rounded-xl transition-all cursor-pointer ease-in-out hover:scale-105 hover:border-0 ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-blue-600"
                  : "border-gray-200 hover:bg-blue-600"
              } hover:text-white`}
            >
              <h2 className="text-xl font-bold mb-2">
                Mobile App Development
              </h2>
              <p>
                User-friendly mobile applications built for speed, reliability, and great user experience.
              </p>
            </div>

            <div
              className={`p-6 border-2 rounded-xl transition-all cursor-pointer ease-in-out hover:scale-105 hover:border-0 ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-blue-600"
                  : "border-gray-200 hover:bg-blue-600"
              } hover:text-white`}
            >
              <h2 className="text-xl font-bold mb-2">
                Custom IT Solutions
              </h2>
              <p>
                Tailored technical solutions designed to solve unique business challenges.
              </p>
            </div>
          </div>

          <div ref={imgParent} className="flex justify-center">
            <img
              ref={imgRef}
              src={img3}
              alt="IT Services"
              className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
