// components/AdsLanding/Performance.tsx
"use client";

import { TrendingUp, DollarSign, Users, Target, Zap, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI Increase",
    color: "text-emerald-500",
  },
  {
    icon: DollarSign,
    value: "₦17",
    label: "Average CPC Across Platforms",
    color: "text-blue-500",
  },
  {
    icon: Users,
    value: "6.5B+",
    label: "Total Reach Across All Platforms",
    color: "text-purple-500",
  },
  {
    icon: Target,
    value: "4x",
    label: "Faster Campaign Launch",
    color: "text-orange-500",
  },
];

export default function Performance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="gradient-text">Real Results</span> from Real Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            See how Comvia Ads is helping businesses grow faster.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}