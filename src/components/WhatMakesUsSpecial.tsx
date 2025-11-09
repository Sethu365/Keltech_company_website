import React from "react";
import { motion } from "framer-motion";

const WhatMakesUsSpecial: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 bg-white max-w-7xl mx-auto">
      
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-left mb-10 lg:mb-0"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 decoration-gray-400 ">
          What Makes <span className="">Keltech</span> Special
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          <strong>Keltech</strong> We believe excellence comes through continuous learning and growth. Our environment nurtures innovation, integrity, and collaboration, empowering every individual to strengthen existing skills and develop new ones throughout their career journey.
          <br /><br />
          From day one, employees receive guided onboarding and mentorship to identify strengths and career goals. Through focused training and certifications, we empower our team to grow, excel, and achieve long-term success.
        </p>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src="../../public/images/WhyChooseUs.png"
          alt="Team collaboration"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </motion.div>

    </section>
  );
};

export default WhatMakesUsSpecial;
