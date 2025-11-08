# Keltech Design Specification

## Design Philosophy

Keltech's design embodies premium, enterprise-grade sophistication through minimalism and attention to detail. The white-based aesthetic creates a canvas for content to breathe while subtle animations add life without distraction.

## Visual Identity

### Color System

**Primary Palette (Blue)**
- Primary: `#1E40AF` (Blue 800) - Authority, trust, stability
- Primary Light: `#3B82F6` (Blue 500) - Interactive elements
- Primary Lighter: `#93C5FD` (Blue 300) - Gradients, accents

**Neutrals**
- White: `#FFFFFF` - Base background
- Gray 50: `#F9FAFB` - Alternate sections
- Gray 600: `#4B5563` - Body text
- Gray 700: `#374151` - Secondary text
- Gray 900: `#111827` - Headings

**Borders & Shadows**
- Hairline: `rgba(0,0,0,0.05)` - Subtle separation
- Shadow SM: Soft elevation
- Shadow MD: Card hover states
- Shadow XL: CTA emphasis with primary tint

### Typography

**Font Family**: Inter (Google Fonts)
- Professional, modern, highly legible
- Excellent rendering at all sizes
- Wide weight range for hierarchy

**Type Scale**
- Hero (H1): 4xl-7xl (56-72px) - Bold/Extrabold
- Section (H2): 4xl-5xl (36-48px) - Bold
- Subsection (H3): xl-2xl (20-24px) - Semibold
- Body: base-lg (16-18px) - Regular
- Small: sm-xs (14-12px) - Medium

**Line Height**
- Headings: 120% (tight, impactful)
- Body: 150% (relaxed, readable)
- UI Elements: 100% (compact)

### Spacing System

8px base grid:
- Micro: 4px (0.5 unit)
- Small: 8px (1 unit)
- Medium: 16px (2 units)
- Large: 24px (3 units)
- XL: 32px (4 units)
- XXL: 48px (6 units)
- XXXL: 64px (8 units)

### Component Design

**Cards**
- Border Radius: 16px (rounded-2xl)
- Padding: 24px (p-6)
- Border: 1px solid rgba(0,0,0,0.05)
- Shadow: sm (subtle), md on hover
- Background: Pure white

**Buttons**
- Primary: Solid blue, white text, medium shadow on hover
- Secondary: White with border, blue text on hover
- Border Radius: 8px (rounded-lg)
- Padding: 12px 32px (py-3 px-8)
- Font: Semibold (600)

**Navigation**
- Fixed position, blur backdrop
- Height: 64px (h-16)
- Border Bottom: 1px hairline
- Link hover: Animated underline (scale-x-0 to 1)
- Mobile: Slide-down panel with stagger

## Animation Principles

### Motion Philosophy

Animations should feel:
- **Purposeful**: Every animation serves UX
- **Subtle**: Never distracting or overwhelming
- **Smooth**: Natural easing, realistic physics
- **Fast**: 300-600ms max duration
- **Accessible**: Respect prefers-reduced-motion

### Animation Patterns

**Page Load (Stagger)**
```
Container: Fade in
Children: Fade + slide (y: 20→0)
Delay: 80ms between children
Easing: [0.22, 1, 0.36, 1]
```

**Hover (Cards)**
```
Transform: translateY(-4px)
Shadow: sm → md
Duration: 300ms
Easing: ease-out
```

**Hover (Images)**
```
Transform: scale(1.03)
Duration: 500ms
Easing: ease-out
```

**Parallax (Hero)**
```
Distance: 30-50px
Trigger: Scroll position
Smoothing: useTransform
```

**Mobile Menu**
```
Height: 0 → auto
Opacity: 0 → 1
Duration: 300ms
Children: Stagger 50ms
```

### Easing Functions

- **Standard**: `ease-out` - UI interactions
- **Custom**: `[0.22, 1, 0.36, 1]` - Page animations
- **Bounce**: None - maintain sophistication

## Layout Guidelines

### Grid System

- Max Width: 1280px (max-w-7xl)
- Padding: 16px mobile, 24px tablet, 32px desktop
- Columns: 1 mobile, 2 tablet, 3 desktop
- Gap: 32px (gap-8)

### Section Spacing

- Vertical: 80px mobile (py-20), 112px desktop (py-28)
- Between elements: 64px (mb-16)
- Whitespace: Generous, purposeful

### Responsive Breakpoints

- Mobile: 0-639px
- Tablet: 640-1023px
- Desktop: 1024px+
- Large: 1280px+ (contained)

## Interaction States

**Links**
- Default: Gray 700
- Hover: Gray 900 + underline
- Active: Primary blue
- Focus: Ring (focus-visible)

**Buttons**
- Default: Solid color
- Hover: Lighter shade + shadow
- Active: Slightly darker
- Disabled: Opacity 50%
- Focus: Ring (focus-visible)

**Cards**
- Default: White + border
- Hover: Lifted + deeper shadow
- Focus: Ring for keyboard nav

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

**Color Contrast**
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation**
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip links for main content

**Motion**
- Respect prefers-reduced-motion
- No flashing content
- Pause/stop control for auto-play

**Semantic HTML**
- Proper heading hierarchy
- Landmark regions (nav, main, footer)
- Alt text for images
- ARIA labels where needed

## Implementation Checklist

- [ ] All colors from approved palette
- [ ] Inter font loaded and applied
- [ ] 8px spacing grid followed
- [ ] Cards follow design pattern
- [ ] Animations use Framer Motion
- [ ] Reduced motion respected
- [ ] Focus states visible
- [ ] Semantic HTML used
- [ ] ARIA labels present
- [ ] Mobile responsive
- [ ] Hover states on all interactive elements
- [ ] Loading states designed
- [ ] Error states designed
- [ ] Empty states designed

## Design Inspiration

Similar aesthetic to:
- Stripe (whitespace, typography)
- Linear (minimalism, animations)
- Vercel (clean, modern, technical)
- Raycast (polish, attention to detail)

## Brand Personality

**Adjectives**
- Professional
- Sophisticated
- Reliable
- Modern
- Technical
- Trustworthy
- Efficient
- Premium

**Not**
- Playful
- Casual
- Loud
- Trendy
- Experimental
- Quirky
