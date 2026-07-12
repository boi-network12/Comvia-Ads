// components/AdsLanding/Stats.tsx
"use client";

import { TrendingUp, Users, Target, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI Increase",
    },
    {
      icon: Users,
      value: "500+",
      label: "Businesses Using Comvia Ads",
    },
    {
      icon: Target,
      value: "4",
      label: "Platforms, One Dashboard",
    },
    {
      icon: Clock,
      value: "70%",
      label: "Time Saved on Ad Management",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}