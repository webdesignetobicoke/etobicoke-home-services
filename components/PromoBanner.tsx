import Link from 'next/link'

const coupons = [
  {
    tag: 'Most Popular',
    headline: '$50 OFF',
    subtitle: 'Any HVAC Service',
    details: 'Repair, maintenance or inspection over $150. One per household.',
    code: 'SAVE50',
    expiry: 'Expires June 30, 2026',
    href: '/schedule',
    cta: 'Redeem Online',
  },
  {
    tag: 'New System',
    headline: '$1,000 OFF',
    subtitle: 'New HVAC Installation',
    details: 'Purchase & install a qualifying heating or cooling system. Financing available.',
    code: 'NEWUNIT',
    expiry: 'Expires Dec 31, 2026',
    href: '/coupons',
    cta: 'Claim This Deal',
  },
  {
    tag: 'Spring Special',
    headline: '$25 OFF',
    subtitle: 'Furnace or AC Tune-Up',
    details: 'Annual maintenance tune-up for any make or model. Labour included.',
    code: 'TUNE25',
    expiry: 'Expires Aug 31, 2026',
    href: '/schedule',
    cta: 'Book Tune-Up',
  },
]

export default function PromoBanner() {
  return (
    <section className="bg-[#F8F6F1] py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-2">Limited Time Offers</p>
            <h2 className="font-montserrat font-black text-3xl text-[#0E1C35]">Exclusive Savings Coupons</h2>
          </div>
          <Link
            href="/coupons"
            className="text-[#0E1C35] border border-[#0E1C35]/30 hover:border-[#C4933F] hover:text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-wider px-5 py-3 transition-colors"
          >
            View All Offers
          </Link>
        </div>

        {/* Coupon cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div key={coupon.code} className="relative bg-white coupon-dashed overflow-hidden group hover:shadow-md transition-shadow">

              {/* Scissors + cut line at top */}
              <div className="flex items-center gap-2 px-4 pt-3 pb-2 border-b border-dashed border-gray-200">
                <svg
                  className="w-4 h-4 text-gray-400 scissors-snip flex-shrink-0"
                  fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>
                <div className="flex-1 border-t border-dashed border-gray-300" />
                <span className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-gray-400">Clip &amp; Save</span>
                <div className="flex-1 border-t border-dashed border-gray-300" />
              </div>

              <div className="p-6">
                {/* Tag badge */}
                <span className="inline-block bg-[#0E1C35] text-[#C4933F] text-[9px] font-montserrat font-black uppercase tracking-[2px] px-3 py-1 mb-4">
                  {coupon.tag}
                </span>

                {/* Discount amount */}
                <div className="font-montserrat font-black text-5xl text-[#0E1C35] leading-none mb-1">
                  {coupon.headline}
                </div>
                <div className="font-montserrat font-bold text-[#C4933F] text-base mb-3">
                  {coupon.subtitle}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-5">
                  {coupon.details}
                </p>

                {/* Coupon code */}
                <div className="bg-[#F8F6F1] border border-dashed border-gray-300 px-4 py-2.5 flex items-center justify-between mb-4">
                  <span className="font-mono font-black text-lg tracking-[4px] text-[#0E1C35]">{coupon.code}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-montserrat">Promo Code</span>
                </div>

                {/* CTA */}
                <Link
                  href={coupon.href}
                  className="block text-center bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-bold text-xs uppercase tracking-wider py-3 transition-colors mb-3"
                >
                  {coupon.cta}
                </Link>

                {/* Expiry */}
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {coupon.expiry} · Cannot be combined with other offers
                </div>
              </div>

              {/* Punch holes on sides */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#F8F6F1] border border-gray-200" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#F8F6F1] border border-gray-200" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          *One coupon per visit per household. Must mention coupon at time of booking. Not valid with other offers. Etobicoke Home Services reserves the right to modify or discontinue offers.
        </p>
      </div>
    </section>
  )
}
