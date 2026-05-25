# Sleek Portfolio - Complete Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Prerequisites & Setup](#prerequisites--setup)
6. [Environment Configuration](#environment-configuration)
7. [Development Guide](#development-guide)
8. [API Routes](#api-routes)
9. [Component Architecture](#component-architecture)
10. [Data Management](#data-management)
11. [Customization Guide](#customization-guide)
12. [Deployment](#deployment)
13. [Contributing & Version Info](#contributing--version-info)

---

## Project Overview

**Sleek Portfolio** is a modern, high-performance personal portfolio website built with cutting-edge web technologies. It showcases your professional profile, blog posts, project portfolio, work experience, and provides a contact system with Telegram integration.

- **Project Name:** Sleek Portfolio
- **Version:** 0.1.0
- **Repository:** https://github.com/Toheedullah-K3/toheedullahkhan.com
- **Website:** https://toheedullahkhan.com
- **Author:** Toheedullah Khan

### Project Goals

- Create a fast, responsive, and SEO-optimized portfolio
- Provide an easy-to-customize template for developers
- Include a blog system with MDX support
- Integrate analytics and contact forms
- Offer dark/light theme support

---

## Tech Stack

### Core Framework
- **Next.js 16.1.4** - React framework with App Router for server-side rendering and static generation
- **React 19** - UI library for building components
- **TypeScript** - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components built on Radix UI
- **Radix UI** - Headless UI components library (20+ packages)
- **CSS-in-JS:** PostCSS with Tailwind CSS

### Content Management
- **MDX (next-mdx-remote 6.0.0)** - Write React components in markdown
- **Gray Matter 4.0.3** - YAML/TOML frontmatter parsing
- **next-mdx-remote** - Runtime MDX processing

### UI Libraries & Effects
- **Lenis 1.3.4** - Smooth scrolling library
- **Framer Motion / Motion 12.23.0** - Animation library
- **Embla Carousel 8.6.0** - Carousel component
- **Lucide React 0.525.0** - Icon library

### Forms & Inputs
- **React Hook Form 7.53.0** - Efficient form management
- **Zod 3.23.8** - TypeScript-first schema validation
- **input-otp 1.4.2** - OTP input component

### Third-Party Integrations
- **Vercel Analytics 2.0.1** - Performance analytics
- **Umami Analytics** - Privacy-focused analytics
- **Microsoft Clarity** - User analytics and session recording
- **Cal.com Embed** - Calendar integration

### Development Tools
- **ESLint** - Code linting
- **Bun** - Fast JavaScript runtime and package manager (recommended)
- **TypeScript** - Type checking
- **Prettier Plugin Sort Imports** - Auto-sort imports

### Deployment
- **Vercel** - Primary deployment platform (optimized for Next.js)

---

## Frontend Skills & Design Capabilities

This portfolio demonstrates comprehensive expertise across all aspects of modern frontend development and design. Below is a detailed breakdown of skills and capabilities implemented throughout the project.

### 1. **Typography & Font Management**

#### Font Systems
- **Primary Font:** Hanken Grotesk (custom font)
- **System Fonts:** Fallback system font stack
- **Font Optimization:** 
  - Web font loading optimization
  - Font file served from `/public/fonts/`
  - Performance-optimized font weights and variants
  - Dark/Light mode font rendering

#### Typography Features
- **Font Sizes:** Responsive scaling from mobile to desktop
- **Line Heights:** Optimized readability and hierarchy
- **Letter Spacing:** Professional kerning and spacing
- **Font Weights:** Multiple weights for hierarchy (300, 400, 600, 700, 900)
- **Text Rendering:** Anti-aliasing optimization (`antialiased` class)

**Implementation:** 
- Tailwind CSS typography utilities
- Custom CSS classes for brand consistency
- Mobile-first responsive font scaling

### 2. **Spacing & Layout System**

#### Spacing Scale
- **Margin/Padding:** Consistent 4px-based scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64...)
- **Gap Spacing:** Between grid items and flex items
- **Whitespace:** Strategic use for visual hierarchy
- **Section Padding:** `py-16`, `py-20` for consistent vertical rhythm
- **Container Padding:** Responsive padding adjustments per screen

#### Layout Patterns
- **Grid Layout:** 
  - Responsive multi-column grids
  - Auto-fit and auto-fill patterns
  - Gap-based spacing (12px, 16px, 20px)
  - Mobile: 1 column → Tablet: 2 columns → Desktop: 3+ columns

- **Flex Layout:**
  - Horizontal/vertical stacking
  - Centering (items, content, justify)
  - Flex-wrap for responsiveness
  - Gap for consistent spacing

- **Container Queries:**
  - Size-based responsive design
  - Component-level responsiveness

#### Responsive Breakpoints
```
Mobile:   < 640px   (sm)
Tablet:   640px - 1024px (md, lg)
Desktop:  1024px+ (xl, 2xl)
```

**Implementation Tools:**
- Tailwind CSS spacing utilities
- CSS Grid and Flexbox
- Custom breakpoint configurations
- Mobile-first design approach

### 3. **Color & Theming System**

#### Color Palette
- **Primary Colors:** Brand colors for CTAs and highlights
- **Secondary Colors:** Supporting accent colors
- **Neutral Colors:** Grays for backgrounds and text
- **Semantic Colors:** Success (green), Warning (yellow), Error (red), Info (blue)

#### Dark/Light Mode
- **System Detection:** Respects OS dark mode preference
- **Manual Toggle:** Theme switch component for user override
- **Persistence:** User preference saved in localStorage
- **Smooth Transitions:** Color transitions without flickering
- **Per-Component Styling:** Dark variants for all components

#### Theme Implementation
```tsx
// Dark mode classes applied to components
<div className="bg-white dark:bg-slate-900">
  <p className="text-gray-900 dark:text-gray-50">Content</p>
</div>
```

#### Color Utilities
- **Text Colors:** Full spectrum of semantic colors
- **Background Colors:** Layer support (bg, hover:bg, dark:bg)
- **Border Colors:** Consistent color application
- **Shadow Colors:** Contextual shadows for depth
- **Opacity Support:** 0-100 opacity levels

**Tools Used:**
- Tailwind CSS color system
- Next Themes for theme management
- CSS Custom Properties for dynamic theming

### 4. **Component Design & Architecture**

#### UI Component System
- **Shadcn UI Components:** 20+ pre-built accessible components
- **Radix UI Base:** Unstyled, accessible primitives
- **Custom Components:** Project-specific components

#### Component Types

**Common/Global Components:**
- Navigation (Navbar with responsive menu)
- Footer (responsive footer with links)
- Container (max-width wrapper)
- Theme Provider & Theme Switch
- Back to Top button
- Quote display
- Section Headings
- Skill cards

**Feature Components:**
- Blog Cards, List, Content
- Project Cards, List, Content
- Experience Cards & Timeline
- Contact Form
- Chat Bubble
- Certificate Gallery
- Links aggregator

**UI Primitives:**
- Buttons (multiple variants and sizes)
- Forms (Input, Select, Textarea, Checkbox, Radio)
- Dialogs & Modals
- Dropdowns & Menus
- Tabs & Accordions
- Progress indicators
- Tooltips & Popovers
- Alerts & Badges

#### Component Composition
- **Props Pattern:** TypeScript interfaces for type safety
- **Variant Pattern:** Multiple visual states via `class-variance-authority`
- **Slot Pattern:** Flexible component composition
- **Compound Components:** Components that work together

**Example:**
```tsx
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
```

### 5. **Responsive Design & Mobile-First**

#### Responsive Techniques
- **Mobile-First CSS:** Start with mobile styles, add desktop
- **Flexible Images:** Next.js Image component for optimization
- **Fluid Typography:** Scales with viewport
- **Flexible Grids:** Grid with auto-fit and minmax
- **Media Queries:** Breakpoint-based adjustments

#### Device Support
- **Phones:** 320px - 480px
- **Tablets:** 481px - 768px
- **Laptops:** 769px - 1200px
- **Desktops:** 1200px+
- **Touch Interactions:** Touch-friendly hit targets (44px+ minimum)

#### Responsive Patterns
```tsx
// Stack on mobile, grid on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>

// Hide/show based on screen size
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>

// Responsive padding
<div className="px-4 md:px-8 lg:px-16">Content</div>
```

#### Performance on Mobile
- Optimized images for mobile bandwidth
- Minimal JavaScript for faster load
- Touch-optimized interactions
- Efficient scroll performance

### 6. **Animations & Motion Design**

#### Animation Libraries
- **Framer Motion / Motion 12.23.0:** Complex animations and transitions
- **CSS Transitions:** Simple property animations
- **View Transitions API:** Page navigation transitions
- **Lenis 1.3.4:** Smooth, physics-based scrolling

#### Animation Types
- **Page Transitions:** Smooth navigation between routes
- **Hover Effects:** Interactive feedback on buttons and cards
- **Scroll Animations:** Elements animate as they enter viewport
- **Loading States:** Spinners and progress indicators
- **Modal Animations:** Smooth open/close transitions
- **Stagger Effects:** Sequential animations on lists

#### Motion Principles
- **Performance:** 60fps animations using transform and opacity
- **Accessibility:** Respects `prefers-reduced-motion` setting
- **Consistency:** Unified timing (200-300ms) across effects
- **Purpose:** Animations guide user attention

**Example:**
```tsx
// Motion variant with stagger
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
```

### 7. **Form Design & Validation**

#### Form Features
- **React Hook Form:** Efficient form state management
- **Zod Validation:** TypeScript-first schema validation
- **Real-time Validation:** Instant feedback on input
- **Error Messages:** Clear, actionable error text
- **Accessibility:** Labels, ARIA attributes, keyboard navigation

#### Form Components
- Text inputs (Email, URL, Tel, Text, Number, Password)
- Textareas (Multi-line input)
- Select dropdowns
- Checkboxes (Single, multiple)
- Radio buttons (Single choice)
- OTP inputs
- File upload
- Date picker

#### Form Patterns
- Inline validation with error states
- Success states and confirmations
- Disabled states for loading
- Custom error messages
- Field grouping and organization
- Form sections and steps

### 8. **Accessibility (A11y) & WCAG Compliance**

#### Accessibility Features
- **Semantic HTML:** `<nav>`, `<main>`, `<article>`, `<section>`
- **ARIA Labels:** Descriptive labels for screen readers
- **Keyboard Navigation:** Full keyboard support (Tab, Enter, Escape)
- **Focus States:** Visible focus indicators on all interactive elements
- **Color Contrast:** WCAG AA compliant (4.5:1 minimum)
- **Text Alternatives:** Alt text for all images

#### Accessible Components
- Buttons with keyboard support
- Dropdowns with arrow key navigation
- Modal dialogs with focus trap
- Tabs with keyboard shortcuts
- Tooltips with ARIA descriptions
- Skip to main content links
- Form labels associated with inputs

#### Screen Reader Support
- Semantic structure for logical navigation
- Heading hierarchy (h1 → h6)
- List markup for list items
- Link text that describes destination
- Form error announcements

### 9. **Performance Optimization**

#### Image Optimization
- **Next.js Image Component:** Automatic format and size optimization
- **Responsive Images:** Serves correct size per device
- **Lazy Loading:** Images load only when needed
- **WebP Format:** Modern format for smaller file sizes
- **Image Compression:** Automatic quality optimization

#### Code Optimization
- **Code Splitting:** Automatic per-route splitting
- **Tree Shaking:** Unused code removal
- **Minification:** Compressed bundle sizes
- **CSS Purging:** Unused Tailwind styles removed
- **Dynamic Imports:** Load components on demand

#### Performance Metrics
```
Lighthouse Score: 90+
First Contentful Paint (FCP): < 1s
Largest Contentful Paint (LCP): < 2.5s
Cumulative Layout Shift (CLS): < 0.1
Time to Interactive (TTI): < 3s
```

#### Caching Strategies
- Browser caching headers
- CDN caching via Vercel
- Static page generation (SSG)
- Incremental Static Regeneration (ISR)

### 10. **SEO & Meta Management**

#### SEO Features
- **Dynamic Meta Tags:** Per-page customized meta
- **Open Graph:** Social media sharing optimization
- **Twitter Cards:** Twitter-specific sharing format
- **Structured Data:** Schema.org ready
- **Sitemap:** XML sitemap generation
- **Robots:** Proper robots.txt configuration
- **Canonical URLs:** Avoid duplicate content

#### Meta Implementation
```tsx
export const metadata = {
  title: 'Page Title',
  description: 'Meta description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    image: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### 11. **State Management & Data Flow**

#### State Management Approaches
- **React Hooks:** useState, useContext for component state
- **Custom Hooks:** Reusable state logic (useUmami, useMobile, useHaptic)
- **Context API:** Global state without external libraries
- **Client Components:** "use client" directive for interactive elements

#### Data Fetching
- **Server Components:** Server-side data fetching
- **Client-side Fetching:** For real-time data
- **API Routes:** Backend endpoints for external services
- **Streaming:** Server-Sent Events for real-time updates

### 12. **Interactive Features**

#### User Interactions
- **Haptic Feedback:** Vibration on mobile interactions
- **Toast Notifications:** User feedback messages
- **Loading States:** Visual feedback during operations
- **Modals & Dialogs:** Focused user interactions
- **Dropdown Menus:** Context-sensitive options
- **Carousels:** Embla-based image/content carousel

#### Real-Time Features
- **Chat Interface:** AI-powered chat with streaming responses
- **Live Updates:** Umami analytics dashboard
- **Socket Support:** Ready for WebSocket implementation

### 13. **Content Management**

#### MDX/Markdown Support
- **Blog Posts:** Full MDX support with frontmatter
- **Project Details:** Rich markdown content
- **Code Blocks:** Syntax highlighting with Shiki
- **Embeds:** Support for custom React components
- **Copy Button:** Code block copy functionality

#### Content Organization
- Categorized blog posts
- Featured/pinned content
- Content filtering and search
- Pagination support
- Related content suggestions

### 14. **Analytics & User Tracking**

#### Analytics Integration
- **Umami Analytics:** Privacy-focused web analytics
- **Microsoft Clarity:** User behavior and session recording
- **Vercel Analytics:** Performance monitoring
- **Custom Events:** Track user interactions

#### Metrics Tracked
- Page views and unique visitors
- User engagement time
- Click tracking on key elements
- Conversion tracking
- Performance metrics
- Device and browser info

### 15. **Developer Experience (DX)**

#### Developer Tools
- **TypeScript:** Full type safety
- **ESLint:** Code quality checking
- **Prettier:** Code formatting
- **Path Aliases:** Clean imports (`@/components`)
- **Hot Reload:** Fast development feedback

#### Documentation
- Inline code comments
- Component prop documentation
- Configuration guides
- API documentation
- Setup instructions

---

## Skills Summary Table

| Category | Skills | Proficiency |
|----------|--------|------------|
| **Typography** | Font systems, responsive sizing, hierarchy, web fonts | Expert |
| **Layout** | Grid, Flexbox, responsive design, spacing systems | Expert |
| **Colors** | Color theory, theming, dark mode, accessibility | Expert |
| **Components** | Atomic design, composition, reusability | Expert |
| **Responsive Design** | Mobile-first, breakpoints, fluid layouts | Expert |
| **Animations** | Transitions, micro-interactions, motion design | Advanced |
| **Forms** | Validation, accessibility, UX patterns | Advanced |
| **Accessibility** | WCAG, ARIA, keyboard navigation, screen readers | Advanced |
| **Performance** | Image optimization, code splitting, metrics | Advanced |
| **SEO** | Meta tags, structured data, sitemaps | Advanced |
| **State Management** | React hooks, Context API, custom hooks | Advanced |
| **Content Management** | MDX, markdown, frontmatter, static generation | Advanced |
| **Analytics** | Tracking, privacy, user behavior | Intermediate |
| **Developer Experience** | TypeScript, tooling, documentation | Expert |

---

## Project Structure

```
f:\Projects\toheedullahkhan/
├── public/                          # Static assets
│   ├── assets/                      # Images and media
│   ├── blog/                        # Blog-related assets
│   ├── company/                     # Company logos/images
│   ├── fonts/                       # Custom fonts
│   ├── meta/                        # Meta images (OG, preview)
│   ├── oneko/                       # Oneko cat animation
│   ├── project/                     # Project images
│   └── setup/
│       └── vsc-extensions.txt       # Recommended VS Code extensions
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout with providers
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles
│   │   ├── sitemap.ts               # XML sitemap generation
│   │   ├── api/                     # API routes
│   │   │   ├── chat/                # Chat API endpoint
│   │   │   └── contact/             # Contact form API
│   │   ├── blog/                    # Blog pages
│   │   │   ├── page.tsx             # Blog list
│   │   │   ├── [slug]/              # Blog post detail
│   │   │   └── BlogPageClient.tsx   # Blog client logic
│   │   ├── contact/                 # Contact page
│   │   ├── projects/                # Projects showcase
│   │   │   ├── page.tsx             # Projects list
│   │   │   └── [slug]/              # Project detail
│   │   ├── gears/                   # Tools/gear setup page
│   │   ├── journey/                 # Journey/timeline page
│   │   ├── links/                   # Links page (aggregated social links)
│   │   ├── resume/                  # Resume download page
│   │   ├── work-experience/         # Work experience timeline
│   │   └── setup/                   # Development setup page
│   │
│   ├── components/                  # React components
│   │   ├── analytics/               # Analytics integration
│   │   │   └── UmamiAnalytics.tsx
│   │   ├── blog/                    # Blog-specific components
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogComponents.tsx
│   │   │   ├── BlogContent.tsx
│   │   │   ├── BlogList.tsx
│   │   │   └── CodeCopyButton.tsx
│   │   ├── common/                  # Reusable global components
│   │   │   ├── BackToTop.tsx
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── FontSizeControls.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── OnekoCat.tsx
│   │   │   ├── Quote.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Skill.tsx
│   │   │   ├── ThemeProviders.tsx
│   │   │   ├── ThemeSwitch.tsx
│   │   ├── contact/                 # Contact form components
│   │   ├── experience/              # Experience display components
│   │   ├── gears/                   # Gear/tools display
│   │   ├── landing/                 # Landing page sections
│   │   │   ├── About.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Github.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Setup.tsx
│   │   ├── links/                   # Links page components
│   │   ├── projects/                # Project display components
│   │   ├── svgs/                    # SVG components
│   │   ├── technologies/            # Tech stack display
│   │   └── ui/                      # Shadcn UI components
│   │
│   ├── config/                      # Configuration files
│   │   ├── About.tsx                # About section config
│   │   ├── Achievements.tsx         # Achievements/certifications
│   │   ├── Cat.ts                   # Oneko cat configuration
│   │   ├── ChatPrompt.ts            # Chat AI prompts
│   │   ├── Contact.tsx              # Contact page config
│   │   ├── CTA.tsx                  # Call-to-action config
│   │   ├── Experience.tsx           # Work experience config
│   │   ├── Footer.tsx               # Footer content config
│   │   ├── Gears.tsx                # Tools/gear config
│   │   ├── Github.tsx               # GitHub stats config
│   │   ├── Hero.tsx                 # Hero section config
│   │   ├── Journey.tsx              # Journey timeline config
│   │   ├── Links.tsx                # Links page config
│   │   ├── Meta.tsx                 # SEO & metadata config
│   │   ├── Navbar.tsx               # Navigation config
│   │   ├── Projects.tsx             # Featured projects config
│   │   ├── Quote.ts                 # Random quotes config
│   │   ├── Resume.ts                # Resume content
│   │   └── Setup.tsx                # Setup/dev tools config
│   │
│   ├── data/                        # Content data files
│   │   ├── blog/                    # Blog post markdown files (MDX)
│   │   ├── journey/                 # Journey/timeline data
│   │   └── projects/                # Project markdown files (MDX)
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-haptic-feedback.ts   # Haptic feedback hook
│   │   ├── use-mobile.ts            # Mobile detection hook
│   │   └── use-umami.ts             # Umami analytics hook
│   │
│   ├── lib/                         # Utility functions
│   │   ├── blog.ts                  # Blog utilities
│   │   ├── hero.ts                  # Hero section utilities
│   │   ├── journey.ts               # Journey utilities
│   │   ├── lenis.ts                 # Smooth scroll config
│   │   ├── project.ts               # Project utilities
│   │   └── utils.ts                 # General utilities (cn function)
│   │
│   └── types/                       # TypeScript type definitions
│       ├── analytics.ts             # Analytics types
│       ├── blog.ts                  # Blog types
│       └── project.ts               # Project types
│
├── Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── bun.lockb                    # Bun lock file
│   ├── next.config.ts               # Next.js configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.ts            # Tailwind CSS config
│   ├── postcss.config.mjs            # PostCSS config
│   ├── eslint.config.mjs            # ESLint configuration
│   ├── components.json              # Shadcn UI config
│   └── next-env.d.ts                # Next.js type declarations
│
├── Documentation
│   ├── README.md                    # Quick start guide
│   ├── CONTRIBUTING.md              # Contributing guidelines
│   ├── PROJECT_DOCUMENTATION.md     # This file
│   └── LICENSE                      # Project license
│
└── .env (create locally)            # Environment variables
```

---

## Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Fully responsive across all screen sizes
- Touch-friendly interface

### 2. **Dark/Light Mode**
- System preference detection
- Manual theme toggle
- Persisted user preference

### 3. **Blog System**
- MDX-based blog posts with frontmatter
- Syntax highlighting with Shiki
- Copy code button for code blocks
- Responsive blog layout
- SEO-optimized meta tags per post

### 4. **Project Showcase**
- Detailed project pages with MDX support
- Project cards with images
- Project filtering and navigation
- Project metadata and links

### 5. **Contact Form**
- Form validation with React Hook Form + Zod
- Telegram integration for notifications
- Email capture
- Client-side validation

### 6. **Analytics**
- **Umami Analytics** - Privacy-focused web analytics
- **Microsoft Clarity** - User behavior and session recording
- **Vercel Analytics** - Performance monitoring

### 7. **SEO Optimization**
- Dynamic sitemap generation
- Meta tags management
- Open Graph support
- Twitter Card support
- Schema.org structured data ready

### 8. **Performance Features**
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Smooth scrolling with Lenis
- View transitions for navigation

### 9. **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- High contrast support

### 10. **Additional Features**
- **Oneko Cat** - Cute animated cat that follows mouse
- **Random Quotes** - Daily inspiration quotes
- **Social Media Links** - Aggregated social profiles
- **Work Experience Timeline** - Professional journey
- **Certifications/Achievements** - Certificate gallery
- **Dev Tools Setup** - Recommended development setup

---

## Prerequisites & Setup

### System Requirements

- **Node.js:** v18 or higher
- **Package Manager:** Bun (recommended) or npm/yarn
- **OS:** Windows, macOS, or Linux
- **Git:** For version control

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/Toheedullah-K3/toheedullahkhan.com
cd toheedullahkhan
```

#### 2. Install Dependencies

Using **Bun** (recommended for speed):
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

Or using **yarn**:
```bash
yarn install
```

#### 3. Create Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Keys & Tokens
TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
TELEGRAM_CHAT_ID="your-telegram-chat-id"
GEMINI_API_KEY="your-gemini-api-key"

# Environment
NODE_ENV="development"

# Site URLs
NEXT_PUBLIC_URL="http://localhost:3000"  # For local development
# NEXT_PUBLIC_URL="https://toheedullahkhan.com"  # For production

# Analytics
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```

#### 4. Run Development Server

Using Bun:
```bash
bun dev
```

Or npm:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

---

## Environment Configuration

### Required Environment Variables

#### Telegram Integration
```env
TELEGRAM_BOT_TOKEN="123456789:ABCDEFGHIJKLMNopqrstuvwxyz"
TELEGRAM_CHAT_ID="987654321"
```

**Setup Instructions:**
1. Create a bot with [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token
3. Start a chat with your bot
4. Add bot to a group as admin
5. Send `/id` to [@rosebot](https://t.me/MissRose_bot) to get your chat ID

#### Gemini API (for AI chat)
```env
GEMINI_API_KEY="your-gemini-api-key-from-google"
```

Get your key from [Google AI Studio](https://makersuite.google.com/app/apikey)

#### Umami Analytics
```env
NEXT_PUBLIC_UMAMI_SRC="https://your-instance.com/script.js"
NEXT_PUBLIC_UMAMI_ID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

**Setup Options:**
- Self-host Umami: Follow [Umami docs](https://umami.is/docs/install)
- Use [Umami Cloud](https://cloud.umami.is): Recommended for beginners

#### Site Configuration
```env
NEXT_PUBLIC_URL="https://toheedullahkhan.com"  # Your domain
NODE_ENV="production"  # or "development"
```

---

## Development Guide

### Available Scripts

```bash
# Start development server with Turbopack
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run ESLint
bun run lint
```

### Project Workflow

#### 1. Modifying Home Page Sections

All landing page sections are imported in [src/app/page.tsx](src/app/page.tsx):

```tsx
// Add or remove sections here
import Hero from '@/components/landing/Hero';
import Experience from '@/components/landing/Experience';
import Work from '@/components/landing/Projects';
```

Each section component reads configuration from [src/config/](src/config/):

```tsx
// src/components/landing/Hero.tsx
import { heroConfig } from '@/config/Hero';
export default function Hero() {
  // Uses heroConfig.name, heroConfig.title, etc.
}
```

#### 2. Creating Blog Posts

1. Create MDX file in [src/data/blog/](src/data/blog/):

```mdx
---
title: "My First Blog Post"
date: "2024-01-15"
category: "Web Development"
excerpt: "A brief description of the post"
slug: "my-first-blog-post"
image: "/blog/my-post.png"
---

# Welcome to my blog

Your content here...
```

2. Blog is automatically indexed and displayed
3. Use Markdown + React components in MDX

#### 3. Creating Projects

1. Create MDX file in [src/data/projects/](src/data/projects/):

```mdx
---
title: "Project Name"
slug: "project-name"
description: "What this project does"
image: "/project/image.png"
technologies: ["React", "TypeScript", "Tailwind"]
link: "https://project-link.com"
github: "https://github.com/user/repo"
featured: true
---

# Project Details

Detailed description...
```

2. Configure featured projects in [src/config/Projects.tsx](src/config/Projects.tsx)

#### 4. Updating Configuration Files

All configuration is centralized in [src/config/](src/config/):

| File | Purpose |
|------|---------|
| `Hero.tsx` | Home hero section |
| `About.tsx` | About me section |
| `Experience.tsx` | Work experience |
| `Projects.tsx` | Featured projects |
| `Meta.tsx` | SEO & metadata |
| `Navbar.tsx` | Navigation menu |
| `Footer.tsx` | Footer content |
| `Contact.tsx` | Contact page info |
| `Resume.ts` | Resume content |

#### 5. Creating Custom Components

Create reusable components in [src/components/](src/components/):

```tsx
// src/components/custom/MyComponent.tsx
import { cn } from '@/lib/utils';

interface MyComponentProps {
  className?: string;
  title: string;
}

export default function MyComponent({ className, title }: MyComponentProps) {
  return (
    <div className={cn('p-4 rounded-lg', className)}>
      {title}
    </div>
  );
}
```

#### 6. Adding Styles

The project uses **Tailwind CSS** for styling:

- **Global styles:** [src/app/globals.css](src/app/globals.css)
- **Component styles:** Use Tailwind utility classes
- **Custom CSS:** Add to `globals.css` or component files

Example with Tailwind:
```tsx
<div className="flex items-center justify-between p-4 rounded-lg bg-slate-100 dark:bg-slate-900">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

---

## API Routes

### 1. Contact Form API

**Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Features:**
- Sends message to Telegram
- Email validation
- Rate limiting (optional)
- Error handling

**File:** [src/app/api/contact/route.ts](src/app/api/contact/route.ts)

### 2. Chat API

**Endpoint:** `POST /api/chat` or `GET /api/chat`

**Request (Streaming):**
```json
{
  "message": "User message",
  "history": []
}
```

**Response:** 
- Streaming text response
- Powered by Gemini API
- Maintains conversation history

**Features:**
- Real-time chat responses
- AI-powered responses
- Conversation context
- Error handling

**File:** [src/app/api/chat/route.ts](src/app/api/chat/route.ts)

---

## Component Architecture

### Component Organization

```
components/
├── common/           # Global, reusable components
├── landing/          # Home page sections
├── blog/             # Blog-specific components
├── projects/         # Project-related components
├── contact/          # Contact form components
├── experience/       # Experience display
├── links/            # Links page components
├── gears/            # Tools/setup components
├── analytics/        # Analytics integration
├── svgs/             # SVG icon components
├── technologies/     # Tech stack display
└── ui/               # Shadcn UI components
```

### Common Components

#### 1. **Container**
- Responsive padding and max-width
- Used for page sections

```tsx
<Container>
  <h1>Content</h1>
</Container>
```

#### 2. **Navbar**
- Navigation menu
- Theme toggle
- Mobile menu

#### 3. **Footer**
- Footer content
- Social links
- Copyright info

#### 4. **Theme Provider**
- Dark/light mode support
- System preference detection

### Landing Page Sections

All sections are independent components that:
- Import configuration
- Use Tailwind styling
- Support dark mode
- Are responsive

Example structure:
```tsx
// src/components/landing/Hero.tsx
import { heroConfig } from '@/config/Hero';

export default function Hero() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold">{heroConfig.name}</h1>
      <p className="text-lg text-gray-600">{heroConfig.title}</p>
    </section>
  );
}
```

---

## Data Management

### Blog Management

**Location:** [src/data/blog/](src/data/blog/)

Blog posts are MDX files with frontmatter:

```mdx
---
title: "Post Title"
date: "2024-01-15"
category: "Development"
excerpt: "Brief description"
slug: "post-slug"
image: "/blog/image.png"
author: "Your Name"
---

# Heading

Content with **markdown** and React components.

<CustomComponent />
```

**Utilities:** [src/lib/blog.ts](src/lib/blog.ts)

### Projects Management

**Location:** [src/data/projects/](src/data/projects/)

Similar structure to blog posts:

```mdx
---
title: "Project Name"
slug: "project-name"
description: "Project description"
image: "/project/image.png"
technologies: ["React", "TypeScript"]
link: "https://project.com"
github: "https://github.com/user/repo"
featured: true
---

Project details...
```

**Utilities:** [src/lib/project.ts](src/lib/project.ts)

### Journey/Timeline Data

**Location:** [src/data/journey/](src/data/journey/)

Timeline events for the journey page.

**Utilities:** [src/lib/journey.ts](src/lib/journey.ts)

### Type Definitions

All data types are defined in [src/types/](src/types/):

```typescript
// src/types/blog.ts
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  image?: string;
  content: string;
}

// src/types/project.ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}
```

---

## Customization Guide

### 1. Personalize Hero Section

Edit [src/config/Hero.tsx](src/config/Hero.tsx):

```tsx
export const heroConfig = {
  name: "Your Name",
  title: "Your Title / Role",
  subtitle: "Your tagline or description",
  cta: {
    text: "Get Started",
    href: "#projects"
  }
};
```

### 2. Update About Section

Edit [src/config/About.tsx](src/config/About.tsx):

```tsx
export const about = {
  name: "Your Name",
  description: "Your professional description",
  image: "/your-image.jpg",
  // ... more fields
};
```

### 3. Add Social Links

Edit [src/config/Meta.tsx](src/config/Meta.tsx):

```tsx
export const siteConfig = {
  author: {
    name: "Your Name",
    twitter: "@yourhandle",
    github: "yourprofile",
    linkedin: "your-profile",
    email: "your@email.com",
  }
};
```

### 4. Change Colors & Theme

Tailwind colors are defined in `tailwind.config.ts`. Modify the color palette:

```ts
theme: {
  colors: {
    primary: "#your-color",
    secondary: "#your-color",
    // ... more colors
  }
}
```

### 5. Add New Pages

1. Create directory in [src/app/new-page/](src/app/)
2. Create `page.tsx` file:

```tsx
// src/app/new-page/page.tsx
import { generateMetadata } from '@/config/Meta';

export const metadata = generateMetadata('/new-page');

export default function NewPage() {
  return (
    <div>
      {/* Your content */}
    </div>
  );
}
```

### 6. Customize Navigation

Edit [src/config/Navbar.tsx](src/config/Navbar.tsx):

```tsx
export const navConfig = {
  links: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    // Add more links
  ]
};
```

### 7. Modify Footer

Edit [src/config/Footer.tsx](src/config/Footer.tsx):

```tsx
export const footerConfig = {
  copyright: "© 2024 Your Name",
  links: [
    { label: "Privacy", href: "/privacy" },
    // ... more links
  ]
};
```

### 8. Update Contact Information

Edit [src/config/Contact.tsx](src/config/Contact.tsx):

```tsx
export const contactConfig = {
  email: "your@email.com",
  phone: "+1-123-456-7890",
  // ... more fields
};
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Import GitHub repository
5. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `GEMINI_API_KEY`
   - `NEXT_PUBLIC_UMAMI_SRC`
   - `NEXT_PUBLIC_UMAMI_ID`
   - `NEXT_PUBLIC_URL`
6. Click "Deploy"

### Build & Start Locally

```bash
# Build for production
bun run build

# Start production server
bun start
```

Server will run on `http://localhost:3000`

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json bun.lockb ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Performance Optimization

- **Image Optimization:** Next.js automatically optimizes images
- **Code Splitting:** Automatic with Next.js
- **Caching:** Configure in `next.config.ts`
- **CDN:** Vercel provides global CDN

---

## Contributing & Version Info

### Project Information

- **Current Version:** 0.1.0
- **Author:** Toheedullah Khan
- **License:** See [LICENSE](LICENSE)

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Code style
- Commit messages
- Pull request process
- Issue reporting

### Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com/docs/primitives/overview)

### Development Dependencies

See full list in [package.json](package.json)

Key dev dependencies:
- Next.js CLI
- TypeScript
- ESLint
- Tailwind CSS
- Prettier

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Use `bun dev --port 3001` |
| Build fails | Clear `.next` folder: `rm -rf .next` |
| Styling issues | Rebuild Tailwind: `npm run build` |
| Analytics not working | Check environment variables |
| Telegram messages not sending | Verify bot token and chat ID |

### Performance Metrics

The portfolio is optimized for:
- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

---

## Quick Reference

### Folder Purposes

| Folder | Purpose |
|--------|---------|
| `public/` | Static files (images, fonts, etc.) |
| `src/app/` | Next.js pages and API routes |
| `src/components/` | React components |
| `src/config/` | Configuration and content |
| `src/data/` | Blog posts, projects, journey data |
| `src/hooks/` | Custom React hooks |
| `src/lib/` | Utility functions |
| `src/types/` | TypeScript type definitions |

### Important Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `.env.local` | Environment variables (local only) |
| `src/app/layout.tsx` | Root layout and providers |
| `src/app/page.tsx` | Home page |
| `src/config/Meta.tsx` | SEO and metadata |

### Common Commands

```bash
# Development
bun dev              # Start dev server
bun run build        # Build project
bun start            # Start production server
bun run lint         # Run ESLint

# Git
git clone <repo>    # Clone repository
git add .           # Stage changes
git commit -m "msg" # Commit changes
git push            # Push to remote

# Package management
bun install         # Install dependencies
bun add package     # Add new package
bun remove package  # Remove package
```

---

## Summary

This portfolio template provides a solid foundation for:
- ✅ Showcasing your professional profile
- ✅ Publishing blog posts with MDX
- ✅ Displaying project portfolio
- ✅ Collecting contact inquiries
- ✅ Tracking analytics
- ✅ SEO optimization

Start by customizing the configuration files, then build upon this foundation with your own content and features!

For questions or support, check the [GitHub repository](https://github.com/Toheedullah-K3/toheedullahkhan.com) or review the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

**Last Updated:** May 25, 2024  
**Version:** 0.1.0  
**Maintained by:** Toheedullah Khan
