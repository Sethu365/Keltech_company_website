import React from "react";
import { motion } from "framer-motion";

const CareersHero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center bg-white overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full bg-gradient-to-b from-blue-50 to-white"
      >
        <img
          src="../../public/images/CareersHero.png" 
          alt="Team standing confidently"
          className="w-full h-auto max-h-[500px] object-full" 
        />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="px-4 md:px-8 lg:px-16 py-12 max-w-7xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Careers
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We are continuously expanding our team and seeking highly skilled and dedicated professionals to contribute to our organization’s success. Our company offers a strong platform for career advancement, professional development, and long-term growth within a dynamic and performance-driven environment.
        </p>
      </motion.div>
    </section>
  );
};

export default CareersHero;
