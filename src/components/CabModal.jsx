import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Search, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmType: 'Boutique Law Firm / Legal Counsel',
    docVolume: '5,000 - 25,000 documents',
    painPoint: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel-glow w-full max-w-lg rounded-2xl p-6 sm:p-8 relative border-omni-500/40 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-dark-800 border border-white/5"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-omni-500/20 text-omni-300 text-xs font-bold uppercase tracking-wider mb-3 border border-omni-500/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Customer Advisory Board (Cohort 1)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Join the OmniFind Founding CAB
            </h2>

            {/* Verbatim Outreach Pitch Script */}
            <div className="p-3.5 rounded-xl bg-omni-950/40 border border-omni-500/30 mb-6 text-xs text-slate-200 italic leading-relaxed">
              "We are assembling a 10-member Customer Advisory Board (CAB) for OmniFind to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount ($8.70/mo instead of $29/mo)</strong> and dedicated onboarding for our first cohort."
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jonathan Blake"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-omni-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jonathan@blakepartners.com"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-omni-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Practice / Org Type</label>
                  <select
                    value={formData.firmType}
                    onChange={(e) => setFormData({ ...formData, firmType: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-omni-500 focus:outline-none"
                  >
                    <option value="Boutique Law Firm / Legal Counsel">Boutique Law Firm</option>
                    <option value="CPA / Audit Practice">CPA / Financial Audit</option>
                    <option value="Real Estate Asset Management">Real Estate Asset Mgmt</option>
                    <option value="Agency Operations">Agency Account Ops</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Document Volume</label>
                  <select
                    value={formData.docVolume}
                    onChange={(e) => setFormData({ ...formData, docVolume: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-omni-500 focus:outline-none"
                  >
                    <option value="1,000 - 5,000 documents">1,000 - 5,000 files</option>
                    <option value="5,000 - 25,000 documents">5,000 - 25,000 files</option>
                    <option value="25,000+ documents">25,000+ files</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">What search queries fail most often in Spotlight / Windows?</label>
                <textarea
                  rows={2}
                  value={formData.painPoint}
                  onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                  placeholder="e.g. Trying to find specific penalty percentages or severance clauses across 3 years of PDFs..."
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-omni-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-omni-600 via-teal-600 to-cyan-600 hover:from-omni-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-omni-500/30 transition-all hover:scale-[1.01]"
                >
                  <span>Claim 70% Lifetime Founding Seat ($8.70/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict 10-Member Quota for Cohort 1</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Welcome to the OmniFind CAB!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
              We've locked in your 70% lifetime platform discount code for <strong>{formData.email}</strong>. Our local search systems lead will reach out within 24 hours with your native desktop binary build.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              Return to Search Deck
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
