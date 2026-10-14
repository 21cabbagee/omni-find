import React from 'react';
import { Search, Sparkles, Shield, Zap, FileText, ArrowRight, FolderSearch } from 'lucide-react';
import { PRESET_OMNI_QUERIES } from '../data/mockDocuments';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero({ onSelectPreset }) {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      {/* Casberry-inspired Particles WebGL Canvas */}
      <ParticlesCanvas particleColor="6, 182, 212" particleCount={50} />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-omni-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-omni-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-omni-400" />
          <span>Local Semantic Cross-Directory Retrieval</span>
        </div>

        {/* Target Exact SEO H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Universal AI Search: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-omni-400 via-teal-300 to-cyan-300">
            Find Anything Across Documents, Emails & Folders With One Prompt
          </span>
        </h1>

        {/* Value Proposition Body */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Stop digging through nested directories or clicking 40 PDF attachments. Ask conceptual questions like{' '}
          <span className="text-omni-300 font-semibold italic">
            "Where is that agreement where we discussed a 10% penalty?"
          </span>{' '}
          or <span className="text-omni-300 font-semibold italic">"Invoice for server upgrade from last summer"</span>. OmniFind locates the exact clause and file path in <strong className="text-white">under 200ms</strong>, entirely private on your device.
        </p>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-omni-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Search Speed</span>
            </div>
            <div className="text-xl font-bold text-white">&lt; 180ms</div>
            <p className="text-[11px] text-slate-400">Local all-MiniLM-L6 vector cosine</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Privacy</span>
            </div>
            <div className="text-xl font-bold text-emerald-300">100% On-Device</div>
            <p className="text-[11px] text-slate-400">Zero cloud document transmission</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <FileText className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Multi-Format</span>
            </div>
            <div className="text-xl font-bold text-white">5 Extensions</div>
            <p className="text-[11px] text-slate-400">PDF, DOCX, EML, CSV, TXT</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <FolderSearch className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Market TAM</span>
            </div>
            <div className="text-xl font-bold text-white">$417M TAM</div>
            <p className="text-[11px] text-slate-400">1.2M legal, audit & ops pros</p>
          </div>
        </div>

        {/* 1-Click Preset Queries Selector */}
        <div className="glass-panel p-4 rounded-2xl max-w-3xl mx-auto border-omni-500/20 text-left">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-omni-400" />
              1-Click Sample Semantic Searches:
            </span>
            <span className="text-[11px] text-slate-400">Click to run instant cross-app query</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_OMNI_QUERIES.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => onSelectPreset(preset.query)}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-omni-950/60 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-omni-500/50 transition-all text-left"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-omni-400 group-hover:scale-125 transition-transform" />
                <span>{preset.query}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                  {preset.categoryBadge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
