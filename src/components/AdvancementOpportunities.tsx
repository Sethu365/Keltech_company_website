import { motion } from "framer-motion";

export default function AdvancementOpportunities() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-16 bg-white max-w-7xl mx-auto">
      
      <motion.div
        className="w-full md:w-1/2 flex justify-center pt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="../../public/images/AdvancementOpportinities.png"
          alt="Advancement Opportunities"
          className="rounded-2xl shadow-lg w-[90%] md:w-[80%] object-cover "
        />
      </motion.div>

    
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ">
          <span className=" decoration-4 decoration-blue-600">
            Growth
          </span>{" "}
          Opportunities
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          At Keltech, your growth fuels ours. As we continue to evolve, we’re committed to creating new roles and pathways that empower our people to move forward. We believe in recognizing talent from within — giving our team members the first chance to take on new challenges and leadership opportunities. Here, ambition is rewarded, innovation is encouraged, and every milestone brings you closer to your full potential.
        </p>

        

       
      </motion.div>
    </section>
  );
}
