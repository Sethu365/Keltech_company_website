# Keltech - Engineering that ships

A premium, ultra-clean white-based React application built with Vite, TypeScript, TailwindCSS, and Framer Motion.

## Features

- Premium white-based UI with luxurious whitespace
- Subtle, professional animations with Framer Motion
- Fully responsive design
- Blue accent palette (#1E40AF primary, #3B82F6 → #93C5FD gradient)
- Accessibility-focused with proper ARIA attributes
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **TailwindCSS** for utility-first styling
- **Framer Motion** for animations
- **React Router DOM** for routing
- **Lucide React** for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design System

### Color Palette

- **Base**: Pure white (#FFFFFF)
- **Primary**: #1E40AF (Blue 800)
- **Primary Light**: #3B82F6 (Blue 500)
- **Primary Lighter**: #93C5FD (Blue 300)
- **Borders**: rgba(0,0,0,0.05) for hairline borders
- **Text**: Gray scale (900, 700, 600)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Line Height**: 150% for body text, 120% for headings
- **Spacing**: 8px grid system

### Components

All components follow a cardified design with:
- Rounded corners (rounded-2xl)
- Hairline borders (border-black/5)
- Soft shadows (shadow-sm → shadow-md on hover)
- Gentle elevation on hover (translateY -4px)

### Animation Rules

All animations use Framer Motion with:
- **Fade + Slide**: opacity: 0, y: 20 → opacity: 1, y: 0
- **Stagger**: 80ms delay between children
- **Hover Effects**: Lift (translateY -4px), deeper shadows
- **Parallax**: Light parallax effect on hero section
- **Duration**: 0.3-0.6s with custom easing [0.22, 1, 0.36, 1]
- **Reduced Motion**: All animations disabled when prefers-reduced-motion is set

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Fixed blur navbar with mobile menu
│   ├── Hero.tsx        # Premium hero section
│   ├── Section.tsx     # Section wrapper component
│   ├── FeatureCard.tsx # Service card component
│   ├── Logo.tsx        # Brand logo component
│   └── Motion.tsx      # Framer Motion helpers
├── pages/              # Route pages
│   ├── Home.tsx        # Fully implemented home page
│   ├── Services.tsx    # Placeholder
│   ├── Industries.tsx  # Placeholder
│   ├── Projects.tsx    # Placeholder
│   ├── Blog.tsx        # Placeholder
│   ├── About.tsx       # Placeholder
│   └── Contact.tsx     # Placeholder
├── lib/
│   └── site.ts         # Brand tokens and configuration
├── App.tsx             # Root component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and utilities
```

## Pages

### Home Page (Fully Implemented)

The home page includes:

1. **Hero Section**: Full-screen hero with animated text, CTAs, and floating badges
2. **Services Section**: 6 service cards with icons and hover animations
3. **Industries Section**: 5 industry mini-panels with accent hover effects
4. **Featured Projects Section**: 3 case study cards with image hover effects
5. **CTA Band**: Final call-to-action with gradient background

### Placeholder Pages

The following pages display "This page will be implemented by the frontend team":
- Services (`/services`)
- Industries (`/industries`)
- Projects (`/projects`)
- Blog (`/blog`)
- About (`/about`)
- Contact (`/contact`)

## Team Task Assignments

### Phase 1: Content Pages (Week 1-2)

**Developer 1: Services & Industries**
- Implement `/services` page with detailed service descriptions
- Implement `/industries` page with industry case studies
- Maintain white-theme consistency and animation patterns

**Developer 2: Projects & Blog**
- Implement `/projects` page with filterable project grid
- Implement `/blog` page with article listings
- Add pagination and filtering components

**Developer 3: About & Contact**
- Implement `/about` page with team section and company story
- Implement `/contact` page with form (design only, no backend)
- Add interactive map component

### Phase 2: Enhancements (Week 3-4)

**All Developers:**
- Add blog post detail pages
- Add project case study detail pages
- Implement search functionality (UI only)
- Add loading states and skeleton screens
- Optimize images and performance
- Cross-browser testing

### Phase 3: Polish (Week 5)

**All Developers:**
- Accessibility audit and fixes
- Mobile responsiveness review
- Animation polish and performance
- Final QA and deployment preparation

## Key Components

### Motion.tsx Utilities

- `FadeSlide`: Fade and slide animation component
- `StaggerContainer`: Container for staggered children
- `StaggerItem`: Individual staggered item
- `useParallax`: Hook for parallax scrolling effect
- `Parallax`: Parallax wrapper component

### Navbar Features

- Fixed position with blur effect
- Smooth scroll behavior
- Mobile menu with slide animation
- Active link highlighting
- CTA button

### Card Patterns

All cards follow this pattern:
```tsx
<motion.div
  whileHover={{ y: -4 }}
  className="card"
>
  {/* Content */}
</motion.div>
```

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Keyboard navigation support
- Reduced motion support via media query
- Sufficient color contrast (WCAG AA compliant)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- No backend or API integration required
- Images load from Pexels CDN as fallback
- All forms are design-only (no submission logic)
- Respects system motion preferences

## License

Proprietary - Keltech
