// components/AdsLanding/FAQ.tsx
"use client";

import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does Comvia Ads work?",
    answer: "Comvia Ads connects to Google, Meta, Instagram, and TikTok through their official APIs. You create one campaign in our dashboard, and we handle the technical setup, budget allocation, and optimization across all platforms automatically.",
  },
  {
    question: "Do I need separate accounts for each platform?",
    answer: "Yes, you'll still need to have existing ad accounts on Google, Meta, and TikTok. Comvia Ads connects to these accounts via OAuth, so you only need to authenticate once.",
  },
  {
    question: "How does AI budget optimization work?",
    answer: "Our AI monitors your campaign performance in real-time across all platforms. It automatically shifts budget to the best-performing platforms based on metrics like cost-per-click, conversion rate, and ROI.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Comvia Ads uses enterprise-grade security, end-to-end encryption, and follows GDPR and CCPA guidelines. We never share your data with third parties.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts. You can cancel your subscription anytime, and your campaigns will continue running until the end of your billing period.",
  },
  {
    question: "What support do you offer?",
    answer: "We provide email support for all plans, priority support for Growth plan, and dedicated account management for Enterprise customers. Our support team is available 24/7.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Frequently
            <br />
            <span className="gradient-text">asked questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about Comvia Ads.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-background transition-all ${
                  isOpen ? "shadow-lg shadow-primary/5" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                >
                  <span className="text-base font-semibold group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}