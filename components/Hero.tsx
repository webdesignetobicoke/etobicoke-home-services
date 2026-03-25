'use client'
import { useState } from 'react'
import Link from 'next/link'

const services = [
  'Furnace Repair',
  'Furnace Installation',
  'AC Repair',
  'AC Installation',
  'Heat Pump',
  'Duct Cleaning',
  'Plumbing',
  'Electrical',
  'Water Heater',
  'Other',
]

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', time: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden bg-[#0E1C35]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1C35] via-[#0E1C35]/95 to-[#1A2F52]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">

          {/* Left: Hero content */}
          <div className="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C4933F]/20 border border-[#C4933F]/40 text-[#E8BA6A] text-[11px] font-montserrat font-bold uppercase tracking-widest px-4 py-2 mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Etobicoke&apos;s Most Trusted Home Services
            </div>

            {/* Headline */}
            <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.08] mb-6 tracking-tight">
              Expert Heating,<br />
              Cooling &amp; <span className="text-[#C4933F]">Plumbing</span><br />
              for Your Home
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-opensans">
              Etobicoke Home Services has kept GTA families comfortable for over 20 years.
              Available <strong className="text-white">24/7, 365 days a year</strong> — including weekends and holidays.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                '24/7 Emergency Service',
                'Same-Day Appointments',
                '100% Satisfaction Guaranteed',
                'Licensed & Insured Ontario',
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-2 bg-white/8 border border-white/15 text-white/90 text-xs font-semibold px-4 py-2 font-montserrat"
                >
                  <svg className="w-3.5 h-3.5 text-[#C4933F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {pill}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/schedule"
                className="bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-black text-sm uppercase tracking-wider px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book Service Now
              </Link>
              <a
                href="tel:4165314200"
                className="border border-white/30 hover:border-white/60 text-white font-montserrat font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all hover:bg-white/8 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (416) 531-4200
              </a>
            </div>

            {/* Review strip */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 text-[#C4933F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white/70 text-sm font-opensans">
                <strong className="text-white">4.9/5</strong> from <strong className="text-white">1,800+</strong> Google reviews
              </div>
              <div className="flex -space-x-2">
                {['JM', 'SK', 'TR', 'AP'].map((init) => (
                  <div key={init} className="w-8 h-8 rounded-full bg-[#C4933F]/80 border-2 border-[#0E1C35] flex items-center justify-center text-white text-[9px] font-bold">
                    {init}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="bg-white shadow-2xl fade-up fade-up-delay-2">
            {/* Form header */}
            <div className="bg-[#0E1C35] px-6 py-4 border-b-2 border-[#C4933F]">
              <h3 className="font-montserrat font-black text-white text-lg">Get a Free Estimate</h3>
              <p className="text-white/50 text-xs mt-0.5">We respond within 1 hour — no obligation</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#C4933F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C4933F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-montserrat font-black text-xl text-[#0E1C35] mb-2">Request Received!</h4>
                <p className="text-gray-500 text-sm">Our team will contact you within 1 hour. For emergencies, call us directly at <a href="tel:4165314200" className="text-[#C4933F] font-bold">(416) 531-4200</a>.</p>
              </div>
            ) : (
              <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">First Name *</label>
                    <input
                      type="text" required placeholder="John"
                      className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">Phone *</label>
                    <input
                      type="tel" required placeholder="(416) 555-0000"
                      className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">Email Address *</label>
                  <input
                    type="email" required placeholder="john@email.com"
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">Service Needed *</label>
                  <select
                    required
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors bg-white text-gray-700"
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">Preferred Time</label>
                  <select
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors bg-white text-gray-700"
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Any time</option>
                    <option>ASAP / Emergency</option>
                    <option>Morning (8am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–8pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 font-montserrat">Message (optional)</label>
                  <textarea
                    rows={2} placeholder="Describe your issue..."
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] transition-colors resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-black text-sm uppercase tracking-wider py-4 transition-colors"
                >
                  Get My Free Estimate
                </button>
                <p className="text-center text-[10px] text-gray-400">Your information is private. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
