// components/AdsLanding/Testimonials.tsx
"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chidi Okonkwo",
    role: "CEO, Kano Merchants",
    content:
      "Comvia Ads transformed how we advertise. Instead of managing four different platforms, we now do everything from one dashboard. Our sales have tripled in just two months.",
    avatar: "CO",
    rating: 5,
  },
  {
    name: "Amara Eze",
    role: "Marketing Director, Lagos Style",
    content:
      "The AI optimization is incredible. It automatically shifted our budget to TikTok when it saw better performance, and our ROI went through the roof. Never going back to manual.",
    avatar: "AE",
    rating: 5,
  },
  {
    name: "Tunde Balogun",
    role: "Founder, TechVibe NG",
    content:
      "As a tech founder, I appreciate how Comvia Ads makes advertising simple. My team doesn't need to learn Google Ads or Meta Ads Manager anymore. Just one tool, one workflow.",
    avatar: "TB",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">
            Trusted by
            <br />
            <span className="gradient-text">business owners</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See what our customers say about advertising with Comvia Ads.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-primary/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}