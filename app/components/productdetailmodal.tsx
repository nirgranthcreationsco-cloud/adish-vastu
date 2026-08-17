"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ShoppingCart, MessageCircle, Sparkles, CheckCircle2, HelpCircle, Shield, ChevronRight } from "lucide-react";
import { CatalogProduct, getEducationalInfo, getProductStatus, ProductStatus } from "@/app/data/productCatalog";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    image: string;
    category: string;
    catalogItem?: CatalogProduct;
  } | null;
  selectedVariant?: string;
  onSelectVariant: (variant: string) => void;
  onAddToCart: () => void;
  onOpenEnquiry: (type: "price_request" | "consultation_request") => void;
  formattedPrice: string;
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
  selectedVariant,
  onSelectVariant,
  onAddToCart,
  onOpenEnquiry,
  formattedPrice,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const info = getEducationalInfo(product.name, product.category);
  const status: ProductStatus = getProductStatus(product.catalogItem, selectedVariant);
  const isPriced = status === "DIRECT_PURCHASE";

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all backdrop-blur-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Top Hero / Image Banner */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 flex items-center justify-center overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-4"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center">
                <svg className="w-20 h-20 text-amber-400/80 mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <polygon points="50,10 90,90 10,90" strokeWidth="1.5" className="text-amber-500" />
                  <polygon points="50,90 90,10 10,10" strokeWidth="1" strokeDasharray="3 3" className="text-amber-400/50" />
                  <circle cx="50" cy="50" r="28" strokeWidth="1.2" className="text-amber-300" />
                  <circle cx="50" cy="50" r="14" strokeWidth="1" className="text-amber-400" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-3 left-4 px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full backdrop-blur-md">
              <span className="text-[10px] font-black text-amber-200 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Personally Energized & Certified
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 leading-tight">
                {product.name}
              </h2>

              {/* Price / Availability Banner */}
              <div className="mt-3 flex items-center gap-3">
                {isPriced ? (
                  <span className="text-2xl sm:text-3xl font-black text-amber-600">
                    {formattedPrice}
                  </span>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100/80 border border-amber-300 rounded-xl text-amber-900 text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    {status === "CONSULTATION_REQUIRED" ? "Recommended after consultation" : "Price on Request"}
                  </div>
                )}
              </div>
            </div>

            {/* Variant Selector if available */}
            {product.catalogItem && product.catalogItem.variants.length > 0 && (
              <div className="bg-amber-50/60 border border-amber-200/80 p-4 rounded-2xl">
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Select Size / Specification:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.catalogItem.variants.map((v) => {
                    const isSelected = selectedVariant === v.option;
                    return (
                      <button
                        key={v.option}
                        type="button"
                        onClick={() => onSelectVariant(v.option)}
                        className={`p-2.5 rounded-xl text-xs font-black border transition-all text-left flex flex-col justify-between ${
                          isSelected
                            ? "bg-amber-600 text-white border-amber-600 shadow-md"
                            : "bg-white text-slate-800 border-amber-200 hover:border-amber-400"
                        }`}
                      >
                        <span>{v.option}</span>
                        {v.b2c ? (
                          <span className={`text-[10px] font-bold mt-1 ${isSelected ? "text-amber-100" : "text-amber-700"}`}>
                            ₹{v.b2c}
                          </span>
                        ) : (
                          <span className={`text-[9px] font-medium mt-1 ${isSelected ? "text-amber-200" : "text-slate-500"}`}>
                            On Request
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4 Core Educational Pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  What is it?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {info.whatIsIt}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Why is it used?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {info.whyUsed}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Who is it suitable for?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {info.suitableFor}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  How is it activated?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {info.howUsed}
                </p>
              </div>
            </div>

            {/* Need Guidance Callout Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <h5 className="text-sm font-black text-slate-900">
                  Not sure which remedy is right for your space?
                </h5>
                <p className="text-xs text-slate-600">
                  Speak with our certified Vastu experts for directional placement advice.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry("consultation_request");
                }}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-amber-900 font-bold text-xs rounded-xl border border-amber-300 shadow-sm flex items-center gap-1.5 whitespace-nowrap transition-all"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Talk to a Vastu Expert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky CTA Bar */}
        <div className="bg-slate-50 border-t border-slate-200/80 p-4 sm:p-5 flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Purchase or Enquiry</p>
            <p className="text-base font-black text-slate-900">{isPriced ? formattedPrice : "Direct Follow-up"}</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isPriced ? (
              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart ({formattedPrice})</span>
              </button>
            ) : status === "CONSULTATION_REQUIRED" ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry("consultation_request");
                }}
                className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Talk to a Vastu Expert</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry("price_request");
                }}
                className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Latest Price →</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry("consultation_request");
              }}
              className="p-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl transition-all"
              title="Ask an Expert"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
