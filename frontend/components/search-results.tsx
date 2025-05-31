interface SearchResultsProps {
  isSearching: boolean;
  query?: string;
}

const SearchResults = ({ isSearching, query }: SearchResultsProps) => {
  if (!isSearching && !query) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mt-8 rounded-xl bg-white border-2 border-gray-900 shadow-md p-6">
      {isSearching ? (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-300">
              <span className="text-orange-500 font-medium">AI</span>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">OHMYYIELD Assistant</p>
              <p className="text-sm text-gray-500">Searching...</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded animate-pulse-subtle w-full"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse-subtle w-11/12"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse-subtle w-10/12"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse-subtle w-9/12"></div>
          </div>
        </div>
      ) : query ? (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-300">
              <span className="text-orange-500 font-medium">AI</span>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">OHMYYIELD Assistant</p>
            </div>
          </div>
          <p className="text-gray-700">
            Searching for yield opportunities that match your query: "{query}"
          </p>
          <div className="text-sm text-gray-500 pt-2 border-t border-gray-200">
            <p>Your results will appear here soon.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults;
