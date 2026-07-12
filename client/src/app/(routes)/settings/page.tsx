"use client";

import { useState } from "react";
import { 
  User, 
  Mail, 
  Lock, 
  Globe, 
  Bell, 
  Shield, 
  Palette,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  CreditCard,
  Wallet,
  Save,
  Check,
  AlertCircle,
  Camera,
  Trash2,
  Users,
  Building,
  Phone,
  MapPin,
  Briefcase,
  Link as LinkIcon,
  DollarSign,
  Zap,
  Eye,
  EyeOff
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "account", label: "Account", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: LinkIcon },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden sticky top-6">
            <nav className="p-2 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "gradient-primary text-white shadow-lg shadow-primary/25"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 sm:p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Profile Settings</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Update your personal information
                  </p>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-6 p-4 bg-gray-50/50 dark:bg-gray-900/20 rounded-xl">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/20">
                      JD
                    </div>
                    <button className="absolute bottom-0 right-0 p-1.5 bg-background rounded-full border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors shadow-sm">
                      <Camera className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Upload a new photo</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        defaultValue="+234 800 000 0000"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="Comvia"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="Lagos, Nigeria"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Account Tab */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Account Security</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Manage your password and security settings
                  </p>
                </div>

                {/* Password Change */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Current Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Enter current password"
                      />
                      <button
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Enter new password"
                      />
                      <button
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Confirm New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Confirm new password"
                      />
                      <button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2FA */}
                <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                      Enable
                    </button>
                  </div>
                </div>

                {/* Sessions */}
                <div>
                  <h3 className="font-medium mb-3">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Chrome on Windows</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Lagos, Nigeria • Current session</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Safari on iPhone</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Lagos, Nigeria • 2 hours ago</p>
                        </div>
                      </div>
                      <button className="text-xs text-red-500 hover:text-red-600 transition-colors">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="p-4 rounded-xl border-2 border-red-500/20 bg-red-500/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-red-500 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Danger Zone
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Notification Preferences</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Choose what notifications you want to receive
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                    <div>
                      <p className="font-medium">Campaign Updates</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Performance alerts, budget updates, and optimization suggestions
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary transition-all">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-5 transition-all" />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                    <div>
                      <p className="font-medium">Billing & Payments</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Invoices, payment confirmations, and subscription updates
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary transition-all">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-5 transition-all" />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                    <div>
                      <p className="font-medium">Product Updates</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        New features, improvements, and product announcements
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary transition-all">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-5 transition-all" />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                    <div>
                      <p className="font-medium">Marketing & Tips</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tips, best practices, and marketing communications
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-primary transition-all">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-5 transition-all" />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Preferences
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Billing & Subscription</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Manage your subscription and payment methods
                  </p>
                </div>

                {/* Current Plan */}
                <div className="p-6 rounded-xl gradient-primary text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Current Plan</p>
                      <p className="text-2xl font-bold">Growth</p>
                      <p className="text-sm opacity-80">₦150,000/month</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Annual</span>
                      <p className="text-sm opacity-80 mt-2">Next billing: May 1, 2026</p>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h3 className="font-medium mb-3">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">•••• 4242</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Expires 12/2026</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Default</span>
                        <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Edit</button>
                      </div>
                    </div>
                    <button className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary transition-colors text-sm text-gray-500 hover:text-primary">
                      + Add Payment Method
                    </button>
                  </div>
                </div>

                {/* Billing History */}
                <div>
                  <h3 className="font-medium mb-3">Billing History</h3>
                  <div className="space-y-2">
                    {[
                      { date: "Apr 1, 2026", amount: "₦150,000", status: "Paid" },
                      { date: "Mar 1, 2026", amount: "₦150,000", status: "Paid" },
                      { date: "Feb 1, 2026", amount: "₦150,000", status: "Paid" },
                    ].map((invoice, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                        <div>
                          <p className="text-sm font-medium">{invoice.date}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Growth Plan</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">{invoice.amount}</span>
                          <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{invoice.status}</span>
                          <button className="text-sm text-primary hover:underline">Download</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Appearance</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Customize how the dashboard looks
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-4 rounded-xl border-2 border-primary bg-white dark:bg-white">
                      <div className="flex items-center justify-center gap-2">
                        <Sun className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm font-medium text-black">Light</span>
                      </div>
                    </button>
                    <button className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gray-900">
                      <div className="flex items-center justify-center gap-2">
                        <Moon className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-white">Dark</span>
                      </div>
                    </button>
                    <button className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-r from-white to-gray-900">
                      <div className="flex items-center justify-center gap-2">
                        <Monitor className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Color Scheme</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#F97316] border-2 border-primary ring-2 ring-primary/30" />
                    <button className="w-10 h-10 rounded-full bg-blue-500 border-2 border-transparent hover:border-blue-500 transition-all" />
                    <button className="w-10 h-10 rounded-full bg-purple-500 border-2 border-transparent hover:border-purple-500 transition-all" />
                    <button className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-transparent hover:border-emerald-500 transition-all" />
                    <button className="w-10 h-10 rounded-full bg-pink-500 border-2 border-transparent hover:border-pink-500 transition-all" />
                    <button className="w-10 h-10 rounded-full bg-gray-500 border-2 border-transparent hover:border-gray-500 transition-all" />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Preferences
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Integrations Tab */}
            {activeTab === "integrations" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Integrations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Connect your advertising platforms
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Google Ads", icon: "G", color: "text-blue-500", bg: "bg-blue-500/10", status: "Connected" },
                    { name: "Meta Ads", icon: "M", color: "text-blue-600", bg: "bg-blue-600/10", status: "Connected" },
                    { name: "Instagram", icon: "I", color: "text-pink-500", bg: "bg-pink-500/10", status: "Connected" },
                    { name: "TikTok", icon: "T", color: "text-black dark:text-white", bg: "bg-gray-200/50 dark:bg-gray-800/50", status: "Disconnected" },
                  ].map((integration, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${integration.bg} flex items-center justify-center font-bold ${integration.color}`}>
                          {integration.icon}
                        </div>
                        <div>
                          <p className="font-medium">{integration.name}</p>
                          <p className={`text-xs ${integration.status === "Connected" ? "text-emerald-500" : "text-gray-400"}`}>
                            {integration.status}
                          </p>
                        </div>
                      </div>
                      <button className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        integration.status === "Connected" 
                          ? "text-red-500 border border-red-500/20 hover:bg-red-500/5" 
                          : "gradient-primary text-white hover:shadow-2xl hover:shadow-primary/30"
                      }`}>
                        {integration.status === "Connected" ? "Disconnect" : "Connect"}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}