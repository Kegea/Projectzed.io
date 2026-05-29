'use client';

import FadeUp from '@/components/FadeUp';

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#F5F0E8] py-28 px-[5%] min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <FadeUp>
          <div className="flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#4A5D23] mb-4">
            Legal
            <span className="w-6 h-px bg-[#4A5D23] opacity-40 inline-block" />
          </div>
          <h1 className="font-display font-extrabold text-[#1a1a18] leading-[1.1] tracking-tight text-[clamp(2rem,3.5vw,2.75rem)] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#888880] text-[0.85rem] mb-12">Last updated: May 2025</p>
        </FadeUp>

        <div className="space-y-10 text-[0.95rem] leading-[1.8] text-[#444440]">
          <FadeUp delay={0.05}>
            <Section title="Who We Are">
              <p>ProjectZed is a web design and automation service for local businesses. We&apos;re based in Uganda and operate globally. If you have questions about this policy, contact us at <a href="mailto:hello@projectzed.io" className="text-[#013220] font-medium underline underline-offset-2">hello@projectzed.io</a>.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Section title="What We Collect">
              <p className="mb-3">When you use our contact form or reach out directly, we collect:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your name</li>
                <li>Your email address or phone number</li>
                <li>The information you choose to share about your business</li>
              </ul>
              <p className="mb-3">When you visit the site, Google Analytics collects:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Pages you visited</li>
                <li>How long you stayed</li>
                <li>Your general location (country/city level)</li>
                <li>The device and browser you used</li>
              </ul>
              <p>We do not collect payment information directly. Payments are processed through third-party providers who have their own privacy policies.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.15}>
            <Section title="How We Use It">
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>To respond to your enquiry</li>
                <li>To scope and deliver the work you hired us for</li>
                <li>To understand how people use the site so we can improve it</li>
              </ul>
              <p>We do not sell your information. We do not share it with anyone except the tools we use to run the business — Google Analytics, and any communication tools you contact us through.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Section title="WhatsApp and Chat">
              <p>If you interact with a ProjectZed-built bot on behalf of your business, the conversations are used only to respond to your queries and improve the bot&apos;s accuracy. We do not share those conversations with third parties.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.25}>
            <Section title="How Long We Keep It">
              <p>We keep your contact information for as long as we have a working relationship with you. If you want your information deleted, email us and we&apos;ll remove it within 7 days.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Section title="Your Rights">
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Ask what information we hold about you</li>
                <li>Ask us to correct it</li>
                <li>Ask us to delete it</li>
              </ul>
              <p>Email <a href="mailto:hello@projectzed.io" className="text-[#013220] font-medium underline underline-offset-2">hello@projectzed.io</a> for any of the above.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.35}>
            <Section title="Cookies">
              <p>We use Google Analytics which places cookies on your device to track site usage. You can disable cookies in your browser settings at any time.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.4}>
            <Section title="Changes to This Policy">
              <p>If we update this policy we&apos;ll change the date at the top. We won&apos;t notify you individually unless the change significantly affects how we use your data.</p>
            </Section>
          </FadeUp>

          <FadeUp delay={0.45}>
            <Section title="Contact">
              <p><a href="mailto:hello@projectzed.io" className="text-[#013220] font-medium underline underline-offset-2">hello@projectzed.io</a></p>
            </Section>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-[#013220] text-xl mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
