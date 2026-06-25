"use client";

import {
  CheckCircle2,
  ChevronRight,
  Lock,
  MapPin,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
  X
} from "lucide-react";

import Image from "next/image";

import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartcontext";

type FormField = "name" | "phone" | "address" | "city" | "pincode";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const [form, setForm] = useState<Record<FormField, string>>({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Record<FormField, string>>({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleApplyCoupon() {
    setCouponError("");
    if (couponCode.trim().toUpperCase() === "VASTU20") {
      setAppliedCoupon("VASTU20");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon("");
    }
  }

  function handleRemoveCoupon() {
    setAppliedCoupon("");
    setCouponCode("");
    setCouponError("");
  }

  function validate(field: FormField, value: string) {
    let msg = "";

    switch (field) {
      case "name":
        if (!value.trim()) msg = "Identification required";
        else if (!/^[a-zA-Z\s]{3,}$/.test(value)) msg = "Protocol error: Full name required";
        break;

      case "phone":
        if (!value.trim()) msg = "Comms line required";
        else if (value.length < 10) msg = "Incomplete sequence: 10 digits required";
        break;

      case "address":
        if (!value.trim()) msg = "Locality data missing";
        else if (value.length < 10) msg = "Insufficient data: Detailed address needed";
        break;

      case "city":
        if (!value.trim()) msg = "Hub location required";
        break;

      case "pincode":
        if (!value.trim()) msg = "Zone code required";
        else if (!/^\d{6}$/.test(value)) msg = "Invalid zone: 6 digits only";
        break;
    }

    setErrors((e) => ({ ...e, [field]: msg }));
  }

  function onChange(field: FormField, value: string) {
    let formattedValue = value;

    if (field === "phone") {
        formattedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (field === "pincode") {
        formattedValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setForm({ ...form, [field]: formattedValue });
    validate(field, formattedValue);

    if (field === "city" || field === "pincode") setShowSuggestions(true);
  }

  useEffect(() => {
    const search = form.city || form.pincode;

    if (!search || search.length < 2) return;

    const controller = new AbortController();

    fetch(`https://api.postalpincode.in/postoffice/${search}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data) => {
        const list =
          data?.[0]?.PostOffice?.map((p: any) => `${p.Name}, ${p.District}`) ??
          [];

        setSuggestions(list.slice(0, 5));
      })
      .catch(() => {});

    return () => controller.abort();
  }, [form.city, form.pincode]);

  const total = cart.reduce(
    (acc: number, p: any) => acc + p.qty * Number(p.price.replace(/\D/g, "")),
    0
  );

  const hasDiscount = appliedCoupon === "VASTU20";
  const discountAmount = hasDiscount ? total * 0.2 : 0;
  const finalTotal = total - discountAmount;

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  async function submitOrder() {
    const invalid =
      Object.values(errors).some((e) => e !== "") ||
      Object.values(form).some((v) => !v);

    if (invalid) {
      alert("Please fix all errors before proceeding");
      return;
    }

    setIsProcessing(true);

    // 1. Load Razorpay script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    // 2. Create order via backend
    const amountInPaise = Math.round(finalTotal * 100);
    let orderData;
    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise, receipt: form.phone }),
      });
      orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Failed to create order");
    } catch (err: any) {
      alert(err.message);
      setIsProcessing(false);
      return;
    }

    // 3. Open Razorpay modal
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: orderData.currency,
      name: "Vastu Academy",
      description: "Sacred Items Checkout",
      order_id: orderData.order_id,
      handler: async function (response: any) {
        // 4. Verify Payment signature via backend
        try {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (!verifyRes.ok) throw new Error(verifyData.error || "Verification failed");

          // 5. On successful verification, save order to Supabase
          const { error } = await supabase.from("orders").insert({
            id: crypto.randomUUID(),
            name: form.name,
            phone: form.phone,
            address: form.address,
            city: form.city,
            pincode: form.pincode,
            total: finalTotal,
            status: "paid", // Mark as paid
            cart_items: cart,
          });

          if (error) {
            console.error("Supabase Order Insertion Error:", error);
            alert(`Order saving failed: ${error.message}`);
          } else {
            localStorage.removeItem("cart");
            router.push("/ordersuccess");
          }
        } catch (err: any) {
          alert("Payment verification failed: " + err.message);
        } finally {
          setIsProcessing(false);
        }
      },
      prefill: {
        name: form.name,
        contact: form.phone,
      },
      theme: {
        color: "#f59e0b",
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed: " + response.error.description);
      setIsProcessing(false);
    });
    paymentObject.open();
  }

  if (!cart.length)
    return <EmptyCartUI onBack={() => router.push("/")} />;

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* PROGRESS STEPS - MINI */}
          <div className="mb-10 flex items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase text-slate-400">
            <span className="text-amber-600">Cart</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">Checkout</span>
            <ChevronRight className="w-3 h-3" />
            <span>Success</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SIDE - FORM */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6">
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-amber-50 rounded-2xl">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Checkout</h1>
                    <p className="text-slate-500 font-medium">Verify your sacred delivery details</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    value={form.name}
                    error={errors.name}
                    onChange={(v) => onChange("name", v)}
                    placeholder="Enter your name"
                  />
                  <FormField
                    label="Phone Number"
                    value={form.phone}
                    error={errors.phone}
                    onChange={(v) => onChange("phone", v)}
                    placeholder="Enter 10-digit number"
                  />
                  <div className="md:col-span-2">
                    <FormField
                      label="Street Address"
                      value={form.address}
                      error={errors.address}
                      onChange={(v) => onChange("address", v)}
                      placeholder="House no, Street name, Landmark"
                    />
                  </div>
                  <AutocompleteField
                    label="City"
                    value={form.city}
                    error={errors.city}
                    onChange={(v) => onChange("city", v)}
                    suggestions={suggestions}
                    onSelect={(city) => {
                      setForm({ ...form, city });
                      setErrors({ ...errors, city: "" });
                      setShowSuggestions(false);
                    }}
                    show={showSuggestions}
                    placeholder="Enter city"
                  />
                  <FormField
                    label="Pincode"
                    value={form.pincode}
                    error={errors.pincode}
                    onChange={(v) => onChange("pincode", v)}
                    placeholder="6-digit pincode"
                  />
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-50 rounded-lg"><Truck className="w-4 h-4 text-green-600" /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Delivery</p>
                      <p className="text-sm font-bold text-slate-700">Free & Fast</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg"><Lock className="w-4 h-4 text-blue-600" /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Payment</p>
                      <p className="text-sm font-bold text-slate-700">SSL Secure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg"><ShieldCheck className="w-4 h-4 text-amber-600" /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Authentic</p>
                      <p className="text-sm font-bold text-slate-700">100% Verified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON - FOR MOBILE (Hidden on Desktop) */}
              <div className="lg:hidden">
                <button
                  onClick={submitOrder}
                  disabled={isProcessing}
                  className="w-full py-5 bg-slate-900 text-white font-black text-xl rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group disabled:opacity-70"
                >
                  {isProcessing ? "Processing..." : (
                    <>
                      Place Order ₹{finalTotal.toLocaleString('en-IN')}
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - FLOATING SUMMARY */}
            <div className="lg:col-span-5 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] flex flex-col min-h-0">
              <div className="bg-white rounded-[2rem] border border-amber-100 shadow-2xl shadow-orange-100/50 flex flex-col h-full min-h-0 overflow-hidden w-full items-stretch">
                
                {/* Fixed Summary Header */}
                <div className="p-8 pb-6 border-b border-slate-100 bg-gradient-to-br from-white to-amber-50/30 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-900 rounded-2xl text-white">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-slate-900">Your Selection</h2>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">{cart.length} Sacred Items</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCROLLABLE ITEMS LIST */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent overscroll-contain">
                  {cart.map((p: any, i: number) => (
                    <div key={i} className="group flex items-center gap-5 p-1">
                      <div className="relative flex-shrink-0 w-20 h-20 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-inner">
                        {p.image ? (
                          <Image 
                            src={p.image} 
                            alt={p.name} 
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <Package className="w-8 h-8" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 className="text-base font-bold text-slate-900 line-clamp-2 leading-tight">
                            {p.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(p.name)}
                            className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-slate-100 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(p.name, -1)}
                              className="p-1 hover:bg-white rounded-md transition-colors text-slate-500"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-black text-slate-900">{p.qty}</span>
                            <button
                              onClick={() => updateQuantity(p.name, 1)}
                              className="p-1 hover:bg-white rounded-md transition-colors text-slate-500"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-lg font-black text-amber-600">
                            ₹{(p.qty * Number(p.price.replace(/\D/g, ""))).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fixed Pricing Footer */}
                <div className="p-8 bg-slate-50 border-t border-slate-200 flex-shrink-0">
                  {/* Coupon Code Section */}
                  <div className="mb-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100/80">
                    <p className="text-[10px] font-black text-amber-800 uppercase tracking-wider mb-2">Have a promo code?</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. VASTU20"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={!!appliedCoupon}
                        className="flex-1 px-4 py-2 text-sm font-bold bg-white border border-amber-200 rounded-xl outline-none focus:border-amber-400 placeholder:text-slate-300 disabled:bg-slate-100 disabled:text-slate-500 uppercase"
                      />
                      {appliedCoupon ? (
                        <button
                          onClick={handleRemoveCoupon}
                          className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-black uppercase tracking-wider transition-colors border border-red-100"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          onClick={handleApplyCoupon}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                    {couponError && (
                      <p className="text-[10px] font-bold text-red-500 mt-1.5">{couponError}</p>
                    )}
                    {appliedCoupon && (
                      <p className="text-[10px] font-bold text-green-600 mt-1.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Code {appliedCoupon} applied! 20% discount activated.
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                      <span>Subtotal</span>
                      <span className="text-slate-900 tracking-tight">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                    {hasDiscount && (
                      <div className="flex justify-between items-center text-sm font-bold text-green-600">
                        <span>Promo Discount (20%)</span>
                        <span className="tracking-tight">- ₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                      <span>Shipping</span>
                      <span className="text-green-600 uppercase tracking-widest text-[10px]">Free Delivery</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-300">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Grand Total</p>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">
                          ₹{finalTotal.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1 flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-3 h-3" /> All Inclusive
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={submitOrder}
                      disabled={isProcessing}
                      className="hidden lg:flex w-full py-5 bg-slate-900 text-white font-black text-lg rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all items-center justify-center gap-4 group disabled:opacity-70"
                    >
                      {isProcessing ? (
                        <span className="animate-pulse">Processing...</span>
                      ) : (
                        <>
                          Complete Sacred Order
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* REUSABLE UI COMPONENTS */

function FormField({
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  error: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-1">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-amber-500 transition-colors">{label}</label>
        {value.length > 0 && !error && (
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        )}
      </div>
      <div className="relative group">
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full px-5 py-4 rounded-2xl border-2 bg-slate-50/50 text-slate-900 font-bold placeholder:text-slate-300 outline-none transition-all duration-300 ${
            error
                ? "border-red-100 bg-red-50/30 focus:border-red-300"
                : "border-slate-100 focus:border-amber-400 focus:bg-white focus:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.2)]"
            }`}
            placeholder={placeholder}
        />
        {error && (
            <div className="absolute top-2 right-4 flex items-center gap-1.5 px-2 py-1 bg-red-50 rounded-lg border border-red-100 animate-in fade-in zoom-in duration-300">
                <div className="w-1 h-1 bg-red-500 rounded-full" />
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{error}</p>
            </div>
        )}
      </div>
    </div>
  );
}

function AutocompleteField({
  label,
  value,
  error,
  onChange,
  suggestions,
  onSelect,
  show,
  placeholder,
}: {
  label: string;
  value: string;
  error: string;
  onChange: (v: string) => void;
  suggestions: string[];
  onSelect: (v: string) => void;
  show: boolean;
  placeholder?: string;
}) {
  return (
    <div className="relative group">
      <FormField label={label} value={value} error={error} onChange={onChange} placeholder={placeholder} />
      {show && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden p-1">
          {suggestions.map((city, i) => (
            <div
              key={i}
              onClick={() => onSelect(city)}
              className="px-5 py-3 text-sm font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer rounded-xl transition-colors"
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyCartUI({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
      <div className="w-32 h-32 bg-amber-50 rounded-[3rem] flex items-center justify-center mb-10 border border-amber-100">
        <ShoppingBag className="w-12 h-12 text-amber-600" />
      </div>
      <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Your Cart is Empty</h2>
      <p className="text-slate-500 font-medium max-w-sm mb-12">
        A journey of a thousand sacred steps begins with a single remedy. Explore our collection.
      </p>
      <button
        onClick={onBack}
        className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-slate-300"
      >
        Explore Remedies
      </button>
    </div>
  );
}
