import React, { useRef, useEffect } from "react";
import videoIT from "./../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        y: "20%", 
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, 
        },
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoIT}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Building Digital Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          We craft scalable websites, mobile apps, and custom IT solutions for
          modern businesses.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
          <button
            className="px-6 py-3 border cursor-pointer border-white rounded-lg hover:bg-white hover:text-black transition"
            onClick={() => navigate("/services")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
