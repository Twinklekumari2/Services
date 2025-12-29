import React, { useRef } from "react";
import img4 from "./../assets/img5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const theme = useSelector((state) => state.theme.mode);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          // toggleActions: "play none none none",
          scrub:true,
        },
      });
    },
    { scope: sectionRef } 
  );

  return (
    <section
      ref={sectionRef}
      id="support-section"
      className={`py-20 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div ref={headingRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={img4}
              alt="Support and Growth"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
          <div>
            <h1
              className={`text-4xl font-extrabold mb-6
                ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              Support & Growth Phase
            </h1>

            <p
              className={`leading-relaxed mb-6
                ${theme === "dark" ? "text-gray-300" : "text-black"}`}
            >
              Launching your product is just the beginning. As your business
              grows, your product needs continuous improvements, updates, and
              reliable technical support.
              <br />
              <br />
              We stay with you even after launch to ensure long-term success.
              Whether you need new features, performance optimization, or
              technical guidance,{" "}
              <span
                className={`font-extrabold
                  ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                DevNest
              </span>{" "}
              acts as your long-term technology partner.
            </p>

            {/* CARD */}
            <div
              className={`rounded-xl shadow-md p-6 transition-colors
                ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-50 text-gray-700"
                }`}
            >
              <h4
                className={`text-lg font-bold mb-4
                  ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                What we do in this phase:
              </h4>

              <ul className="space-y-3 list-disc list-inside">
                <li>Post-launch monitoring and ongoing maintenance</li>
                <li>Bug fixes, security patches, and system updates</li>
                <li>Feature enhancements based on user feedback</li>
                <li>Performance optimization as traffic and users grow</li>
                <li>Technical consultation for scaling and future upgrades</li>
              </ul>

              <h3
                className={`mt-6 font-semibold
                  ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                Result: A future-ready product that evolves with your business.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
