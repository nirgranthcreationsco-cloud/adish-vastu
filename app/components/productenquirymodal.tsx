"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Send, Sparkles, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { supabase } from "@/supabase";

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categoryName: string;
  selectedVariant?: string;
  enquiryType: "price_request" | "consultation_request";
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  productName,
  categoryName,
  selectedVariant,
  enquiryType,
}: ProductEnquiryModalProps) {
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
    if (!name.trim()) errs.name = "Please enter your name";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Please enter a valid 10-digit WhatsApp number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppMessage = () => {
    const itemDesc = selectedVariant ? `${productName} — ${selectedVariant}` : productName;
    if (enquiryType === "price_request") {
      let text = `Namaste, I am interested in the *${itemDesc}* (Category: ${categoryName}). Please share the current price, availability, and ordering details.`;
      if (quantity && quantity !== "1") {
        text += `\nQuantity Required: ${quantity}`;
      }
      if (name.trim()) {
        text += `\nFrom: ${name.trim()}`;
      }
      if (message.trim()) {
        text += `\nNote: ${message.trim()}`;
      }
      return encodeURIComponent(text);
    } else {
      let text = `Namaste, I would like expert guidance regarding the right Vastu remedy for *${itemDesc}*. Please connect me with a Vastu consultant.`;
      if (name.trim()) {
        text += `\nFrom: ${name.trim()}`;
      }
      if (message.trim()) {
        text += `\nRequirement / Concern: ${message.trim()}`;
      }
      return encodeURIComponent(text);
    }
  };

  const handleWhatsAppRedirect = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      // Save lead in Supabase in background
      await supabase.from("contact_requests").insert({
        name: name.trim(),
        phone: phone.trim(),
        service: `Product ${enquiryType === "price_request" ? "Price Request" : "Consultation"}: ${productName}${selectedVariant ? ` (${selectedVariant})` : ""}`,
        message: `Enquiry Type: ${enquiryType} | Variant: ${selectedVariant || "Standard"} | Qty: ${quantity} | Note: ${message.trim() || "WhatsApp Clickout"}`,
      });
    } catch (err) {
      console.error("Lead tracking error:", err);
    } finally {
      setIsSubmitting(false);
      // WhatsApp official business line
      const waUrl = `https://wa.me/919999999999?text=${getWhatsAppMessage()}`;
      window.open(waUrl, "_blank");
      setIsSuccess(true);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: name.trim(),
        phone: phone.trim(),
        service: `Product ${enquiryType === "price_request" ? "Price Request" : "Consultation"}: ${productName}${selectedVariant ? ` (${selectedVariant})` : ""}`,
        message: `Enquiry Type: ${enquiryType} | Variant: ${selectedVariant || "Standard"} | Qty: ${quantity} | Note: ${message.trim() || "Direct Submission"}`,
      });

      if (error) throw error;
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      alert(err.message || "Failed to submit enquiry. Please try WhatsApp.");
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
        {/* Header with Luxury Vedic Styling */}
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
            {enquiryType === "price_request" ? "Price On Request" : "Personal Guidance"}
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {enquiryType === "price_request" ? "Get the Latest Price" : "Talk to a Vastu Expert"}
          </h3>
          <p className="text-amber-100 text-xs sm:text-sm mt-1 leading-relaxed">
            {enquiryType === "price_request"
              ? "Rates vary by size, material, or custom specifications. Share your details and our team will provide instant pricing."
              : "Not sure about the right placement or sizing? Get direct, scientific guidance before buying."}
          </p>
        </div>

        {/* Selected Product Summary Card */}
        <div className="bg-amber-50/80 border-b border-amber-200/60 px-6 py-3.5 flex items-center justify-between">
          <div className="flex-1 min-w-0 pr-3">
            <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">{categoryName}</p>
            <h4 className="text-sm font-black text-slate-900 truncate">
              {productName} {selectedVariant && <span className="text-amber-700">({selectedVariant})</span>}
            </h4>
          </div>
          <span className="px-2.5 py-1 bg-amber-200/80 text-amber-900 rounded-lg text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
            Official Remedy
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{name}</strong>. Our senior Vastu team has received your enquiry for <strong>{productName}</strong> and will connect via WhatsApp shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-all"
                >
                  Back to Store
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? "border-red-400 bg-red-50/20" : "border-slate-200"} rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all`}
                />
                {errors.name && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-slate-500 pointer-events-none">+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-200"} rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.phone}</p>}
              </div>

              {enquiryType === "price_request" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Quantity Needed
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="1">1 Unit / Piece</option>
                    <option value="2-5">2 to 5 Units</option>
                    <option value="5-20">5 to 20 Units (Bulk)</option>
                    <option value="20+">20+ Units (Commercial/Project)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {enquiryType === "price_request" ? "Message or Requirement (Optional)" : "What do you need help with? (Optional)"}
                </label>
                <textarea
                  rows={2}
                  placeholder={enquiryType === "price_request" ? "Any specific size, finish, or location preference..." : "Briefly describe your room direction or space concern..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-black text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Get {enquiryType === "price_request" ? "Price" : "Guidance"} on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isSubmitting ? "Submitting..." : "Submit Direct Enquiry"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] font-semibold text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Confidential • Direct Contact with Jain Vastu Solutions Team</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
