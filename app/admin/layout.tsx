"use client";

import { cn } from "@/app/hooks/utils";
import {
    Bell,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    LogOut,
    MessageSquare,
    ShoppingBag,
    Sparkles,
    Users
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Energy Leads", href: "/admin/leads", icon: Users },
  { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple authentication check
    const auth = localStorage.getItem("admin_auth");
    if (!auth && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else if (auth) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-[#121212] border-r border-white/5 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-6 gap-3 border-b border-white/5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Vastu Admin
              </span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                  pathname === item.href 
                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-lg shadow-amber-500/5" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", pathname === item.href ? "text-amber-500" : "group-hover:text-white")} />
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Sidebar Toggle & Logout */}
          <div className="p-3 border-t border-white/5 space-y-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
            >
              {isSidebarOpen ? (
                <>
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium text-sm">Collapse</span>
                </>
              ) : (
                <ChevronRight className="w-5 h-5 mx-auto" />
              )}
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all group"
            >
              <LogOut className={cn("w-5 h-5", !isSidebarOpen && "mx-auto")} />
              {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 min-h-screen",
        isSidebarOpen ? "pl-64" : "pl-20"
      )}>
        {/* Top Header */}
        <header className="h-20 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              {sidebarItems.find(i => i.href === pathname)?.name || "System"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full border border-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full border border-[#0a0a0a]" />
            </button>
            <div className="h-8 w-[1px] bg-white/10 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-white">Administrator</p>
                <p className="text-[10px] text-amber-500 uppercase font-black tracking-tighter">Gold Level</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
                 <span className="font-black text-amber-500">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>

      {/* Global Glow effects */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}
