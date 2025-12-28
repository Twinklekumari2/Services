import React, { useRef } from "react";
import img1 from "./../assets/img1.jpg";
import img4 from "./../assets/img4.jpg";
import img2 from "./../assets/img2.jpg";
import img5 from "./../assets/img5.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Work = () => {
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

  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
        y:40,
        opacity:0,
        ease:0.3,
        scrollTrigger:{
            trigger: sectionRef.current,
            start: "top 50%",
            end:"top 45%",
            scrub: true,
        }
    })
  },[])

  return (
    <section className="py-28 px-4 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold font-poppins">How It Works?</h1>
        <p className="mt-3 text-black max-w-2xl mx-auto mb-8">
          We make sure you feel confident and informed every step of the way.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-blue-300 hover:scale-105 hover:bg-blue-600 hover:**:text-white  transition-all ease-in-out cursor-pointer"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-24 h-24 mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
            <p className="text-gray-800">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;