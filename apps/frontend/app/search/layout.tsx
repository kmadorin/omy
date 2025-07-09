"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-cream-100 rounded-xl p-8 border-2 border-gray-900 shadow-md">
      <div className="space-y-6">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" className="flex items-center text-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
