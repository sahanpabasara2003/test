import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BarChart3, 
  Wallet, 
  Users, 
  Utensils, 
  Package, 
  FileText, 
  Cloud, 
  CloudUpload 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Wallet, label: "Finance", path: "/finance" },
  { icon: Users, label: "Social", path: "/social" },
  { icon: Utensils, label: "Food", path: "/food" },
  { icon: Package, label: "Inventory", path: "/inventory" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col bg-surface-container-low py-8 space-y-2 z-[60] border-r border-outline-variant/10">
      <div className="px-6 mb-10">
        <h1 className="text-white font-bold font-headline text-xl tracking-tighter">Sahan Pabasara</h1>
        <p className="text-on-surface-variant text-xs mt-1">Global Admin</p>
      </div>
      
      <div className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "py-3 px-6 transition-all flex items-center gap-3 hover:bg-surface-container-high/50 group",
                isActive 
                  ? "bg-surface-container-high text-primary rounded-r-full mr-4 border-l-4 border-primary" 
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface")} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="px-6 py-4 mt-auto space-y-4 border-t border-outline-variant/20">
        <button className="w-full py-2 bg-surface-container-high text-primary font-bold rounded-lg text-xs hover:scale-95 transition-transform">
          Export All PDF
        </button>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            <Cloud className="w-3 h-3" />
            Sync Status
          </div>
          <div className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            <CloudUpload className="w-3 h-3" />
            Cloud Backup
          </div>
        </div>
      </div>
    </nav>
  );
}
