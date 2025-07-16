import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
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
            type="text"
            placeholder="Search for DeFi yield opportunities..."
            className="w-full py-4 px-3 text-base text-gray-900 bg-transparent outline-none"
            value={query}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            disabled={!query.trim()}
            className="mr-2 rounded-lg transition-all bg-orange-500 hover:bg-orange-600 border border-gray-900"
            aria-label="Search"
          >
            <Sparkles className="h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
