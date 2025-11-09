import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4 ">
            About Keltech
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Keltech is here to provide you with the business advantage
            you need. We empower companies by helping them utilize and integrate
            the most recent technological advances.
          </p>
        </motion.div>

        {/* Our Competency */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Competency
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-100 transition hover:cursor-pointer
">Home</li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">About</li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">Contact</li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">Careers</li>
          </ul>
        </motion.div>

        {/* Our Services */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-100 transition hover:cursor-pointer">IT Services</li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">
              Staffing Services
            </li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">
              Workforce Solutions
            </li>
            <li className="hover:text-gray-100 transition hover:cursor-pointer">
              Technology Consulting
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400"
      >
        <p>
          All Rights Reserved by{" "}
          <span className="text-white font-medium">Keltech</span>{" "}
           © 2025
        </p>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-8 bottom-8  text-white p-2 rounded-full shadow-lg transition border border-white"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
