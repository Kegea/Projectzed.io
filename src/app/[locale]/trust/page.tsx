'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';

const guarantees = [
  {
    title: '1. You Keep the Credentials',
    desc: 'Unlike agencies that host your website on their private servers and charge monthly maintainer fees just to keep it online, we do not hold your credentials hostage. Every account — from domain registrars and code hosts to payment gateways — is registered in your name. We give you a complete handbook with all keys upon launch.'
  },
  {
    title: '2. Safe, Predictable AI Behavior',
    desc: 'An automated agent that invents pricing or registers random appointments does more harm than good. We restrict our AI automation pipelines to exact database handbooks. If a client asks a question outside your cancellation rules, hours, or services, the bot instantly pauses and routes the ticket to you.'
  },
  {
    title: '3. Built strictly for operational utility',
    desc: 'We do not care about fancy page aesthetics that load slowly and fail to capture leads. Every page we code and every system we automate has a single operational objective: converting a digital visit into a booked call, a structural quote request, or a catalog checkout. If it doesn\'t serve a clear utility, we do not build it.'
  }
];

export default function TrustPage() {
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
            <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951]">Operating Standards</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-white leading-[1.1] mb-5 text-[clamp(2.2rem,5vw,3.8rem)]">
            Ironclad standards, zero fluff
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.65)] font-light leading-[1.7] max-w-[600px] text-[clamp(0.95rem,1.8vw,1.1rem)]">
            We build clean, robust assets that put hours back on your calendar and sales in your bank account. No lock-ins. No confusing contracts.
          </motion.p>
        </div>
      </header>

      <section className="py-24 px-[5%] bg-[#F5F0E8]">
        <div className="max-w-[900px] mx-auto">
          <FadeUp>
            <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-12 text-[clamp(1.8rem,3.5vw,2.6rem)]">Our Guarantees to SMBs</h2>
          </FadeUp>
          
          <div className="flex flex-col gap-12 border-t border-[rgba(1,50,32,0.12)] pt-12">
            {guarantees.map((g, i) => (
              <FadeUp key={g.title} delay={i * 0.1}>
                <div className="pb-12 border-b border-[rgba(1,50,32,0.12)] last:border-0 last:pb-0">
                  <h3 className="font-display font-bold text-[#013220] text-[1.6rem] mb-4">{g.title}</h3>
                  <p className="text-[0.98rem] text-[#5a6b5e] leading-[1.8]">{g.desc}</p>
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
            <h2 className="font-display font-extrabold text-white leading-tight mb-5 text-[clamp(2rem,5vw,3.2rem)]">Schedule a business friction audit</h2>
            <p className="text-[rgba(255,255,255,0.7)] text-[1rem] leading-[1.7] mb-10">We&apos;ll review your customer booking or storefront flow and identify where you are losing leads.</p>
            <div className="flex justify-center">
              <Link href={localePath('/contact')} className="bg-[#C8A951] text-[#111612] font-medium px-7 py-4 rounded hover:bg-[#e8c96a] transition-colors no-underline inline-flex items-center gap-2 text-[0.9rem]">
                Audit my operations
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
