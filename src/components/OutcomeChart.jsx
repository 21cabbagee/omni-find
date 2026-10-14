import React, { useState } from 'react';
import { TrendingUp, Search, Zap, DollarSign, Clock, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * OutcomeChart for OmniFind (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $11,500/mo enterprise knowledge management retainers & wasted document search hours ($6 layer)
 * with Autonomous Neural Semantic Cross-Directory Search Middleware ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Neural Semantic Cross-Tool Search",
  defaultFiles = 12000,
  onCtaClick
}) {
  const [files, setFiles] = useState(defaultFiles);

  // Legacy agency/consulting: $0.85 per document/mo in manual tagging, search taxonomy curation & employee search time loss
  const legacyServicesCost = Math.round(files * 0.85);
  // OmniFind software fee: $39/mo flat + $0.005/document indexed
  const autoSoftwareCost = 39 + Math.round(files * 0.005);
  const netValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 5);

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-cyan-500/40 text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $11,500/mo Knowledge Management Agency ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Enterprise Knowledge Economics: <span className="text-cyan-400">{savingsPercent}% Retrieval Waste Eradicated</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Julien Bek Thesis: Displacing manual taxonomy maintenance and buried corporate wiki silos with sub-200ms vector cosine retrieval.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-cyan-500/30 rounded-xl p-3">
          <Clock className="w-5 h-5 text-cyan-400" />
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Net Monthly Savings</div>
            <div className="text-lg font-black text-cyan-400 font-mono">
              +${netValueReclaimed.toLocaleString()}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="my-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Indexed Corporate Documents, Threads & Contracts:</span>
          </label>
          <span className="text-base font-bold text-cyan-400 font-mono bg-cyan-500/10 px-3 py-0.5 rounded-lg border border-cyan-500/20">
            {files.toLocaleString()} Documents
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="40000"
          step="1000"
          value={files}
          onChange={(e) => setFiles(parseInt(e.target.value))}
          className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>1,000 Seed Docs</span>
          <span>20,000 Mid-Market Repository</span>
          <span>40,000+ Enterprise Knowledge Mesh</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Legacy Manual Services ($6) */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <Clock className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Legacy Enterprise Search</h4>
                <p className="text-xs text-rose-300/70">Consultants & Frustrated Employees</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
              The $6 Service Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Employee Time Lost Searching:</span>
              <span className="font-mono text-rose-400 font-bold">18 hrs / user / mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Search Infrastructure Maintenance:</span>
              <span className="font-mono text-rose-400 font-bold">${Math.round(files * 0.35).toLocaleString()}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Unfound Critical Contract Clauses:</span>
              <span className="font-mono text-rose-400 font-bold">22% missed</span>
            </div>
            <div className="border-t border-rose-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Total Human Cost:</span>
              <span className="font-mono text-rose-400">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-rose-500/30">
            <div
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legacyBarHeight}%` }}
            />
          </div>
        </div>

        {/* OmniFind Software Layer ($1) */}
        <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-5 relative overflow-hidden shadow-lg shadow-cyan-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">OmniFind Neural Search</h4>
                <p className="text-xs text-cyan-300/80">Local Vector Cosine Retrieval</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
              The $1 Software Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Query Response Latency:</span>
              <span className="font-mono text-cyan-400 font-bold">&lt; 180 ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Local Device Privacy:</span>
              <span className="font-mono text-cyan-400 font-bold">100% Zero-Cloud Leak</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Software Fee + Indexing:</span>
              <span className="font-mono text-cyan-400 font-bold">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-cyan-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Software Price:</span>
              <span className="font-mono text-cyan-400">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-cyan-500/30">
            <div
              className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${autoBarHeight}%` }}
            />
          </div>
        </div>
      </div>

      {/* Larry Ellison Economic Guarantee Box */}
      <div className="rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-teal-950/40 border border-cyan-500/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>The Ellison SLA: Sub-200ms Exact Match Guarantee</span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">100% Private</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              If OmniFind takes longer than 200ms to locate any clause across your indexed directories, your enterprise license is free for life.
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Index Local Vault
        </button>
      </div>
    </div>
  );
}
