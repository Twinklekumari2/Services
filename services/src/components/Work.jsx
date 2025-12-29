import React, { useRef } from "react";
import img1 from "./../assets/img1.jpg";
import img4 from "./../assets/img4.jpg";
import img2 from "./../assets/img2.jpg";
import img5 from "./../assets/img5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
        toggleActions: "play none none none",
        scrub: true,
      },
    });
  }, []);

  const steps = [
    {
      title: "Discovery & Planning",
      desc: "We start by understanding your goals, audience, and vision. This step ensures we create a solution that truly fits your needs.",
      img: img1,
    },
    {
      title: "Design & Development",
      desc: "Our team transforms ideas into a visually appealing and functional product. Clean design meets scalable code for the best user experience.",
      img: img4,
    },
    {
      title: "Testing & Launch",
      desc: "Before going live, we rigorously test every feature to ensure your website or app works flawlessly across all devices.",
      img: img2,
    },
    {
      title: "Support & Growth",
      desc: "Our partnership doesn’t end at launch. We provide ongoing support and updates, helping your product grow as your business evolves.",
      img: img5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work-section"
      className={`py-28 px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div ref={headingRef} className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold font-poppins">
          How It Works?
        </h1>
        <p
          className={`mt-3 max-w-2xl mx-auto mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          We make sure you feel confident and informed every step of the way.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all ease-in-out cursor-pointer hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-blue-600 text-white"
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
