'use client';

import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';
import { Icons } from '@/components/icons';

const WA_NUMBER = '256784749832';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const industries = [
  { icon: <Icons.weldingBrass />, label: 'Welding businesses' },
  { icon: <Icons.constructionBrass />, label: 'Construction' },
  { icon: <Icons.realEstateBrass />, label: 'Real estate' },
  { icon: <Icons.barbershopBrass />, label: 'Barbershops' },
  { icon: <Icons.pharmacyBrass />, label: 'Pharmacies' },
  { icon: <Icons.floristBrass />, label: 'Florists' },
  { icon: <Icons.carwashBrass />, label: 'Car wash' },
  { icon: <Icons.landscapingBrass />, label: 'Landscapers' },
  { icon: <Icons.clothingBrass />, label: 'Clothing stores' },
];

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

const industryPanels = [
  {
    id: 'welding', label: 'Welding / Construction',
    tag: 'Website + visibility',
    hearing: '"I get all my jobs through word of mouth. But half my competitors have websites now and I think I\'m losing work to them."',
    solution: 'We build you a clean, professional website that shows your fabrication work, lists your services, and makes it dead-easy for contractors and site managers to get in touch. No fluff — just your work, presented properly. We also set it up so Google finds you when someone in your area searches for a welder.',
    ctaLabel: 'Get a website for my welding business',
    gradientClass: 'bg-[linear-gradient(135deg,#013220_0%,#024a30_100%)]',
    result: '+340%', resultLabel: 'in the first 90 days',
    barClasses: [
      'h-[20%] bg-[rgba(201,168,76,0.2)]',
      'h-[28%] bg-[rgba(201,168,76,0.2)]',
      'h-[35%] bg-[rgba(201,168,76,0.2)]',
      'h-[45%] bg-[rgba(201,168,76,0.2)]',
      'h-[58%] bg-[rgba(201,168,76,0.2)]',
      'h-[70%] bg-[rgba(201,168,76,0.2)]',
      'h-[92%] bg-[#C9A84C]'
    ],
  },
  {
    id: 'retail', label: 'Retail / Clothing',
    tag: 'Online store + e-commerce',
    hearing: '"I post on WhatsApp status and people DM me. But by the time they pay and I confirm, half of them have changed their mind or I\'ve oversold something."',
    solution: 'We move your catalogue to a proper online store where customers can browse, order, and pay — all without you being in the middle of every transaction. You still get a WhatsApp notification for every order. But now it\'s organised, tracked, and you\'re not losing sales to confusion.',
    ctaLabel: 'Move my store online properly',
    gradientClass: 'bg-[linear-gradient(135deg,#2d1a4a_0%,#4a2d7a_100%)]',
    result: '68%', resultLabel: 'of sales now fully automated',
    barClasses: [
      'h-[15%] bg-[rgba(201,168,76,0.2)]',
      'h-[25%] bg-[rgba(201,168,76,0.2)]',
      'h-[38%] bg-[rgba(201,168,76,0.2)]',
      'h-[50%] bg-[rgba(201,168,76,0.2)]',
      'h-[62%] bg-[rgba(201,168,76,0.2)]',
      'h-[78%] bg-[rgba(201,168,76,0.2)]',
      'h-[95%] bg-[#C9A84C]'
    ],
  },
  {
    id: 'pharmacy', label: 'Pharmacy / Health',
    tag: 'AI automation + WhatsApp',
    hearing: '"My WhatsApp is flooded every day. People asking if we have a certain drug, what time we close, whether we do deliveries. I can\'t keep up."',
    solution: 'We set up a WhatsApp automation that handles the repeat questions automatically — opening hours, delivery info, common stock enquiries — so your staff aren\'t answering the same thing 30 times a day. When something needs a real person, it hands over cleanly. You keep the human touch where it matters, and save hours every week where it doesn\'t.',
    ctaLabel: "Automate my pharmacy's WhatsApp",
    gradientClass: 'bg-[linear-gradient(135deg,#1a3a4a_0%,#1a5c6e_100%)]',
    result: '73%', resultLabel: 'handled automatically',
    barClasses: [
      'h-[10%] bg-[rgba(201,168,76,0.2)]',
      'h-[18%] bg-[rgba(201,168,76,0.2)]',
      'h-[30%] bg-[rgba(201,168,76,0.2)]',
      'h-[48%] bg-[rgba(201,168,76,0.2)]',
      'h-[62%] bg-[rgba(201,168,76,0.2)]',
      'h-[78%] bg-[rgba(201,168,76,0.2)]',
      'h-[90%] bg-[#C9A84C]'
    ],
  },
  {
    id: 'service', label: 'Local service biz',
    tag: 'Landing page + bookings',
    hearing: '"People message me to book a slot while I\'m mid-cut and I can\'t reply. By the time I do, they\'ve gone somewhere else."',
    solution: 'We build you a simple booking page and wire it to a WhatsApp bot that confirms appointments automatically. Customers book when they want, you get a notification, and nobody has to wait for a reply. We also set it up to send reminders so you get fewer no-shows.',
    ctaLabel: 'Set up bookings for my business',
    gradientClass: 'bg-[linear-gradient(135deg,#3a1a1a_0%,#5c2d1a_100%)]',
    result: '+55%', resultLabel: 'more bookings per month',
    barClasses: [
      'h-[20%] bg-[rgba(201,168,76,0.2)]',
      'h-[28%] bg-[rgba(201,168,76,0.2)]',
      'h-[38%] bg-[rgba(201,168,76,0.2)]',
      'h-[50%] bg-[rgba(201,168,76,0.2)]',
      'h-[62%] bg-[rgba(201,168,76,0.2)]',
      'h-[76%] bg-[rgba(201,168,76,0.2)]',
      'h-[90%] bg-[#C9A84C]'
    ],
  },
  {
    id: 'other', label: 'Something else',
    tag: 'Whatever you need',
    hearing: '"People find me on Instagram but there\'s nowhere to actually order or see my full range. I lose customers because they can\'t see a price or place an order easily."',
    solution: 'We\'ve worked with florists, real estate agents, car washes, event planners, tutors, and a lot of businesses that are hard to put in a box. The common thread is always the same — easier to find, easier to contact, easier to buy from.',
    ctaLabel: 'Tell us about my business',
    gradientClass: 'bg-[linear-gradient(135deg,#013220_0%,#4A5D23_100%)]',
    result: '20+', resultLabel: 'business types and counting',
    barClasses: [
      'h-[40%] bg-[rgba(201,168,76,0.2)]',
      'h-[55%] bg-[rgba(201,168,76,0.2)]',
      'h-[65%] bg-[rgba(201,168,76,0.2)]',
      'h-[72%] bg-[rgba(201,168,76,0.2)]',
      'h-[80%] bg-[#C9A84C]',
      'h-[88%] bg-[#C9A84C]',
      'h-[95%] bg-[#C9A84C]'
    ],
  },
];

const howSteps = [
  { num: '01', title: 'We talk', icon: <Icons.processTalkBrass />, desc: 'A free 20-minute call. You tell us about your business, your customers, and what\'s not working. No forms, no jargon — just a real conversation.' },
  { num: '02', title: 'We build', icon: <Icons.processBuildBrass />, desc: 'We design and build exactly what you need. You see it before it goes live and give feedback in plain English. Nothing launches without your approval.' },
  { num: '03', title: 'You grow', icon: <Icons.processGrowBrass />, desc: 'Your site goes live. Your automations run. We stick around for 30 days to make sure everything works exactly as it should.' },
];

const testimonials = [
  { tag: 'Welding', initials: 'KA', colorClass: 'bg-[#013220]', name: 'Kwame Asante', role: 'Steel fabrication · Kumasi, Ghana', quote: '"I was skeptical. I\'d heard \'get a website\' for years. But within two months I had new clients I\'d never met before calling me from the website. Worth every penny."' },
  { tag: 'Pharmacy', initials: 'NO', colorClass: 'bg-[#1a5c6e]', name: 'Nana Osei', role: 'Pharmacy · Accra, Ghana', quote: '"The WhatsApp bot handles all the basic stock questions now. My staff actually enjoys coming to work again. They\'re talking to customers, not typing the same answers over and over."' },
  { tag: 'Barbershop', initials: 'JK', colorClass: 'bg-[#5c2d1a]', name: 'Jamal Khalil', role: 'Barbershop · Dubai, UAE', quote: '"I didn\'t think a landing page would make a difference for a barbershop. I was wrong. Half my new customers now say they found me on Google. That never happened before."' },
];

const projects = [
  { label: 'FORGE', colorClass: 'bg-[linear-gradient(135deg,#013220,#4A5D23)]', tag: 'Website · Welding', title: 'From referrals-only to 10+ inbound enquiries a month', desc: 'A steel fabrication business in Ghana had zero online presence. We built them a professional site optimised for local and international search.', metric: '340% increase in enquiries' },
  { label: 'PHARMA', colorClass: 'bg-[linear-gradient(135deg,#1a3a4a,#1a5c6e)]', tag: 'AI Automation · Pharmacy', title: '73% of daily WhatsApp messages now handled without staff', desc: 'A busy community pharmacy was drowning in stock check messages. We deployed a WhatsApp AI assistant that handles repeat questions automatically.', metric: '4 hours/day saved per staff member' },
  { label: 'STORE', colorClass: 'bg-[linear-gradient(135deg,#2d1a4a,#5a3d8c)]', tag: 'E-commerce · Clothing', title: 'From WhatsApp status posts to a fully working online store', desc: 'A Lagos clothing boutique was managing everything through WhatsApp. We built them a real store — products, payments, delivery tracking, the works.', metric: '68% of orders now fully automated' },
];

const faqs = [
  { q: 'How much does it cost?', a: 'It depends on what you need, but we\'re built for small businesses — not enterprise budgets. A basic landing page starts from a flat fee. We tell you exactly what it costs before we start, with no hidden extras. Book a free call and we\'ll give you a number.' },
  { q: 'How long does it take?', a: 'A landing page can go live in 3–5 days. A full website typically takes 1–2 weeks. A WhatsApp automation setup takes around a week once we have everything we need from you. We don\'t drag things out.' },
  { q: 'I\'m not tech-savvy. Will I be able to manage it?', a: 'Yes. If you can send a WhatsApp message, you can update your own website. We include a handover session where we walk you through everything in plain English. And if something breaks or you get stuck, you can message us.' },
  { q: 'Do I need to be in a specific country?', a: 'No. We work with businesses across Africa, the Middle East, Europe, and beyond. Everything is remote. We\'ve never needed to be in the same room as a client to deliver great work.' },
  { q: 'What if I just need one small thing?', a: 'That\'s fine. We don\'t have a minimum. Some clients just need a one-page site with contact details and a WhatsApp button. We scope it to what you actually need — nothing more.' },
];

export default function HomePage() {
  const locale = useParams().locale as string;
  const localePath = (p: string) => `/${locale}${p}`;
  const [activePanel, setActivePanel] = useState('welding');
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="bg-[#00200f] min-h-screen flex items-center relative overflow-hidden pt-[68px] pb-36 md:pb-0">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(74,93,35,0.18)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 px-[5%] max-w-[1200px] mx-auto w-full">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-2 mb-6 md:mb-7">
              <span className="inline-block w-6 md:w-7 h-[1.5px] bg-[#C9A84C]" />
              <span className="text-[0.7rem] md:text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[#C9A84C]">For businesses that build things</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-5 md:mb-6 text-[clamp(2rem,7vw,4rem)]">
              Your customers<br />are looking for you.<br /><em className="not-italic text-[#C9A84C]">Can they find you?</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
              className="text-[rgba(240,236,226,0.6)] font-light leading-relaxed mb-8 md:mb-10 max-w-[520px] text-[1rem] md:text-[1.1rem]">
              Whether you weld steel, cut hair, fill prescriptions, or build homes — if you&apos;re not easy to find online, you&apos;re losing customers to someone who is. We fix that, without the tech headache.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }} className="flex flex-wrap gap-3 md:gap-4 items-center mb-20 md:mb-32">
              <a href="#cta" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#00200f] font-semibold px-5 md:px-6 py-3 md:py-[0.875rem] rounded hover:bg-[#e8c97a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] transition-all no-underline text-[0.85rem] md:text-[0.9rem]">
                Get a free audit ↗
              </a>
              <a href="#work" className="inline-flex items-center gap-2 text-[rgba(240,236,226,0.7)] border border-[rgba(240,236,226,0.2)] rounded px-5 md:px-6 py-3 md:py-[0.875rem] hover:border-[rgba(240,236,226,0.5)] hover:text-white transition-colors no-underline text-[0.85rem] md:text-[0.9rem]">
                See our work
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="absolute bottom-6 md:bottom-12 left-[5%] flex items-center gap-4 md:gap-8 z-[2] flex-wrap">
          {[{ val: '80+', lab: 'SMBs helped' }, { val: '12+', lab: 'countries' }, { val: '3 days', lab: 'avg. launch' }, { val: '100%', lab: 'plain english' }].map((s, i) => (
            <Fragment key={s.lab}>
              {i > 0 && <div className="w-px h-6 md:h-8 bg-[rgba(201,168,76,0.25)]" />}
              <div>
                <strong className="block font-display text-[1.1rem] md:text-[1.4rem] font-bold text-[#C9A84C]">{s.val}</strong>
                <span className="text-[0.6rem] md:text-[0.7rem] text-[rgba(240,236,226,0.4)] uppercase tracking-[0.06em]">{s.lab}</span>
              </div>
            </Fragment>
          ))}
        </motion.div>
        <div className="hidden md:flex absolute right-[5%] bottom-12 flex-col items-center gap-1.5 z-[2]">
          <span className="text-[0.65rem] tracking-[0.12em] uppercase text-[rgba(240,236,226,0.3)]">scroll</span>
          <div className="w-px h-12 bg-[linear-gradient(to_bottom,rgba(201,168,76,0.5),transparent)] animate-[scrollPulse_2s_ease_infinite]" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-[#024a30] py-5 overflow-hidden border-t border-[rgba(201,168,76,0.1)] border-b border-[rgba(201,168,76,0.1)]">
        <div className="flex w-max animate-[marqueeScroll_22s_linear_infinite]">
            {[...industries, ...industries].map((ind, i) => (
            <div key={i} className="flex items-center gap-2.5 px-10 text-[0.75rem] font-medium tracking-[0.06em] uppercase text-[rgba(240,236,226,0.4)] whitespace-nowrap border-r border-[rgba(201,168,76,0.12)]">
              {ind.icon} {ind.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section id="problem" className="bg-[#111612] py-16 md:py-24 px-[5%]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.72rem] tracking-[0.14em] uppercase text-[#C8A951] font-medium mb-4">Sound familiar?</p>
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-white leading-tight max-w-[600px] mb-12">
            Most businesses we talk to have the same story
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden gap-[1px] bg-[rgba(255,255,255,0.06)]">
            <div className="bg-[#111612] p-8 transition-colors hover:bg-[#1a2a1e]">
              <div className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-[#C8A951] mb-4">01</div>
              <h3 className="font-display text-[1rem] font-semibold text-white mb-2.5 leading-tight">{'\u201CI\u2019ve been meaning to get a website for years\u201D'}</h3>
              <p className="text-[0.875rem] leading-relaxed text-[rgba(255,255,255,0.45)]">You&apos;re busy running the business. Building a website keeps getting pushed to the back. Meanwhile, customers who can&apos;t find you are calling someone else.</p>
            </div>
            <div className="bg-[#111612] p-8 transition-colors hover:bg-[#1a2a1e]">
              <div className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-[#C8A951] mb-4">02</div>
              <h3 className="font-display text-[1rem] font-semibold text-white mb-2.5 leading-tight">{'\u201CI run everything on WhatsApp and it\u2019s getting out of hand\u201D'}</h3>
              <p className="text-[0.875rem] leading-relaxed text-[rgba(255,255,255,0.45)]">Answering the same questions at midnight. Sending the same price list 40 times a week. Your phone never stops — and neither do you.</p>
            </div>
            <div className="bg-[#111612] p-8 transition-colors hover:bg-[#1a2a1e]">
              <div className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-[#C8A951] mb-4">03</div>
              <h3 className="font-display text-[1rem] font-semibold text-white mb-2.5 leading-tight">{'\u201CMy old website looks like it\u2019s from 2009\u201D'}</h3>
              <p className="text-[0.875rem] leading-relaxed text-[rgba(255,255,255,0.45)]">You have a website, but it&apos;s embarrassing to share. Customers look at it and wonder if you&apos;re still in business.</p>
            </div>
            <div className="bg-[#111612] p-8 transition-colors hover:bg-[#1a2a1e]">
              <div className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-[#C8A951] mb-4">04</div>
              <h3 className="font-display text-[1rem] font-semibold text-white mb-2.5 leading-tight">{'\u201CI don\u2019t even know where to start\u201D'}</h3>
              <p className="text-[0.875rem] leading-relaxed text-[rgba(255,255,255,0.45)]">Everyone quotes you big numbers and uses words you&apos;ve never heard. You just want someone to sort it out without making it complicated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section id="pillars" className="bg-[#ede6d6] py-16 md:py-24 px-[5%]">
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


      {/* ── SELECTOR ── */}
      <section id="selector" className="bg-[#F5F0E6] py-16 md:py-24 px-[5%] text-left">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#4A5D23] font-extrabold mb-4">
          <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
          Find your fit
          <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
        </div>
        <h2 className="font-display font-extrabold text-[#1a1a18] leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">Tell us what you do — <br className="hidden sm:block" />we&apos;ll show you exactly how we help</h2>
        <p className="text-[#666660] text-base max-w-[480px] mb-12 leading-relaxed font-light">
          We&apos;ve worked with businesses across the board. Pick yours and see what we&apos;d actually do for you.
        </p>
        <div className="flex flex-wrap justify-start gap-3 mb-14">
          {industryPanels.map((panel) => {
            const isActive = activePanel === panel.id;
            const greenIcons: Record<string, React.ReactNode> = {
              welding: <Icons.welding />, retail: <Icons.clothing />,
              pharmacy: <Icons.pharmacy />, service: <Icons.barbershop />,
              other: <span className="text-[1rem]">✦</span>,
            };
            const brassIcons: Record<string, React.ReactNode> = {
              welding: <Icons.weldingBrass />, retail: <Icons.clothingBrass />,
              pharmacy: <Icons.pharmacyBrass />, service: <Icons.barbershopBrass />,
              other: <span className="text-[1rem] text-[#C9A84C]">✦</span>,
            };
            return (
              <button key={panel.id} onClick={() => setActivePanel(panel.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-[0.875rem] font-medium font-body cursor-pointer transition-all duration-250 ${
                  isActive
                    ? 'bg-[#013220] border-[#013220] text-white shadow-[0_4px_16px_rgba(1,50,32,0.25)]'
                    : 'bg-transparent border-[rgba(1,50,32,0.15)] text-[#555550] hover:border-[#4A5D23] hover:text-[#4A5D23] hover:bg-[rgba(74,93,35,0.06)]'
                }`}
              >
                {isActive ? brassIcons[panel.id] : greenIcons[panel.id]} {panel.label}
              </button>
            );
          })}
        </div>
        <div className="max-w-[920px] mx-auto">
          {industryPanels.filter(p => p.id === activePanel).map((panel) => (
            <motion.div key={panel.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-left grid md:grid-cols-2 gap-5 items-stretch">
              {/* LEFT — What we keep hearing + What we do for you */}
              <div className="flex flex-col gap-4">
                {/* Hearing card */}
                <div className="bg-[#013220] rounded-xl p-7 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-[0.08] pointer-events-none">
                    {{ welding: <Icons.weldingBrass />, retail: <Icons.clothingBrass />, pharmacy: <Icons.pharmacyBrass />, service: <Icons.barbershopBrass />, other: <span className="text-[2rem]">✦</span> }[panel.id]}
                  </div>
                  <div className="text-[0.68rem] font-semibold tracking-[0.13em] uppercase text-[#C8A951] mb-3">What we keep hearing</div>
                  <p className="font-display text-[1.15rem] font-semibold text-white leading-snug">{panel.hearing}</p>
                </div>
                {/* Solution card */}
                <div className="bg-white border border-[rgba(1,50,32,0.1)] rounded-xl p-7 flex-1">
                  <div className="text-[0.68rem] font-semibold tracking-[0.13em] uppercase text-[#4A5D23] mb-3">What we do for you</div>
                  <p className="text-[0.9rem] leading-relaxed text-[#444440] font-light">{panel.solution}</p>
                </div>
              </div>
              <div className={`rounded-lg p-6 md:p-8 min-h-[200px] md:min-h-[280px] flex flex-col justify-between relative overflow-hidden ${panel.gradientClass}`}>
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.07)_0%,transparent_60%)]" />
                <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[rgba(201,168,76,0.6)] relative z-[1]">New enquiries after launch</div>
                <div className="relative z-[1]">
                  <strong className="block font-display text-[2.8rem] font-extrabold text-[#C9A84C] leading-none mb-1">{panel.result}</strong>
                  <span className="text-[0.8rem] text-[rgba(240,236,226,0.5)] font-light">{panel.resultLabel}</span>
                </div>
                <div className="flex items-end gap-1.5 h-16 relative z-[1]">
                  {panel.barClasses.map((cls, j) => (
                    <div key={j} className={`flex-1 rounded-t-sm ${cls}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="bg-[#013220] py-16 md:py-24 px-[5%] relative overflow-hidden">
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display text-[14rem] font-extrabold text-[rgba(255,255,255,0.025)] tracking-tight pointer-events-none leading-none hidden md:block">
          HOW
        </div>
        <div className="max-w-[960px] mx-auto relative z-[1]">
          <FadeUp>
            <div className="mb-16">
              <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#C9A84C] font-medium mb-4">The process</div>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">Simple. No technical knowledge needed.</h2>
              <p className="text-[rgba(240,236,226,0.45)] text-base max-w-[480px] leading-relaxed font-light">
                Three steps. You don&apos;t need to understand code or design or any of that. You just need to tell us about your business.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-px rounded-xl overflow-hidden bg-[rgba(255,255,255,0.05)]">
            {howSteps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="bg-[rgba(0,32,15,0.6)] p-10 h-full relative transition-colors hover:bg-[rgba(0,32,15,0.9)]">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-[rgba(201,168,76,0.1)]">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.1em] text-[#C9A84C] mb-5">
                    {step.num}
                    <div className="flex-1 h-px bg-[rgba(201,168,76,0.2)]" />
                  </div>
                  <h3 className="font-display text-[1.15rem] font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[0.875rem] leading-relaxed text-[rgba(240,236,226,0.45)] font-light">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:flex absolute top-1/2 -right-[13px] -translate-y-1/2 w-[26px] h-[26px] bg-[#C9A84C] rounded-full items-center justify-center text-[0.75rem] text-[#00200f] font-bold z-[2]">
                      →
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="proof" className="bg-[#ede6d6] py-16 md:py-24 px-[5%]">
        <div className="max-w-[960px] mx-auto">
          <FadeUp>
            <div className="text-left mb-14">
              <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#4A5D23] font-medium mb-4">
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
                Real businesses
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
              </div>
              <h2 className="font-display font-extrabold text-[#1a1a18] leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">They said it. We didn&apos;t.</h2>
              <p className="text-[#666660] text-base max-w-[480px] leading-relaxed font-light">
                The best thing we can show you is what people who&apos;ve worked with us actually say.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[rgba(1,50,32,0.08)] relative transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(1,50,32,0.1)]">
                  <span className="absolute top-5 right-5 text-[0.65rem] font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-full bg-[rgba(74,93,35,0.1)] text-[#4A5D23]">{t.tag}</span>
                  <div className="text-[#C9A84C] text-[0.875rem] mb-4 tracking-[2px]">{'★★★★★'}</div>
                  <p className="text-[0.9rem] leading-relaxed text-[#1a1a18] mb-6 italic font-light">{t.quote}</p>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[0.8rem] text-white shrink-0 ${t.colorClass}`}>{t.initials}</div>
                    <div>
                      <div className="text-[0.8rem] font-semibold text-[#1a1a18]">{t.name}</div>
                      <div className="text-[0.72rem] text-[#888880]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="bg-[#F5F0E6] py-16 md:py-24 px-[5%]">
        <div className="max-w-[960px] mx-auto">
          <FadeUp>
            <div className="text-left mb-14">
              <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#4A5D23] font-medium mb-4">
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
                Our work
                <span className="w-6 h-px bg-[#4A5D23] opacity-50 inline-block" />
              </div>
              <h2 className="font-display font-extrabold text-[#1a1a18] leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">Problems we&apos;ve solved</h2>
              <p className="text-[#666660] text-base max-w-[480px] leading-relaxed font-light">Real projects. Real results.</p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {projects.map((p, i) => (
              <FadeUp key={p.label} delay={i * 0.1}>
                <Link href={localePath('/work')} className="block rounded-xl overflow-hidden border border-[rgba(1,50,32,0.1)] bg-white transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(1,50,32,0.12)] no-underline">
                  <div className={`h-[180px] flex items-center justify-center ${p.colorClass}`}>
                    <div className="font-display text-[2.5rem] font-bold text-[rgba(255,255,255,0.15)] tracking-tight">{p.label}</div>
                  </div>
                  <div className="p-6">
                    <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#4A5D23] block mb-2">{p.tag}</span>
                    <h3 className="font-display text-[1rem] font-bold text-[#1a1a18] mb-2 leading-tight">{p.title}</h3>
                    <p className="text-[0.825rem] text-[#666660] leading-relaxed font-light mb-4">{p.desc}</p>
                    <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#013220]">
                      <span className="text-[#4A5D23] text-sm">↑</span> {p.metric}
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="text-left">
              <Link href={localePath('/work')} className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[#013220] no-underline border-b border-[rgba(1,50,32,0.25)] pb-0.5 transition-all hover:text-[#4A5D23] hover:border-[#4A5D23] hover:gap-2.5">
                View all case studies →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#1a1a18] py-16 md:py-24 px-[5%]">
        <div className="max-w-[720px] mx-auto">
          <FadeUp>
            <div className="text-left mb-12">
              <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.14em] uppercase text-[#C9A84C] font-medium mb-4">
                <span className="w-6 h-px bg-[#C9A84C] opacity-50 inline-block" />
                Common questions
                <span className="w-6 h-px bg-[#C9A84C] opacity-50 inline-block" />
              </div>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight text-[clamp(1.75rem,3.5vw,2.5rem)] mb-3">Still not sure? Fair enough.</h2>
              <p className="text-[rgba(240,236,226,0.4)] text-base max-w-[480px] leading-relaxed font-light">
                Here are the questions we get asked most. Straight answers, no padding.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-px">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className={`border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden transition-colors ${openFaq === i ? 'bg-[rgba(255,255,255,0.07)]' : 'bg-[rgba(255,255,255,0.04)]'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full bg-none border-none p-5 flex items-center justify-between gap-4 cursor-pointer text-left font-body text-[0.9rem] font-medium text-white transition-colors hover:text-[#e8c97a]">
                    {faq.q}
                    <div className={`w-5 h-5 rounded-full border border-[rgba(201,168,76,0.4)] flex items-center justify-center text-[0.9rem] text-[#C9A84C] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFaq === i ? 'max-h-[200px]' : 'max-h-0'}`}>
                    <div className="px-5 pb-5 text-[0.875rem] leading-relaxed text-[rgba(240,236,226,0.45)] font-light">{faq.a}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="bg-[#00200f] py-20 md:py-28 px-[5%] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(74,93,35,0.22)_0%,transparent_70%)]" />
        <FadeUp>
          <div className="max-w-[640px] mx-auto relative z-[1]">
            <h2 className="font-display font-extrabold text-white leading-tight tracking-tight text-[clamp(2rem,4vw,3rem)] mb-4">
              Tell us about your<br /><span className="text-[#C9A84C]">business.</span>
            </h2>
            <p className="text-[rgba(240,236,226,0.45)] text-base mb-10 leading-relaxed font-light">
              No commitment, no sales pitch. A short call to understand what you need and whether we can help. If we can&apos;t, we&apos;ll tell you that too.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I'd like to talk about my business")}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-7 py-[0.875rem] rounded hover:bg-[#1db954] hover:-translate-y-0.5 transition-all no-underline text-[0.9rem]">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <Link href={localePath('/contact')}
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#00200f] font-semibold px-7 py-[0.875rem] rounded hover:bg-[#e8c97a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] transition-all no-underline text-[0.9rem]">
                Book a free call
              </Link>
            </div>
            <p className="text-[0.78rem] text-[rgba(240,236,226,0.25)]">Free. No commitment. Plain English, start to finish.</p>
          </div>
        </FadeUp>
      </section>

    </>
  );
}
