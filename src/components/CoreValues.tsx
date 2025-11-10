import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  HeartHandshake,
  BookOpen,
} from "lucide-react"; 

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8 " />,
      title: "Innovation",
      description: "Pushing boundaries and embracing new ideas.",
    },
    {
      icon: <Users className="w-8 h-8 " />,
      title: "Collaboration",
      description: "Working together to achieve common goals.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 " />,
      title: "Customer Focus",
      description: "Putting our customers at the center of everything we do.",
    },
    {
      icon: <BookOpen className="w-8 h-8 " />,
      title: "Continuous Learning",
      description: "Always growing and evolving our knowledge.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center max-w-7xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our <span className="text">Core Values</span>
        </h2>
        <p className="text-gray-600 text-lg">
          The principles that guide everything we do
        </p>
      </motion.div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-white p-4 rounded-full shadow mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
