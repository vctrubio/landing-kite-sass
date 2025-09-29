'use client';

import { Navigation, Footer } from '@/components/ui';
import {
  HeroSection,
  ProblemSolution,
  FeaturesGrid,
  DualInterface,
  Testimonial,
  CallToAction,
  ComingSoon,
  AuthShowcase,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <FeaturesGrid />
      <DualInterface />
      {/* <Testimonial /> */}
      <CallToAction />
      {/* <ComingSoon /> */}
      <AuthShowcase />
      <Footer />
    </div>
  );
}
