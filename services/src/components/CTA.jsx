import React from "react";

const CTA = () => {
  return (
    <section className="bg-blue-600 py-20 px-6" id="cta-section">
      <div className="max-w-6xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s Build Your Idea
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 mb-10">
          Have a concept in mind or just a rough thought?  
          We help turn ideas into modern, scalable digital products.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full hover:bg-blue-100 transition">
            Get a Free Consultation
          </button>

          <button className="border-2 border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
            Start Your Project
          </button>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-blue-200">
          Free consultation • No obligation • Quick response
        </p>
      </div>
    </section>
  );
};

export default CTA;
