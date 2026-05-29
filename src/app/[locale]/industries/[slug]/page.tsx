import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustry, industries } from '@/lib/industries';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: `Website & Digital Services for ${industry.name}`,
    description: industry.hero + ' ' + industry.subline,
    keywords: industry.keywords,
    alternates: {
      canonical: `https://projectzed.io/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} — ProjectZed`,
      description: industry.hero,
      url: `https://projectzed.io/industries/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { locale, slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const serviceLabel =
    industry.service === 'website'
      ? 'Website & Digital Presence'
      : industry.service === 'automation'
      ? 'AI & WhatsApp Automation'
      : 'E-commerce Store';

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#00200f] px-[5%] py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-[720px] relative z-10">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C9A84C] mb-7">
            <span className="w-7 h-px bg-[#C9A84C] inline-block" />
            {serviceLabel}
          </div>
          <h1 className="font-display font-extrabold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08] tracking-tight mb-6">
            {industry.hero}
          </h1>
          <p className="text-[rgba(240,236,226,0.6)] text-[1.05rem] leading-[1.7] font-light mb-10 max-w-[520px]">
            {industry.subline}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#00200f] font-semibold px-7 py-3.5 rounded text-[0.9rem] hover:bg-[#e8c97a] transition-colors"
            >
              Talk to us ↗
            </Link>
            <Link
              href={`/${locale}/work`}
              className="inline-flex items-center gap-2 border border-[rgba(240,236,226,0.2)] text-[rgba(240,236,226,0.7)] px-6 py-3.5 rounded text-[0.9rem] hover:border-[rgba(240,236,226,0.5)] hover:text-white transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="bg-[#F5F0E6] px-[5%] py-24">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#4A5D23] mb-4">
              The problem
            </div>
            <p className="text-[1rem] leading-[1.75] text-[#555550] font-light">
              {industry.problem}
            </p>
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#4A5D23] mb-4">
              What we do
            </div>
            <p className="text-[1rem] leading-[1.75] text-[#555550] font-light">
              {industry.solution}
            </p>
          </div>
        </div>
      </section>

      {/* RESULT + TESTIMONIAL */}
      <section className="bg-[#013220] px-[5%] py-24">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#C9A84C] mb-4">
              The result
            </div>
            <div className="font-display font-extrabold text-[#C9A84C] text-[3rem] leading-[1] mb-3">
              {industry.resultMetric}
            </div>
            <p className="text-[rgba(240,236,226,0.55)] text-[0.95rem] font-light">
              {industry.result}
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.15)] rounded-xl p-8">
            <p className="text-[rgba(240,236,226,0.8)] text-[0.95rem] leading-[1.75] italic font-light mb-5">
              &ldquo;{industry.testimonial.quote}&rdquo;
            </p>
            <div className="text-[0.75rem] font-semibold text-[#C9A84C] tracking-[0.04em] uppercase">
              {industry.testimonial.author}
            </div>
            <div className="text-[0.72rem] text-[rgba(240,236,226,0.4)] mt-0.5">
              {industry.testimonial.role}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00200f] px-[5%] py-24 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-display font-extrabold text-white text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-[rgba(240,236,226,0.5)] text-[0.95rem] leading-[1.65] font-light mb-8">
            Tell us about your {industry.name.toLowerCase()} business. We&apos;ll give you an honest answer about what you need and what it will cost.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#00200f] font-semibold px-8 py-4 rounded text-[0.95rem] hover:bg-[#e8c97a] transition-colors"
          >
            Tell us about your business
          </Link>
          <p className="text-[rgba(240,236,226,0.25)] text-[0.75rem] mt-4">
            Free. No commitment. Plain English.
          </p>
        </div>
      </section>
    </main>
  );
}
