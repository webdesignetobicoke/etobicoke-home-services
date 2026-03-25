'use client'
import { useState } from 'react'

const reviews = [
  {
    name: 'Michael T.',
    initials: 'MT',
    date: 'February 2026',
    rating: 5,
    text: 'Fantastic experience from start to finish. The technician arrived on time, explained all options clearly and completed our furnace replacement the same day. Very fair pricing and no hidden fees. Will definitely call Etobicoke Home Services again.',
    service: 'Furnace Replacement',
  },
  {
    name: 'Sarah K.',
    initials: 'SK',
    date: 'January 2026',
    rating: 5,
    text: 'Called them for an emergency on a Sunday evening — pipes had frozen. They were at our home within 90 minutes and had everything sorted professionally. Incredibly responsive team, I can\'t say enough good things.',
    service: 'Emergency Plumbing',
  },
  {
    name: 'David R.',
    initials: 'DR',
    date: 'December 2025',
    rating: 5,
    text: 'Had them install a new AC unit and do a complete duct cleaning. The crew was tidy, respectful and finished ahead of schedule. The system works beautifully and the house is noticeably cooler already. Highly recommend.',
    service: 'AC Installation',
  },
  {
    name: 'Jennifer M.',
    initials: 'JM',
    date: 'November 2025',
    rating: 5,
    text: 'Their annual maintenance plan is worth every penny. They caught a small issue with our furnace heat exchanger before it became a major problem. Saved us potentially thousands of dollars. Proactive and thorough.',
    service: 'Furnace Maintenance',
  },
  {
    name: 'Carlos B.',
    initials: 'CB',
    date: 'October 2025',
    rating: 5,
    text: 'Our technician was extremely knowledgeable and took time to walk me through exactly what was wrong with our water heater and what my options were. No pressure, just honest advice. This is how home services should work.',
    service: 'Water Heater Repair',
  },
  {
    name: 'Linda W.',
    initials: 'LW',
    date: 'September 2025',
    rating: 5,
    text: 'Called for a furnace tune-up ahead of winter and was very impressed. The technician was on time, professional and even noticed our carbon monoxide detector was expired — replaced it at no charge. Great service.',
    service: 'Heating Service',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= count ? 'text-[#C4933F]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? reviews : reviews.slice(0, 3)

  return (
    <section className="py-20 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-3">Customer Reviews</p>
          <h2 className="font-montserrat font-black text-[38px] text-[#0E1C35] leading-tight mb-4">
            What Our Neighbours Are Saying
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-6 h-6 text-[#C4933F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-montserrat font-black text-2xl text-[#0E1C35]">4.9</span>
            <span className="text-gray-400 text-sm">from <strong className="text-gray-600">1,800+ reviews</strong> on Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((r) => (
            <div key={r.name} className="bg-white border border-gray-200 p-7 relative group hover:border-[#C4933F]/40 hover:shadow-md transition-all">
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-gray-100 text-6xl font-serif leading-none select-none">&ldquo;</div>

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <Stars count={r.rating} />
                <span className="text-[10px] text-gray-400 font-medium">{r.date}</span>
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic relative z-10">&ldquo;{r.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0E1C35] flex items-center justify-center flex-shrink-0">
                  <span className="font-montserrat font-black text-white text-xs">{r.initials}</span>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-[#0E1C35]">{r.name}</div>
                  <div className="text-[10px] text-gray-400">{r.service} · Verified Customer</div>
                </div>
                {/* Google icon */}
                <div className="ml-auto">
                  <div className="w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <span className="font-bold text-[#4285f4] text-xs">G</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-[#0E1C35] text-[#0E1C35] hover:bg-[#0E1C35] hover:text-white font-montserrat font-bold text-sm uppercase tracking-wider px-8 py-3.5 transition-all"
          >
            {showAll ? 'Show Less' : 'Read More Reviews'}
          </button>
        </div>
      </div>
    </section>
  )
}
