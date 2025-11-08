import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card group"
    >
      <div className="mb-4 w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300">
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-4 w-0 h-0.5 bg-primary group-hover:w-12 transition-all duration-300" />
    </motion.div>
  );
}
