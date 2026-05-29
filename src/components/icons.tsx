'use client';

type IconProps = { className?: string };

const withSize = (className?: string) =>
  `w-[26px] h-[26px] ${className ?? ''}`;

export const Icons = {
  /* ── SERVICES (brass on evergreen) ── */
  webPresence: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="2" y="3" width="20" height="14" rx="1.5" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="7" x2="22" y2="7" />
      <circle cx="5" cy="5" r="0.8" fill="#C9A84C" />
      <circle cx="8" cy="5" r="0.8" fill="#C9A84C" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 11 L10 14 L17 10" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="20" x2="16" y2="20" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="17" x2="12" y2="20" />
    </svg>
  ),

  aiWhatsapp: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M20 4H4Q3 4 3 5V15Q3 16 4 16H8L8 20L13 16H20Q21 16 21 15V5Q21 4 20 4Z" />
      <circle cx="8.5" cy="10" r="1" fill="#C9A84C" />
      <circle cx="12" cy="10" r="1" fill="#C9A84C" />
      <circle cx="15.5" cy="10" r="1" fill="#C9A84C" />
      <path stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" d="M6 7.5 Q8 6.5 10 7.5 Q12 8.5 14 7.5 Q16 6.5 18 7.5" />
    </svg>
  ),

  ecommerce: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 3H5L5.6 6M5.6 6L7.4 14H18L20 6H5.6Z" />
      <circle stroke="#C9A84C" strokeWidth="1.6" cx="9" cy="18" r="1.5" />
      <circle stroke="#C9A84C" strokeWidth="1.6" cx="16" cy="18" r="1.5" />
      <path stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M10 9.5 L12 11.5 L15 8.5" />
    </svg>
  ),

  /* ── INDUSTRIES — green (light bg) ── */
  welding: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 19 L11 9 L14 13" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M11 9 L15 5" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M14 13 L17 10 M14 13 L18 14 M14 13 L16 16" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M4 20 Q10 18 15 20" />
    </svg>
  ),

  construction: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 13 Q4 7 12 7 Q20 7 20 13" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="13" x2="22" y2="13" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M8 13 L8 16 L16 16 L16 13" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="7" x2="12" y2="4" />
      <circle cx="12" cy="3.5" r="0.8" fill="#013220" />
    </svg>
  ),

  realEstate: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 11 L12 4 L21 11" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 11 L5 20 L19 20 L19 11" />
      <rect stroke="#013220" strokeWidth="1.6" x="9" y="14" width="6" height="6" rx="0.5" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="14" x2="12" y2="12" />
    </svg>
  ),

  barbershop: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 5 L15 15" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 5 Q4 8 8 9 L15 15 Q18 14 17 11 L8 5 Z" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M15 15 L19 19" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M17 17 L19 15" />
    </svg>
  ),

  pharmacy: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="10" width="18" height="4" rx="2" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="10" x2="12" y2="14" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="5" x2="12" y2="8" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="10" y1="6.5" x2="14" y2="6.5" />
    </svg>
  ),

  florist: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <circle stroke="#013220" strokeWidth="1.6" cx="12" cy="10" r="2.5" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M12 7.5 Q14 5 16 7 Q18 9 15.5 10.5" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M12 7.5 Q10 5 8 7 Q6 9 8.5 10.5" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" d="M12 12.5 Q14 15 12 17 Q10 15 12 12.5" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),

  carwash: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 13 L5 9 Q6 7 8 7 L16 7 Q18 7 19 9 L21 13" />
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="13" width="18" height="4" rx="1" />
      <circle stroke="#013220" strokeWidth="1.6" cx="7" cy="19" r="1.5" />
      <circle stroke="#013220" strokeWidth="1.6" cx="17" cy="19" r="1.5" />
      <path stroke="#013220" strokeWidth="1.4" strokeLinecap="round" d="M9 4 Q9.5 3 9 2 M12 4 Q12.5 3 12 2 M15 4 Q15.5 3 15 2" />
    </svg>
  ),

  landscaping: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="21" x2="12" y2="11" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 11 Q8 11 6 7 Q10 5 14 9" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 15 Q16 15 18 11 Q14 9 10 13" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="21" x2="16" y2="21" />
    </svg>
  ),

  clothing: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 5 Q14 5 14 7 Q14 8 12 9 L3 15 Q2 15.5 2 17 Q2 18 3 18 L21 18 Q22 18 22 17 Q22 15.5 21 15 L14 9 Q12 8 12 7 Q12 5 14 5" />
      <circle stroke="#013220" strokeWidth="1.4" cx="12" cy="4" r="1" />
    </svg>
  ),

  /* ── INDUSTRIES — brass (dark bg) ── */
  weldingBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 19 L11 9 L14 13" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M11 9 L15 5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M14 13 L17 10 M14 13 L18 14 M14 13 L16 16" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M4 20 Q10 18 15 20" />
    </svg>
  ),

  constructionBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 13 Q4 7 12 7 Q20 7 20 13" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="13" x2="22" y2="13" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M8 13 L8 16 L16 16 L16 13" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="7" x2="12" y2="4" />
      <circle cx="12" cy="3.5" r="0.8" fill="#C9A84C" />
    </svg>
  ),

  realEstateBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 11 L12 4 L21 11" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 11 L5 20 L19 20 L19 11" />
      <rect stroke="#C9A84C" strokeWidth="1.6" x="9" y="14" width="6" height="6" rx="0.5" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="14" x2="12" y2="12" />
    </svg>
  ),

  barbershopBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 5 L15 15" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 5 Q4 8 8 9 L15 15 Q18 14 17 11 L8 5 Z" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M15 15 L19 19" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M17 17 L19 15" />
    </svg>
  ),

  pharmacyBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="10" width="18" height="4" rx="2" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="10" x2="12" y2="14" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="5" x2="12" y2="8" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="10" y1="6.5" x2="14" y2="6.5" />
    </svg>
  ),

  floristBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <circle stroke="#C9A84C" strokeWidth="1.6" cx="12" cy="10" r="2.5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M12 7.5 Q14 5 16 7 Q18 9 15.5 10.5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M12 7.5 Q10 5 8 7 Q6 9 8.5 10.5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" d="M12 12.5 Q14 15 12 17 Q10 15 12 12.5" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),

  carwashBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 13 L5 9 Q6 7 8 7 L16 7 Q18 7 19 9 L21 13" />
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="13" width="18" height="4" rx="1" />
      <circle stroke="#C9A84C" strokeWidth="1.6" cx="7" cy="19" r="1.5" />
      <circle stroke="#C9A84C" strokeWidth="1.6" cx="17" cy="19" r="1.5" />
      <path stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" d="M9 4 Q9.5 3 9 2 M12 4 Q12.5 3 12 2 M15 4 Q15.5 3 15 2" />
    </svg>
  ),

  landscapingBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="21" x2="12" y2="11" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 11 Q8 11 6 7 Q10 5 14 9" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 15 Q16 15 18 11 Q14 9 10 13" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="21" x2="16" y2="21" />
    </svg>
  ),

  clothingBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 5 Q14 5 14 7 Q14 8 12 9 L3 15 Q2 15.5 2 17 Q2 18 3 18 L21 18 Q22 18 22 17 Q22 15.5 21 15 L14 9 Q12 8 12 7 Q12 5 14 5" />
      <circle stroke="#C9A84C" strokeWidth="1.4" cx="12" cy="4" r="1" />
    </svg>
  ),

  /* ── PROBLEM ICONS ── */
  socialMediaTrap: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x="6" y="2" width="12" height="20" rx="2" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="9" y1="8" x2="15" y2="14" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="15" y1="8" x2="9" y2="14" />
      <line stroke="#013220" strokeWidth="1.4" strokeLinecap="round" x1="10" y1="19" x2="14" y2="19" />
    </svg>
  ),

  whatsappOverload: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 4 L20 4 Q21 4 21 5 L21 15 Q21 16 20 16 L13 16 L9 20 L9 16 L4 16 Q3 16 3 15 L3 5 Q3 4 4 4 Z" />
      <circle stroke="#013220" strokeWidth="1.6" cx="12" cy="10" r="3" />
      <path stroke="#013220" strokeWidth="1.5" strokeLinecap="round" d="M12 8.5 L12 10 L13.2 11.2" />
    </svg>
  ),

  oldWebsite: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x="2" y="3" width="20" height="15" rx="1.5" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="7" x2="22" y2="7" />
      <circle cx="5" cy="5" r="0.8" fill="#013220" />
      <circle cx="8" cy="5" r="0.8" fill="#013220" />
      <path stroke="#013220" strokeWidth="1.4" strokeLinecap="round" d="M9 12 Q11 10.5 12 12 Q13 13.5 15 12" />
      <path stroke="#013220" strokeWidth="1.4" strokeLinecap="round" d="M12 10 L12 9 M12 15 L12 14 M10 12 L9 12 M15 12 L14 12" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="19" y1="16" x2="21" y2="18" />
    </svg>
  ),

  /* ── PROCESS ICONS ── */
  processTalk: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 15 Q21 16 20 16 L13 16 L9 20 L9 16 L4 16 Q3 16 3 15 L3 5 Q3 4 4 4 L20 4 Q21 4 21 5 Z" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="9" x2="16" y2="9" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="12" x2="13" y2="12" />
    </svg>
  ),

  processBuild: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x="2" y="3" width="20" height="14" rx="1.5" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="7" x2="22" y2="7" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 11 L10 14 L17 11" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="20" x2="16" y2="20" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="17" x2="12" y2="20" />
    </svg>
  ),

  processGrow: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 17 L8 12 L11 15 L16 9 L21 7" />
      <polyline stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" points="17 7 21 7 21 11" />
      <line stroke="#013220" strokeWidth="1.6" strokeLinecap="round" x1="3" y1="20" x2="21" y2="20" />
    </svg>
  ),

  /* ── PROCESS ICONS — brass (dark bg) ── */
  processTalkBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 15 Q21 16 20 16 L13 16 L9 20 L9 16 L4 16 Q3 16 3 15 L3 5 Q3 4 4 4 L20 4 Q21 4 21 5 Z" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="9" x2="16" y2="9" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="12" x2="13" y2="12" />
    </svg>
  ),

  processBuildBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x="2" y="3" width="20" height="14" rx="1.5" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="2" y1="7" x2="22" y2="7" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 11 L10 14 L17 11" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="8" y1="20" x2="16" y2="20" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="12" y1="17" x2="12" y2="20" />
    </svg>
  ),

  processGrowBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 17 L8 12 L11 15 L16 9 L21 7" />
      <polyline stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" points="17 7 21 7 21 11" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="3" y1="20" x2="21" y2="20" />
    </svg>
  ),

  /* ── NEW SERVICES (brass) ── */
  telegramBot: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 4 L3 10.5 L9.5 12.5 L11.5 19 L14 15 L18 18 Z" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="9.5" y1="12.5" x2="21" y2="4" />
      <path stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M3 18 L2 18 L2 22 L3 22" />
      <path stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M6 18 L7 18 L7 22 L6 22" />
      <circle cx="4.5" cy="20" r="0.9" fill="#C9A84C" />
    </svg>
  ),

  emailAutoResponder: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="2" y="5" width="16" height="12" rx="1.5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M2 7 L10 12 L18 7" />
      <path stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 9 Q23 9 23 12 Q23 15 20 15" />
      <polyline stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="20 13 20 15 22 15" />
    </svg>
  ),

  singlePagePortfolio: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="4" y="2" width="16" height="20" rx="1.5" />
      <line stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" x1="7" y1="7" x2="17" y2="7" />
      <circle stroke="#C9A84C" strokeWidth="1.4" cx="9" cy="12" r="2.5" />
      <line stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" x1="13" y1="11" x2="17" y2="11" />
      <line stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" x1="13" y1="13.5" x2="16" y2="13.5" />
      <line stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" x1="7" y1="17" x2="17" y2="17" />
      <circle cx="12" cy="20" r="0.8" fill="#C9A84C" />
    </svg>
  ),

  /* ── CONTACT ICONS — green (light bg) ── */
  contactWhatsapp: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 4 C7.58 4 4 7.13 4 11 C4 13.1 5.05 14.98 6.71 16.28 L6 20 L10.18 18.39 C10.76 18.46 11.37 18.5 12 18.5 C16.42 18.5 20 15.37 20 11 C20 7.13 16.42 4 12 4 Z" />
      <circle cx="9" cy="11" r="1" fill="#013220" />
      <circle cx="12" cy="11" r="1" fill="#013220" />
      <circle cx="15" cy="11" r="1" fill="#013220" />
    </svg>
  ),

  contactEmail: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="6" width="18" height="13" rx="1.5" />
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8 L12 14 L21 8" />
    </svg>
  ),

  contactLocation: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#013220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2 C8.69 2 6 4.69 6 8 C6 12.5 12 22 12 22 C12 22 18 12.5 18 8 C18 4.69 15.31 2 12 2 Z" />
      <circle stroke="#013220" strokeWidth="1.5" cx="12" cy="8" r="2.5" />
    </svg>
  ),

  /* ── CONTACT ICONS — brass (dark bg) ── */
  contactWhatsappBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 4 C7.58 4 4 7.13 4 11 C4 13.1 5.05 14.98 6.71 16.28 L6 20 L10.18 18.39 C10.76 18.46 11.37 18.5 12 18.5 C16.42 18.5 20 15.37 20 11 C20 7.13 16.42 4 12 4 Z" />
      <circle cx="9" cy="11" r="1" fill="#C9A84C" />
      <circle cx="12" cy="11" r="1" fill="#C9A84C" />
      <circle cx="15" cy="11" r="1" fill="#C9A84C" />
    </svg>
  ),

  contactEmailBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <rect stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" x="3" y="6" width="18" height="13" rx="1.5" />
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8 L12 14 L21 8" />
    </svg>
  ),

  contactLocationBrass: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={withSize(className)}>
      <path stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2 C8.69 2 6 4.69 6 8 C6 12.5 12 22 12 22 C12 22 18 12.5 18 8 C18 4.69 15.31 2 12 2 Z" />
      <circle stroke="#C9A84C" strokeWidth="1.5" cx="12" cy="8" r="2.5" />
    </svg>
  ),
};
