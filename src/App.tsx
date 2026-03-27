/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { TopBar, MobileNav } from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import Attendance from "./pages/Attendance";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Sidebar />
      <TopBar />
      <main className="lg:ml-64 p-6 md:p-10 pb-32">
        {children}
      </main>
      <MobileNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/social" element={<Attendance />} /> {/* Using Attendance as a placeholder for Social/HR as per images */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
