import Link from 'next/link'

const benefits = [
  'Priority scheduling — you jump the queue',
  'Free service calls all year long',
  '$0 for covered repairs',
  'Proactive system monitoring',
  'Annual tune-ups included',
  'Exclusive member discounts',
  'Extended equipment warranties',
  'No overtime or emergency fees',
]

export default function HomePulseSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl border border-gray-200">

          {/* Left – dark panel */}
          <div className="bg-[#0E1C35] text-white p-12 flex flex-col justify-between">
            <div>
              {/* Logo mark */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#C4933F] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-montserrat font-black text-xl leading-tight">Care Plan</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest">Home Maintenance Program</div>
                </div>
              </div>

              <h2 className="font-montserrat font-black text-3xl leading-tight mb-4">
                Your Home&apos;s Health,<br />
                <span className="text-[#C4933F]">On Autopilot.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Our Care Plan takes the worry out of home comfort. We proactively maintain your systems, catch issues before they become breakdowns, and make sure you&apos;re always first in line when you need us.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-5 h-5 bg-[#C4933F]/20 border border-[#C4933F]/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#C4933F]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/care-plan"
              className="inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#B5842E] text-white font-montserrat font-bold text-sm uppercase tracking-wider px-7 py-4 transition-colors w-fit"
            >
              Learn About Care Plans
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right – pricing panel */}
          <div className="bg-[#F8F6F1] p-12 flex flex-col justify-center">
            <p className="text-[#C4933F] font-montserrat font-bold text-xs uppercase tracking-[3px] mb-3">Membership Plans</p>
            <h3 className="font-montserrat font-black text-2xl text-[#0E1C35] mb-8">Simple, Transparent Pricing</h3>

            {/* Plan cards */}
            <div className="space-y-4">
              {[
                {
                  name: 'Essential',
                  price: '$12',
                  per: '/mo',
                  desc: 'Annual tune-up + priority scheduling',
                  highlight: false,
                },
                {
                  name: 'Home Care',
                  price: '$24',
                  per: '/mo',
                  desc: 'Everything in Essential + free service calls & covered repairs',
                  highlight: true,
                },
                {
                  name: 'Home Care+',
                  price: '$39',
                  per: '/mo',
                  desc: 'Full coverage including plumbing & electrical systems',
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`flex items-center justify-between p-5 border-2 transition-all bg-white ${
                    plan.highlight
                      ? 'border-[#C4933F]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {plan.highlight && (
                      <span className="bg-[#C4933F] text-white text-[9px] font-montserrat font-black uppercase tracking-wider px-2 py-1">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <div className="font-montserrat font-black text-[#0E1C35] text-base">{plan.name}</div>
                      <div className="text-gray-400 text-xs mt-0.5 max-w-[200px]">{plan.desc}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="font-montserrat font-black text-2xl text-[#0E1C35]">{plan.price}</span>
                    <span className="text-gray-400 text-xs">{plan.per}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-xs mt-5 leading-relaxed">
              All plans include free enrollment and can be cancelled anytime. Contact us to discuss multi-system discounts.
            </p>

            <Link
              href="/care-plan#signup"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#0E1C35] hover:bg-[#C4933F] text-white font-montserrat font-bold text-sm uppercase tracking-wider px-7 py-4 transition-colors"
            >
              Join a Care Plan Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
