"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <h2 className="text-2xl font-black text-navy mb-4">
        Something went wrong!
      </h2>
      <p className="text-navy/70 mb-6">
        Sorry, we couldn&apos;t load the search results.
      </p>
      <Button
        onClick={reset}
        className="bg-orange hover:bg-orange/90 text-navy border-2 border-navy font-bold retro-shadow"
      >
        Try again
      </Button>
    </>
  );
}
