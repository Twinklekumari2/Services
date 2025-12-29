import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

const Choose = () => {
  const sectionRef = useRef(null);
  const theme = useSelector((state) => state.theme.mode);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 60,
      opacity: 0,
      ease: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="choose-section"
      className={`py-24 px-4 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-linear-to-r from-gray-900 to-gray-800 text-white"
          : "bg-linear-to-r from-blue-500 to-blue-700 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center" ref={sectionRef}>
        <h1 className="text-4xl mb-12 font-extrabold">Why Choose Us?</h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Fast Delivery",
              text: "We value your time. Our streamlined processes ensure your project is delivered quickly without compromising on quality.",
            },
            {
              title: "Clean UI/UX",
              text: "A website isn’t just about functionality—it’s about experience. We design intuitive interfaces that your users will love.",
            },
            {
              title: "Scalable Code",
              text: "Our solutions are built to grow with your business. Clean, maintainable code means adding features later is seamless.",
            },
            {
              title: "Ongoing Support",
              text: "We don’t disappear after launch. Our team is always ready to help you with updates, improvements, or troubleshooting.",
            },
            {
              title: "Affordable Pricing",
              text: "Top-notch quality doesn’t have to break the bank. We offer competitive pricing tailored to your needs. Partner with us and experience web development that’s fast, reliable, and built for growth.",
              span: "md:col-span-2 lg:col-span-1",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer p-6 rounded-lg shadow-lg transition-all hover:scale-105 ${
                item.span ?? ""
              } ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
