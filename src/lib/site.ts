export const siteConfig = {
  name: 'Keltech',
  tagline: 'Engineering that ships',
  description: 'Cloud-native, secure systems built for scale',

  colors: {
    primary: '#1E40AF',
    primaryLight: '#3B82F6',
    primaryLighter: '#93C5FD',
    accent: '#1E40AF',
  },

  navigation: [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],

  services: [
    {
      icon: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable, resilient cloud architecture designed for growth',
    },
    {
      icon: 'shield',
      title: 'Security Engineering',
      description: 'Enterprise-grade security from code to deployment',
    },
    {
      icon: 'code',
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern stacks',
    },
    {
      icon: 'database',
      title: 'Data Engineering',
      description: 'Real-time pipelines and analytics infrastructure',
    },
    {
      icon: 'cpu',
      title: 'System Integration',
      description: 'Seamless connections across your technology ecosystem',
    },
    {
      icon: 'zap',
      title: 'Performance Optimization',
      description: 'Speed and efficiency at every layer of your stack',
    },
  ],

  industries: [
    { name: 'Automotive', slug: 'automotive' },
    { name: 'Healthcare', slug: 'healthcare' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Banking', slug: 'banking' },
    { name: 'Digital', slug: 'digital' },
     {
    name: "Healthcare",
    slug: "healthcare",
    image: "https://images.pexels.com/photos/532765/pexels-photo-532765.jpeg"
  },
  {
    name: "Fintech",
    slug: "fintech",
    image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg"
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    image: "https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg"
  },
  ],

  projects: [
    {
      title: 'Global Fleet Management',
      industry: 'Automotive',
      description: 'Real-time tracking system processing 50M+ events daily',
      image: '/images/project-1.jpg',
    },
    {
      title: 'Healthcare Data Platform',
      industry: 'Healthcare',
      description: 'HIPAA-compliant analytics serving 200+ hospitals',
      image: '/images/project-2.jpg',
    },
    {
      title: 'Payment Processing Engine',
      industry: 'Banking',
      description: 'Sub-100ms transaction processing at global scale',
      image: '/images/project-3.jpg',
    },
  ],
};
