import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E1C35] py-20">
      {/* Subtle diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(196,147,63,0.8) 30px,
            rgba(196,147,63,0.8) 31px
          )`,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-4">Ready to Get Started?</p>
        <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-5">
          Experience the Etobicoke<br />
          <span className="text-[#C4933F]">Home Services</span> Difference
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join 15,000+ GTA homeowners who trust us for all their heating, cooling, plumbing, and electrical needs. Same-day appointments available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/schedule"
            className="bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-black text-sm uppercase tracking-wider px-10 py-5 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Service Online
          </Link>
          <a
            href="tel:4165314200"
            className="border border-white/30 hover:border-white/60 text-white hover:bg-white/8 font-montserrat font-black text-sm uppercase tracking-wider px-10 py-5 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call (416) 531-4200
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
          {[
            'No Overtime Fees',
            'Upfront Pricing',
            'Background-Checked Techs',
            'Licensed & Insured Ontario',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-3.5 h-3.5 text-[#C4933F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
