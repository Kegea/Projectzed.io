'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function HtmlAttributes() {
  const params = useParams();
  const locale = params.locale as string;
  const isRtl = locale === 'ar';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [locale, isRtl]);

  return null;
}
