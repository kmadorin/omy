import { useState, useRef, useEffect } from "react";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

const SearchBar = ({ onSearch, isSearching }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isSearching) {
      onSearch(query.trim());
    }
  };

  // Example queries for DeFi yield search
  const exampleQueries = [
    "Show me the top 10 yields for USDT",
    "What are the highest APY opportunities with TVL over 1 million?",
    "Compare ETH and BTC yield opportunities",
    "Find stablecoin yields sorted by APY",
  ];

  const handleExampleClick = (example: string) => {
    setQuery(example);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Auto-focus the input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSearch}
        className={cn(
          "w-full relative transition-all duration-300 ease-in-out",
          isFocused ? "scale-105" : "scale-100",
        )}
      >
        <div
          className={cn(
            "relative flex items-center bg-white border-2 rounded-xl transition-all duration-300",
            isFocused
              ? "shadow-lg border-orange-500"
              : "shadow-md border-gray-900 hover:border-gray-600",
          )}
        >
          <Search
            className={cn(
              "h-5 w-5 ml-4 transition-colors",
              isFocused ? "text-orange-500" : "text-gray-400",
            )}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for DeFi yield opportunities..."
            className="w-full py-4 px-3 text-base text-gray-900 bg-transparent outline-none"
            disabled={isSearching}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!query.trim() || isSearching}
            className={cn(
              "h-10 w-10 mr-2 rounded-lg transition-all",
              query.trim() && !isSearching
                ? "bg-orange-500 hover:bg-orange-600 border border-gray-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed",
            )}
            aria-label="Search"
          >
            <Send
              size={18}
              className={
                query.trim() && !isSearching ? "text-white" : "text-gray-500"
              }
            />
          </Button>
        </div>
      </form>

      {/* Example queries */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {exampleQueries.map((example, index) => (
          <button
            key={index}
            onClick={() => handleExampleClick(example)}
            className="text-xs px-3 py-1.5 bg-orange-100 hover:bg-orange-200 rounded-full text-orange-700 border border-orange-300 transition-colors"
            disabled={isSearching}
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
