import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0A0C10] text-slate-100 font-sans">
      {/* Sidebar - Fixed on the left for desktop */}
      <Sidebar className="hidden md:flex" />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar - Fixed on top */}
        <Navbar />

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 px-4 py-6 md:px-8">
          <main className="mx-auto max-w-7xl">
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
