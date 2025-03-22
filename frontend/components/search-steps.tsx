"use client"

import { Circle, CheckCircle, Search } from "lucide-react"

interface SearchStepsProps {
  steps: string[]
  currentStep: number
  sources: string[]
  showingSources: boolean
}

export function SearchSteps({ steps, currentStep, sources, showingSources }: SearchStepsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div
            key={`step-${index}`}
            className={`flex items-start gap-3 py-2 ${index === currentStep ? "text-navy" : "text-navy/60"}`}
          >
            <div className="mt-0.5">
              {index < currentStep ? (
                <CheckCircle className="h-5 w-5 text-orange" />
              ) : index === currentStep ? (
                <Circle className="h-5 w-5 text-orange" />
              ) : (
                <Circle className="h-5 w-5 text-navy/40" />
              )}
            </div>
            <div className="flex-1">
              <p className={`${index === currentStep ? "font-bold" : ""}`}>{step}</p>

              {index === currentStep && showingSources && (
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-navy/70 font-medium">Searching</p>
                  <div className="flex flex-wrap gap-2">
                    {sources.map((source, i) => (
                      <div
                        key={`source-${i}`}
                        className="flex items-center gap-1.5 bg-white border-2 border-navy rounded-full px-3 py-1 text-sm font-medium retro-shadow"
                      >
                        <Search className="h-3 w-3 text-navy" />
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

