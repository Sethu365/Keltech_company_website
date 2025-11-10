import { motion } from "framer-motion";
import { Mail, Phone, User, ChevronDown, Pencil } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-12 px-8 py-20 bg-white max-w-7xl mx-auto">
      
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Connect with Our Team
        </h1>
        <p className="text-gray-800 text-3xl font-semibold mb-4">
          For career-related inquiries
        </p>
        <p className="text-gray-700 text-2xl">Thank you, visit again.</p>
      </motion.div>

      
      <motion.div
        className="w-full md:w-1/2 bg-gray-50 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ask a Question</h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <User className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Phone className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>

            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Career Area
                </option>
                <option>Software Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>HR & Admin</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-gray-500" size={18} />
            </div>
          </div>

          <div className="relative">
            <textarea
              placeholder="Your Question"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <Pencil className="absolute left-3 top-3.5 text-gray-500" size={18} />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-b from-gray-900 to-black text-white text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition-colors"
          >
            Submit →
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
