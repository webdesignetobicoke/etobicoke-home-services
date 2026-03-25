const brands = [
  'Carrier', 'Lennox', 'Trane', 'American Standard', 'Goodman',
  'Rheem', 'Bryant', 'York', 'Daikin', 'Mitsubishi',
]

const trustBadges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    label: 'BBB A+',
    sub: 'Accredited Business',
    detail: 'Better Business Bureau',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: 'Google Guaranteed',
    sub: '4.9 Star Rating',
    detail: '1,800+ Verified Reviews',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    label: 'HomeStars',
    sub: 'Best of Award',
    detail: 'Verified Pro Contractor',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'WSIB Insured',
    sub: 'Ontario Compliant',
    detail: 'Workplace Safety & Insurance',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
    label: 'TSSA Registered',
    sub: 'Gas & Oil Licensed',
    detail: 'Technical Standards & Safety',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: 'ESA Licensed',
    sub: 'Electrical Safety',
    detail: 'Electrical Safety Authority',
  },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-2">Our Credentials</p>
          <h3 className="font-montserrat font-black text-2xl text-[#0E1C35]">Certified, Trusted & Verified</h3>
        </div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="bg-[#F8F6F1] border border-gray-200 flex flex-col items-center justify-center py-6 px-3 text-center hover:border-[#C4933F]/40 hover:shadow-sm transition-all group"
            >
              <div className="text-[#C4933F] mb-3 group-hover:scale-110 transition-transform">{badge.icon}</div>
              <div className="font-montserrat font-black text-sm text-[#0E1C35] mb-0.5">{badge.label}</div>
              <div className="text-[#C4933F] text-[10px] font-bold uppercase tracking-wide">{badge.sub}</div>
              <div className="text-gray-400 text-[9px] mt-0.5">{badge.detail}</div>
            </div>
          ))}
        </div>

        {/* Brands we service */}
        <div className="text-center mb-5">
          <p className="text-gray-400 text-xs uppercase tracking-[2px] font-montserrat font-bold">
            We Service All Major Brands
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-montserrat font-black text-gray-300 hover:text-gray-500 transition-colors text-sm uppercase tracking-wider cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
