import Link from 'next/link'
import Logo from './Logo'

const footerLinks = [
  {
    title: 'Heating',
    links: [
      { label: 'Furnace Repair', href: '/furnace-repair' },
      { label: 'Furnace Installation', href: '/furnace-installation' },
      { label: 'Furnace Replacement', href: '/furnace-replacement' },
      { label: 'Furnace Maintenance', href: '/furnace-maintenance' },
      { label: 'Heat Pumps', href: '/heat-pumps' },
      { label: 'Boiler Services', href: '/boiler-services' },
    ],
  },
  {
    title: 'Cooling',
    links: [
      { label: 'AC Repair', href: '/ac-repair' },
      { label: 'AC Installation', href: '/air-conditioning-installation' },
      { label: 'AC Replacement', href: '/ac-replacement' },
      { label: 'AC Maintenance', href: '/ac-maintenance' },
      { label: 'Ductless Mini-Splits', href: '/ductless-mini-splits' },
      { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
    ],
  },
  {
    title: 'Plumbing & Electrical',
    links: [
      { label: 'Drain Cleaning', href: '/drain-cleaning' },
      { label: 'Water Heaters', href: '/water-heaters' },
      { label: 'Water Softeners', href: '/water-softeners' },
      { label: 'Sewer Services', href: '/sewer-services' },
      { label: 'Panel Upgrades', href: '/panel-upgrades' },
      { label: 'EV Chargers', href: '/ev-chargers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Careers', href: '/careers' },
      { label: 'Care Plan', href: '/care-plan' },
      { label: 'Financing', href: '/financing' },
      { label: 'Coupons', href: '/coupons' },
      { label: 'Blog', href: '/blog' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1525] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr] gap-12">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <Logo size="md" />
              <div>
                <div className="font-montserrat font-black text-lg text-white leading-tight">
                  Etobicoke<br />
                  <span className="text-[#C4933F]">Home Services</span>
                </div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Serving Etobicoke, Toronto and the Greater Toronto Area since 2004. Locally owned, licensed & insured.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:4165314200"
                className="flex items-center gap-3 text-[#C4933F] font-montserrat font-black text-xl hover:text-[#E8BA6A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (416) 531-4200
              </a>
              <a
                href="mailto:info@etobicokehomeservices.ca"
                className="flex items-center gap-3 text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@etobicokehomeservices.ca
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Etobicoke, ON M9C 1B8<br />Serving the entire Greater Toronto Area</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', letter: 'f' },
                { label: 'Instagram', letter: 'in' },
                { label: 'Google', letter: 'G' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 bg-white/8 hover:bg-[#C4933F] flex items-center justify-center text-white text-xs font-bold transition-colors"
                  aria-label={s.label}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-montserrat font-black text-[11px] uppercase tracking-[2px] text-white mb-4 pb-3 border-b border-white/8">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/40 hover:text-white/80 text-[13px] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Etobicoke Home Services. All rights reserved. Licensed & Insured in Ontario.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
