import React, { useState, useEffect } from 'react';
import { Search, FileText, Folder, Copy, Check, ExternalLink, Sparkles, Zap, MapPin, Tag } from 'lucide-react';

export default function SemanticSearchDeck({
  query,
  setQuery,
  documents
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!query || query.trim() === '') {
      // Default to high-relevance query
      runSearch("Where is that agreement where we discussed a 10% penalty?");
    } else {
      runSearch(query);
    }
  }, [query, documents]);

  const runSearch = (searchQuery) => {
    const qLower = searchQuery.toLowerCase();
    const qTokens = qLower.replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(Boolean);

    const matches = [];

    documents.forEach(doc => {
      doc.snippets.forEach(snip => {
        let score = 0;

        // Check topic tags
        snip.topics.forEach(t => {
          if (qLower.includes(t)) score += 4;
          qTokens.forEach(tok => {
            if (t.includes(tok)) score += 2;
          });
        });

        // Check text matches
        const snipLower = snip.contextText.toLowerCase();
        qTokens.forEach(tok => {
          if (snipLower.includes(tok)) score += 1.5;
        });

        // Intent boosters
        if (qLower.includes('penalty') && snipLower.includes('penalty')) score += 8;
        if (qLower.includes('10%') && snipLower.includes('10%')) score += 8;
        if (qLower.includes('server upgrade') && snipLower.includes('server upgrade')) score += 8;
        if (qLower.includes('severance') && snipLower.includes('severance')) score += 8;
        if (qLower.includes('disputed deliverables') && snipLower.includes('milestone 3')) score += 8;

        if (score > 0) {
          const similarity = Math.min(99.6, Number((70 + Math.tanh(score / 5) * 29.5).toFixed(1)));
          matches.push({
            doc,
            snip,
            score,
            similarity
          });
        }
      });
    });

    matches.sort((a, b) => b.score - a.score);
    setSearchResults(matches);
  };

  const handleCopyQuote = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderBadge = (fileType) => {
    switch (fileType) {
      case 'pdf': return <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">PDF</span>;
      case 'docx': return <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono text-[10px] font-bold">DOCX</span>;
      case 'eml': return <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-[10px] font-bold">EML</span>;
      case 'csv': return <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-[10px] font-bold">CSV</span>;
      default: return <span className="px-2 py-0.5 rounded bg-slate-500/20 text-slate-300 border border-slate-500/30 font-mono text-[10px] font-bold">TXT</span>;
    }
  };

  return (
    <section id="search-deck" className="py-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Spotlight-Style Input Bar */}
        <div className="glass-panel-glow p-3 sm:p-4 rounded-2xl mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-omni-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything across local files & emails... (e.g., 'agreement discussing 10% penalty')"
              className="w-full pl-12 pr-28 py-3.5 bg-dark-900/90 text-white placeholder-slate-400 rounded-xl border border-white/10 focus:outline-none focus:border-omni-500 focus:ring-2 focus:ring-omni-500/20 text-sm sm:text-base font-medium transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-20 text-xs text-slate-400 hover:text-white px-2 py-1"
              >
                Clear
              </button>
            )}
            <div className="absolute right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-800 text-[11px] font-mono text-slate-300 border border-white/10 hidden sm:flex">
              <Zap className="w-3 h-3 text-omni-400" />
              <span>&lt; 14ms</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2.5 px-2 text-[11px] text-slate-400">
            <span>Natural language semantic embeddings (all-MiniLM-L6-v2)</span>
            <span>{searchResults.length} matching document citations</span>
          </div>
        </div>

        {/* Results Stream */}
        <div className="space-y-4">
          {searchResults.length === 0 ? (
            <div className="glass-panel p-8 rounded-2xl text-center">
              <Sparkles className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <h3 className="text-base font-semibold text-slate-200 mb-1">No semantic match found</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try searching for concepts like "penalty", "server upgrade", "severance terms", or "Apex deliverables".
              </p>
            </div>
          ) : (
            searchResults.map(({ doc, snip, similarity }, idx) => {
              const isTop = idx === 0;

              return (
                <div
                  key={snip.id}
                  className={`rounded-2xl transition-all text-left ${
                    isTop
                      ? 'glass-panel-glow border-omni-500/40 p-5 sm:p-6'
                      : 'glass-panel p-4 sm:p-5 opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Top Bar: Similarity, File Type & Page/Section */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-omni-500/20 text-omni-300 border border-omni-500/30">
                        <Sparkles className="w-3 h-3" />
                        {similarity}% Semantic Relevancy
                      </span>
                      {renderBadge(doc.fileType)}
                      <span className="text-xs font-semibold text-white">
                        {snip.section}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        (Page {snip.pageNumber})
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-mono">
                      {doc.category}
                    </div>
                  </div>

                  {/* Absolute File Path */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-950/80 px-3 py-1.5 rounded-lg border border-white/5 mb-3 overflow-x-auto">
                    <Folder className="w-3.5 h-3.5 text-omni-400 flex-shrink-0" />
                    <span className="truncate">{doc.filePath}</span>
                  </div>

                  {/* Verbatim Highlighted Paragraph Context */}
                  <div className="bg-dark-950/40 p-3.5 rounded-xl border border-white/5 text-xs sm:text-sm text-slate-200 leading-relaxed my-2">
                    <p>
                      "{snip.exactMatch}"
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="text-slate-400 text-[11px]">
                      File modified on {doc.lastModified} • {doc.size}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyQuote(snip.exactMatch, snip.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-800 hover:bg-dark-750 text-slate-200 border border-white/10 transition-all"
                      >
                        {copiedId === snip.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Citation Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Citation</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => alert(`Simulated Opening Local File:\n${doc.filePath}`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-omni-950/80 hover:bg-omni-900 text-omni-300 border border-omni-500/40 transition-all"
                      >
                        <span>Open Document at Page {snip.pageNumber}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
