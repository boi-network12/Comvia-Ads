export default function PlatformsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Connected Platforms</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your advertising platform connections</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {["Google Ads", "Meta Ads", "Instagram", "TikTok"].map((platform) => (
          <div key={platform} className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 flex items-center justify-between">
            <div>
              <p className="font-semibold">{platform}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connected</p>
            </div>
            <button className="px-4 py-2 text-sm text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}