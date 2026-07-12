"use client";

import { useState } from "react";
import { ArrowLeft, Image, Video, Globe, Users, DollarSign, Calendar, Send, Check } from "lucide-react";
import Link from "next/link";

export default function NewCampaignPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    platforms: [] as string[],
    budget: "",
    dailyBudget: "",
    startDate: "",
    endDate: "",
    countries: [] as string[],
    ageRange: "",
    gender: "",
    interests: "",
    headlines: "",
    description: "",
    cta: "",
    landingPage: "",
    creatives: [] as File[],
  });

  const totalSteps = 5;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/campaigns"
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create New Campaign</h1>
          <p className="text-gray-600 dark:text-gray-400">Step {step} of {totalSteps}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full transition-all ${
              i + 1 <= step ? "gradient-primary" : "bg-gray-200 dark:bg-gray-800"
            }`}
          />
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 sm:p-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Campaign Basics</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Campaign Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="e.g., Summer Sale 2026"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Campaign Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                >
                  <option value="">Select a goal</option>
                  <option value="awareness">Brand Awareness</option>
                  <option value="traffic">Traffic</option>
                  <option value="conversions">Conversions</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Platforms</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Google Ads", "Meta Ads", "Instagram", "TikTok"].map((platform) => (
                    <label key={platform} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, platforms: [...formData.platforms, platform] });
                          } else {
                            setFormData({ ...formData, platforms: formData.platforms.filter(p => p !== platform) });
                          }
                        }}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Budget & Schedule</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Total Budget</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="e.g., 100000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Daily Budget (Optional)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.dailyBudget}
                    onChange={(e) => setFormData({ ...formData, dailyBudget: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="e.g., 5000"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Audience Targeting</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Target Countries</label>
                <div className="flex flex-wrap gap-2">
                  {["Nigeria", "Kenya", "South Africa", "Ghana", "UK", "US"].map((country) => (
                    <label key={country} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 hover:border-primary/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={formData.countries.includes(country)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, countries: [...formData.countries, country] });
                          } else {
                            setFormData({ ...formData, countries: formData.countries.filter(c => c !== country) });
                          }
                        }}
                        className="w-3.5 h-3.5 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm">{country}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Age Range</label>
                <select
                  value={formData.ageRange}
                  onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18 - 24</option>
                  <option value="25-34">25 - 34</option>
                  <option value="35-44">35 - 44</option>
                  <option value="45-54">45 - 54</option>
                  <option value="55+">55+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Gender</label>
                <div className="flex gap-4">
                  {["All", "Male", "Female"].map((gender) => (
                    <label key={gender} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Interests (Optional)</label>
                <input
                  type="text"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="e.g., Technology, Fashion, Sports"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Ad Creatives</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Headlines</label>
                <input
                  type="text"
                  value={formData.headlines}
                  onChange={(e) => setFormData({ ...formData, headlines: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="e.g., Save 50% on your first purchase"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Describe your offer..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Call to Action</label>
                <select
                  value={formData.cta}
                  onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                >
                  <option value="">Select CTA</option>
                  <option value="shop-now">Shop Now</option>
                  <option value="learn-more">Learn More</option>
                  <option value="sign-up">Sign Up</option>
                  <option value="contact">Contact</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Landing Page URL</label>
                <input
                  type="url"
                  value={formData.landingPage}
                  onChange={(e) => setFormData({ ...formData, landingPage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="https://yourwebsite.com/offer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Upload Creative</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Image className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">Upload Image</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Video className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm font-medium">Upload Video</p>
                    <p className="text-xs text-gray-500">MP4 up to 50MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Review & Launch</h2>
            <div className="bg-gray-50/50 dark:bg-gray-900/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Campaign Name</span>
                <span className="font-medium">{formData.name || "Not set"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Goal</span>
                <span className="font-medium">{formData.goal || "Not set"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Platforms</span>
                <span className="font-medium">{formData.platforms.join(", ") || "None selected"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Budget</span>
                <span className="font-medium">₦{formData.budget || "0"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Targeting</span>
                <span className="font-medium">{formData.countries.join(", ") || "Not set"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">CTA</span>
                <span className="font-medium">{formData.cta || "Not set"}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Your campaign is ready to launch! AI will automatically optimize your budget across platforms.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className={`px-6 py-3 rounded-xl font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-all ${
            step === 1 ? "invisible" : ""
          }`}
        >
          Back
        </button>
        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="px-6 py-3 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
          >
            Continue
          </button>
        ) : (
          <button className="px-6 py-3 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2">
            Launch Campaign
            <Send className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}