"use client";

import { supabase } from "@/supabase";
import {
    ArrowRight,
    Inbox,
    MessageSquare,
    Phone,
    Search,
    Shield,
    Trash2,
    User,
    XCircle
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from("contact_requests")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (supabaseError) {
        console.error("Contacts Fetch Error:", supabaseError);
        setError(supabaseError.message);
      } else {
        setContacts(data || []);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  const filteredContacts = contacts.filter(contact => 
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone?.includes(searchTerm) ||
    contact.service?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col gap-4 text-red-500 mb-6">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="font-black uppercase tracking-widest text-lg">Inbound Stream Offline</h3>
          </div>
          <p className="text-sm font-medium opacity-80">ERROR: {error}</p>
          <button onClick={() => fetchContacts()} className="w-fit text-[10px] font-black uppercase text-red-500 underline underline-offset-4">Retry Handshake</button>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search communications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-[#121212] border border-white/5 rounded-2xl text-white font-bold outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all"
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
           <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Feed Active</span>
        </div>
      </div>

      {/* Contacts Timeline/List */}
      <div className="space-y-4">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="h-40 bg-white/5 rounded-[2.5rem] animate-pulse border border-white/5" />
          ))
        ) : filteredContacts.length > 0 ? filteredContacts.map((contact, i) => (
          <div key={i} className="group bg-[#121212] border border-white/5 hover:border-emerald-500/30 rounded-[2.5rem] transition-all duration-300 overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="w-full md:w-80 p-8 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">{contact.name}</h4>
                    <p className="text-[10px] font-black text-slate-500 uppercase flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {contact.phone}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-600 uppercase">Service</span>
                     <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-emerald-500 border border-white/5 uppercase">{contact.service}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-600 uppercase">Status</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase">NEW_INCOMING</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-600 uppercase">Date</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase">{new Date(contact.created_at).toLocaleDateString()}</span>
                   </div>
                </div>
            </div>
            
            <div className="flex-1 p-8 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <MessageSquare className="w-4 h-4 text-slate-600" />
                   <h5 className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Secure Transmission Message</h5>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                  "{contact.message || 'No additional transmission data provided.'}"
                </p>
              </div>
              
              <div className="flex items-center justify-end gap-3 mt-6 border-t border-white/5 pt-6">
                 <button className="p-3 bg-white/5 hover:bg-red-500/20 text-slate-500 hover:text-red-500 rounded-2xl transition-all border border-white/5">
                   <Trash2 className="w-5 h-5" />
                 </button>
                 <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white rounded-2xl transition-all border border-white/5">
                   <Shield className="w-5 h-5" />
                 </button>
                 <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-2xl uppercase tracking-widest shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2 group/btn">
                    Response Sequence
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center opacity-30 bg-[#121212] border border-white/5 rounded-[2.5rem]">
            <Inbox className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg font-black uppercase tracking-widest">Inbox currently secured & empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
