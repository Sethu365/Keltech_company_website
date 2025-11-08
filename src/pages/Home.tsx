import { Cloud, Shield, Code, Database, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section, { SectionHeader } from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { StaggerContainer, StaggerItem, FadeSlide } from '../components/Motion';
import { siteConfig } from '../lib/site';

const iconMap = {
  cloud: Cloud,
  shield: Shield,
  code: Code,
  database: Database,
  cpu: Cpu,
  zap: Zap,
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="Services built for performance"
            subtitle="End-to-end engineering solutions that scale with your ambitions"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.title}>
                <FeatureCard icon={Icon} title={service.title} description={service.description} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section background="gray">
        <FadeSlide>
          <SectionHeader
            title="Industries we transform"
            subtitle="Deep expertise across critical sectors"
          />
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card text-center group cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <div className="mt-3 mx-auto w-0 h-0.5 bg-primary group-hover:w-16 transition-all duration-300" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="Featured work"
            subtitle="Real-world impact across global enterprises"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card group overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 mb-6 rounded-lg overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const fallbacks = [
                        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
                        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
                        'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
                      ];
                      e.currentTarget.src = fallbacks[index];
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-primary font-semibold"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section background="white">
        <FadeSlide>
          <div className="card bg-gradient-to-br from-primary/5 via-white to-primary-lighter/5 border-2 border-primary/10 text-center py-16 px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to ship something extraordinary?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can accelerate your engineering goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeSlide>
      </Section>
    </main>
  );
}
