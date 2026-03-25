'use client'
import { useState } from 'react'

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="bg-[#0E1C35] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 flex-wrap">
          <span className="inline-flex items-center gap-2 text-sm font-black font-montserrat uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#C4933F] animate-pulse flex-shrink-0" />
            24/7 Emergency Service Available
          </span>
          <span className="text-sm text-white/60 font-medium hidden sm:inline">
            — No heat? Burst pipe? We dispatch immediately, day or night.
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:4165314200"
            className="bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-black text-xs uppercase tracking-wider px-4 py-2 transition-colors whitespace-nowrap"
          >
            (416) 531-4200
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/40 hover:text-white/80 transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
