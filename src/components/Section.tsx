import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({ children, className = '', background = 'white' }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-20 lg:py-28 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  const alignClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
