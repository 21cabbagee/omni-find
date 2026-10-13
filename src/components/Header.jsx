import React from 'react';
import { Search, ShieldCheck, Database, Sparkles } from 'lucide-react';

export default function Header({ onOpenCab }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-omni-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-omni-500/25 border border-cyan-400/30">
            <Search className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Omni<span className="text-omni-400">Find</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-omni-500/20 text-omni-300 border border-omni-500/30">
                Universal Semantic Search
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Cross-App Local Vector Search for Folders, Documents & Emails
            </p>
          </div>
        </div>

        {/* Right Status & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Local WASM Index • Zero Cloud Upload</span>
          </div>

          <button
            onClick={onOpenCab}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-omni-600 via-teal-600 to-cyan-600 text-white shadow-md shadow-omni-500/25 hover:shadow-omni-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-cyan-400/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Join CAB (70% Off)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
