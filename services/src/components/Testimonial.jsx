import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
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

  return (
    <section
      ref={sectionRef}
      id="testimonial-section"
      className={`py-10 px-4 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-linear-to-r from-blue-400 to-blue-600 text-white"
      }`}
    >
      <div ref={headingRef} className="max-w-7xl mx-auto py-3">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          Testimonials
        </h1>

        <div className="flex gap-6 overflow-x-auto flex-nowrap pb-4 scrollbar-hide">
          {[
            {
              title: "Impressive attention to detail and clean execution.",
              desc:
                "Twinkle shows strong understanding of modern UI/UX principles. Her work is well-structured, visually clean, and thoughtfully designed.",
              by: "— Senior Web Development Mentor",
            },
            {
              title: "Reliable, responsive, and eager to learn.",
              desc:
                "She consistently delivers on time and is open to feedback. A great quality for anyone working on real-world projects.",
              by: "— Project Guide",
            },
            {
              title: "Strong foundation in scalable development.",
              desc:
                "The code quality and structure reflect good engineering practices. The projects are built with future scalability in mind.",
              by: "— Technical Reviewer",
            },
            {
              title: "Impressive attention to detail and clean execution.",
              desc:
                "Twinkle shows strong understanding of modern UI/UX principles. Her work is well-structured, visually clean, and thoughtfully designed.",
              by: "— Senior Web Development Mentor",
            },
            {
              title: "Impressive attention to detail and clean execution.",
              desc:
                "Twinkle shows strong understanding of modern UI/UX principles. Her work is well-structured, visually clean, and thoughtfully designed.",
              by: "— Senior Web Development Mentor",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`min-w-87.5 p-6 rounded-xl shadow-lg transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-900"
              }`}
            >
              <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <p
                className={`mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
              <h3 className="font-semibold">{item.by}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
