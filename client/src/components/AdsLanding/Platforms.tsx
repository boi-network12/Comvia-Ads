// components/AdsLanding/Platforms.tsx
"use client";

import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { CheckCircle2 } from "lucide-react";

const platforms = [
  {
    name: "Google Ads",
    icon: FaGoogle,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "Search, Display, YouTube & Shopping",
    stats: "Reach 90% of internet users",
  },
  {
    name: "Meta Ads",
    icon: FaFacebook,
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    description: "Facebook & Instagram combined",
    stats: "3.1B+ monthly active users",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    description: "Feed, Stories, Reels & Shopping",
    stats: "2B+ monthly active users",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    color: "text-black dark:text-white",
    bg: "bg-gray-200/50 dark:bg-gray-800/50",
    description: "In-Feed, Spark & TopView Ads",
    stats: "1.5B+ monthly active users",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Platforms</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">
            Advertise Where Your
            <br />
            <span className="gradient-text">Customers Are</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Reach 6.5B+ users across the world&apos;s biggest advertising platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${platform.bg} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${platform.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{platform.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>{platform.stats}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}