'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';

const playbookSteps = [
  {
    title: '1. The Friction Audit',
    desc: 'We investigate where you are losing prospects — whether that\'s a slow-loading mobile page, a missing local search tag, or warm leads going unreplied on WhatsApp.'
  },
  {
    title: '2. High-Performance Build',
    desc: 'We construct a custom, responsive showcase that displays your portfolio of projects and lists your pricing clearly.'
  },
  {
    title: '3. AI Agent Injection',
    desc: 'We connect automation flows (WhatsApp business responders, calendar APIs) to handle routine queries, bookings, and billing details automatically.'
  }
];

const expectations = [
  {
    num: 'A',
    title: 'Full Ownership',
    desc: 'You own 100% of your assets. The domain registry, website code hosting accounts, payment processors, and WhatsApp configurations are registered in your name. We hold no hostage credentials.'
  },
  {
    num: 'B',
    title: 'Plain Language',
    desc: 'We don\'t talk about databases, frameworks, or cloud servers unless you ask. We explain what we build and why it benefits your client flow, using simple terms.'
  },
  {
    num: 'C',
    title: 'Built to Last',
    desc: 'We write clean, high-performance HTML/CSS and stable webhook routing. Your digital assets load instantly and run without requiring weekly maintenance or server rebuilds.'
  }
];

export default function AboutPage() {
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
            <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951]">Our Mandate & Philosophy</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-white leading-[1.1] mb-5 text-[clamp(2.2rem,5vw,3.8rem)]">
            We build digital infrastructure for physical businesses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.65)] font-light leading-[1.7] max-w-[600px] text-[clamp(0.95rem,1.8vw,1.1rem)]">
            Ghanaian, Moroccan, and East African service providers are leading in physical work, but are often invisible online. We change that by building fast, functional digital setups.
          </motion.p>
        </div>
      </header>

      <section className="py-24 px-[5%] bg-[#F5F0E8]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <FadeUp>
            <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#4A5D23] mb-5">Why we exist</p>
            <h2 className="font-display font-bold text-[#1C2B1F] leading-snug mb-6 text-[clamp(1.8rem,3vw,2.6rem)]">
              The digital divide in physical trades
            </h2>
            <p className="text-[#5a6b5e] text-[0.95rem] mb-5 leading-[1.75]">
              Most web design agencies focus on tech startups, venture-backed companies, or heavy corporate entities. They build complex systems, quote high prices, and use terminology that doesn&apos;t mean anything to a local business owner.
            </p>
            <p className="text-[#5a6b5e] text-[0.95rem] mb-5 leading-[1.75]">
              At ProjectZed, we build for the businesses that keep the physical world running — structural welders, construction firms, brick-and-mortar retail outlets, pharmacies, and local service operators.
            </p>
            <p className="text-[#5a6b5e] text-[0.95rem] leading-[1.75]">
              If your business is analog, you are leaving client leads and operating efficiency on the table. We construct the digital storefronts, payment interfaces, and auto-scheduling tools that let your business operate at an elite standard.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white border border-[rgba(1,50,32,0.12)] rounded-lg p-10 shadow-[0_10px_30px_rgba(1,50,32,0.02)]">
              <div className="w-10 h-[2px] bg-[#C8A951] mb-6" />
              <h3 className="font-display font-bold text-[#1C2B1F] text-xl mb-4">The 3-Step Playbook</h3>
              <p className="text-[0.88rem] text-[#5a6b5e] leading-[1.6] mb-6">
                We map, deploy, and configure your digital setups with zero friction:
              </p>
              
              <ol className="list-none m-0 p-0 relative">
                {playbookSteps.map((step, i) => (
                  <li key={step.title} className="pl-8 relative mb-8 last:mb-0">
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#C8A951] z-10" />
                    {i !== playbookSteps.length - 1 && (
                      <div className="absolute left-[3px] top-[14px] bottom-[-32px] w-[2px] bg-[rgba(1,50,32,0.1)]" />
                    )}
                    <h4 className="text-[0.95rem] font-semibold text-[#1C2B1F] mb-1">{step.title}</h4>
                    <p className="text-[0.85rem] text-[#5a6b5e] leading-[1.6]">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white border-y border-[rgba(1,50,32,0.12)] py-16 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: 'Sub-0.6s', label: 'Average Load Speeds' },
            { num: '90%+', label: 'Inquiry Automation' },
            { num: '24/7', label: 'Lead Acquisition' }
          ].map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display font-extrabold text-[#013220] leading-none mb-2 text-[clamp(2.5rem,5vw,3.8rem)]">
                  {stat.num}
                </div>
                <div className="text-[0.85rem] font-semibold text-[#5a6b5e] uppercase tracking-[0.08em]">{stat.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeUp>
            <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951] mb-4 text-center">Working together</p>
            <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-3 text-center text-[clamp(1.8rem,3.5vw,2.6rem)]">What you can expect from us</h2>
            <p className="text-[#5a6b5e] text-[0.95rem] leading-[1.75] mb-14 max-w-[600px] mx-auto text-center">
              We operate with absolute transparency. No hidden fees. No vendor lock-in.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">
            {expectations.map((exp, i) => (
              <FadeUp key={exp.num} delay={i * 0.1}>
                <div className="w-11 h-11 rounded-full bg-[#013220] text-white flex items-center justify-center font-display font-bold text-base mb-5">
                  {exp.num}
                </div>
                <h3 className="font-display font-bold text-[#1C2B1F] text-[1.1rem] mb-3">{exp.title}</h3>
                <p className="text-[#5a6b5e] text-[0.88rem] leading-[1.7]">{exp.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-[5%] bg-[#013220] text-center">
        <FadeUp>
          <div className="max-w-[680px] mx-auto">
            <p className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#C8A951] mb-5">Start today</p>
            <h2 className="font-display font-extrabold text-white leading-tight mb-5 text-[clamp(2rem,5vw,3.2rem)]">Audit your business friction</h2>
            <p className="text-[rgba(255,255,255,0.7)] text-[1rem] leading-[1.7] mb-10">We will schedule a call, map out your requirements, and give you a clear proposal.</p>
            <div className="flex justify-center">
              <Link href={localePath('/contact')} className="bg-[#C8A951] text-[#111612] font-medium px-7 py-4 rounded hover:bg-[#e8c96a] transition-colors no-underline inline-flex items-center gap-2 text-[0.9rem]">
                Connect with us
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
