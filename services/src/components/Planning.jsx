import React,{useRef} from "react";
import img1 from "./../assets/img1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Planning = () => {
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
    <section ref={sectionRef} id="discovery-section" className="py-20 bg-linear-to-r from-gray-100 to-gray-300">
      <div ref={headingRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Discovery & Planning Phase
            </h1>

            <p className="text-gray-800 leading-relaxed mb-6">
              Every successful product starts with clarity. In this phase, we take
              time to deeply understand your business, your users, and your long-term
              vision. Instead of jumping straight into development, we focus on
              planning the right solution.
              <br />
              <br />
              We analyze your requirements, identify challenges, and define clear
              goals for the project. This helps us avoid unnecessary features,
              reduce development cost, and ensure smooth execution.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What we do in this phase:
              </h4>

              <ul className="space-y-3 text-gray-900 list-disc list-inside">
                <li>Detailed discussion about your idea, business model, and expectations</li>
                <li>Market and competitor analysis (if required)</li>
                <li>Identifying core features and future scalability needs</li>
                <li>Selecting the right technology stack for performance and growth</li>
                <li>Creating a clear roadmap, timeline, and milestones</li>
              </ul>

              <h3 className="mt-6 font-semibold text-blue-600">
                Result: A well-defined plan that saves time, money, and avoids confusion later.
              </h3>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Planning Illustration"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Planning;
