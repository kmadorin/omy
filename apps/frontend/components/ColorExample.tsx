"use client"

import { Button } from "@/components/ui/button"

/**
 * Example component demonstrating the use of Tailwind color variables
 * instead of hardcoded hex values.
 * 
 * BEFORE:
 * className="bg-[#6B9BFF] text-[#1A1E36] border-2 border-[#1A1E36]"
 * 
 * AFTER:
 * className="bg-blue text-navy border-2 border-navy"
 */
export function ColorExample() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-black text-navy mb-6">Color System Example</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-cream rounded-xl border-2 border-navy p-6 retro-shadow">
          <h3 className="font-bold text-navy mb-4">Primary Button</h3>
          <Button className="bg-orange hover:bg-orange/90 text-navy border-2 border-navy font-bold retro-shadow">
            Orange Button
          </Button>
        </div>
        
        <div className="bg-cream rounded-xl border-2 border-navy p-6 retro-shadow">
          <h3 className="font-bold text-navy mb-4">Secondary Button</h3>
          <Button className="bg-blue hover:bg-blue/90 text-navy border-2 border-navy font-bold retro-shadow">
            Blue Button
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange rounded-xl border-2 border-navy p-6 retro-shadow">
          <p className="text-navy font-bold">Orange Background</p>
        </div>
        
        <div className="bg-yellow rounded-xl border-2 border-navy p-6 retro-shadow">
          <p className="text-navy font-bold">Yellow Background</p>
        </div>
        
        <div className="bg-blue rounded-xl border-2 border-navy p-6 retro-shadow">
          <p className="text-navy font-bold">Blue Background</p>
        </div>
      </div>
    </div>
  )
} 