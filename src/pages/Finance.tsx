import { motion } from "motion/react";
import { 
  Upload, 
  Plus, 
  Wallet, 
  TrendingUp, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  FileText, 
  TableProperties,
  ChevronRight,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { date: "Oct 24, 2023", type: "Income", category: "Software License", amount: "$1,200.00", desc: "Monthly subscription revenue" },
  { date: "Oct 23, 2023", type: "Expense", category: "Office Supplies", amount: "$450.20", desc: "New ergonomic chairs" },
  { date: "Oct 21, 2023", type: "Expense", category: "AWS Cloud", amount: "$2,400.00", desc: "Infrastructure costs" },
];

const chartData = [
  { month: "JAN", income: 24, expense: 8 },
  { month: "FEB", income: 36, expense: 10 },
  { month: "MAR", income: 28, expense: 14 },
  { month: "APR", income: 44, expense: 6 },
  { month: "MAY", income: 40, expense: 18 },
  { month: "JUN", income: 52, expense: 12 },
];

export default function Finance() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-2">Financial Hub</h1>
          <p className="text-on-surface-variant max-w-md">Oversee your enterprise capital flow with real-time analytics and precise transaction tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-surface-container-high text-primary font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all hover:bg-surface-bright active:scale-95">
            <TableProperties className="w-4 h-4" />
            Excel
          </button>
          <button className="bg-primary text-surface font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all hover:bg-primary-dim active:scale-95">
            <Plus className="w-4 h-4" />
            New Entry
          </button>
        </div>
      </header>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Charts Module */}
        <section className="md:col-span-8 glass-card rounded-2xl p-8 glow-corner">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold font-headline text-white">Cashflow Overview</h2>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" /> Income
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-tertiary">
                <span className="w-2 h-2 rounded-full bg-tertiary" /> Expense
              </span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {chartData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col justify-end gap-1 group">
                <div className="w-full bg-surface-container-high rounded-t-lg transition-all h-48 group-hover:bg-primary/20 relative">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all" 
                    style={{ height: `${data.income * 4}px` }} 
                  />
                </div>
                <div className="w-full bg-tertiary/20 rounded-t-sm h-20 relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 w-full bg-tertiary transition-all" 
                    style={{ height: `${data.expense * 4}px` }} 
                  />
                </div>
                <span className="text-[10px] text-center mt-2 text-on-surface-variant font-bold">{data.month}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Card */}
        <section className="md:col-span-4 flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-8 flex-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Wallet className="w-16 h-16 text-primary" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Total Balance</p>
            <p className="text-4xl font-black font-headline text-white mb-6">$142,850.00</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Spending Rate</span>
                  <span className="text-tertiary">64%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[64%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant">Remaining Budget</span>
                  <span className="text-primary">36%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[36%]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-high rounded-2xl p-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-on-surface-variant font-bold uppercase">Monthly Growth</span>
              <span className="text-xl font-bold text-primary">+12.4%</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </section>
      </div>

      {/* Transaction Table */}
      <section className="glass-card rounded-3xl overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold font-headline">Recent Transactions</h2>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" 
                placeholder="Filter category..." 
                type="text"
              />
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg text-on-surface-variant">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Type</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Description</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-5 text-sm">{tx.date}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "text-[10px] px-2 py-1 rounded-full font-bold uppercase",
                      tx.type === "Income" ? "bg-primary/10 text-primary" : "bg-tertiary/10 text-tertiary"
                    )}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium">{tx.category}</td>
                  <td className="px-8 py-5 text-sm font-bold text-white">{tx.amount}</td>
                  <td className="px-8 py-5 text-sm text-on-surface-variant">{tx.desc}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-error/10 hover:text-error rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Entry Form */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 py-8">
          <h2 className="text-3xl font-black font-headline mb-4">Record Entry</h2>
          <p className="text-on-surface-variant">Quickly log new transactions into the system. Changes are synchronized across all modules instantly.</p>
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-xs font-bold uppercase text-primary mb-2 flex items-center gap-2">
              <Info className="w-3 h-3" /> Pro Tip
            </p>
            <p className="text-sm">Use the cloud backup toggle in settings to ensure your data is safe during bulk entry.</p>
          </div>
        </div>
        <div className="md:col-span-8 glass-card rounded-3xl p-8 md:p-12">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Transaction Date</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-white" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Type</label>
                <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-white appearance-none">
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Category</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-white placeholder:text-outline-variant" placeholder="e.g. Operations" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Amount ($)</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-white placeholder:text-outline-variant" placeholder="0.00" type="number" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Description</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-white placeholder:text-outline-variant resize-none" placeholder="Add detailed transaction notes..." rows={3}></textarea>
            </div>
            <div className="flex justify-end pt-4">
              <button className="w-full md:w-auto px-12 py-4 bg-primary text-surface font-black rounded-full shadow-[0_8px_32px_rgba(129,236,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                Save Transaction
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
