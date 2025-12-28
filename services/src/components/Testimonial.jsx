import React from "react";

const Testimonial = () => {
  return (
    <section className="py-10 px-4 bg-linear-to-r from-blue-400 to-blue-600" id="testimonial-section">
      <div className="max-w-7xl mx-auto py-3">
        <h1 className="text-6xl font-extrabold text-center mb-16">
          Testimonials
        </h1>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto flex-nowrap pb-4 scrollbar-hide">
          
          {/* Card 1 */}
          <div className="min-w-87.5 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
            <h2 className="text-xl font-semibold mb-3">
              “Impressive attention to detail and clean execution.”
            </h2>
            <p className="text-gray-600 mb-4">
              Twinkle shows strong understanding of modern UI/UX principles.
              Her work is well-structured, visually clean, and thoughtfully designed.
            </p>
            <h3 className="font-semibold">
              — Senior Web Development Mentor
            </h3>
          </div>

          {/* Card 1 */}
          <div className="min-w-87.5 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
            <h2 className="text-xl font-semibold mb-3">
              “Impressive attention to detail and clean execution.”
            </h2>
            <p className="text-gray-600 mb-4">
              Twinkle shows strong understanding of modern UI/UX principles.
              Her work is well-structured, visually clean, and thoughtfully designed.
            </p>
            <h3 className="font-semibold">
              — Senior Web Development Mentor
            </h3>
          </div>

          {/* Card 1 */}
          <div className="min-w-87.5 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
            <h2 className="text-xl font-semibold mb-3">
              “Impressive attention to detail and clean execution.”
            </h2>
            <p className="text-gray-600 mb-4">
              Twinkle shows strong understanding of modern UI/UX principles.
              Her work is well-structured, visually clean, and thoughtfully designed.
            </p>
            <h3 className="font-semibold">
              — Senior Web Development Mentor
            </h3>
          </div>

          {/* Card 2 */}
          <div className="min-w-87.5 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
            <h2 className="text-xl font-semibold mb-3">
              “Reliable, responsive, and eager to learn.”
            </h2>
            <p className="text-gray-600 mb-4">
              She consistently delivers on time and is open to feedback.
              A great quality for anyone working on real-world projects.
            </p>
            <h3 className="font-semibold">
              — Project Guide
            </h3>
          </div>

          {/* Card 3 */}
          <div className="min-w-87.5 bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</h1>
            <h2 className="text-xl font-semibold mb-3">
              “Strong foundation in scalable development.”
            </h2>
            <p className="text-gray-600 mb-4">
              The code quality and structure reflect good engineering practices.
              The projects are built with future scalability in mind.
            </p>
            <h3 className="font-semibold">
              — Technical Reviewer
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
