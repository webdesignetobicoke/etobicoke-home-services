'use client'

export default function TopBar() {
  return (
    <div className="bg-[#F8F6F1] border-b border-gray-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9 flex-wrap gap-2">
        {/* Left links */}
        <div className="flex items-center gap-5 text-gray-500">
          <a href="/about-us" className="hover:text-[#C4933F] transition-colors font-medium">About Us</a>
          <a href="/financing" className="hover:text-[#C4933F] transition-colors font-medium">Financing</a>
          <a href="/careers" className="hover:text-[#C4933F] transition-colors font-medium">Careers</a>
          <a href="/blog" className="hover:text-[#C4933F] transition-colors font-medium">Blog</a>
          <a href="/contact" className="hover:text-[#C4933F] transition-colors font-medium">Contact</a>
          <a href="/coupons" className="font-semibold text-[#C4933F] hover:text-[#B5842E] transition-colors">
            Coupons &amp; Offers
          </a>
        </div>
        {/* Right: location + phone */}
        <div className="flex items-center gap-5">
          <span className="text-gray-400 hidden sm:flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Serving Etobicoke, Toronto &amp; the GTA
          </span>
          <a href="tel:4165314200" className="flex items-center gap-1.5 text-[#0E1C35] font-bold text-sm hover:text-[#C4933F] transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (416) 531-4200
          </a>
        </div>
      </div>
    </div>
  )
}
