import React, { useRef } from "react";
import img3 from "./../assets/img4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const imgParent = useRef(null);

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
    });
    gsap.from(imgParent.current, {
        y:40,
        opacity:0,
        // duration:0.3,
        ease:"power3.out",
        scrollTrigger:{
            trigger: imgParent.current,
            start:"top 55%",
            // toggleActions: "play none none none",
            end:"top 45%",
            scrub:true
        }
    })
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-22">
      <div className="max-w-7xl mx-auto px-6">
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center"
        >
          What Services We Provide?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Services List */}
          <div className="space-y-8">
            <div className="p-6 border-2 rounded-xl hover:shadow-lg hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer ease-in-out hover:**:text-white hover:border-0 ">
              <h2 className="text-xl font-bold text-black mb-2">
                Website Development
              </h2>
              <p className="text-black">
                High-performance, responsive, and scalable websites tailored to your business needs.
              </p>
            </div>

            <div className="p-6 border-2 rounded-xl hover:shadow-lg hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer ease-in-out hover:**:text-white hover:border-0 ">
              <h2 className="text-xl font-bold text-black mb-2">
                Mobile App Development
              </h2>
              <p className="text-black">
                User-friendly mobile applications built for speed, reliability, and great user experience.
              </p>
            </div>

            <div className="p-6 border-2 rounded-xl hover:shadow-lg hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer ease-in-out hover:**:text-white hover:border-0 "
            >
              <h2 className="text-xl font-bold text-black mb-2">
                Custom IT Solutions
              </h2>
              <p className="text-black">
                Tailored technical solutions designed to solve unique business challenges.
              </p>
            </div>
          </div>

          {/* Image */}
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
