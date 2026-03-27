import { motion } from "motion/react";
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Download, 
  MoreVertical, 
  ChevronRight, 
  Settings, 
  FileText, 
  TableProperties, 
  Mail,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const attendanceLogs = [
  { date: "Oct 12, 2023", status: "Work", checkIn: "07:28 AM", checkOut: "05:15 PM", otHours: "0.25h", otPay: "$7.50", color: "text-primary" },
  { date: "Oct 11, 2023", status: "Work", checkIn: "07:45 AM", checkOut: "08:30 PM", otHours: "3.50h", otPay: "$105.00", color: "text-tertiary" },
  { date: "Oct 10, 2023", status: "Leave", checkIn: "--:-- --", checkOut: "--:-- --", otHours: "0.00h", otPay: "$0.00", color: "text-error" },
  { date: "Oct 09, 2023", status: "Half-Day", checkIn: "07:25 AM", checkOut: "12:30 PM", otHours: "0.00h", otPay: "$0.00", color: "text-secondary" },
];

export default function Attendance() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-primary tracking-widest font-bold uppercase text-[10px]">HR Management</span>
          <h1 className="text-5xl font-black font-headline tracking-tighter text-white">Attendance & OT</h1>
          <p className="text-on-surface-variant max-w-md">Real-time tracking of employee hours, overtime calculations, and leave balance summaries.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-surface-container-high text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-surface-bright transition-all">
            <Calendar className="w-4 h-4" /> October 2023
          </button>
          <button className="bg-primary text-surface px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[0.98] active:scale-[0.95] transition-all">
            Mark Attendance
          </button>
        </div>
      </section>

      {/* Monthly Summary Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-surface-container-low p-8 rounded-[2rem] glass-card glow-corner">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-on-surface-variant text-sm font-medium">Monthly Work Hours</p>
              <h2 className="text-4xl font-black font-headline mt-1">168.5 <span className="text-lg text-primary">hrs</span></h2>
            </div>
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[82%]" />
          </div>
          <p className="text-xs text-on-surface-variant mt-4">82% of monthly target completed</p>
        </div>

        <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between border-l border-white/5">
          <p className="text-on-surface-variant text-sm font-medium">Total Leaves</p>
          <div>
            <h2 className="text-4xl font-black font-headline">02</h2>
            <p className="text-error text-xs font-bold mt-1 uppercase tracking-wider">Sick Leave Taken</p>
          </div>
          <div className="flex gap-1 mt-4">
            <div className="h-1 flex-1 bg-error rounded-full" />
            <div className="h-1 flex-1 bg-error rounded-full" />
            <div className="h-1 flex-1 bg-white/10 rounded-full" />
            <div className="h-1 flex-1 bg-white/10 rounded-full" />
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between glass-card glow-corner" style={{ "--primary": "#ffa84f" } as any}>
          <p className="text-on-surface-variant text-sm font-medium">Total OT Pay</p>
          <div>
            <h2 className="text-4xl font-black font-headline">$420.00</h2>
            <p className="text-tertiary text-xs font-bold mt-1 uppercase tracking-wider">+12.5% vs Last Month</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-on-surface-variant">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">Auto-calculated</span>
          </div>
        </div>
      </section>

      {/* Attendance Detail & Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Table Container */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-white/5">
          <div className="p-8 flex justify-between items-center bg-surface-container-high/50">
            <h3 className="font-headline font-bold text-xl">Daily Attendance Logs</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-bright rounded-lg transition-all text-on-surface-variant">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-surface-bright rounded-lg transition-all text-on-surface-variant">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/30">
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Check In</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Check Out</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">OT Hours</th>
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">OT Pay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {attendanceLogs.map((log, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium">{log.date}</td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter",
                        log.status === "Work" ? "bg-primary/10 text-primary" : 
                        log.status === "Leave" ? "bg-error/10 text-error" : "bg-secondary/10 text-secondary"
                      )}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm font-mono text-on-surface-variant">{log.checkIn}</td>
                    <td className="px-6 py-5 text-sm font-mono text-on-surface-variant">{log.checkOut}</td>
                    <td className="px-6 py-5 text-sm font-medium">{log.otHours}</td>
                    <td className={cn("px-8 py-5 text-sm font-bold text-right", log.color)}>{log.otPay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts & Insights Side */}
        <div className="space-y-8">
          <div className="bg-surface-container-low p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="font-headline font-bold text-lg mb-8">Work Distribution</h3>
            <div className="relative w-48 h-48 mx-auto">
              {/* Simulated Donut Chart */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="502" strokeDashoffset="100" className="text-primary" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black">22</span>
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Active Days</span>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-on-surface-variant font-medium">Full Work Days</span>
                </div>
                <span className="text-sm font-bold">18</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-xs text-on-surface-variant font-medium">Half Days</span>
                </div>
                <span className="text-sm font-bold">4</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-error" />
                  <span className="text-xs text-on-surface-variant font-medium">Leaves taken</span>
                </div>
                <span className="text-sm font-bold">2</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-sm mb-2 text-primary">OT Automation Logic</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">System automatically calculates OT based on 7:30 AM to 5:00 PM standard shift. Rate: $30.00/hr.</p>
              <button className="mt-4 text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                Configure Policy <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Settings className="w-24 h-24" />
            </div>
          </div>
        </div>
      </section>

      {/* Document Actions */}
      <section className="flex flex-wrap gap-4 pt-12">
        <button className="bg-surface-container-high border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-surface-bright transition-all group">
          <FileText className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Export Monthly</p>
            <p className="text-sm font-bold">PDF Record</p>
          </div>
        </button>
        <button className="bg-surface-container-high border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-surface-bright transition-all group">
          <TableProperties className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Export Full Log</p>
            <p className="text-sm font-bold">Excel Spreadsheet</p>
          </div>
        </button>
        <button className="bg-surface-container-high border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-surface-bright transition-all group">
          <Mail className="w-6 h-6 text-tertiary group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Send to</p>
            <p className="text-sm font-bold">HR Approval</p>
          </div>
        </button>
      </section>
    </div>
  );
}
