import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionHeader } from '../components/Section';
import { StaggerContainer, StaggerItem, FadeSlide } from '../components/Motion';
import { siteConfig } from '../lib/site';

export default function Industries() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <FadeSlide>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Industries We Transform
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering innovation across sectors with engineering precision, scalable tech, and human-centered design.
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* Overview Section */}
      <Section background="white">
        <FadeSlide>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engineering Solutions Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              From healthcare to fintech and beyond — we help organizations build resilient systems, seamless digital experiences, and future-proof technology.
            </p>
          </div>
        </FadeSlide>
      </Section>

      {/* Industries Grid */}
      <Section background="gray">
        <FadeSlide>
          <SectionHeader
            title="Our Industry Expertise"
            subtitle="Tailored solutions for mission-critical sectors"
          />
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="card text-center py-6 px-4 group cursor-pointer"
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

      {/* Value Proposition */}
      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="Why Leading Companies Trust Us"
            subtitle="Solving complex industry problems with precision"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Industry-Specific Expertise', desc: 'Teams with domain knowledge and real-world implementation experience.' },
            { title: 'Scalable Architecture', desc: 'Solutions designed to scale with your users, data, and revenue.' },
            { title: 'Security & Compliance', desc: 'We ensure compliance with global standards and data protection regulations.' },
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="card p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Success Stories */}
      <Section background="gray">
        <FadeSlide>
          <SectionHeader
            title="Success Stories"
            subtitle="Real impact, trusted by global enterprises"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.slice(0, 3).map((project, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -4 }} className="card overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mt-4 mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section background="white">
        <FadeSlide>
          <div className="card bg-gradient-to-br from-primary/5 via-white to-primary-light/5 border-2 border-primary/10 text-center py-16 px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Want to innovate in your industry?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let’s explore how our expertise can power your next big move.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeSlide>
      </Section>
    </main>
  );
}
