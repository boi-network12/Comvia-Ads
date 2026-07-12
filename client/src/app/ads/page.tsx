// app/ads/page.tsx
"use client";

import CTASection from "@/components/AdsLanding/CTASection";
import Features from "@/components/AdsLanding/Features";
import Footer from "@/components/AdsLanding/Footer";
import Header from "@/components/AdsLanding/Header";
import Hero from "@/components/AdsLanding/Hero";
import HowItWorks from "@/components/AdsLanding/HowItWorks";
import Stats from "@/components/AdsLanding/Stats";
import Testimonials from "@/components/AdsLanding/Testimonials";
import FAQ from "@/components/AdsLanding/FAQ";
import Pricing from "@/components/AdsLanding/Pricing";
import Platforms from "@/components/AdsLanding/Platforms";
import Performance from "@/components/AdsLanding/Performance";

export default function AdsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Platforms />
        <Performance />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}