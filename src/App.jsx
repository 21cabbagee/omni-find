import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SemanticSearchDeck from './components/SemanticSearchDeck';
import BatchParserDropzone from './components/BatchParserDropzone';
import CabModal from './components/CabModal';
import Footer from './components/Footer';
import { MOCK_DOCUMENTS } from './data/mockDocuments';

export default function App() {
  const [documents, setDocuments] = useState(MOCK_DOCUMENTS);
  const [query, setQuery] = useState("Where is that agreement where we discussed a 10% penalty?");
  const [isCabOpen, setIsCabOpen] = useState(false);

  const handleSelectPreset = (presetQuery) => {
    setQuery(presetQuery);
    const searchDeckEl = document.getElementById('search-deck');
    if (searchDeckEl) {
      searchDeckEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddDocument = (newDoc) => {
    setDocuments([newDoc, ...documents]);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-omni-500 selection:text-white">
      {/* Top Navbar */}
      <Header onOpenCab={() => setIsCabOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* High-Converting SEO Hero */}
        <Hero onSelectPreset={handleSelectPreset} />

        {/* Semantic Query Deck & Highlighted Citations */}
        <SemanticSearchDeck
          query={query}
          setQuery={setQuery}
          documents={documents}
        />

        {/* Multi-Format Batch Parser & Indexed Library */}
        <BatchParserDropzone
          documents={documents}
          onAddDocument={handleAddDocument}
        />
      </main>

      {/* CAB Application Modal */}
      <CabModal
        isOpen={isCabOpen}
        onClose={() => setIsCabOpen(false)}
      />

      {/* Technical SEO Footer */}
      <Footer onOpenCab={() => setIsCabOpen(true)} />
    </div>
  );
}
