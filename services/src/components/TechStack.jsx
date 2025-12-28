import React, {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGreensock,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
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
    })},[]);
  const techs = [
    { name: "React", icon: <FaReact />, color: "text-sky-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-black" },
    { name: "GSAP", icon: <SiGreensock />, color: "text-green-700" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 bg-white" id="tech-section">
      <div ref={headingRef} className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4">
          Our Tech Stack
        </h1>
        <p className="text-gray-900 max-w-2xl mx-auto mb-16">
          Built with modern, industry-proven technologies to ensure performance,
          scalability, and reliability.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 hover:scale-110 transition"
            >
              <div className={`text-6xl ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="font-semibold text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
