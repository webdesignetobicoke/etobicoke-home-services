import Link from 'next/link'

const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Industry-Leading Technology',
    desc: 'We stay ahead of the curve with cutting-edge HVAC systems, energy-efficient solutions, and smart home integrations.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Certified, Background-Checked Techs',
    desc: 'Every technician is licensed, insured, and continuously trained. Professional, courteous and respectful of your home.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Flexible Financing Options',
    desc: 'We offer payment plans that work with any budget. Keep your home comfortable without the financial stress.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Proudly Serving Etobicoke & GTA',
    desc: 'Family-owned and operated. We live in the communities we serve — that\'s why we treat every home like our own.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual block */}
          <div className="relative">
            <div className="relative bg-[#0E1C35] aspect-[4/3] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C35]/80 to-transparent" />
              {/* Centered content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4 text-[#C4933F] opacity-80" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <p className="font-montserrat font-black text-lg opacity-70">Trusted Home Comfort</p>
                </div>
              </div>

              {/* Since badge */}
              <div className="absolute top-5 left-5 bg-[#C4933F] text-white px-4 py-3">
                <div className="font-montserrat font-black text-3xl leading-none">2004</div>
                <div className="text-white/70 text-[10px] uppercase tracking-wider">Established</div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-0 -mt-px">
              {[
                { num: '20+', label: 'Years Serving GTA' },
                { num: '15K+', label: 'Happy Customers' },
                { num: '24/7', label: 'Emergency Service' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1A2F52] text-center py-5 px-3 border-r border-white/10 last:border-0">
                  <div className="font-montserrat font-black text-2xl text-[#C4933F]">{stat.num}</div>
                  <div className="text-white/60 text-[10px] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Google rating float card */}
            <div className="absolute -bottom-5 -right-5 bg-white shadow-xl p-4 flex items-center gap-3 w-52 border border-gray-100">
              <div className="w-10 h-10 bg-[#4285f4] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#C4933F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-montserrat font-black text-sm text-[#0E1C35]">4.9 / 5.0</div>
                <div className="text-gray-400 text-[10px]">1,800+ Reviews</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:pl-4">
            <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-3">Why Choose Us</p>
            <h2 className="font-montserrat font-black text-[36px] text-[#0E1C35] leading-tight mb-4">
              Etobicoke&apos;s Most<br />Trusted Home Team
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              We don&apos;t just fix HVAC systems — we build lasting relationships. Our licensed technicians are committed to delivering the highest quality service with honest, upfront pricing across the GTA.
            </p>

            <div className="space-y-6 mb-10">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#F8F6F1] border border-gray-200 flex items-center justify-center text-[#C4933F] flex-shrink-0 mt-0.5">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[15px] text-[#0E1C35] mb-1">{r.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 bg-[#0E1C35] hover:bg-[#C4933F] text-white font-montserrat font-bold text-sm uppercase tracking-wider px-7 py-4 transition-colors"
            >
              Learn Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
