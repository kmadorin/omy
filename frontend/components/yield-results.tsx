"use client";

import { Badge } from "@/components/ui/badge";
import type { YieldResult } from "@/lib/types";
import { YieldCard } from "@/components/yield-card";

interface YieldResultsProps {
  query: string;
  results?: YieldResult[];
}

export function YieldResults({ query, results = [] }: YieldResultsProps) {
  if (!results || results.length === 0) {
    return (
      <div className="py-8 text-center text-navy/70 font-medium">
        No yield opportunities found for this query. Try a different search.
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Results for "{query}"
        </h2>
        <Badge
          variant="outline"
          className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full border border-orange-300"
        >
          {results.length} results
        </Badge>
      </div>
      <div className="mt-4">
        {results.map((item, index) => (
          <YieldCard
            data-id={item.id}
            key={`yield-${index}`}
            yieldItem={item}
          />
        ))}
      </div>
    </div>
  );
}
