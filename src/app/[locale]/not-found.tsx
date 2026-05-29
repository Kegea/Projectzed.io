'use client';

import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const { locale } = useParams();

  return (
    <section className="min-h-screen flex items-center justify-center bg-parchment px-4">
      <div className="max-w-lg w-full text-center">
        <FadeUp>
          <h1
            className="text-[12rem] sm:text-[16rem] font-bold leading-none tracking-tight text-green-deep"
          >
            404
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p
            className="text-xl sm:text-2xl font-display mt-4 mb-2 text-green-mid"
          >
            Page not found
          </p>
          <p className="mb-8 text-lg opacity-70 text-ink">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Link
            href={`/${locale}`}
            className="inline-block px-8 py-3 rounded font-semibold transition-all duration-300 hover:scale-105 bg-brass text-forge"
          >
            Back to Home
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
