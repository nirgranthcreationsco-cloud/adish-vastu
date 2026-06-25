"use client";

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface LocaleContextType {
  locale: string;
  switchLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within a LocaleProvider');
  return context;
}

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem('locale') || 'en';
    setLocale(savedLocale);
    loadMessages(savedLocale);
  }, []);

  const loadMessages = async (loc: string) => {
    try {
      const msgs = await import(`@/messages/${loc}.json`);
      setMessages(msgs.default);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const switchLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    loadMessages(newLocale);
  };

  // Show loading state until messages are loaded
  if (!messages) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
