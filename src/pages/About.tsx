// About.tsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { StaggerContainer, StaggerItem, FadeSlide } from '../components/Motion';
import { siteConfig } from '../lib/site';

export default function About() {
  // safe fallbacks if siteConfig doesn't include certain arrays
  const services = siteConfig?.services ?? [];
  const projects = siteConfig?.projects ?? [];
  const industries = siteConfig?.industries ?? [];

  return (
    <main>
      {/* Top Hero-like banner (keeps visual parity with Home's Hero) */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            We partner with companies to design and ship performant engineering
            solutions. We combine product thinking, engineering excellence and
            pragmatic processes to deliver measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              Talk to us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-lg hover:shadow-sm transition text-gray-700"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="Our story"
            subtitle="From small experiments to enterprise-grade delivery"
          />
        </FadeSlide>

        <div className="max-w-6xl mx-auto px-6 prose prose-lg text-gray-700">
          <p>
            We started as a small engineering team solving scale problems for a
            handful of startups. Over time we discovered a repeatable way to
            turn product strategy into robust, maintainable systems — and
            decided to bring those practices to larger organisations.
          </p>

          <p>
            Today we help teams accelerate delivery while keeping quality and
            reliability front-and-center. We value clarity, pragmatic trade-offs
            and partnership.
          </p>
        </div>
      </Section>

      {/* Services (re-uses service cards from Home) */}
      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="What we do"
            subtitle="Engineering services designed for scale"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.length > 0 ? (
            services.map((service) => (
              <StaggerItem key={service.title}>
                <FeatureCard
                  icon={(service.icon as any) || undefined}
                  title={service.title}
                  description={service.description}
                />
              </StaggerItem>
            ))
          ) : (
            <StaggerItem>
              <div className="card p-6 text-center">
                <p className="text-gray-600">No services configured yet.</p>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </Section>

      {/* Industries */}
      <Section background="gray">
        <FadeSlide>
          <SectionHeader
            title="Industries we work with"
            subtitle="Domain knowledge combined with engineering craft"
          />
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.length > 0 ? (
            industries.map((industry) => (
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
            ))
          ) : (
            <StaggerItem>
              <div className="card p-6 text-center">
                <p className="text-gray-600">Industries not configured.</p>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </Section>

      {/* Featured Work / Impact */}
      <Section background="white">
        <FadeSlide>
          <SectionHeader
            title="Impact & case studies"
            subtitle="How we’ve helped teams ship reliable outcomes"
          />
        </FadeSlide>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div whileHover={{ y: -4 }} className="card group overflow-hidden cursor-pointer">
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
                        (e.currentTarget as HTMLImageElement).src = fallbacks[index % fallbacks.length];
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
            ))
          ) : (
            <StaggerItem>
              <div className="card p-6 text-center">
                <p className="text-gray-600">No projects available yet.</p>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </Section>

      {/* CTA — same style as Home's CTA */}
      <Section background="white">
        <FadeSlide>
          <div className="card bg-gradient-to-br from-primary/5 via-white to-primary-lighter/5 border-2 border-primary/10 text-center py-16 px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Want to build something together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We collaborate closely with product and engineering teams to deliver
              systems that last. Reach out and let's explore fit.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeSlide>
      </Section>
    </main>
  );
}

