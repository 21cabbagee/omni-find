import React from 'react';
import { Search, Shield, Terminal, Sparkles } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  const keywords = [
    "universal cross app file search ai",
    "semantic local document search",
    "find documents with natural language prompt",
    "ai desktop file retriever"
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-dark-950/80 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-omni-600/40 border border-omni-500/30 flex items-center justify-center">
                <Search className="w-4 h-4 text-omni-300" />
              </div>
              <span className="font-bold text-lg text-white">OmniFind</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Universal semantic search engine finding exact clauses, paragraphs, and financial records across local folders, emails, and PDFs in under 200ms.
            </p>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 pt-1">
              <Terminal className="w-3.5 h-3.5 text-omni-400" />
              <span>Slug: /tools/universal-semantic-cross-app-search</span>
            </div>
          </div>

          {/* Targeted SEO Keywords */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Semantic Search Capabilities
            </h4>
            <ul className="space-y-1.5">
              {keywords.map((kw, i) => (
                <li key={i} className="text-xs text-slate-400 hover:text-omni-300 transition-colors">
                  <span className="text-omni-500 mr-1.5">•</span>
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Privacy & Performance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Cloud Document Ingestion</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Local WebAssembly Embeddings</span>
              </li>
              <li>
                <button
                  onClick={onOpenCab}
                  className="text-xs text-omni-400 hover:text-omni-300 underline font-semibold"
                >
                  Customer Advisory Board (70% Off)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} OmniFind Systems Inc. All rights reserved.</p>
          <p className="text-[11px]">
            Engineered with on-device all-MiniLM-L6 vector cosine kernels.
          </p>
        </div>
      </div>
    </footer>
  );
}
