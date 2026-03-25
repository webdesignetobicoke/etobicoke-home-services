'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const navItems = [
  {
    label: 'Heating',
    href: '/heating',
    children: [
      { label: 'Furnace Repair', href: '/furnace-repair' },
      { label: 'Furnace Installation', href: '/furnace-installation' },
      { label: 'Furnace Replacement', href: '/furnace-replacement' },
      { label: 'Furnace Maintenance', href: '/furnace-maintenance' },
      { label: 'Heat Pumps', href: '/heat-pumps' },
      { label: 'Boiler Services', href: '/boiler-services' },
      { label: 'Radiant Heating', href: '/radiant-heating' },
    ],
  },
  {
    label: 'Cooling',
    href: '/air-conditioning',
    children: [
      { label: 'AC Repair', href: '/ac-repair' },
      { label: 'AC Installation', href: '/air-conditioning-installation' },
      { label: 'AC Replacement', href: '/ac-replacement' },
      { label: 'AC Maintenance', href: '/ac-maintenance' },
      { label: 'Ductless Mini-Splits', href: '/ductless-mini-splits' },
      { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
    ],
  },
  {
    label: 'Plumbing',
    href: '/plumbing',
    children: [
      { label: 'Drain Cleaning', href: '/drain-cleaning' },
      { label: 'Water Heaters', href: '/water-heaters' },
      { label: 'Water Softeners', href: '/water-softeners' },
      { label: 'Sewer Services', href: '/sewer-services' },
      { label: 'Leak Repair', href: '/leak-repair' },
      { label: 'Pipe Repair', href: '/pipe-repair' },
    ],
  },
  {
    label: 'Electrical',
    href: '/electrical',
    children: [
      { label: 'Panel Upgrades', href: '/panel-upgrades' },
      { label: 'Outlet Installation', href: '/outlet-installation' },
      { label: 'EV Chargers', href: '/ev-chargers' },
      { label: 'Smart Home', href: '/smart-home' },
      { label: 'Generator Services', href: '/generator-services' },
      { label: 'Lighting', href: '/lighting' },
    ],
  },
  {
    label: 'Care Plan',
    href: '/care-plan',
    children: [
      { label: 'Plan Benefits', href: '/care-plan#benefits' },
      { label: 'Membership Pricing', href: '/care-plan#pricing' },
      { label: 'Sign Up', href: '/care-plan#signup' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo size="md" />
            <div>
              <div className="font-montserrat font-black text-xl text-[#0E1C35] leading-tight tracking-tight">
                Etobicoke<br />
                <span className="text-[#C4933F]">Home Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="nav-group relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2.5 font-montserrat font-bold text-[12.5px] uppercase tracking-wide text-[#1A2F52] hover:text-[#C4933F] transition-colors"
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div className="nav-dropdown hidden group-hover:block absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#C4933F] min-w-[210px] z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-[#F8F6F1] hover:text-[#C4933F] transition-colors border-b border-gray-50 last:border-0 font-medium"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">24/7 Emergency</div>
              <a href="tel:4165314200" className="font-montserrat font-black text-[20px] text-[#0E1C35] hover:text-[#C4933F] transition-colors leading-tight">
                (416) 531-4200
              </a>
            </div>
            <Link
              href="/schedule"
              className="bg-[#0E1C35] hover:bg-[#C4933F] text-white font-montserrat font-bold text-[12px] uppercase tracking-wider px-5 py-3.5 transition-colors whitespace-nowrap"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#0E1C35]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between py-3 font-montserrat font-bold text-sm uppercase text-[#0E1C35] border-b border-gray-100"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div className="bg-[#F8F6F1] mb-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-2.5 text-sm text-gray-600 hover:text-[#C4933F] border-b border-gray-100 last:border-0"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4 flex flex-col gap-3">
              <a href="tel:4165314200" className="flex items-center justify-center gap-2 bg-[#0E1C35] text-white font-montserrat font-bold py-3 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (416) 531-4200
              </a>
              <Link href="/schedule" className="flex items-center justify-center bg-[#C4933F] text-white font-montserrat font-bold py-3 text-sm uppercase tracking-wider">
                Book Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
