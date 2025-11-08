import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../lib/site';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'nav-blur border-b border-black/5 shadow-sm'
            : 'bg-white/80 backdrop-blur-md border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-primary px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-white border-b border-black/5 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {siteConfig.navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: siteConfig.navigation.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-light transition-colors"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
