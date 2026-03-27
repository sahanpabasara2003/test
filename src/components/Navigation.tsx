import { 
  Search, 
  Moon, 
  RefreshCw, 
  User, 
  Home, 
  LayoutGrid, 
  Calendar
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function TopBar() {
  return (
    <header className="bg-surface/60 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-[0_12px_48px_rgba(255,255,255,0.06)] lg:ml-64">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black text-white tracking-tighter font-headline">Sahan Pabasara PMS</span>
          <div className="hidden md:flex items-center gap-6 ml-8">
            <Link to="/" className="text-primary border-b-2 border-primary pb-1 font-headline font-bold text-sm tracking-tight">Home</Link>
            <Link to="/modules" className="text-on-surface-variant hover:text-white transition-colors font-headline font-bold text-sm tracking-tight">Modules</Link>
            <Link to="/settings" className="text-on-surface-variant hover:text-white transition-colors font-headline font-bold text-sm tracking-tight">Settings</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-surface-container-low px-3 py-1.5 rounded-full gap-2 border border-outline-variant/20">
            <RefreshCw className="w-3 h-3 text-primary animate-spin-slow" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Real-time Synced</span>
          </div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200">
            <Moon className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200">
            <RefreshCw className="w-5 h-5" />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/30 bg-surface-container-high flex items-center justify-center">
            <User className="w-5 h-5 text-on-surface-variant" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutGrid, label: "Modules", path: "/modules" },
    { icon: Calendar, label: "Filter", path: "/filter" },
    { icon: RefreshCw, label: "Sync", path: "/sync" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-2xl z-50 lg:hidden rounded-t-[2rem] border-t border-white/5 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all px-6 py-2 rounded-2xl",
              isActive ? "bg-primary/10 text-primary" : "text-on-surface-variant"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="font-body text-[10px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
