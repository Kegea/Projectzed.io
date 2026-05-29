'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';
import { Icons } from '@/components/icons';


const projects = [
  {
    title: 'Nzururu Safaris & Tours',
    link: 'https://refined-nzururu.vercel.app/',
    tags: ['Safari Agency', 'Booking Funnel'],
    image: '/images/screenshot_1.png',
    challenge: 'An East African tour agency was losing warm international leads because their old web layout was hard to navigate and booking safaris required dozen-step email exchanges.',
    deployment: 'We built an immersive, high-speed landing portal featuring structured safaris grids, custom itinerary builders, and direct WhatsApp reservation tunnels.',
    statsResult: 'Sub-0.6s Loading Speed',
    statsDesc: 'Perceived brand value elevated for international travelers, accelerating safari bookings.'
  },
  {
    title: 'Steel Tech Welding',
    link: 'https://steel-tech-alpha.vercel.app/',
    tags: ['Welding & Fabrication', 'Quote Capture'],
    image: '/images/screenshot_2.png',
    challenge: 'A structural welding and fabrication shop had no online footprint. Contractors and builders looking for structural quotes couldn\'t verify their capabilities or request estimates easily.',
    deployment: 'Designed and deployed their first business site, complete with high-resolution welding categories, custom fabrication estimates, and structured project photos.',
    statsResult: 'First Digital Footprint Deployed',
    statsDesc: 'Integrated local search tags so Kampala contractors looking for welders find their contact options directly.',
    reverse: true
  },
  {
    title: 'Tiwa Styles Storefront',
    link: 'https://tiwastyles.vercel.app/',
    tags: ['Fashion E-commerce', 'Retail Setup'],
    image: '/images/screenshot_3.png',
    challenge: 'A local clothing boutique was selling manually on WhatsApp status, causing order confusion, double-bookings on stock, and hours spent copying delivery addresses.',
    deployment: 'Engineered a mobile-first digital catalogue featuring structured collections, size selectors, and automatic checkout notification webhooks.',
    statsResult: '23 Orders in Week One',
    statsDesc: 'Completed transactions instantly without a single manual DM exchange or price query.'
  },
  {
    title: 'Blade & Bree Barbershop',
    link: 'https://blade-and-bree.vercel.app/',
    tags: ['B2C Salon', 'AI Booking'],
    image: '/images/screenshot_4.png',
    challenge: 'A premium barbershop was missing walk-ins and phone bookings because the barbers were focused on cuts and could not answer WhatsApp inquiries fast enough.',
    deployment: 'We built an ultra-fast mobile booking page linked to an automated WhatsApp booking assistant that registers appointments and updates calendars instantly.',
    statsResult: '90%+ Booking Automation',
    statsDesc: 'Reduced no-shows using automated SMS/WhatsApp calendar reminders.',
    reverse: true
  },
];

const minorModules = [
  {
    icon: 'telegram',
    title: 'Telegram Capture Bot',
    desc: 'A lightweight, autonomous server script that monitors group chats or channel messages for product inquiries, filters spam, and forwards warm leads directly to email.'
  },
  {
    icon: 'mail',
    title: 'Email Auto-Responder',
    desc: 'Connects to your custom business address. Scans inquiries for key requirements, flags junk, and auto-sends service briefs or pricing options to save hours of manual typing.'
  },
  {
    icon: 'layout',
    title: 'Single-Page Portfolios',
    desc: 'High-fidelity, single-page landing pages custom-coded for independent specialists (consultants, photographers) designed strictly to capture contact details.'
  }
];

export default function WorkPage() {
  const locale = useParams().locale as string;
  const localePath = (p: string) => `/${locale}${p}`;

  return (
    <>
      <header className="bg-[#013220] min-h-[50vh] flex flex-col justify-center px-[5%] pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(74,93,35,0.2)_0%,transparent_70%)]" />
        <div className="max-w-[900px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-5">
            <span className="w-5 h-[1.5px] bg-[#C8A951] inline-block" />
            <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951]">Case Studies & Deployments</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-white leading-[1.1] mb-5 text-[clamp(2.2rem,5vw,3.8rem)]">
            Real business problems solved with clean infrastructure
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.65)] font-light leading-[1.7] max-w-[600px] text-[clamp(0.95rem,1.8vw,1.1rem)]">
            We build solutions that make sense for SMBs. Check out the websites, e-commerce storefronts, and automated workflows we have shipped.
          </motion.p>
        </div>
      </header>

      <section className="py-24 px-[5%] bg-[#F5F0E8] text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951] mb-4">Our track record</p>
          <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-3 text-[clamp(1.8rem,3.5vw,2.6rem)]">Case Files</h2>
          <p className="text-[#5a6b5e] text-[0.95rem] leading-[1.75] mb-8 max-w-[600px] mx-auto">
            Every project we handle focuses on saving the owner time, capturing missed opportunities, and presenting work with professional authority.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-0 px-[5%] bg-[#F5F0E8]">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-16">
          {projects.map((p, i) => (
            <FadeUp key={p.title}>
              <article className={`bg-white rounded-lg border border-[rgba(1,50,32,0.12)] overflow-hidden flex flex-col md:grid ${p.reverse ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr]'} transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(1,50,32,0.06)]`}>
                
                {/* Image Box */}
                <div className={`bg-[#013220] min-h-[320px] relative overflow-hidden flex items-center justify-center ${p.reverse ? 'md:order-2' : ''}`}>
                  <div className="absolute top-5 left-5 flex gap-2 z-10">
                    <span className="bg-[#C8A951] text-[#111612] text-[0.65rem] font-semibold uppercase px-2.5 py-1 rounded tracking-[0.05em]">{p.tags[0]}</span>
                    <span className="bg-[#013220] text-white border border-[rgba(255,255,255,0.15)] text-[0.65rem] font-semibold uppercase px-2.5 py-1 rounded tracking-[0.05em]">{p.tags[1]}</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top opacity-85 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details Box */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${p.reverse ? 'md:order-1' : ''}`}>
                  <div className="font-display text-[0.8rem] font-semibold text-[#C8A951] tracking-[0.1em] uppercase mb-2">Project 0{i + 1}</div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="no-underline text-[#1C2B1F] hover:text-[#4A5D23] transition-colors">
                    <h2 className="font-display font-bold text-[1.8rem] leading-[1.2] mb-6">{p.title}</h2>
                  </a>
                  
                  <div className="mb-8">
                    <p className="text-[0.9rem] text-[#5a6b5e] leading-[1.7] mb-4">
                      <strong className="text-[#1C2B1F] font-medium">Challenge:</strong> {p.challenge}
                    </p>
                    <p className="text-[0.9rem] text-[#5a6b5e] leading-[1.7]">
                      <strong className="text-[#1C2B1F] font-medium">Deployment:</strong> {p.deployment}
                    </p>
                  </div>

                  <div className="bg-[rgba(1,50,32,0.03)] border-l-[3px] border-[#6b8c3e] px-6 py-4 mb-8">
                    <strong className="block font-display text-[1.1rem] text-[#013220] mb-1">{p.statsResult}</strong>
                    <span className="text-[0.82rem] text-[#5a6b5e]">{p.statsDesc}</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" 
                       className="text-[0.85rem] text-[#013220] font-medium no-underline inline-flex items-center gap-1.5 border-b border-[rgba(1,50,32,0.25)] pb-0.5 hover:text-[#6b8c3e] hover:border-[#6b8c3e] transition-all">
                      View Live Site ↗
                    </a>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 px-[5%] border-t border-[rgba(1,50,32,0.12)]">
        <div className="max-w-[1100px] mx-auto">
          <FadeUp>
            <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951] mb-4 text-center">Supporting Code</p>
            <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-3 text-center text-[clamp(1.8rem,3.5vw,2.6rem)]">Micro-Automation Modules</h2>
            <p className="text-[#5a6b5e] text-[0.95rem] leading-[1.75] mb-12 max-w-[600px] mx-auto text-center">
              We build standalone utilities that connect your systems and protect your operating time.
            </p>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {minorModules.map((m, i) => (
              <FadeUp key={m.title} delay={i * 0.1}>
                <div className="bg-[#F5F0E8] border border-[rgba(1,50,32,0.12)] rounded-md p-10 transition-transform duration-300 hover:-translate-y-1 hover:border-[#4A5D23] hover:shadow-[0_8px_24px_rgba(1,50,32,0.04)]">
                  <span className="mb-6 block flex items-center justify-center">
                    {m.icon === 'telegram' ? <Icons.telegramBot /> : m.icon === 'mail' ? <Icons.emailAutoResponder /> : <Icons.singlePagePortfolio />}
                  </span>
                  <h3 className="font-display font-bold text-[#1C2B1F] text-[1.15rem] mb-3">{m.title}</h3>
                  <p className="text-[0.88rem] text-[#5a6b5e] leading-[1.6]">{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-[5%] bg-[#013220] text-center">
        <FadeUp>
          <div className="max-w-[680px] mx-auto">
            <p className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#C8A951] mb-5">Ready for results?</p>
            <h2 className="font-display font-extrabold text-white leading-tight mb-5 text-[clamp(2rem,5vw,3.2rem)]">Let&apos;s discuss your business infrastructure</h2>
            <p className="text-[rgba(255,255,255,0.7)] text-[1rem] leading-[1.7] mb-10">We will evaluate your operational flow and tell you exactly what you need to streamline sales.</p>
            <div className="flex justify-center">
              <Link href={localePath('/contact')} className="bg-[#C8A951] text-[#111612] font-medium px-7 py-4 rounded hover:bg-[#e8c96a] transition-colors no-underline inline-flex items-center gap-2 text-[0.9rem]">
                Schedule a Business Audit
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
