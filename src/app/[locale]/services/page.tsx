'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';
import { Icons } from '@/components/icons';

const WA_NUMBER = '256784749832';
const WA_MSG = encodeURIComponent("Hi, I'd like to talk about a website for my business");

const pillars = [
  {
    num: '01', label: 'Foundation', icon: <Icons.webPresence />,
    title: 'Web presence that actually works',
    desc: 'A website that loads fast, looks like 2026, and shows up when your customers search. Built for phones first, because that\'s where your customers are.',
    items: ['Mobile-first design', 'Local SEO baked in', 'Live in days, not months'],
    link: '/services/web-design',
  },
  {
    num: '02', label: 'Leverage', icon: <Icons.aiWhatsapp />,
    title: 'AI automation on WhatsApp',
    desc: 'A smart assistant that answers the same questions your staff handles a hundred times a day — automatically, 24/7, in your customers\' language.',
    items: ['WhatsApp Business API', 'Custom AI agent', 'Hands off to humans when needed'],
    link: '/services/ai-automation',
  },
  {
    num: '03', label: 'Growth', icon: <Icons.ecommerce />,
    title: 'E-commerce, properly set up',
    desc: 'From WhatsApp statuses to a real online store. Products, payments, delivery tracking — so people can buy from you while you sleep.',
    items: ['Online payments + COD', 'Inventory & order tracking', 'WhatsApp-integrated checkout'],
    link: '/services/ecommerce',
  },
];

const industryButtons = [
  { icon: <Icons.weldingBrass />, label: 'Welding businesses', slug: 'welding-businesses' },
  { icon: <Icons.constructionBrass />, label: 'Construction', slug: 'construction' },
  { icon: <Icons.realEstateBrass />, label: 'Real estate', slug: 'real-estate' },
  { icon: <Icons.barbershopBrass />, label: 'Barbershops', slug: 'barbershops' },
  { icon: <Icons.pharmacyBrass />, label: 'Pharmacies', slug: 'pharmacies' },
  { icon: <Icons.floristBrass />, label: 'Florists', slug: 'florists' },
  { icon: <Icons.carwashBrass />, label: 'Car wash', slug: 'car-wash' },
  { icon: <Icons.landscapingBrass />, label: 'Landscapers', slug: 'landscaping' },
  { icon: <Icons.clothingBrass />, label: 'Clothing stores', slug: 'clothing-stores' },
];

export default function ServicesPage() {
  const locale = useParams().locale as string;
  const localePath = (p: string) => `/${locale}${p}`;

  return (
    <>
      <header className="bg-[#013220] min-h-[40vh] flex flex-col justify-center px-[5%] pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(74,93,35,0.2)_0%,transparent_70%)]" />
        <div className="max-w-[900px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-5 h-[1.5px] bg-[#C8A951] inline-block" />
              <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951]">What we do</span>
            </div>
            <h1 className="font-display font-extrabold text-white leading-[1.1] mb-5 text-[clamp(2.2rem,5vw,3.8rem)]">Services</h1>
            <p className="text-[rgba(255,255,255,0.65)] font-light leading-[1.7] max-w-[600px] text-[clamp(0.95rem,1.8vw,1.1rem)]">
              Three things we build for businesses that need more clients and less hassle.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── PILLARS ── */}
      <section className="bg-[#ede6d6] py-16 md:py-24 px-[5%]">
        <div className="max-w-[1080px] mx-auto">
          <FadeUp>
            <div className="text-left mb-14">
              <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#4A5D23] font-medium mb-4">
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
                What we build
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
              </div>
              <h2 className="font-display font-extrabold text-[#1a1a18] leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">Three things. Done properly.</h2>
              <p className="text-[#666660] text-base max-w-[480px] leading-relaxed font-light">
                We don&apos;t do everything. We do the three things that actually move the needle for businesses like yours.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.1}>
                <div className="bg-white border border-[rgba(1,50,32,0.08)] rounded-xl p-9 flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(1,50,32,0.10)] hover:border-[rgba(74,93,35,0.35)]">
                  <div className="flex items-center gap-2.5 font-display text-[0.7rem] font-bold tracking-[0.14em] text-[#4A5D23] mb-6">
                    {p.num} — {p.label}
                    <div className="flex-1 h-px bg-[rgba(74,93,35,0.2)]" />
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[linear-gradient(135deg,#013220,#4A5D23)]">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-[1.2rem] font-bold text-[#1a1a18] mb-3 leading-tight tracking-tight">{p.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-[#555550] font-light mb-6 flex-1">{p.desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.items.map((item) => (
                      <li key={item} className="text-[0.82rem] text-[#1a1a18] flex items-center gap-2">
                        <span className="text-[#4A5D23] font-bold text-[0.85rem]">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={localePath(p.link)} className="inline-flex items-center gap-1.5 text-[0.825rem] font-semibold text-[#013220] no-underline transition-all hover:text-[#4A5D23] hover:gap-2.5">
                    See how it works →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#F5F0E6] py-16 md:py-24 px-[5%] text-left">
        <FadeUp>
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#4A5D23] font-extrabold mb-4">
            <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
            Industries we&apos;ve worked with
            <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
          </div>
          <div className="relative">
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              {[...industryButtons, ...industryButtons].map((ind, i) => (
                <Link key={`${ind.slug}-${i}`} href={localePath(`/industries/${ind.slug}`)} className="snap-start shrink-0 inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-[rgba(1,50,32,0.12)] text-[0.85rem] font-medium text-[#555550] hover:border-[#C8A951] hover:text-[#013220] transition-colors no-underline">
                  {ind.icon} {ind.label}
                </Link>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F5F0E6] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F5F0E6] to-transparent pointer-events-none" />
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-[5%] text-center">
        <div className="max-w-[600px] mx-auto">
          <FadeUp>
            <h2 className="font-display font-extrabold text-[#1a1a18] leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-4">You don&apos;t see your company type?</h2>
            <p className="text-[#666660] text-base mb-8 leading-relaxed font-light">
              Tell us about your business — we&apos;ll recommend what you actually need. No jargon, no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-medium px-7 py-4 rounded hover:bg-[#1ebe5a] transition-colors no-underline text-[0.92rem]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Message us on WhatsApp
              </a>
              <Link href={localePath('/contact')}
                className="inline-flex items-center gap-2 text-[#555550] border border-[rgba(1,50,32,0.15)] rounded px-7 py-4 hover:border-[#4A5D23] hover:text-[#4A5D23] transition-colors no-underline text-[0.92rem]">
                Fill out contact form
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
