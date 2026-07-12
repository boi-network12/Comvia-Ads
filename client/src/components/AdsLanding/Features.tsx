// components/AdsLanding/Features.tsx
"use client";

import { 
  Brain, 
  BarChart3, 
  Zap, 
  Target, 
  Wallet,
  Bell,
  Sparkles,
  TrendingUp,
  Globe,
  Clock,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Budget Optimization",
    description: "Our AI monitors performance across all platforms and automatically shifts budget to where it performs best.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    stat: "+47% Avg. ROI",
  },
  {
    icon: Zap,
    title: "One Campaign, All Platforms",
    description: "Create your campaign once, select your platforms, and launch everywhere with a single click.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    stat: "70% Less Time",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics",
    description: "See all your ad performance metrics in one beautiful dashboard. No more tab switching.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    stat: "Real-Time Data",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Define your audience once. We optimize targeting for each platform automatically.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    stat: "3x Better Reach",
  },
  {
    icon: Wallet,
    title: "Smart Budget Allocation",
    description: "Set a total budget and let AI decide the optimal split between platforms for maximum results.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    stat: "Optimized Spend",
  },
  {
    icon: Bell,
    title: "Real-Time Optimization Alerts",
    description: "Get notified when AI makes optimization decisions or when your campaign needs attention.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    stat: "Instant Updates",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4" />
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Built for
            <br />
            <span className="gradient-text">Advertising Success</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to run successful multi-platform ad campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-2"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  {feature.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}