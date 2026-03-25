import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Heating',
    href: '/heating',
    desc: 'Furnace repair, installation & replacement. Heat pumps, boilers & more. We work with all makes and models.',
    links: ['Furnace Repair', 'Furnace Installation', 'Heat Pumps', 'Boiler Services'],
    hrefs: ['/furnace-repair', '/furnace-installation', '/heat-pumps', '/boiler-services'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Air Conditioning',
    href: '/air-conditioning',
    desc: 'AC repair, installation & maintenance. Central air and ductless mini-splits. Same-day service available.',
    links: ['AC Repair', 'AC Installation', 'Ductless Mini-Splits', 'AC Maintenance'],
    hrefs: ['/ac-repair', '/air-conditioning-installation', '/ductless-mini-splits', '/ac-maintenance'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Plumbing',
    href: '/plumbing',
    desc: 'Water heaters, drain cleaning, water softeners, sewer repair & leak detection for GTA homes.',
    links: ['Water Heaters', 'Drain Cleaning', 'Water Softeners', 'Leak Repair'],
    hrefs: ['/water-heaters', '/drain-cleaning', '/water-softeners', '/leak-repair'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Electrical',
    href: '/electrical',
    desc: 'Panel upgrades, outlet installation, EV charging stations, smart home solutions & generator services.',
    links: ['Panel Upgrades', 'EV Chargers', 'Smart Home', 'Generator Services'],
    hrefs: ['/panel-upgrades', '/ev-chargers', '/smart-home', '/generator-services'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-3">Our Services</p>
          <h2 className="font-montserrat font-black text-[38px] text-[#0E1C35] leading-tight mb-4">
            Complete Home Comfort Solutions
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            From heating and cooling to plumbing and electrical — Etobicoke Home Services is your one-stop shop for all home comfort needs across the GTA.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group border border-gray-200 hover:border-[#C4933F] transition-all duration-200 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Gold top accent */}
              <div className="h-0.5 bg-[#C4933F] w-0 group-hover:w-full transition-all duration-300" />

              <div className="p-7">
                <div className="w-14 h-14 bg-[#F8F6F1] flex items-center justify-center mb-5 text-[#0E1C35] group-hover:bg-[#C4933F] group-hover:text-white transition-all duration-200">
                  {svc.icon}
                </div>
                <h3 className="font-montserrat font-black text-xl text-[#0E1C35] mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-5">{svc.desc}</p>

                {/* Sub-links */}
                <ul className="space-y-1.5 mb-6">
                  {svc.links.map((link, i) => (
                    <li key={link}>
                      <Link
                        href={svc.hrefs[i]}
                        className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#C4933F] transition-colors font-medium"
                      >
                        <svg className="w-3 h-3 text-[#C4933F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  View All {svc.title} Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
