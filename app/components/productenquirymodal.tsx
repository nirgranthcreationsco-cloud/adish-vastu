"use client";

import { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { supabase } from "@/supabase";

export type EnquiryType = "price_request" | "product_enquiry";

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categoryName: string;
  selectedVariant?: string;
  enquiryType: EnquiryType;
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  productName,
  categoryName,
  selectedVariant,
  enquiryType,
}: ProductEnquiryModalProps) {
  const t = useTranslations("enquiry");
  const tCommon = useTranslations("common");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSuccess(false);
      setName("");
      setPhone("");
      setMessage("");
      setQuantity("1");
      setErrors({});
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = t("errName");
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      errs.phone = t("errPhone");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const kind =
      enquiryType === "price_request" ? "Price Request" : "Product Enquiry";

    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: name.trim(),
        phone: phone.trim(),
        service: `Product ${kind}: ${productName}${selectedVariant ? ` (${selectedVariant})` : ""}`,
        message: [
          `Enquiry Type: ${enquiryType}`,
          `Category: ${categoryName}`,
          `Variant: ${selectedVariant || "Standard"}`,
          `Qty: ${quantity}`,
          `Note: ${message.trim() || "—"}`,
        ].join(" | "),
      });

      if (error) throw error;
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      alert(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-amber-200/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white p-6 sm:p-7 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase mb-2">
            <Sparkles className="w-3 h-3 text-amber-300" />
            {enquiryType === "price_request" ? t("priceTitle") : t("consultTitle")}
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {enquiryType === "price_request" ? t("priceTitle") : t("consultTitle")}
          </h3>
          <p className="text-amber-100 text-xs sm:text-sm mt-1 leading-relaxed">
            {productName}
          </p>
        </div>

        <div className="bg-amber-50/80 border-b border-amber-200/60 px-6 py-3.5 flex items-center justify-between">
          <div className="flex-1 min-w-0 pr-3">
            <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
              {categoryName}
            </p>
            <h4 className="text-sm font-black text-slate-900 truncate">
              {productName}{" "}
              {selectedVariant && (
                <span className="text-amber-700">({selectedVariant})</span>
              )}
            </h4>
          </div>
          <span className="px-2.5 py-1 bg-amber-200/80 text-amber-900 rounded-lg text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
            {t("physicalProduct")}
          </span>
        </div>

        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                {t("successTitle")}
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {t("successMsg")}
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-all"
                >
                  {tCommon("continueShopping")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={t("namePh")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 bg-slate-50 border ${
                    errors.name ? "border-red-400 bg-red-50/20" : "border-slate-200"
                  } rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-[11px] font-semibold mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("phone")} <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-slate-500 pointer-events-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder={t("phonePh")}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${
                      errors.phone
                        ? "border-red-400 bg-red-50/20"
                        : "border-slate-200"
                    } rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-[11px] font-semibold mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {enquiryType === "price_request" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t("quantity")}
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="1">1</option>
                    <option value="2-5">2–5</option>
                    <option value="5-20">5–20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("message")}
                </label>
                <textarea
                  rows={3}
                  placeholder={t("messagePh")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-[0.99] text-white font-black text-sm rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t("submitting") : t("submit")}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] font-semibold text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t("confidential")}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
