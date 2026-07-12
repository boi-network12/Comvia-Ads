// components/AdsLanding/Pricing.tsx
"use client";

import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₦50,000",
    period: "/month",
    description: "Perfect for small businesses starting with ads.",
    features: [
      "3 campaigns per month",
      "2 platforms (Google & Meta)",
      "Basic AI optimization",
      "Unified dashboard",
      "Email support",
      "7-day data retention",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₦150,000",
    period: "/month",
    description: "For growing businesses that want to scale.",
    features: [
      "Unlimited campaigns",
      "All 4 platforms",
      "Advanced AI optimization",
      "Budget auto-allocation",
      "Priority support",
      "30-day data retention",
      "Custom reporting",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large businesses with complex needs.",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom AI models",
      "Full API access",
      "24/7 phone support",
      "Unlimited data retention",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4" />
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your business. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-background border transition-all hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-gray-200/50 dark:border-gray-800/50 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gradient-primary text-white text-xs font-semibold rounded-full shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-medium transition-all hover:scale-105 ${
                  plan.popular
                    ? "gradient-primary text-white hover:shadow-2xl hover:shadow-primary/30"
                    : "border-2 border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}