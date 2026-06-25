"use client";

import { cn } from "@/app/hooks/utils";
import { supabase } from "@/supabase";
import {
    Activity,
    Calendar,
    CheckCircle,
    ChevronRight,
    Download,
    Mail,
    MessageSquare,
    Phone,
    Search,
    TrendingUp,
    Users,
    XCircle,
    Zap
} from "lucide-react";
import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from("energy_score_leads")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (supabaseError) {
        console.error("Leads Fetch Error:", supabaseError);
        setError(supabaseError.message);
      } else {
        setLeads(data || []);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone?.includes(searchTerm) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500 bg-green-500/10 border-green-500/20";
    if (score >= 50) return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-red-500 bg-red-500/10 border-red-500/20";
  };

  return (
    <div className="space-y-6">
      {/* Stats Mini Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#121212] border border-white/5 p-6 rounded-[2rem] flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
             <Activity className="w-7 h-7" />
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Active Leads</p>
            <h3 className="text-2xl font-black text-white">{leads.length}</h3>
          </div>
        </div>
        <div className="bg-[#121212] border border-white/5 p-6 rounded-[2rem] flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
             <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Avg. Score</p>
            <h3 className="text-2xl font-black text-white">
              {leads.length > 0 ? Math.round(leads.reduce((a, b) => a + (b.score || 0), 0) / leads.length) : 0}%
            </h3>
          </div>
        </div>
        <div className="bg-[#121212] border border-white/5 p-6 rounded-[2rem] flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
             <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Conversion</p>
            <h3 className="text-2xl font-black text-white">24.8%</h3>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col gap-4 text-red-500 mb-6">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="font-black uppercase tracking-widest text-lg">Lead Database Offline</h3>
          </div>
          <p className="text-sm font-medium opacity-80">ERROR: {error}</p>
          <button onClick={() => fetchLeads()} className="w-fit text-[10px] font-black uppercase text-red-500 underline underline-offset-4">Retry Bypass</button>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-[#121212] border border-white/5 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
          />
        </div>
        <button className="px-5 py-3 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5">
          <Download className="w-4 h-4" />
          Export Database
        </button>
      </div>

      {/* Leads Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {loading ? (
          [1, 2, 3, 4].map(i => (
            <div key={i} className="h-64 bg-white/5 rounded-[2.5rem] animate-pulse border border-white/5" />
          ))
        ) : filteredLeads.length > 0 ? filteredLeads.map((lead, i) => (
          <div key={i} className="group bg-[#121212] border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white font-black text-xl shadow-2xl">
                  {lead.name?.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">{lead.name}</h4>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 mt-1">
                    <Calendar className="w-3 h-3" />
                    ACQUIRED {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className={cn(
                "px-4 py-2 rounded-xl border text-sm font-black flex items-center gap-2 shadow-lg",
                getScoreColor(lead.score)
              )}>
                <Zap className="w-4 h-4" />
                {lead.score}% HARMONY
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-100 transition-colors">
                   <Phone className="w-4 h-4 text-blue-500" />
                   <span className="text-xs font-black uppercase tracking-widest">{lead.phone}</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-100 transition-colors">
                   <Mail className="w-4 h-4 text-blue-500" />
                   <span className="text-xs font-black uppercase tracking-widest truncate max-w-[150px]">{lead.email || 'NO_ENCRYPT_EMAIL'}</span>
                 </div>
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest underline decoration-blue-500/30 underline-offset-4">Primary Intent</p>
                 <p className="text-sm font-bold text-white uppercase">{lead.concern || 'Not Specified'}</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase">{lead.property_type} · {lead.ownership}</p>
               </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
               <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-tighter transition-colors">
                    <MessageSquare className="w-3 h-3" />
                    OPEN DOSSIER
                  </button>
               </div>
               <button className="flex items-center gap-1 text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest group/btn">
                  INITIATE PROTOCOL
                  <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center opacity-30">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg font-black uppercase tracking-widest">Lead database empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
