import { Metadata } from 'next';
import Link from 'next/link';
import { industries } from '@/lib/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'ProjectZed builds websites, AI automations and e-commerce stores for welding businesses, pharmacies, barbershops, clothing stores, construction companies, florists, car washes and more.',
  alternates: {
    canonical: 'https://projectzed.io/industries',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <section className="bg-[#00200f] px-[5%] py-28">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C9A84C] mb-7">
            <span className="w-7 h-px bg-[#C9A84C] inline-block" />
            Industries
          </div>
          <h1 className="font-display font-extrabold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08] tracking-tight mb-6">
            We work with businesses that build things.
          </h1>
          <p className="text-[rgba(240,236,226,0.6)] text-[1.05rem] leading-[1.7] font-light">
            Whatever industry you&apos;re in — if you need a digital presence, an automation or an online store, we&apos;ve probably done it before.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E6] px-[5%] py-24">
        <div className="max-w-[960px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/${locale}/industries/${industry.slug}`}
              className="bg-white border border-[rgba(1,50,32,0.09)] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(1,50,32,0.1)] transition-all duration-200 group"
            >
              <div className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#4A5D23] mb-3">
                {industry.service === 'website'
                  ? 'Website'
                  : industry.service === 'automation'
                  ? 'AI Automation'
                  : 'E-commerce'}
              </div>
              <h2 className="font-display font-bold text-[#1a1a18] text-[1.05rem] mb-2 group-hover:text-[#013220] transition-colors">
                {industry.name}
              </h2>
              <p className="text-[0.82rem] text-[#666660] leading-[1.6] font-light">
                {industry.subline}
              </p>
              <div className="mt-4 text-[0.78rem] font-semibold text-[#013220] flex items-center gap-1.5">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
