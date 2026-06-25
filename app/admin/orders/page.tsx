"use client";

import { cn } from "@/app/hooks/utils";
import { supabase } from "@/supabase";
import {
    Calendar,
    CheckCircle,
    Clock,
    Download,
    Filter,
    MapPin,
    MoreHorizontal,
    Package,
    Phone,
    Search,
    User,
    XCircle
} from "lucide-react";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  async function updateStatus(id: string, currentStatus: string) {
    const nextStatus = currentStatus.toLowerCase() === 'pending' ? 'completed' : 'pending';
    
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: nextStatus })
        .eq("id", id);
      
      if (error) throw error;
      fetchOrders();
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
    }
  }

  async function fetchOrders() {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (supabaseError) {
        console.error("Orders Fetch Error:", supabaseError);
        setError(supabaseError.message);
      } else {
        setOrders(data || []);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  const filteredOrders = orders.filter(order => 
    order.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.phone?.includes(searchTerm) ||
    order.id?.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'pending': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'shipped': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col gap-4 text-red-500 mb-8">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="font-black uppercase tracking-widest text-lg">Transmission Error Detected</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-80">
            Unable to fetch orders. This is usually due to **Row Level Security (RLS)** in Supabase.
          </p>
          <div className="bg-black/40 p-4 rounded-xl font-mono text-xs break-all border border-red-500/10 mb-4">
            ERROR_LOG: {error}
          </div>
          <button 
            onClick={() => fetchOrders()}
            className="w-fit px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
          >
            Retry Synchronization
          </button>
        </div>
      )}
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by name, phone or order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-[#121212] border border-white/5 rounded-2xl text-white font-bold placeholder:text-slate-600 outline-none focus:border-amber-500/50 focus:bg-white/[0.08] transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-3 bg-[#121212] border border-white/5 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Package Info</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Customer Identity</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Financials</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Logistics Status</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Timestamp</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [1, 2, 3, 4, 5].map(i => (
                  <tr key={i} className="animate-pulse border-b border-white/5">
                    <td colSpan={6} className="px-8 py-10">
                      <div className="h-4 bg-white/5 rounded-full w-full" />
                    </td>
                  </tr>
                ))
              ) : filteredOrders.length > 0 ? filteredOrders.map((order, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white uppercase tracking-tight">Order #{order.id?.slice(0, 8)}</p>
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{order.cart_items?.length || 0} ITEMS</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
                        <User className="w-3 h-3 text-slate-600" />
                        {order.name}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
                        <Phone className="w-3 h-3" />
                        {order.phone}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase truncate max-w-[150px]">
                        <MapPin className="w-3 h-3" />
                        {order.city}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-base font-black text-white tabular-nums">₹{Number(order.total).toLocaleString('en-IN')}</p>
                      <p className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> PAID VIA COD
                      </p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                      getStatusColor(order.status || 'pending')
                    )}>
                      {order.status || 'pending'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <Calendar className="w-3 h-3 text-slate-700" />
                      {new Date(order.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateStatus(order.id, order.status || 'pending')}
                        className={cn(
                          "p-2 rounded-xl transition-all border",
                          (order.status || 'pending').toLowerCase() === 'pending' 
                            ? "bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20" 
                            : "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
                        )}
                        title={ (order.status || 'pending').toLowerCase() === 'pending' ? "Mark as Completed" : "Mark as Pending" }
                      >
                        { (order.status || 'pending').toLowerCase() === 'pending' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" /> }
                      </button>
                      <button className="p-2 bg-white/5 hover:bg-blue-500/20 text-slate-400 hover:text-blue-500 border border-white/5 rounded-xl transition-all">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center justify-center opacity-30">
                      <Package className="w-16 h-16 mb-4" />
                      <p className="text-lg font-black uppercase tracking-widest">No matching orders found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
