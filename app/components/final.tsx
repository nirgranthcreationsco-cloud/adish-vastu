"use client";

import { supabase } from "@/supabase";
import {
    CheckCircle2,
    ChevronRight,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Send,
    Sparkles,
    X,
    Youtube,
} from "lucide-react";
import { useTranslations } from 'next-intl';
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FinalCTAAndFooter() {
  const t = useTranslations('final');
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const searchParams = useSearchParams();

  // Handle URL Context
  useEffect(() => {
    const service = searchParams.get('service');
    const msg = searchParams.get('msg');
    
    if (service || msg) {
        setFormData(prev => ({
            ...prev,
            service: service || prev.service,
            message: msg ? `Interest in: ${msg}` : prev.message
        }));
        
        // Scroll to form if it's a contextual link
        const element = document.getElementById('consultation-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [searchParams]);

  // -----------------------------
  // VALIDATION HANDLER
  // -----------------------------
  const validateField = (field: string, value: string) => {
    let msg = "";

    switch (field) {
      case "name":
        if (!value.trim()) msg = "Name is required";
        else if (value.length < 3) msg = "Name must be at least 3 characters";
        break;

      case "phone":
        if (!value.trim()) msg = "Phone number is required";
        else if (!/^[6-9]\d{9}$/.test(value))
          msg = "Enter a valid 10-digit Indian mobile number";
        break;

      case "service":
        if (!value.trim()) msg = "Please select a service";
        break;

      

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Live validation
    validateField(field, value);
  };

  // -----------------------------
  // SUBMIT HANDLER
  // -----------------------------
const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault();

  const newErrors = {
    name: !formData.name.trim() ? "Name is required" : "",
    phone: !/^[6-9]\d{9}$/.test(formData.phone)
      ? "Enter a valid 10-digit Indian mobile number"
      : "",
    service: !formData.service.trim() ? "Please select a service" : "",
    
  };

  setErrors(newErrors);

  // ❗ Only required fields can block submission
  const hasRequiredErrors =
    newErrors.name !== "" ||
    newErrors.phone !== "" ||
    newErrors.service !== "";

  if (hasRequiredErrors) return;

  setIsSubmitting(true);

  console.log("DEBUG: Attempting insert...");

const { error } = await supabase.from("contact_requests").insert({
  name: formData.name.trim(),
  phone: formData.phone,
  service: formData.service,
  message: formData.message?.trim() || null,
});



console.log("DEBUG ERROR:", error);

if (error) {
  console.error("Supabase Insert Error:", error);
  setIsSubmitting(false);
  return;
}


  setSubmitSuccess(true);
  setIsSubmitting(false);

  setTimeout(() => {
    setSubmitSuccess(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({
      name: "",
      phone: "",
      service: "",
    });
  }, 3000);
};


  return (
    <footer className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500 blur-[220px]" />
      </div>

      {/* MAIN SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm text-amber-900">
                {t('badge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
              {t('title1')}
              <br />
              {t('title2')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mt-2">
                {t('title3')}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {t('description')}
            </p>

            <div className="space-y-4 mb-10">
              {[
                t('benefit1'),
                t('benefit2'),
                t('benefit3'),
                t('benefit4'),
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mt-0.5">
                    <ChevronRight className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-amber-400 pl-6 py-4 bg-white/80 rounded-r-lg">
              <p className="text-base md:text-lg text-slate-700 italic mb-2">
                {t('quote')}
              </p>
              <cite className="text-amber-700 font-semibold">{t('quoteAuthor')}</cite>
            </blockquote>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="relative" id="consultation-form">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl rounded-3xl" />

            <div className="relative bg-[#ffffff] backdrop-blur-xl border border-amber-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                  {t('formTitle')}
                </h3>
                <p className="text-slate-500 font-medium uppercase text-[10px] tracking-[0.2em]">{t('formSubtitle')}</p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl rotate-12 flex items-center justify-center shadow-xl shadow-green-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                    {t('successTitle')}
                  </h4>
                  <p className="text-slate-600 font-medium italic">
                    {t('successMessage')}
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Name */}
                  <Field
                    label={t('nameLabel')}
                    value={formData.name}
                    placeholder={t('namePlaceholder')}
                    error={errors.name}
                    onChange={(v) => handleChange("name", v)}
                  />

                 
  <Field
  label={t('phoneLabel')}
  value={formData.phone}
  placeholder={t('phonePlaceholder')}
  error={errors.phone}
  onChange={(v) => {
    const digits = v.replace(/\D/g, ""); // keep only digits
    if (digits.length <= 10) {
      handleChange("phone", digits);
    }
  }}
/>

              
                  {/* Service */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      {t('serviceLabel')}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-slate-900 font-medium
                      ${errors.service ? "border-red-500" : "border-slate-300"}
                      focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all`}
                    >
                      <option value="" className="bg-white text-slate-900">
                        {t('servicePlaceholder')}
                      </option>
                      <option value="vastu" className="bg-white text-slate-900">
                        {t('serviceVastu')}
                      </option>
                      <option value="jyotish" className="bg-white text-slate-900">
                        {t('serviceJyotish')}
                      </option>
                      <option value="remedies" className="bg-white text-slate-900">
                        {t('serviceRemedies')}
                      </option>
                      <option value="courses" className="bg-white text-slate-900">
                        {t('serviceCourses')}
                      </option>
                      <option value="other" className="bg-white text-slate-900">
                        {t('serviceOther')}
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-xl shadow-orange-500/40 shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        {t('submit')}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    {t('disclaimer')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">{t('academyName')}</h3>
              <p className="text-sm text-slate-600">
                {t('academyDesc')}
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="hover:text-amber-700 cursor-pointer">{t('consultations')}</li>
                <li className="hover:text-amber-700 cursor-pointer">{t('courses')}</li>
                <li className="hover:text-amber-700 cursor-pointer">{t('remediesLink')}</li>
                <li className="hover:text-amber-700 cursor-pointer">{t('stories')}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">{t('contact')}</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-700" /> +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-700" /> support@adishacademy.in
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-700" /> Ahmedabad, India
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">{t('follow')}</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube, X].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center bg-white border border-amber-200 rounded-full hover:bg-amber-50 transition cursor-pointer group"
                  >
                    <Icon className="w-5 h-5 text-amber-700 group-hover:text-amber-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-14 border-t border-amber-200 pt-6">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {t('academyName')} · {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------
// FIELD COMPONENT (REUSABLE)
// -----------------------------
function Field({
  label,
  value,
  error,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-1">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</label>
        {value.length > 0 && !error && (
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        )}
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 transition-all duration-300 outline-none
          ${
            error
              ? "border-red-100 bg-red-50/30 focus:border-red-300"
              : "border-slate-100 focus:border-amber-400 focus:bg-white"
          }`}
      />

      {error && (
        <div className="flex items-center gap-1.5 px-2 py-1">
            <div className="w-1 h-1 bg-red-500 rounded-full" />
            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{error}</p>
        </div>
      )}
    </div>
  );
}
