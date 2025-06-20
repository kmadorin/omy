export default function Loading() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin h-8 w-8 border-4 border-orange border-t-transparent rounded-full"></div>
      <span className="ml-3 text-navy font-medium">Loading results...</span>
    </div>
  );
}
