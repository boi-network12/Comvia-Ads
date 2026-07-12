import { notFound } from "next/navigation";

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch campaign data here
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Campaign Details</h1>
        <p className="text-gray-600 dark:text-gray-400">ID: {params.id}</p>
      </div>
      <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">Campaign details will be displayed here</p>
      </div>
    </div>
  );
}