import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cloud, 
  Users, 
  Wrench, 
  Database, 
  Cpu, 
  Briefcase, 
  LineChart,
  Shield,
  Zap,
  Globe,
  Target
} from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

const Services: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Technology Consulting',
      description: 'Expert guidance for digital transformation, architecture design, and strategic technology planning to accelerate your business outcomes.',
      icon: Target,
      features: ['Digital Strategy', 'Architecture Design', 'Tech Advisory', 'Innovation Planning']
    },
    {
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT support, custom software development, infrastructure management, and cloud solutions tailored to your needs.',
      icon: Code2,
      features: ['Custom Software', 'IT Support', 'System Integration', 'Cloud Migration']
    },
    {
      title: 'Talent Acquisition & Staffing',
      description: 'Identifying the right talent fit for your organization with competitive advantages through market research and talent mapping.',
      icon: Users,
      features: ['Talent Intelligence', 'Executive Search', 'RPO Services', 'Contract Staffing']
    },
    {
      title: 'Product Engineering',
      description: 'End-to-end product development from conceptualization to deployment, including architecture, design, testing, and ongoing support.',
      icon: Wrench,
      features: ['Product Design', 'Development', 'Quality Testing', 'Tech Support']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Building scalable cloud architectures, managing infrastructure, and ensuring seamless migration to modern cloud platforms.',
      icon: Cloud,
      features: ['Cloud Architecture', 'DevOps', 'Infrastructure Management', 'Security']
    },
    {
      title: 'Data & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, business intelligence, and data engineering solutions.',
      icon: Database,
      features: ['Data Engineering', 'BI Solutions', 'Big Data', 'Analytics']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Leverage cutting-edge artificial intelligence and machine learning technologies to drive innovation and automation.',
      icon: Cpu,
      features: ['AI Solutions', 'ML Models', 'Computer Vision', 'NLP']
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'Data-backed human approach to deliver exceptional recruitment results with cost and time efficiency for your organization.',
      icon: Briefcase,
      features: ['Full Cycle RPO', 'Talent Mapping', 'Employer Branding', 'Compliance']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business operations with digital solutions, automation, and innovative technologies for competitive advantage.',
      icon: Zap,
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation']
    },
    {
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with comprehensive security solutions, risk assessment, and compliance management.',
      icon: Shield,
      features: ['Security Audit', 'Threat Detection', 'Compliance', 'Risk Management']
    },
    {
      title: 'Global PEO Services',
      description: 'Building remote talent pool with all legal compliances and people processes, enabling global workforce management.',
      icon: Globe,
      features: ['Global Payroll', 'Compliance', 'HR Management', 'Benefits Admin']
    },
    {
      title: 'Business Consulting',
      description: 'Strategic business consulting to optimize operations, improve efficiency, and drive measurable growth for your organization.',
      icon: LineChart,
      features: ['Strategy Planning', 'Process Optimization', 'Market Analysis', 'Growth Advisory']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-blue-50 max-w-3xl mx-auto">
              We transform your vision into reality with world-class technology services, 
              expert consulting, and dedicated staffing solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600">
              We serve clients across diverse industries with specialized knowledge and tailored solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              { name: 'Automotive Tech', keywords: 'ADAS, E-Mobility, Computer Vision' },
              { name: 'Healthcare & Pharma', keywords: 'Medical Devices, Lifesciences' },
              { name: 'BFSI', keywords: 'Banking, Finance, Insurance' },
              { name: 'Semiconductor', keywords: '5G, Chip Design, AI' },
              { name: 'Hi-Tech Product', keywords: 'IoT, Big Data, Cloud' },
              { name: 'E-Commerce', keywords: 'Digital Commerce, Retail' },
              { name: 'Manufacturing', keywords: 'Industrial IoT, Automation' },
              { name: 'Startups', keywords: 'SaaS, Platform Engineering' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h4 className="font-bold text-gray-800 mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600">{industry.keywords}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Partner with us to leverage world-class technology services and accelerate your digital journey
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
