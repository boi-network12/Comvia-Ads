// components/AdsLanding/HowItWorks.tsx
"use client";

import { PenTool, Zap, Rocket, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    icon: PenTool,
    title: "Create Your Campaign",
    description: "Set your goal, upload creatives, choose your platforms, and define your budget.",
    step: "01",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    details: ["Set campaign goal", "Upload creatives", "Define audience", "Set budget"],
  },
  {
    icon: Zap,
    title: "AI Allocates Budget",
    description: "Our AI analyzes historical data and campaign goals to distribute your budget optimally.",
    step: "02",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    details: ["AI budget analysis", "Smart allocation", "Platform selection", "Optimization setup"],
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description: "One click launches everywhere. AI continuously optimizes for better performance.",
    step: "03",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    details: ["One-click launch", "Real-time monitoring", "AI optimization", "Performance alerts"],
  },
];

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            From Setup to
            <br />
            <span className="gradient-text">Optimized Campaigns</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three steps to advertising success across all platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <div className={`
                  relative bg-background rounded-2xl p-8 
                  border-2 transition-all duration-500
                  ${isHovered ? 'border-primary/40 shadow-2xl shadow-primary/10 -translate-y-2' : 'border-gray-200/50 dark:border-gray-800/50 shadow-lg'}
                `}>
                  {isHovered && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl -z-10" />
                  )}

                  <div className="absolute -top-3 -right-3">
                    <div className={`
                      w-14 h-14 rounded-2xl 
                      flex items-center justify-center 
                      bg-gradient-to-r ${step.color} text-white font-bold text-sm
                      shadow-lg shadow-primary/25 transition-transform duration-300
                      ${isHovered ? 'scale-110 rotate-3' : ''}
                    `}>
                      {step.step}
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <div className={`
                      w-16 h-16 rounded-2xl 
                      bg-gradient-to-r ${step.color} 
                      flex items-center justify-center shadow-lg
                      transition-all duration-500
                      ${isHovered ? 'scale-110 rotate-6 shadow-xl' : ''}
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}