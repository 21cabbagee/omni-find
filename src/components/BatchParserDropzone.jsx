import React, { useState } from 'react';
import { Upload, FolderPlus, FileCheck, Layers, HardDrive, Shield, CheckCircle2, Plus } from 'lucide-react';

export default function BatchParserDropzone({ documents, onAddDocument }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSimulateDrop = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const newDoc = {
        id: `doc-custom-${Date.now()}`,
        filename: "Term_Sheet_Series_A_Valuation.pdf",
        filePath: "/Users/founder/Corporate/Financing/2026/Term_Sheet_Series_A_Valuation.pdf",
        fileType: "pdf",
        size: "1.2 MB",
        pages: 8,
        lastModified: "October 10, 2026",
        category: "Corporate Financing",
        totalChunks: 14,
        snippets: [
          {
            id: `snip-custom-${Date.now()}`,
            pageNumber: 3,
            section: "Section 4.3 (1x Non-Participating Liquidation Preference)",
            confidence: 99.2,
            exactMatch: "In the event of liquidation, Series A Preferred stock shall receive a 1.0x non-participating liquidation preference prior to distribution on Common Stock.",
            contextText: "4. Liquidation Preference. 4.3 In the event of liquidation, Series A Preferred stock shall receive a 1.0x non-participating liquidation preference prior to distribution on Common Stock, with customary pari passu rights.",
            topics: ["liquidation preference", "term sheet", "series a", "valuation", "preferred stock", "1x"]
          }
        ]
      };
      onAddDocument(newDoc);
      setIsProcessing(false);
    }, 700);
  };

  const totalChunks = documents.reduce((acc, d) => acc + d.totalChunks, 0);

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-omni-400" />
                <span>Multi-Format Batch Parser & In-Browser Indexer</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Drag and drop directories, email mailbox exports (.eml), or contract bundles (.pdf, .docx, .csv)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300 font-mono px-3 py-1 rounded-lg bg-dark-900 border border-white/5">
                {documents.length} Files Indexed ({totalChunks} Chunks)
              </span>
            </div>
          </div>

          {/* Dropzone Area */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleSimulateDrop(); }}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all bg-dark-950/40 mb-6 ${
              isDragging ? 'border-omni-400 bg-omni-950/20' : 'border-white/10 hover:border-white/20'
            }`}
          >
            <Upload className="w-8 h-8 text-omni-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">
              Drop Local Folders, ZIP Archives, or Raw Documents
            </h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
              All parsing runs locally in WebAssembly. Documents never leave your device or touch remote LLM training servers.
            </p>

            <button
              onClick={handleSimulateDrop}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              <Plus className="w-3.5 h-3.5 text-omni-400" />
              <span>{isProcessing ? 'Parsing in WebAssembly...' : 'Simulate Parsing Series A Term Sheet'}</span>
            </button>
          </div>

          {/* Active File Library Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="p-3 rounded-xl bg-dark-900/80 border border-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-7 h-7 rounded-lg bg-dark-950 flex items-center justify-center font-mono text-[10px] font-bold uppercase text-omni-300 border border-white/5">
                    {doc.fileType}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-white truncate">{doc.filename}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{doc.size} • {doc.totalChunks} chunks</div>
                  </div>
                </div>
                <FileCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
