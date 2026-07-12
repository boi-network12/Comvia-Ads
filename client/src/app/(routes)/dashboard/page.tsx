"use client";

import { TrendingUp, DollarSign, Users, Target, ArrowUp, ArrowDown, MoreVertical, Play, Pause, Edit3 } from "lucide-react";

const stats = [
  { label: "Total Spend", value: "₦450,000", change: "+12.5%", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Clicks", value: "12,847", change: "+8.2%", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Impressions", value: "285,432", change: "+23.1%", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
  { label: "Avg. CPC", value: "₦17", change: "-3.4%", icon: Target, color: "text-orange-500", bg: "bg-orange-500/10" },
];

const recentCampaigns = [
  { name: "Summer Sale 2026", platform: "Google Ads", budget: "₦100,000", spent: "₦72,400", clicks: 2847, conversions: 143, status: "Active" },
  { name: "Brand Awareness Q2", platform: "Meta Ads", budget: "₦150,000", spent: "₦89,200", clicks: 5231, conversions: 89, status: "Active" },
  { name: "Product Launch", platform: "TikTok", budget: "₦200,000", spent: "₦156,800", clicks: 4129, conversions: 67, status: "Paused" },
  { name: "Holiday Special", platform: "Instagram", budget: "₦80,000", spent: "₦80,000", clicks: 2640, conversions: 112, status: "Completed" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Good morning, John 👋</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Here&apos;s what&apos;s happening with your campaigns today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith("+");
          return (
            <div key={index} className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className={`text-sm font-medium flex items-center gap-1 ${
                  isPositive ? "text-emerald-500" : "text-red-500"
                }`}>
                  {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Campaigns */}
      <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Campaigns</h2>
          <button className="text-sm text-primary font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200/50 dark:border-gray-800/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Spent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((campaign, index) => {
                const statusColor = campaign.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : 
                                   campaign.status === "Paused" ? "bg-yellow-500/10 text-yellow-500" : 
                                   "bg-gray-500/10 text-gray-500";
                return (
                  <tr key={index} className="border-b border-gray-200/50 dark:border-gray-800/50 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-900/20 transition-colors">
                    <td className="px-6 py-4 font-medium">{campaign.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{campaign.platform}</td>
                    <td className="px-6 py-4 text-sm">{campaign.budget}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{campaign.spent}</td>
                    <td className="px-6 py-4 text-sm">{campaign.clicks.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm">{campaign.conversions}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          {campaign.status === "Active" ? <Pause className="w-4 h-4 text-gray-400" /> : <Play className="w-4 h-4 text-gray-400" />}
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <Edit3 className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}