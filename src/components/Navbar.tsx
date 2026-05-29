'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const localeLabels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'ع',
};

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const localePath = (path: string) => `/${locale}${path}`;
  const isActive = (path: string) => pathname === localePath(path);

  const services = [
    { href: '/services/web-design', label: t('webDesign') },
    { href: '/services/ai-automation', label: t('aiAutomation') },
    { href: '/services/ecommerce', label: t('ecommerce') },
  ];

  const industryLinks = [
    { href: '/industries/welding-businesses', label: 'Welding & Fabrication' },
    { href: '/industries/pharmacies', label: 'Pharmacies' },
    { href: '/industries/barbershops', label: 'Barbershops' },
    { href: '/industries/clothing-stores', label: 'Clothing Stores' },
    { href: '/industries/construction', label: 'Construction' },
    { href: '/industries/real-estate', label: 'Real Estate' },
    { href: '/industries/florists', label: 'Florists' },
    { href: '/industries/car-wash', label: 'Car Wash' },
  ];

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services'), dropdown: true },
    { href: '/work', label: t('work') },
    { href: '/about', label: t('process') },
    { href: '/trust', label: t('trust') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[140px] transition-all duration-300 backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.1)] ${
          scrolled
            ? 'bg-[rgba(1,50,32,0.98)] shadow-lg'
            : 'bg-[rgba(1,50,32,0.96)]'
        }`}
      >
        {/* Logo */}
        <Link href={localePath('/')} className="no-underline flex items-center">
          <Image src="/ZED.svg" alt="ProjectZed" width={2000} height={2000} className="h-auto max-h-[200px] w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href} className={link.dropdown ? 'relative group' : ''}>
              {link.dropdown ? (
                <>
                  <button className="flex items-center gap-1 font-display text-[0.8rem] font-semibold tracking-[0.02em] text-[rgba(255,255,255,0.72)] hover:text-[#C8A951] transition-colors bg-transparent border-none cursor-pointer">
                    {link.label}
                    <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="bg-[#013220] border border-[rgba(255,255,255,0.1)] rounded-md py-2 list-none min-w-[220px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] max-h-[80vh] overflow-y-auto">
                      {/* Services */}
                      {services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={localePath(s.href)}
                            className={`block px-4 py-2 text-[0.82rem] no-underline transition-colors ${
                              isActive(s.href)
                                ? 'text-[#C8A951] bg-[rgba(200,169,81,0.08)]'
                                : 'text-[rgba(255,255,255,0.7)] hover:bg-[#024a30] hover:text-white'
                            }`}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}

                      {/* Divider + Industries */}
                      <li>
                        <div className="mx-4 my-2 border-t border-[rgba(255,255,255,0.08)]" />
                        <p className="px-4 pb-1 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[rgba(200,169,81,0.5)]">
                          Industries
                        </p>
                      </li>
                      {industryLinks.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={localePath(s.href)}
                            className={`block px-4 py-2 text-[0.82rem] no-underline transition-colors ${
                              isActive(s.href)
                                ? 'text-[#C8A951] bg-[rgba(200,169,81,0.08)]'
                                : 'text-[rgba(255,255,255,0.7)] hover:bg-[#024a30] hover:text-white'
                            }`}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={localePath(link.href)}
                  className={`font-display text-[0.8rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                    isActive(link.href)
                      ? 'text-[#C8A951]'
                      : 'text-[rgba(255,255,255,0.72)] hover:text-[#C8A951]'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          <li className="flex items-center gap-1">
            {Object.entries(localeLabels).map(([loc, label]) => (
              <Link
                key={loc}
                href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                className={`text-xs px-2 py-1 rounded transition-colors no-underline ${
                  locale === loc
                    ? 'bg-[#C8A951] text-[#111612] font-semibold'
                    : 'text-[rgba(255,255,255,0.45)] hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </li>

          <li>
            <Link
              href={localePath('/contact')}
              className="bg-[#C8A951] text-[#111612] font-display font-semibold text-[0.8rem] tracking-[0.02em] px-5 py-2 rounded hover:bg-[#e8c96a] transition-colors no-underline"
            >
              {t('talkToUs')}
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[140px] left-0 right-0 z-40 bg-[#013220] border-b border-[rgba(255,255,255,0.1)] px-[5%] py-6 flex flex-col gap-4 md:hidden max-h-[80vh] overflow-y-auto"
          >
            <Link
              href={localePath('/')}
              className={`font-display text-[0.9rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                isActive('/') ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.8)] hover:text-white'
              }`}
            >
              {t('home')}
            </Link>

            {/* Services group on mobile */}
            <div>
              <p className="font-display text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[rgba(200,169,81,0.6)] mb-2 mt-1">
                {t('services')}
              </p>
              <div className="flex flex-col gap-2 pl-3 border-l border-[rgba(255,255,255,0.1)]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={localePath(s.href)}
                    className={`font-display text-[0.85rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                      isActive(s.href) ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.7)] hover:text-white'
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries group on mobile */}
            <div>
              <p className="font-display text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[rgba(200,169,81,0.6)] mb-2 mt-1">
                Industries
              </p>
              <div className="flex flex-col gap-2 pl-3 border-l border-[rgba(255,255,255,0.1)]">
                {industryLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={localePath(s.href)}
                    className={`font-display text-[0.85rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                      isActive(s.href) ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.7)] hover:text-white'
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={localePath('/work')}
              className={`font-display text-[0.9rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                isActive('/work') ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.8)] hover:text-white'
              }`}
            >
              {t('work')}
            </Link>

            <Link
              href={localePath('/about')}
              className={`font-display text-[0.9rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                isActive('/about') ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.8)] hover:text-white'
              }`}
            >
              {t('process')}
            </Link>

            <Link
              href={localePath('/trust')}
              className={`font-display text-[0.9rem] font-semibold tracking-[0.02em] no-underline transition-colors ${
                isActive('/trust') ? 'text-[#C8A951]' : 'text-[rgba(255,255,255,0.8)] hover:text-white'
              }`}
            >
              {t('trust')}
            </Link>

            <Link
              href={localePath('/contact')}
              className="mt-2 bg-[#C8A951] text-[#111612] font-display font-semibold text-[0.85rem] tracking-[0.02em] px-5 py-3 rounded text-center hover:bg-[#e8c96a] transition-colors no-underline"
            >
              {t('talkToUs')}
            </Link>

            {/* Locale switcher mobile */}
            <div className="flex gap-2 pt-2 border-t border-[rgba(255,255,255,0.1)]">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <Link
                  key={loc}
                  href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                  className={`text-xs px-3 py-1 rounded transition-colors no-underline ${
                    locale === loc
                      ? 'bg-[#C8A951] text-[#111612] font-semibold'
                      : 'text-[rgba(255,255,255,0.45)] hover:text-white border border-[rgba(255,255,255,0.15)]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
