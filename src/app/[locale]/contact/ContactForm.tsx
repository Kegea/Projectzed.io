'use client';

import { useState, useRef, useEffect } from 'react';
import FadeUp from '@/components/FadeUp';
import { Icons } from '@/components/icons';

const WA_NUMBER = '256784749832';

// Web Speech API type declarations
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}
interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    service: '',
  });
  const maxLength = 500;

  // Voice transcript state
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const messageWordCount = transcript.trim().split(/\s+/).filter(word => word.length > 0).length;
  const isFormValid = formData.name.trim().length > 0 && 
                      formData.business.trim().length > 0 && 
                      formData.email.trim().length > 0 && 
                      formData.service !== '' && 
                      messageWordCount >= 5;

  useEffect(() => {
    const supported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    setSpeechSupported(supported);
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      const combined = finalTranscript || interimTranscript;
      setTranscript(combined);

      if (textareaRef.current) {
        textareaRef.current.value = combined;
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype, 'value'
        )?.set;
        nativeInputValueSetter?.call(textareaRef.current, combined);
        textareaRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please allow microphone access and try again.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      business: (form.elements.namedItem('business') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Something went wrong');
      }

      setSubmitted(true);
      setTranscript('');
      form.reset();

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5F0E8] py-28 px-[5%] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(1,50,32,0.12),transparent)]">
      {submitted ? (
        <div className="max-w-[600px] mx-auto">
          <FadeUp>
            <div className="bg-white border border-[rgba(1,50,32,0.09)] rounded-xl p-10 shadow-[0_4px_32px_rgba(1,50,32,0.06)]">
              <div className="py-8 text-center">
                {/* Animated circle + tick */}
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-6">
                    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(1,50,32,0.08)" strokeWidth="3" />
                      <circle
                        cx="40" cy="40" r="35" fill="none"
                        stroke="#013220" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray="220" strokeDashoffset="220"
                        className="anim-circle"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M7 17L13 23L25 10"
                          stroke="#013220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          strokeDasharray="30" strokeDashoffset="30"
                          className="anim-tick"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Brass accent bar */}
                  <div className="h-[3px] bg-[#C9A84C] rounded-full mx-auto anim-bar" />
                </div>

                {/* Content fades in */}
                <div className="anim-content">
                  <h3 className="font-display font-extrabold text-[#1a1a18] text-[1.25rem] tracking-tight mt-6 mb-2 leading-snug">
                    We got it, <span className="text-[#013220]">thank you.</span>
                  </h3>
                  <p className="text-[0.875rem] text-[#666660] leading-[1.7] font-light mb-6">
                    Your message is with us. We&apos;ll come back to you with an honest answer — not a template reply.
                  </p>

                  <div className="h-px bg-[rgba(1,50,32,0.07)] mb-5" />

                  <p className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[#aaa] mb-4">
                    What happens next
                  </p>

                  {/* Steps */}
                  <div className="flex flex-col gap-3 text-left mb-6">
                    {[
                      { n: '1', strong: 'We review your message', rest: ' — usually within a few hours during business hours.', cls: 'anim-slide-1' },
                      { n: '2', strong: 'You get a personal reply', rest: ' — not a bot, not a template. A real response to what you actually said.', cls: 'anim-slide-2' },
                      { n: '3', strong: 'We figure out together', rest: ' what you need and whether we\'re the right fit.', cls: 'anim-slide-3' },
                    ].map(({ n, strong, rest, cls }) => (
                      <div
                        key={n}
                        className={`flex items-start gap-3 ${cls}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-[rgba(1,50,32,0.06)] border border-[rgba(1,50,32,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[0.6rem] font-bold text-[#013220]">{n}</span>
                        </div>
                        <p className="text-[0.82rem] text-[#555550] leading-[1.55] font-light">
                          <strong className="font-medium text-[#1a1a18]">{strong}</strong>{rest}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="anim-wa">
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[0.82rem] font-semibold px-5 py-2.5 rounded-full no-underline hover:opacity-85 transition-opacity"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Can&apos;t wait? Chat on WhatsApp
                    </a>
                    <p className="text-[0.72rem] text-[#bbb8b0] mt-3 anim-footnote">
                      Check your inbox — we&apos;ve also sent you a confirmation.
                    </p>
                  </div>
                </div>

                <style>{`
                  @keyframes drawCircle { to { stroke-dashoffset: 0; } }
                  @keyframes drawTick   { to { stroke-dashoffset: 0; } }
                  @keyframes growBar    { to { width: 48px; } }
                  @keyframes fadeUpConf { to { opacity: 1; transform: translateY(0); } }
                  @keyframes slideInConf { to { opacity: 1; transform: translateX(0); } }

                  .anim-circle { animation: drawCircle 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s forwards; }
                  .anim-tick { animation: drawTick 0.4s cubic-bezier(0.22,1,0.36,1) 0.85s forwards; }
                  .anim-bar { width: 0; animation: growBar 0.5s cubic-bezier(0.22,1,0.36,1) 1.1s forwards; }
                  .anim-content { opacity: 0; transform: translateY(16px); animation: fadeUpConf 0.6s cubic-bezier(0.22,1,0.36,1) 1.3s forwards; }
                  .anim-slide-1 { opacity: 0; transform: translateX(-10px); animation: slideInConf 0.4s cubic-bezier(0.22,1,0.36,1) 1.7s forwards; }
                  .anim-slide-2 { opacity: 0; transform: translateX(-10px); animation: slideInConf 0.4s cubic-bezier(0.22,1,0.36,1) 1.95s forwards; }
                  .anim-slide-3 { opacity: 0; transform: translateX(-10px); animation: slideInConf 0.4s cubic-bezier(0.22,1,0.36,1) 2.2s forwards; }
                  .anim-wa { opacity: 0; animation: fadeUpConf 0.5s cubic-bezier(0.22,1,0.36,1) 2.5s forwards; }
                  .anim-footnote { opacity: 0; animation: fadeUpConf 0.5s ease 2.7s forwards; }
                `}</style>
              </div>
            </div>
          </FadeUp>
        </div>
      ) : (
        <div className="max-w-[960px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-20 items-start">
        {/* LEFT */}
        <FadeUp>
          <div className="flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#4A5D23] mb-4">
            Get in touch
            <span className="w-6 h-px bg-[#4A5D23] opacity-40 inline-block" />
          </div>
          <h2 className="font-display font-extrabold text-[#1a1a18] leading-[1.1] tracking-tight text-[clamp(2rem,3.5vw,2.75rem)] mb-5">
            Let&apos;s talk about your <span className="text-[#013220]">business.</span>
          </h2>
          <p className="text-[#666660] leading-[1.75] mb-11 font-light max-w-[340px]">
            Whether you need a website, an AI automation, or an e-commerce store — we&apos;ll give you an honest answer about what you need and what it will cost. No pitch.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: <Icons.contactWhatsapp />, label: 'WhatsApp', value: '+256 784 749832', href: `https://wa.me/${WA_NUMBER}`, target: '_blank' },
              { icon: <Icons.contactEmail />, label: 'Email', value: 'hello@projectzed.io', href: 'mailto:hello@projectzed.io', target: undefined },
              { icon: <Icons.contactLocation />, label: 'Location', value: 'Kampala, Uganda · Remote Globally', href: null, target: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(1,50,32,0.1)] flex items-center justify-center flex-shrink-0 transition-[border-color,box-shadow] duration-200 group-hover:border-[rgba(1,50,32,0.25)] group-hover:shadow-[0_2px_12px_rgba(1,50,32,0.08)]">
                  <div className="w-5 h-5">{item.icon}</div>
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[#aaa] mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.target} rel="noopener noreferrer" className="text-[0.9rem] font-medium text-[#1a1a18] no-underline hover:text-[#013220] transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-[0.9rem] font-medium text-[#1a1a18]">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 pl-5 bg-[rgba(1,50,32,0.04)] border-l-[3px] border-[#4A5D23] rounded-r-md">
            <p className="text-[0.82rem] leading-relaxed text-[#666660] font-light">
              <strong className="font-medium text-[#1a1a18]">We reply within 24 hours.</strong> No sales pitch, no pressure. Just an honest conversation about what your business actually needs.
            </p>
          </div>
        </FadeUp>

        {/* RIGHT — FORM */}
        <FadeUp delay={0.1}>
          <div className="bg-white border border-[rgba(1,50,32,0.09)] rounded-xl p-10 shadow-[0_4px_32px_rgba(1,50,32,0.06)]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#888880]">Your name</label>
                    <input id="name" name="name" type="text" placeholder="e.g. James Okafor" required
                      value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 text-[0.9rem] bg-[#F5F0E8] text-[#1a1a18] border-[1.5px] border-transparent rounded-[7px] focus:outline-none focus:border-[#013220] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,50,32,0.06)] transition-[border-color,background,box-shadow] placeholder:text-[#bbb8b0]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="business" className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#888880]">Business name</label>
                    <input id="business" name="business" type="text" placeholder="e.g. Okafor Welding Co." required
                      value={formData.business} onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                      className="w-full px-4 py-3 text-[0.9rem] bg-[#F5F0E8] text-[#1a1a18] border-[1.5px] border-transparent rounded-[7px] focus:outline-none focus:border-[#013220] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,50,32,0.06)] transition-[border-color,background,box-shadow] placeholder:text-[#bbb8b0]" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="email" className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#888880]">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@yourbusiness.com" required
                    value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 text-[0.9rem] bg-[#F5F0E8] text-[#1a1a18] border-[1.5px] border-transparent rounded-[7px] focus:outline-none focus:border-[#013220] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,50,32,0.06)] transition-[border-color,background,box-shadow] placeholder:text-[#bbb8b0]" />
                </div>

                <div className="h-px bg-[rgba(1,50,32,0.07)] my-6" />

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="service" className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#888880]">What do you need? <span className="lowercase text-[#013220] tracking-normal font-medium">(required)</span></label>
                  <select id="service" name="service" required value={formData.service} onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full px-4 py-3 text-[0.9rem] bg-[#F5F0E8] text-[#1a1a18] border-[1.5px] border-transparent rounded-[7px] focus:outline-none focus:border-[#013220] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,50,32,0.06)] transition-[border-color,background,box-shadow] appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L6%206L11%201%22%20stroke%3D%22%23888880%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10">
                    <option value="" disabled>Pick the closest one…</option>
                    <option value="new-website">A new website</option>
                    <option value="fix-website">Fix / rebuild my existing website</option>
                    <option value="landing-page">Landing page</option>
                    <option value="ecommerce">E-commerce store</option>
                    <option value="whatsapp-ai">WhatsApp AI automation</option>
                    <option value="telegram-bot">Telegram capture bot</option>
                    <option value="email-autoresponder">Email auto-responder</option>
                    <option value="customer-support">Customer support agent</option>
                    <option value="single-page">Single page portfolio</option>
                    <option value="not-sure">Not sure — I need advice</option>
                  </select>
                </div>

                {/* MESSAGE FIELD WITH VOICE BUTTON */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#888880]">
                      Tell us about your business <span className="lowercase text-[#013220] tracking-normal font-medium">(required)</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="text-[0.65rem] font-medium text-[#aaa]">{maxLength - transcript.length} left</span>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={
                        isListening
                          ? 'Listening… speak now'
                          : 'What do you do? Who are your customers? What\'s the problem you\'re trying to solve?'
                      }
                      required
                      maxLength={maxLength}
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      className={`w-full px-4 py-3 pb-12 text-[0.9rem] bg-[#F5F0E8] text-[#1a1a18] border-[1.5px] rounded-[7px] focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,50,32,0.06)] transition-[border-color,background,box-shadow] placeholder:text-[#bbb8b0] resize-y min-h-[110px] leading-relaxed ${
                        isListening
                          ? 'border-[#C9A84C] bg-white shadow-[0_0_0_3px_rgba(201,168,76,0.1)]'
                          : 'border-transparent focus:border-[#013220]'
                      }`}
                    />
                    
                    {speechSupported && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-2">
                        {isListening && (
                          <div className="flex items-center gap-1 mr-2">
                           {[
                              { h: 'h-[8px]',  delay: 'delay-[0ms]'   },
                              { h: 'h-[12px]', delay: 'delay-[150ms]' },
                              { h: 'h-[16px]', delay: 'delay-[300ms]' },
                              { h: 'h-[20px]', delay: 'delay-[450ms]' },
                            ].map(({ h, delay }, i) => (
                              <span
                                key={i}
                                className={`w-0.5 bg-[#C9A84C] rounded-full animate-pulse ${h} ${delay}`}
                              />
                            ))}
                          </div>
                        )}
                        
                        <button
                          type="button"
                          onClick={toggleListening}
                          title={isListening ? 'Stop recording' : 'Record voice message'}
                          className={`flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 ${
                            isListening
                              ? 'bg-[#013220] border-[#013220] text-white shadow-md'
                              : 'bg-white border-[rgba(1,50,32,0.15)] text-[#666660] hover:border-[#013220] hover:text-[#013220] shadow-sm'
                          }`}
                        >
                          {isListening ? (
                            <span className="w-2 h-2 bg-white rounded-sm" />
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="2" width="6" height="12" rx="3"/>
                              <path d="M5 10a7 7 0 0 0 14 0"/>
                              <line x1="12" y1="19" x2="12" y2="22"/>
                              <line x1="9" y1="22" x2="15" y2="22"/>
                            </svg>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {isListening && (
                    <p className="text-[0.72rem] text-[#C9A84C] font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9A84C]" />
                      </span>
                      Recording — tap Stop when done
                    </p>
                  )}

                  {!isListening && (transcript.trim().split(/\s+/).filter(Boolean).length > 0) && (transcript.trim().split(/\s+/).filter(Boolean).length < 5) && (
                    <p className="text-[0.7rem] text-[#e53e3e] mt-1 font-medium">Please tell us a bit more (at least 5 words).</p>
                  )}
                </div>

                {error && (
                  <p className="text-[#e53e3e] text-[0.82rem] mt-2 text-center">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={loading || !isFormValid}
                  className="w-full flex items-center justify-center gap-2 bg-[#013220] text-white font-semibold py-4 rounded-[7px] border-none cursor-pointer transition-all duration-200 hover:bg-[#1a1a18] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(1,50,32,0.2)] disabled:opacity-60 mt-6 tracking-[0.01em] text-[0.95rem]">
                  {loading ? 'Sending…' : 'Send my details'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <p className="text-center text-[0.75rem] text-[#bbb8b0] mt-4 leading-relaxed">Free. No commitment. We&apos;ll come back to you within 24 hours.</p>

                <div className="flex items-center justify-center gap-2.5 mt-5 pt-5 border-t border-[rgba(1,50,32,0.07)]">
                  <span className="text-[0.78rem] text-[#aaa]">For instant replies</span>
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#25D366] no-underline hover:opacity-75 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
          </div>
        </FadeUp>
        </div>
      )}
    </section>
  );
}
