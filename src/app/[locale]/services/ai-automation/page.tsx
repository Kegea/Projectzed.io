'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import FadeUp from '@/components/FadeUp';

const WA_NUMBER = '256784749832';
const WA_MSG = encodeURIComponent("Hi, I'd like to talk about AI automation for my business");

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(1,50,32,0.12)] overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left text-[0.975rem] font-medium text-[#1C2B1F] hover:text-[#013220] transition-colors bg-transparent border-none cursor-pointer gap-4">
        {q}
        <span className={`w-5 h-5 rounded-full border border-[rgba(1,50,32,0.2)] flex items-center justify-center text-[#5a6b5e] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45 bg-[#013220] border-[#013220] text-white' : ''}`}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
        <p className="text-[0.9rem] text-[#5a6b5e] leading-[1.8] pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

const automationSteps = [
  { color: 'border-l-[#013220]', title: '1. Instant FAQ Responses', body: 'Opening hours, address, services, pricing, and stock items answered instantly without human effort.' },
  { color: 'border-l-[#4A5D23]', title: '2. Direct Calendar Scheduling', body: 'Integrates with Cal.com or Google Calendar so customers can book directly inside WhatsApp or web chat.' },
  { color: 'border-l-[#C8A951]', title: '3. Smart Lead Transfer', body: 'If a complex request comes in, the bot alerts you and hands over the conversation cleanly.' },
];

const checklist = [
  { label: 'Custom training:', body: 'Locked to your exact data. No guessing, no fake information.' },
  { label: 'WhatsApp Business API:', body: 'Deployed officially on your phone number.' },
  { label: 'Automatic notifications:', body: 'Instantly receive summaries of what the lead wants.' },
  { label: 'CRM connection:', body: 'Auto-saves contact details to Airtable or Google Sheets.' },
];

const steps = [
  { num: '1', title: 'Knowledge Mapping', body: 'We compile all your FAQs, pricing tables, booking structures, and contact parameters. This defines the bot\'s rules.' },
  { num: '2', title: 'Integration & Wiring', body: 'We construct the logic paths using n8n or Voiceflow, linking the AI model to Twilio or your website chat script.' },
  { num: '3', title: 'Live Testing', body: 'We verify the bot internally to make sure it handles spelling errors, follows instructions, and hands off to your phone correctly.' },
];

const faqs = [
  { q: 'Can the bot make up information?', a: 'No. We train the AI model under strict system instructions that restrict it to your database. If a customer asks a question outside your handbook, the bot routes the ticket to you.' },
  { q: 'Do I need a separate phone number for the WhatsApp bot?', a: 'We recommend using a dedicated business WhatsApp number so personal chats don\'t conflict with customer workflows. We\'ll assist you in buying and configuring the number during setup.' },
  { q: 'What tools do you use to build it?', a: 'We use n8n, Voiceflow, and official Meta developer interfaces (Twilio or WhatsApp Cloud API) paired with OpenAI or Claude models for high speed and reliability.' },
];

export default function AiAutomationPage() {
  const locale = useParams().locale as string;
  const localePath = (p: string) => `/${locale}${p}`;

  return (
    <>
      {/* SUB-HERO */}
      <header className="bg-[#013220] min-h-[50vh] flex flex-col justify-center px-[5%] pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(74,93,35,0.2)_0%,transparent_70%)]" />
        <div className="max-w-[900px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-5">
            <span className="w-5 h-[1.5px] bg-[#C8A951] inline-block" />
            <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951]">Smart operational systems</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-white leading-[1.1] mb-5 text-[clamp(2.2rem,5vw,3.8rem)]">
            Automate your customer conversations 24/7
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.65)] font-light leading-[1.7] max-w-[600px] text-[clamp(0.95rem,1.8vw,1.1rem)]">
            We design and deploy custom AI voice and text agents that respond instantly, book appointments, and capture leads while you focus on the physical side of your business.
          </motion.p>
        </div>
      </header>

      {/* DETAILS GRID */}
      <section className="py-24 px-[5%] bg-[#F5F0E8]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <FadeUp>
            <div className="bg-white border border-[rgba(1,50,32,0.12)] rounded-lg p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="w-10 h-[2px] bg-[#C8A951] mb-6" />
              <h3 className="font-display font-bold text-[#1C2B1F] text-lg mb-4">Automated Operations</h3>
              <p className="text-[0.88rem] text-[#5a6b5e] leading-[1.6] mb-5">
                We build intelligence directly into your existing messaging channels. Here is how it functions:
              </p>
              <div className="flex flex-col gap-2.5">
                {automationSteps.map((s) => (
                  <div key={s.title} className={`p-2.5 bg-[#F5F0E8] rounded border-l-[3px] ${s.color}`}>
                    <strong className="block text-[0.88rem] mb-0.5">{s.title}</strong>
                    <span className="text-[0.8rem] text-[#5a6b5e]">{s.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#4A5D23] mb-5">Save time, keep leads</p>
            <h2 className="font-display font-bold text-[#1C2B1F] leading-snug mb-6 text-[clamp(1.8rem,3vw,2.6rem)]">
              Your business shouldn&apos;t stop because you are working
            </h2>
            <p className="text-[#5a6b5e] text-[0.95rem] mb-5 leading-[1.75]">
              Clients don&apos;t like waiting for a reply. If a prospect messages your WhatsApp and you reply three hours later because you were on a job site, they&apos;ve likely already messaged your competitor.
            </p>
            <p className="text-[#5a6b5e] text-[0.95rem] mb-8 leading-[1.75]">
              We set up custom WhatsApp, Telegram, and website-embedded chat agents. They answer the same repetitive queries 40 times a day, so you only step in when a sale is ready to close.
            </p>
            <ul className="list-none space-y-1 mt-6">
              {checklist.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5 py-2.5 border-b border-[rgba(1,50,32,0.12)] text-[0.92rem] text-[#1C2B1F] last:border-none">
                  <span className="text-[#6b8c3e] mt-0.5">✓</span>
                  <span><strong>{item.label}</strong> {item.body}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* HOW WE DEPLOY */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeUp>
            <span className="block text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951] mb-4">The workflow</span>
            <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-3 text-[clamp(1.8rem,3.5vw,2.6rem)]">How we deploy your AI agent</h2>
            <p className="text-[#5a6b5e] text-[0.95rem] leading-[1.75] mb-14 max-w-[520px]">We build custom logic, so the bot behaves exactly like a trained member of your team.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
                <div className="w-11 h-11 rounded-full bg-[#013220] text-white flex items-center justify-center font-display font-bold text-base mb-5">{s.num}</div>
                <h3 className="font-display font-bold text-[#1C2B1F] text-[1.1rem] mb-3">{s.title}</h3>
                <p className="text-[#5a6b5e] text-[0.88rem] leading-[1.7]">{s.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-[5%] bg-[#F5F0E8]">
        <div className="max-w-[780px] mx-auto">
          <FadeUp>
            <span className="block text-[0.72rem] font-medium tracking-[0.12em] uppercase text-[#C8A951] mb-4">Common Questions</span>
            <h2 className="font-display font-extrabold text-[#1C2B1F] leading-tight mb-12 text-[clamp(1.8rem,3.5vw,2.6rem)]">AI Automation FAQ</h2>
          </FadeUp>
          <div className="border-t border-[rgba(1,50,32,0.12)]">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-[5%] bg-[#111612] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_600px_at_90%_-10%,rgba(74,93,35,0.2)_0%,transparent_70%)]" />
        <FadeUp>
          <div className="max-w-[640px] mx-auto text-center relative z-10">
            <span className="block text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#C8A951] mb-5">Talk to us</span>
            <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-5 text-[clamp(2rem,5vw,3.2rem)]">
              Ready to put your client acquisition on autopilot?
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] font-light leading-[1.7] mb-10">
              Let&apos;s discuss how we can automate your customer booking and enquiries this week.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-medium px-7 py-4 rounded hover:bg-[#1ebe5a] transition-colors no-underline text-[0.92rem]">
                <WhatsAppIcon /> Message us on WhatsApp
              </a>
              <Link href={localePath('/contact?service=automation')}
                className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.15)] rounded px-7 py-4 hover:border-[rgba(255,255,255,0.4)] hover:text-white transition-colors no-underline text-[0.92rem]">
                Fill out quote form
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
