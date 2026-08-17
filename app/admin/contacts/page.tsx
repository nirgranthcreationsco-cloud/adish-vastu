"use client";

import { supabase } from "@/supabase";
import {
    ArrowRight,
    Inbox,
    MessageCircle,
    MessageSquare,
    Phone,
    Search,
    Shield,
    Trash2,
    User,
    XCircle,
    Sparkles,
    Tag,
    CheckCircle2
} from "lucide-react";
import { useEffect, useState } from "react";

type FilterTab = "ALL" | "PRICE_REQUESTS" | "CONSULTATIONS" | "GENERAL";
type PipelineStatus = "NEW" | "CONTACTED" | "PRICE_SHARED" | "INTERESTED" | "CONVERTED" | "CLOSED";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [pipelineStatuses, setPipelineStatuses] = useState<Record<string, PipelineStatus>>({});

  useEffect(() => {
    fetchContacts();
    // Load local pipeline statuses if stored
    try {
      const saved = localStorage.getItem("lead_pipeline_statuses");
      if (saved) setPipelineStatuses(JSON.parse(saved));
    } catch (e) {}
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

  const updateStatus = (id: string, newStatus: PipelineStatus) => {
    const updated = { ...pipelineStatuses, [id]: newStatus };
    setPipelineStatuses(updated);
    try {
      localStorage.setItem("lead_pipeline_statuses", JSON.stringify(updated));
    } catch (e) {}
  };

  const getCleanPhone = (phoneStr: string) => {
    return phoneStr.replace(/\D/g, "");
  };

  const openWhatsAppReply = (contact: any) => {
    const rawPhone = getCleanPhone(contact.phone || "");
    const phone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
    const isPriceReq = contact.service?.toLowerCase().includes("price request");
    const isConsultation = contact.service?.toLowerCase().includes("consultation");
    
    let text = `Namaste ${contact.name},\nThank you for connecting with Jain Vastu Solutions regarding *${contact.service}*.`;
    if (isPriceReq) {
      text += `\nWe are pleased to share the current official pricing and remedy specifications with you.`;
    } else if (isConsultation) {
      text += `\nOur certified Vastu consultant is available to assist you with directional guidance.`;
    }
    text += `\nHow may we assist you today?`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    if (contact.id && (!pipelineStatuses[contact.id] || pipelineStatuses[contact.id] === "NEW")) {
      updateStatus(contact.id, "CONTACTED");
    }
  };

  const filteredContacts = contacts
    .filter(contact => {
      const matchesSearch = 
        contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.includes(searchTerm) ||
        contact.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message?.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      const serviceLower = (contact.service || "").toLowerCase();
      const messageLower = (contact.message || "").toLowerCase();

      if (activeTab === "PRICE_REQUESTS") {
        return serviceLower.includes("price request") || messageLower.includes("price_request");
      }
      if (activeTab === "CONSULTATIONS") {
        return serviceLower.includes("consultation") || messageLower.includes("consultation_request");
      }
      if (activeTab === "GENERAL") {
        return !serviceLower.includes("product") && !serviceLower.includes("price request");
      }
      return true;
    });

  const getStatusColor = (status: PipelineStatus) => {
    switch (status) {
      case "NEW": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "CONTACTED": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "PRICE_SHARED": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "INTERESTED": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "CONVERTED": return "bg-emerald-600 text-white border-emerald-400 font-bold";
      case "CLOSED": return "bg-slate-700/50 text-slate-400 border-slate-600";
      default: return "bg-white/5 text-slate-300 border-white/10";
    }
  };

  return (
    <div className="space-y-6">
      {/* Error Alert */}
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

      {/* Top Search & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search leads, phone, product enquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-[#121212] border border-white/10 rounded-2xl text-white font-bold outline-none focus:border-amber-500/50 focus:bg-white/[0.08] transition-all text-sm"
          />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
           <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
           <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">
             {filteredContacts.length} Enquiries Captured
           </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {(["ALL", "PRICE_REQUESTS", "CONSULTATIONS", "GENERAL"] as FilterTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
              activeTab === tab
                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                : "bg-white/5 text-slate-400 hover:text-white border-white/5 hover:border-white/10"
            }`}
          >
            {tab === "ALL" && "All Enquiries"}
            {tab === "PRICE_REQUESTS" && "Price Requests"}
            {tab === "CONSULTATIONS" && "Consultations"}
            {tab === "GENERAL" && "General Contacts"}
          </button>
        ))}
      </div>

      {/* Contacts Timeline/List */}
      <div className="space-y-4">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="h-44 bg-white/5 rounded-[2.5rem] animate-pulse border border-white/5" />
          ))
        ) : filteredContacts.length > 0 ? filteredContacts.map((contact, i) => {
          const leadId = contact.id || `lead-${i}`;
          const currentStatus: PipelineStatus = pipelineStatuses[leadId] || "NEW";
          const isProductLead = contact.service?.toLowerCase().includes("product");

          return (
            <div key={i} className="group bg-[#121212] border border-white/5 hover:border-amber-500/30 rounded-[2.5rem] transition-all duration-300 overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Left Column: Contact Profile */}
              <div className="w-full md:w-80 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.01] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-black text-white uppercase tracking-tight truncate">{contact.name}</h4>
                      <p className="text-[11px] font-black text-slate-400 flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-amber-500" />
                        {contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mt-4">
                     <div className="flex items-start justify-between gap-2">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Interest</span>
                       <span className="px-2.5 py-1 bg-amber-500/10 rounded-lg text-[10px] font-black text-amber-400 border border-amber-500/20 text-right leading-tight max-w-[170px] truncate">
                         {contact.service}
                       </span>
                     </div>

                     <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Date</span>
                       <span className="text-[10px] font-bold text-slate-400">
                         {new Date(contact.created_at || Date.now()).toLocaleDateString("en-IN", {
                           day: "numeric",
                           month: "short",
                           year: "numeric"
                         })}
                       </span>
                     </div>
                  </div>
                </div>

                {/* Sales Pipeline Status Selector */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-amber-500" />
                    Pipeline Status
                  </label>
                  <select
                    value={currentStatus}
                    onChange={(e) => updateStatus(leadId, e.target.value as PipelineStatus)}
                    className={`w-full px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border outline-none cursor-pointer transition-all ${getStatusColor(currentStatus)}`}
                  >
                    <option value="NEW" className="bg-slate-900 text-white">NEW</option>
                    <option value="CONTACTED" className="bg-slate-900 text-white">CONTACTED</option>
                    <option value="PRICE_SHARED" className="bg-slate-900 text-white">PRICE_SHARED</option>
                    <option value="INTERESTED" className="bg-slate-900 text-white">INTERESTED</option>
                    <option value="CONVERTED" className="bg-slate-900 text-white">CONVERTED</option>
                    <option value="CLOSED" className="bg-slate-900 text-white">CLOSED</option>
                  </select>
                </div>
              </div>
              
              {/* Right Column: Message & Quick Follow-up */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                     <div className="flex items-center gap-2">
                       <MessageSquare className="w-4 h-4 text-amber-500" />
                       <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enquiry Data & Requirements</h5>
                     </div>
                     {isProductLead && (
                       <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[9px] font-black uppercase rounded-full">
                         Funnel Lead
                       </span>
                     )}
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">
                      {contact.message || 'Customer submitted direct interest via storefront.'}
                    </p>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 mt-6 border-t border-white/5 pt-6">
                   <button 
                     onClick={() => openWhatsAppReply(contact)}
                     className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-2xl uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
                   >
                     <MessageCircle className="w-4 h-4 fill-current" />
                     WhatsApp Follow-up
                   </button>
                   
                   <button 
                     onClick={() => updateStatus(leadId, "CONVERTED")}
                     className="px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-xs rounded-2xl border border-white/5 transition-all flex items-center gap-1.5"
                     title="Mark Converted"
                   >
                     <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                     <span>Converted</span>
                   </button>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="py-20 text-center opacity-40 bg-[#121212] border border-white/5 rounded-[2.5rem] space-y-3">
            <Inbox className="w-14 h-14 mx-auto text-slate-500" />
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">No enquiries found in this view</p>
          </div>
        )}
      </div>
    </div>
  );
}

