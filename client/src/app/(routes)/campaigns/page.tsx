"use client";

import Link from "next/link";
import { Plus, Search, Filter, Calendar, ArrowUpDown, Megaphone } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all your advertising campaigns</p>
        </div>
        <Link
          href="/campaigns/new"
          className="px-4 py-2.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" />
          New Campaign
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            Date
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-12 text-center">
        <div className="w-20 h-20 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
          <Megaphone className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No campaigns yet</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Create your first campaign and start advertising across all platforms.
        </p>
        <Link
          href="/campaigns/new"
          className="px-6 py-3 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Campaign
        </Link>
      </div>
    </div>
  );
}