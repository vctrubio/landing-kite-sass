# KiteFlow Landing Page

A modern SaaS landing page for KiteFlow - the comprehensive kite school management system that transforms student bookings into profit while reducing administrative overhead.

## 🚀 Live Demo

The landing page is running at: **http://localhost:3002**

## 💡 What is KiteFlow?

KiteFlow is a comprehensive kite school management application built for wind-dependent operations. It provides dual interfaces for different user roles:

- **Billboard Interface**: Desktop drag-and-drop scheduling for admins
- **Teacher Portal**: Mobile performance tracking for instructors
- **Student Management**: Complete booking-to-lesson workflow
- **Equipment Tracking**: Kite assignment and inventory management

This landing page showcases the value proposition and drives conversions for the main application.

## ✨ Key Landing Page Features

- **The KiteFlow Effect**: Shows student → booking → lesson → money flow
- **Live Booking Operations**: Real-time progress tracking dashboard
- **Dual Interface Demo**: Billboard vs Teacher Portal comparison
- **Coming Soon**: Rental equipment tracking preview
- **Contact Integration**: Direct Calendly booking and professional links

## 🛠 Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for additional icons
- **Custom SVG components** for kite-specific icons

## 📁 Project Structure

```
kiteflow-landing/
├── app/
│   ├── page.tsx              # Landing page
│   ├── docs/page.tsx         # Documentation page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── icons.tsx             # Custom SVG icon components
├── lib/
│   └── constants.ts          # Entity definitions and colors
└── package.json              # Dependencies and scripts
```

## 🎯 Key Sections

### Landing Page (`/`)

1. **Hero Section** - Main value proposition
2. **Problem/Solution** - Contrasts manual vs automated management
3. **Features Grid** - 6 key features with entity colors
4. **Dual Interface** - Whiteboard vs Billboard comparison
5. **Social Proof** - Testimonial from Tarifa Kite Hostel
6. **Pricing** - Free, Pro (€45/month), Multi-location (€90/extra)
7. **Call-to-Action** - Contact form integration

### Documentation (`/docs`)

1. **Teacher Setup** - Step 1 of the system flow
2. **Student Journey** - Complete booking-to-event workflow
3. **Supporting Systems** - Kites, payments, packages
4. **Authentication & Operations** - User roles and billboard features

## 🎨 Entity Color System

The landing page uses the same color scheme as the main application:

- **Students** 🟡 Yellow (`text-yellow-500`)
- **Teachers** 🟢 Green (`text-green-500`)
- **Bookings** 🔵 Blue (`text-blue-500`)
- **Lessons** 🔷 Cyan (`text-cyan-500`)
- **Events** 🟦 Teal (`text-teal-500`)
- **Kites** 🟣 Purple (`text-purple-500`)
- **Payments** 🟠 Amber (`text-amber-500`)
- **Packages** 🟧 Orange (`text-orange-500`)

## 📧 Contact Integration

All CTA buttons link to email contact:

- `contact@kiteflow.com`
- Pre-filled subject lines for different pricing tiers
- Professional email templates ready

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm, md, lg, xl
- **Optimized** for phone, tablet, and desktop
- **Touch-friendly** interactive elements

## 🎪 Ready for Production

This landing page is production-ready and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS** / **Azure** / **GCP**
- Any static hosting service

Perfect for showcasing KiteFlow to potential customers and driving conversions! 🪁
