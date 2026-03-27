import { motion } from "motion/react";
import { 
  Calendar, 
  Filter, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  PiggyBank, 
  Download, 
  Settings, 
  Landmark, 
  Globe, 
  Utensils, 
  ShoppingBasket, 
  Book, 
  FileEdit, 
  Contact, 
  Lock, 
  Key, 
  ListChecks, 
  Badge, 
  Cake, 
  Share, 
  Activity,
  MoreHorizontal,
  Plus,
  FileText,
  TableProperties
} from "lucide-react";
import { cn } from "@/lib/utils";

const summaryCards = [
  { 
    title: "Total Income", 
    value: "$124,500.00", 
    change: "+12.5% from last month", 
    icon: Wallet, 
    trend: "up", 
    color: "text-primary", 
    bg: "bg-primary/10" 
  },
  { 
    title: "Total Expense", 
    value: "$45,210.00", 
    change: "-2.1% from last month", 
    icon: Wallet, 
    trend: "down", 
    color: "text-error", 
    bg: "bg-error/10" 
  },
  { 
    title: "Remaining Balance", 
    value: "$79,290.00", 
    progress: 64, 
    icon: PiggyBank, 
    color: "text-secondary", 
    bg: "bg-secondary/10" 
  },
];

const modules = [
  { icon: Wallet, label: "Finance", color: "text-primary", bg: "bg-primary/5" },
  { icon: Globe, label: "Social", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: Utensils, label: "Food", color: "text-tertiary", bg: "bg-tertiary/5" },
  { icon: ShoppingBasket, label: "Groceries", color: "text-primary-dim", bg: "bg-primary-dim/5" },
  { icon: Book, label: "Diary", color: "text-on-surface-variant", bg: "bg-on-surface-variant/5" },
  { icon: FileEdit, label: "Notes", color: "text-tertiary", bg: "bg-tertiary/5" },
  { icon: Contact, label: "Contacts", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: Lock, label: "Passwords", color: "text-error", bg: "bg-error/5" },
  { icon: Key, label: "PMS Changer", color: "text-primary", bg: "bg-primary/5" },
  { icon: ListChecks, label: "To-Do List", color: "text-primary", bg: "bg-primary/5" },
  { icon: Badge, label: "HR", color: "text-tertiary", bg: "bg-tertiary/5" },
  { icon: Cake, label: "Birthdays", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: Share, label: "Social Media", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: Activity, label: "Habit Tracker", color: "text-tertiary", bg: "bg-tertiary/5" },
];

const activities = [
  { id: "#PMS-82910", module: "Finance", status: "Completed", amount: "$1,200.00", color: "bg-primary" },
  { id: "#PMS-82911", module: "Food", status: "Pending", amount: "$45.00", color: "bg-tertiary" },
];

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section className="relative overflow-hidden py-10 rounded-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Dashboard Overview</p>
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none max-w-4xl bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
            HI, WELCOME SAHAN PABASARA YOUR PERSONAL MANAGEMENT SYSTEM
          </h2>
        </motion.div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
      </section>

      {/* Global Filter Bar */}
      <section className="flex flex-wrap items-center gap-4 bg-surface-container-low p-2 rounded-2xl border border-outline-variant/10">
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl">
          <Calendar className="w-4 h-4 text-primary" />
          <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-on-surface font-headline pr-8">
            <option>2026</option>
            <option>2027</option>
          </select>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl">
          <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-on-surface font-headline pr-8">
            <option>January</option>
            <option>February</option>
          </select>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl">
          <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-on-surface font-headline pr-8">
            <option>Day 01</option>
            <option>Day 15</option>
          </select>
        </div>
        <button className="ml-auto flex items-center gap-2 px-6 py-2 bg-primary text-surface font-bold rounded-xl text-sm hover:scale-95 transition-all">
          <Filter className="w-4 h-4" />
          Apply Global Filters
        </button>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryCards.map((card, i) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-3xl glow-corner"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-3 rounded-2xl", card.bg)}>
                <card.icon className={cn("w-8 h-8", card.color)} />
              </div>
              <span className={cn("text-[10px] font-bold uppercase tracking-widest opacity-60", card.color)}>
                {card.title}
              </span>
            </div>
            <h3 className="text-3xl font-black font-headline text-white">{card.value}</h3>
            {card.change && (
              <div className={cn("mt-4 flex items-center gap-2 text-xs font-bold", card.trend === "up" ? "text-green-400" : "text-error")}>
                {card.trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {card.change}
              </div>
            )}
            {card.progress && (
              <div className="mt-4 w-full bg-white/5 rounded-full h-1.5">
                <div 
                  className="bg-secondary h-1.5 rounded-full shadow-[0_0_12px_rgba(172,137,255,0.4)]" 
                  style={{ width: `${card.progress}%` }} 
                />
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Module Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black font-headline tracking-tight">Active Modules</h2>
          <div className="flex gap-2">
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors bg-surface-container-low rounded-lg border border-outline-variant/10">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-white transition-colors bg-surface-container-low rounded-lg border border-outline-variant/10">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {modules.map((module, i) => (
            <motion.div 
              key={module.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-surface-container-low hover:bg-surface-container-high p-6 rounded-2xl transition-all duration-300 border border-outline-variant/5 text-center flex flex-col items-center cursor-pointer"
            >
              <div className={cn("p-4 rounded-2xl transition-colors mb-4", module.bg, "group-hover:bg-opacity-20")}>
                <module.icon className={cn("w-6 h-6", module.color)} />
              </div>
              <span className="text-xs font-bold font-headline text-white">{module.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transaction Table */}
      <section className="bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10">
        <div className="p-8 border-b border-outline-variant/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold font-headline">Recent Activity</h3>
            <p className="text-sm text-on-surface-variant">Syncing data from your modules in real-time</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">
              <FileText className="w-4 h-4" />
              Export PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">
              <TableProperties className="w-4 h-4" />
              Export Excel
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              <tr>
                <th className="px-8 py-4">Transaction ID</th>
                <th className="px-8 py-4">Module</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-white">{activity.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span className={cn("w-2 h-2 rounded-full", activity.color)} />
                      <span className="text-sm text-on-surface">{activity.module}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-2 py-1 text-[10px] font-bold rounded uppercase",
                      activity.status === "Completed" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                    )}>
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-white">{activity.amount}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-24 right-8 lg:bottom-8 lg:right-8 w-16 h-16 bg-primary text-surface rounded-full shadow-[0_12px_48px_rgba(0,227,253,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <Plus className="w-8 h-8 font-bold" />
      </button>
    </div>
  );
}
