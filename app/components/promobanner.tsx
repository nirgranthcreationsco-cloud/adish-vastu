"use client";

import { useTranslations } from 'next-intl';

export default function PromoBanner() {
  const t = useTranslations('promo');
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white overflow-visible" style={{ minHeight: '40px', paddingTop: '8px', paddingBottom: '8px' }}>
      <div className="flex items-center h-full">
        {/* Scrolling text - duplicated for seamless loop */}
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="inline-block px-4 text-sm font-medium tracking-wide" style={{ lineHeight: '1.8', paddingTop: '0.15em', paddingBottom: '0.15em' }}>
            {t('text')}
          </span>
          <span className="inline-block px-4 text-sm font-medium tracking-wide" style={{ lineHeight: '1.8', paddingTop: '0.15em', paddingBottom: '0.15em' }}>
            {t('text')}
          </span>
          <span className="inline-block px-4 text-sm font-medium tracking-wide" style={{ lineHeight: '1.8', paddingTop: '0.15em', paddingBottom: '0.15em' }}>
            {t('text')}
          </span>
          <span className="inline-block px-4 text-sm font-medium tracking-wide" style={{ lineHeight: '1.8', paddingTop: '0.15em', paddingBottom: '0.15em' }}>
            {t('text')}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
