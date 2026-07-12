// components/AdsLanding/Hero.tsx
"use client";

import { ArrowRight, Play, TrendingUp, Target, Zap, BarChart3, DollarSign, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Floating Stats Cards */}
      <div className="absolute top-24 left-8 hidden xl:block animate-float">
        <div className="bg-background/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">ROI Increase</p>
              <p className="text-lg font-bold text-primary">+300%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-8 hidden xl:block animate-float delay-500">
        <div className="bg-background/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Platforms</p>
              <p className="text-lg font-bold">4 in 1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden 2xl:block animate-float delay-700">
        <div className="bg-background/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Avg. CPC</p>
              <p className="text-lg font-bold">₦17</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Now Available — Free Trial</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
                <span className="block">Advertise</span>
                <span className="gradient-text">Everywhere</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400 mt-2">
                  One Dashboard
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Stop juggling 4 different ad dashboards. Create once, launch everywhere, 
              and let <span className="text-primary font-semibold">AI optimize</span> your budget for maximum ROI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                className="group relative px-8 py-4 gradient-primary text-white rounded-xl font-semibold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
                onClick={() => window.location.href = '/register'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all font-semibold text-lg flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="w-4 h-4 text-primary" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {["JD", "MK", "AL", "TR", "NP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-background flex items-center justify-center text-sm font-semibold text-primary"
                  >
                    {initials}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-background flex items-center justify-center text-sm font-medium text-gray-500">
                  +500
                </div>
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 500+ businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual - Interactive Dashboard Preview */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-background/95 backdrop-blur rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Campaign Dashboard</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Live • 4 platforms</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-emerald-500">Optimizing</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Budget Overview */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Budget</span>
                      <span className="text-2xl font-bold">₦100,000</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                            Google Ads
                          </span>
                          <span className="font-medium">₦30,000 <span className="text-xs text-gray-400">(30%)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full transition-all duration-1000" style={{ width: '30%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
                            Meta Ads
                          </span>
                          <span className="font-medium">₦25,000 <span className="text-xs text-gray-400">(25%)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-purple-500 h-full rounded-full transition-all duration-1000" style={{ width: '25%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full" />
                            Instagram
                          </span>
                          <span className="font-medium">₦20,000 <span className="text-xs text-gray-400">(20%)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-pink-500 h-full rounded-full transition-all duration-1000" style={{ width: '20%' }} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-black dark:bg-white rounded-full" />
                            TikTok
                          </span>
                          <span className="font-medium">₦25,000 <span className="text-xs text-gray-400">(25%)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-black dark:bg-white h-full rounded-full transition-all duration-1000" style={{ width: '25%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                    <div className="text-center p-2 rounded-lg bg-gray-50/50 dark:bg-gray-900/20">
                      <p className="text-xl font-bold text-emerald-500">+47%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">ROI</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gray-50/50 dark:bg-gray-900/20">
                      <p className="text-xl font-bold text-blue-500">4.2k</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Clicks</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gray-50/50 dark:bg-gray-900/20">
                      <p className="text-xl font-bold text-purple-500">₦17</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Avg CPC</p>
                    </div>
                  </div>

                  {/* AI Optimization Alert */}
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl border border-primary/20">
                    <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold">AI Budget Optimization</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Shifted ₦20,000 to TikTok • +23% better performance
                      </p>
                    </div>
                    <span className="text-xs font-medium text-emerald-500 whitespace-nowrap">Active</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}