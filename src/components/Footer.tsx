import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const localePath = (path: string) => `/${locale}${path}`;

  const links = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services') },
    { href: '/work', label: t('work') },
    { href: '/about', label: t('process') },
    { href: '/trust', label: t('trust') },
    { href: '/contact', label: t('contact') },
    { href: '/privacy-policy', label: t('privacy') },
  ];

  return (
    <footer className="bg-[#013220] pt-0 pb-2 px-[5%] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center">
          <Image src="/ZED.svg" alt="ProjectZed" width={2000} height={2000} className="h-auto max-h-[100px] w-auto" />
        </div>
        <ul className="flex gap-6 list-none flex-wrap">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={localePath(l.href)}
                className="font-semibold text-[0.8rem] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors no-underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-display text-[0.75rem] text-[rgba(255,255,255,0.3)] w-full md:w-auto">
          {t('copy')}
        </p>
      </div>
    </footer>
  );
}
