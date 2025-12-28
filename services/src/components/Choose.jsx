import React, {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Choose = () => {
    const sectionRef = useRef(null);
    useGSAP(() => {
    gsap.from(sectionRef.current, {
        y:60,
        opacity:0,
        ease:0.3,
        scrollTrigger:{
            trigger: sectionRef.current,
            start: "top 50%",
            end:"top 20%",
            scrub: true,
        }
    })
  },[])
  return (
    <div className="bg-linear-to-r from-blue-500 to-blue-700 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center" ref={sectionRef}>
        <h1 className="text-4xl mb-12 font-extrabold">Why Choose Us?</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="cursor-pointer bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-semibold mb-3">Fast Delivery</h2>
            <p>We value your time. Our streamlined processes ensure your project is delivered quickly without compromising on quality.</p>
          </div>

          <div className="cursor-pointer bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold mb-3">Clean UI/UX</h2>
            <p>A website isn’t just about functionality—it’s about experience. We design intuitive interfaces that your users will love.</p>
          </div>

          <div className="cursor-pointer bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold mb-3">Scalable Code</h2>
            <p>Our solutions are built to grow with your business. Clean, maintainable code means adding features later is seamless.</p>
          </div>

          <div className="cursor-pointer bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold mb-3">Ongoing Support</h2>
            <p>We don’t disappear after launch. Our team is always ready to help you with updates, improvements, or troubleshooting.</p>
          </div>

          <div className="cursor-pointer hover:scale-105 bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-3">Affordable Pricing</h2>
            <p>Top-notch quality doesn’t have to break the bank. We offer competitive pricing tailored to your needs. Partner with us and experience web development that’s fast, reliable, and built for growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
