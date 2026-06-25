"use client";

import { motion } from "framer-motion";
import { ChevronRight, Lock, Sparkles, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple password check (user requested "password access")
    // In a real app, this would be a Supabase auth call
    if (password === "vastuadmin2026") {
      // Set a cookie for the middleware to pick up
      document.cookie = "admin_session=true; path=/; max-age=86400; SameSite=Strict";
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Authorization denied. Invalid security key.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Section */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-amber-500/20 rotate-12 transition-transform hover:rotate-0 duration-500 group">
              <Sparkles className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2 uppercase">Command Center</h1>
            <p className="text-slate-500 font-medium">Restricted Access. Level 4 Clearance.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">Identity Identifier</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-600 group-focus-within:text-amber-500 transition-colors" />
                </div>
                <input
                  type="text"
                  readOnly
                  value="ADMIN_ACCESS"
                  className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-bold outline-none cursor-not-allowed opacity-50"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-1">Security Key Override</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-600 group-focus-within:text-amber-500 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold placeholder:text-slate-600 outline-none focus:border-amber-500/50 focus:bg-white/[0.08] transition-all"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-xs font-bold uppercase tracking-widest text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  INITIALIZE SYSTEM
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer of card */}
          <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#121212] bg-slate-800" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-[#121212] bg-amber-500 flex items-center justify-center text-[10px] font-black text-white">+8</div>
            </div>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Global Sec-Ops Active</p>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-8 flex justify-center gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
          <span>VER: 4.2.0-STABLE</span>
          <span>LAT: 12ms</span>
          <span>NODE: AWS-MUM-01</span>
        </div>
      </motion.div>
    </div>
  );
}
