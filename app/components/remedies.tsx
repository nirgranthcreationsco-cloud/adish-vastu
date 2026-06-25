"use client";

import { Award, ChevronRight, Loader2, Sparkles } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DriveFolder {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  description?: string;
}

function getCategoryLineArt(name: string) {
  const normalized = name.toLowerCase();
  
  if (normalized.includes('gem') || normalized.includes('stone')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-20 sm:h-20 text-amber-200/90 drop-shadow-[0_8px_16px_rgba(245,158,11,0.2)]">
        <path d="M30 25 h40 l18 20 L50 85 L12 45 Z" />
        <path d="M30 25 L45 45 L50 85 L55 45 L70 25" />
        <path d="M12 45 h76" />
        <path d="M45 45 L50 25 L55 45" />
      </svg>
    );
  }
  
  if (normalized.includes('bracelet') || normalized.includes('bead')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 sm:w-20 sm:h-20 text-amber-200/90 drop-shadow-[0_8px_16px_rgba(245,158,11,0.2)]">
        <circle cx="50" cy="50" r="30" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="50" cy="20" r="4" fill="currentColor" />
        <circle cx="65" cy="24" r="4" fill="currentColor" />
        <circle cx="76" cy="35" r="4" fill="currentColor" />
        <circle cx="80" cy="50" r="4" fill="currentColor" />
        <circle cx="76" cy="65" r="4" fill="currentColor" />
        <circle cx="65" cy="76" r="4" fill="currentColor" />
        <circle cx="50" cy="80" r="4" fill="currentColor" />
        <circle cx="35" cy="76" r="4" fill="currentColor" />
        <circle cx="24" cy="65" r="4" fill="currentColor" />
        <circle cx="20" cy="50" r="4" fill="currentColor" />
        <circle cx="24" cy="35" r="4" fill="currentColor" />
        <circle cx="35" cy="24" r="4" fill="currentColor" />
      </svg>
    );
  }
  
  if (normalized.includes('remedy') || normalized.includes('remedies') || normalized.includes('yantra')) {
    return (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 sm:w-20 sm:h-20 text-amber-200/90 drop-shadow-[0_8px_16px_rgba(245,158,11,0.2)]">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="34" />
        <rect x="26" y="26" width="48" height="48" rx="2" transform="rotate(45 50 50)" />
        <polygon points="50,22 75,65 25,65" />
        <polygon points="50,78 75,35 25,35" />
        <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.1" />
        <circle cx="50" cy="50" r="2.5" fill="currentColor" />
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 sm:w-20 sm:h-20 text-amber-200/90 drop-shadow-[0_8px_16px_rgba(245,158,11,0.2)]">
      <path d="M50 18 L80 44 L70 44 L70 82 L30 82 L30 44 L20 44 Z" />
      <path d="M40 82 V60 H60 V82" />
      <circle cx="50" cy="36" r="7" />
      <path d="M50 46 L58 58 H42 Z" />
    </svg>
  );
}

export default function RemediesSection() {
  const t = useTranslations('remedies');
  const router = useRouter();
  const [categories, setCategories] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/drive');
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      const folders = data.items
        .filter((item: DriveFolder) => item.mimeType === 'application/vnd.google-apps.folder')
        .slice(0, 4);

      setCategories(folders);
      setIsMockData(data.isMock || false);
    } catch (err: any) {
      console.error('Error fetching categories:', err);
      setError(err.message || 'Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/remedies/${encodeURIComponent(categoryName.replace(/\s+/g, '-'))}`);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-orange-100 via-amber-50 to-orange-100">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251,191,36,0.5) 1px, transparent 0)',
          backgroundSize: '42px 42px'
        }} />
      </div>

      {/* Mock Data Banner */}
      {isMockData && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 text-center">
            <p className="text-blue-900 font-semibold">
              🧪 Development Mode: Using mock data. Configure Google Drive API key to see real products.
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="text-sm text-amber-900">{t('badge')}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            {t('title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {t('subtitle')}
            </span>
          </h2>

          <p className="text-slate-700 text-base md:text-lg max-w-xl mx-auto mt-3">
            {t('description')}
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <h3 className="text-2xl md:text-4xl text-slate-900 font-bold mb-8 text-center">
          {t('sectionTitle')}
        </h3>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-amber-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={fetchCategories}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10">
            {categories.map((category) => {
              const name = category.name;

              return (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="group relative bg-[#ffffff] rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-amber-400/50 p-2 sm:p-4 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(245,158,11,0.12)]"
                >
                  <div className="relative h-28 sm:h-60 w-full rounded-[1rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br from-neutral-950 via-stone-900 to-amber-950/80 shadow-xl border border-white/5">
                    {/* Sacred Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Animated Gold Glow */}
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-amber-500/10 blur-[20px] sm:blur-[40px] rounded-full -mr-4 -mt-4 sm:-mr-8 sm:-mt-8 group-hover:scale-150 transition-transform duration-1000" />
                    
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                      {getCategoryLineArt(name)}
                    </div>
                    
                    <div className="absolute top-2 left-2 sm:top-5 sm:left-5 px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                      <span className="text-[7px] sm:text-[9px] font-black text-amber-200/80 tracking-[0.1em] sm:tracking-[0.2em] uppercase">Vedic Certified</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-5 sm:left-5 sm:right-5 translate-y-12 sm:translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-black/40 backdrop-blur-md border border-white/10 p-1 sm:p-3 rounded-lg sm:rounded-xl flex items-center justify-between">
                        <span className="text-[7px] sm:text-[9px] font-black text-white/90 uppercase tracking-widest">Master Energized</span>
                        <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      </div>
                    </div>
                  </div>

                  <div className="px-1 sm:px-3 pt-3 sm:pt-6 pb-2 sm:pb-4">
                    <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2.5">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-[7px] sm:text-[9px] font-black text-amber-600 uppercase tracking-widest">Premium Selection</span>
                    </div>
                    <h4 className="text-sm sm:text-2xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                      {category.name}
                    </h4>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-medium leading-normal sm:leading-relaxed mb-3 sm:mb-6 pr-1 line-clamp-2">
                      Authentic spiritual tools meticulously chosen & activated for vastu alignment.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md sm:rounded-lg group-hover:bg-amber-600 transition-all duration-300">
                        <span className="text-[7px] sm:text-[9px] font-black text-slate-600 group-hover:text-white uppercase tracking-widest">View Collection</span>
                        <ChevronRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TRUST BADGE */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-amber-200 rounded-3xl p-10 text-center backdrop-blur-sm shadow-xl">
            <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />

            <h3 className="text-3xl font-bold text-slate-900">{t('guaranteeTitle')}</h3>

            <p className="text-slate-700 max-w-md mx-auto mt-3 text-sm">
              {t('guaranteeDesc')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-8 mt-4">
          <button 
            onClick={() => router.push('/?service=remedies&msg=Global%20Sacred%20Remedy%20Consultation#consultation-form')}
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto group"
          >
            {t('cta')}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
