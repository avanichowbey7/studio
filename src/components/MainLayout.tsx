
"use client";

import { Sidebar } from "./Sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background font-body">
      <Sidebar />
      <main className="flex-1 min-h-screen relative">
        {children}
      </main>
    </div>
  );
}
