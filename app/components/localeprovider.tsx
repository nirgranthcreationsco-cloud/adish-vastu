"use client";

import { NextIntlClientProvider } from "next-intl";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import enMessages from "@/messages/en.json";
import hiMessages from "@/messages/hi.json";

interface LocaleContextType {
  locale: string;
  switchLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context)
    throw new Error("useLocale must be used within a LocaleProvider");
  return context;
}

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(enMessages);

  const applyDocumentLocale = (loc: string) => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = loc;
    document.documentElement.classList.toggle("locale-hi", loc === "hi");
    document.documentElement.classList.toggle("locale-en", loc !== "hi");
  };

  const loadMessages = (loc: string) => {
    setMessages(loc === "hi" ? hiMessages : enMessages);
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
    loadMessages(savedLocale);
    applyDocumentLocale(savedLocale);
  }, []);

  const switchLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    loadMessages(newLocale);
    applyDocumentLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone="Asia/Kolkata"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
