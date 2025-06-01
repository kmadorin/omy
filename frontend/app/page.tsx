"use client";
import Link from "next/link";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const exampleQueries = [
  "Show me top 5 yields for ETH on ethereum",
  "Show me top 10 yields on stablecoins",
];

function ExampleQueries() {
  return exampleQueries.map((example, index) => (
    <Link key={index} href={`/search?q=${encodeURIComponent(example)}`}>
      <Button
        className={
          index === 0
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }
        variant="outline"
      >
        {example} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  ));
}


export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-cream-100 rounded-xl p-8 border-2 border-gray-900 shadow-md">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
        JUICE YOUR YIELDS!
      </h1>

      <SearchBar />

      <div className="mt-8 flex flex-col items-center">
        <p className="text-navy mb-2">Try these examples:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <ExampleQueries />
        </div>
      </div>
    </div>
  );
}
