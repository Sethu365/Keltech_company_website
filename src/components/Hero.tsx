import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, Parallax } from './Motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Trusted by industry leaders</span>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Engineering that{' '}
                <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  ships
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Cloud-native, secure systems built for scale. We transform complex challenges into elegant solutions.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
                >
                  Get Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 group"
                >
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-6 pt-4">
                {['99.99% Uptime', 'SOC 2 Certified', '24/7 Support'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    <span className="text-sm font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          <Parallax distance={30} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="card overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50">
                <img
                  src="/images/hero.jpg"
                  alt="Engineering excellence"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 card bg-white p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">50M+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Events Processed</p>
                    <p className="text-xs text-gray-500">Daily across all systems</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 card bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900">All Systems Operational</span>
                </div>
              </motion.div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
