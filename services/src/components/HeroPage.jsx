import React from "react";
import img3 from "./../assets/img3.webp";

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <img
        src={img3}
        alt="DevNest Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Professional IT Services
          <br />
          Tailored for Your Business
        </h1>

        <p className="max-w-3xl text-gray-200 text-lg md:text-xl mb-8">
          We design, develop, and scale modern websites, mobile applications,
          and custom software solutions that help businesses grow faster
          and smarter.
        </p>

        <p className="text-sm md:text-base text-gray-300 mb-10">
          Website Development • Mobile Apps • UI/UX Design • Custom Software • E-Commerce
        </p>
      </div>
    </section>
  );
};

export default HeroPage;
