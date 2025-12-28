import React, {useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ECommerce = () => {
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
        start: "top 45%", 
        end:"top 5%",
        toggleActions: "play none none none",
        scrub:true
      },
    })}, []);
  return (
    <section ref={sectionRef}
      id="ecommerce-section"
      className="py-32 px-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-300"
    >
      <div ref={headingRef} className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          E-Commerce Solutions
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <p className="text-lg text-gray-600 leading-relaxed">
            We create powerful e-commerce platforms that drive sales and enhance
            customer experience. From product catalog design to secure payment
            integration, our solutions are built to scale with your online
            business and maximize conversions.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Online store development (Shopify, WooCommerce, custom)
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Secure payment gateway integration
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Product management & inventory system
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-900 font-bold">
                Optimized for conversions & performance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
