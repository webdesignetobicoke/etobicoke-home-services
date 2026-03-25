'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 20, suffix: '+', label: 'Years in Business', sub: 'Serving Etobicoke & the GTA since 2004' },
  { num: 15, suffix: 'K+', label: 'Happy Customers', sub: 'And growing every day' },
  { num: 4.9, suffix: '★', label: 'Google Rating', sub: 'From 1,800+ verified reviews' },
  { num: 24, suffix: '/7', label: 'Emergency Service', sub: '365 days a year, no exceptions' },
]

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const isDecimal = target % 1 !== 0

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const val = isDecimal
              ? (eased * target).toFixed(1)
              : Math.floor(eased * target).toString()
            setCurrent(parseFloat(val))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  const display = target % 1 !== 0 ? current.toFixed(1) : Math.floor(current)
  return <span ref={ref}>{display}</span>
}

export default function StatsBar() {
  return (
    <section className="bg-[#0E1C35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center px-8 py-6 ${i > 1 ? 'border-t border-white/8 lg:border-t-0' : ''}`}>
              <div className="font-montserrat font-black text-5xl text-[#C4933F] leading-none mb-2">
                <CountUp target={s.num} suffix={s.suffix} />
                <span>{s.suffix}</span>
              </div>
              <div className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
