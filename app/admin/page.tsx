"use client";

import { cn } from "@/app/hooks/utils";
import { supabase } from "@/supabase";
import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    Clock,
    MessageSquare,
    Package,
    ShoppingBag,
    TrendingUp,
    Users,
    XCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

// Mock data for initial design - will be replaced with Supabase data
const initialData = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 65 },
  { name: "Thu", value: 45 },
  { name: "Fri", value: 90 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 85 },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalLeads: 0,
    totalContacts: 0,
  });
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setError(null);
        console.log("Fetching stats...");
        
        const [
          ordersRes,
          leadsRes,
          contactsRes
        ] = await Promise.all([
          supabase.from("orders").select("*", { count: "exact" }),
          supabase.from("energy_score_leads").select("*", { count: "exact" }),
          supabase.from("contact_requests").select("*", { count: "exact" }),
        ]);

        if (ordersRes.error) console.error("Orders Error:", ordersRes.error);
        if (leadsRes.error) console.error("Leads Error:", leadsRes.error);
        if (contactsRes.error) console.error("Contacts Error:", contactsRes.error);

        // Even if there's an error, we try to show what we have
        const ordersCount = ordersRes.count || 0;
        const orders = ordersRes.data || [];
        const leadsCount = leadsRes.count || 0;
        const contactsCount = contactsRes.count || 0;

        const revenue = orders.reduce((acc: number, curr: any) => acc + (Number(curr.total) || 0), 0);
        
        setStats({
          totalOrders: ordersCount,
          totalRevenue: revenue,
          totalLeads: leadsCount,
          totalContacts: contactsCount,
        });

        const { data: recent, error: recentError } = await supabase
          .from("orders")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);
        
        if (recentError) console.error("Recent Orders Error:", recentError);
        setRecentOrders(recent || []);

        if (ordersRes.error && leadsRes.error && contactsRes.error) {
          setError("Failed to fetch data from Supabase. Check RLS policies or table names.");
        }
      } catch (err: any) {
        console.error("Critical Error fetching stats:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Revenue", value: `₹${stats.totalRevenue.toLocaleString('en-IN')}`, icon: TrendingUp, color: "amber", trend: "+12.5%" },
    { label: "Total Orders", value: stats.totalOrders.toString(), icon: ShoppingBag, color: "orange", trend: "+5.2%" },
    { label: "Energy Leads", value: stats.totalLeads.toString(), icon: Users, color: "blue", trend: "+18.3%" },
    { label: "Contacts", value: stats.totalContacts.toString(), icon: MessageSquare, color: "emerald", trend: "-2.4%" },
  ];

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-white/5 rounded-[2rem] border border-white/5" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[400px] bg-white/5 rounded-[2rem] border border-white/5" />
          <div className="h-[400px] bg-white/5 rounded-[2rem] border border-white/5" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col gap-4 text-red-500">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="font-black uppercase tracking-widest text-lg">Transmission Error Detected</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-80">
            System was unable to synchronize with the Supabase Mainframe. This is often caused by **RLS (Row Level Security)** policies blocking the `SELECT` operation for the `anon` key.
          </p>
          <div className="bg-black/40 p-4 rounded-xl font-mono text-xs break-all border border-red-500/10">
            ERROR_LOG: {error}
          </div>
          <div className="pt-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-red-500/60">Required Protocol Change:</h4>
            <pre className="bg-black/60 p-4 rounded-xl text-amber-500 text-[10px] overflow-x-auto border border-amber-500/10">
              {`-- Execute this in your Supabase SQL Editor:
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read access for all users" ON "public"."orders"
FOR SELECT USING (true);

-- Repeat for other tables:
CREATE POLICY "Enable read access for all users" ON "public"."energy_score_leads"
FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON "public"."contact_requests"
FOR SELECT USING (true);`}
            </pre>
          </div>
        </div>
      )}
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="group relative bg-[#121212] border border-white/5 p-6 rounded-[2rem] hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center",
                stat.color === "amber" && "bg-amber-500/10 text-amber-500",
                stat.color === "orange" && "bg-orange-500/10 text-orange-500",
                stat.color === "blue" && "bg-blue-500/10 text-blue-500",
                stat.color === "emerald" && "bg-emerald-500/10 text-emerald-500"
              )}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full",
                stat.trend.startsWith("+") ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
              )}>
                {stat.trend.startsWith("+") ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-white tracking-tight">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#121212] border border-white/5 rounded-[2rem] p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Growth Metrics</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Lead acquisition performance</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl">
              <button className="px-4 py-2 text-xs font-black bg-amber-500 text-white rounded-lg shadow-lg shadow-amber-500/20 transition-all">7D</button>
              <button className="px-4 py-2 text-xs font-black text-slate-500 hover:text-white transition-all">30D</button>
              <button className="px-4 py-2 text-xs font-black text-slate-500 hover:text-white transition-all">90D</button>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={initialData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 900 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 900 }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#f59e0b', fontWeight: 900 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#f59e0b" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[#121212] border border-white/5 rounded-[2rem] p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Recent Orders</h3>
            <div className="p-2 bg-white/5 rounded-lg">
              <Activity className="w-5 h-5 text-amber-500" />
            </div>
          </div>
          <div className="space-y-6 flex-1 overflow-y-auto">
            {recentOrders.length > 0 ? recentOrders.map((order, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 transition-colors">
                  <Package className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-white truncate">{order.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">₹{order.total?.toLocaleString('en-IN')}</p>
                    <span className="w-1 h-1 bg-slate-700 rounded-full" />
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{order.status}</p>
                  </div>
                </div>
                <div className="text-[10px] font-black text-slate-600 uppercase tabular-nums">
                  {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            )) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 opacity-50">
                <Clock className="w-12 h-12 text-slate-700 mb-4" />
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">No recent transactions</p>
              </div>
            )}
          </div>
          <button className="mt-8 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs rounded-2xl flex items-center justify-center gap-2 transition-all group uppercase tracking-widest border border-white/5">
            View All Vaults
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Grid: Leads Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#121212] to-amber-900/10 border border-amber-500/10 rounded-[2rem] p-8">
           <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
               <CheckCircle2 className="w-6 h-6 text-white" />
             </div>
             <div>
               <h4 className="text-lg font-black text-white uppercase tracking-tight">System Integrity</h4>
               <p className="text-xs font-black text-amber-500/60 uppercase tracking-widest">Global Status: Secure</p>
             </div>
           </div>
           <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
             All Supabase nodes are operational. Latency within normal parameters. Database backups completed 4h ago.
           </p>
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Uptime</p>
               <p className="text-lg font-black text-white tabular-nums">99.99%</p>
             </div>
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Load</p>
               <p className="text-lg font-black text-white tabular-nums">0.04ms</p>
             </div>
           </div>
        </div>
        
        <div className="lg:col-span-2 bg-[#121212] border border-white/5 rounded-[2rem] p-8 flex items-center justify-between">
            <div className="space-y-6 flex-1">
               <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Ready for expansion?</h3>
               <p className="text-slate-500 text-sm font-medium max-w-md">
                 Manage your leads and contact requests with absolute precision. Use the sidebar to navigate to specialized modules.
               </p>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white text-black font-black text-xs rounded-xl uppercase tracking-widest hover:bg-slate-200 transition-all">Database Audit</button>
                 <button className="px-6 py-3 bg-white/5 text-white font-black text-xs rounded-xl uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">Clear Logs</button>
               </div>
            </div>
            <div className="hidden lg:block w-48 h-48 relative">
               <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[40px] animate-pulse" />
               <div className="relative w-full h-full border-2 border-white/10 rounded-full flex items-center justify-center group overflow-hidden">
                  <div className="w-24 h-24 border-2 border-amber-500/50 rounded-full border-t-transparent animate-spin-slow" />
                  <Activity className="absolute inset-0 m-auto w-10 h-10 text-amber-500" />
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
