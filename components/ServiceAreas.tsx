import Link from 'next/link'

const areas = [
  'Etobicoke', 'Mississauga', 'Brampton', 'North York', 'Scarborough',
  'Toronto', 'Oakville', 'Burlington', 'Vaughan', 'Richmond Hill',
  'Markham', 'Pickering', 'Ajax', 'Whitby', 'Oshawa',
  'Georgetown', 'Milton', 'Hamilton', 'Newmarket', 'Aurora',
  'Thornhill', 'Woodbridge', 'Concord', 'Maple', 'Caledon',
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left text */}
          <div>
            <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-3">Service Area</p>
            <h2 className="font-montserrat font-black text-[36px] text-[#0E1C35] leading-tight mb-5">
              Proudly Serving Etobicoke &amp; the GTA
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              We&apos;re local — which means faster arrivals and technicians who know your neighbourhood. Don&apos;t see your area? Call us — we may have already expanded to you.
            </p>
            <div className="bg-[#0E1C35] p-6 mb-6">
              <div className="text-white/50 text-xs uppercase tracking-wider font-montserrat font-bold mb-2">24/7 Dispatch Line</div>
              <a href="tel:4165314200" className="font-montserrat font-black text-2xl text-[#C4933F] hover:text-[#E8BA6A] transition-colors">
                (416) 531-4200
              </a>
              <p className="text-white/40 text-xs mt-1">Emergency service available nights, weekends &amp; holidays</p>
            </div>
            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 border border-[#0E1C35] text-[#0E1C35] hover:bg-[#0E1C35] hover:text-white font-montserrat font-bold text-sm uppercase tracking-wider px-6 py-3.5 transition-all"
            >
              View Full Service Area
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: area tags grid */}
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {areas.map((area) => (
                <Link
                  key={area}
                  href={`/service-area/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white border border-gray-200 hover:border-[#C4933F] hover:text-[#C4933F] text-gray-600 hover:shadow-sm text-center py-2.5 px-3 text-[12px] font-semibold font-montserrat transition-all"
                >
                  {area}
                </Link>
              ))}
            </div>
            {/* Map placeholder */}
            <div className="mt-6 bg-white border border-gray-200 h-40 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-10 h-10 mx-auto mb-2 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-xs font-medium">Greater Toronto Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
