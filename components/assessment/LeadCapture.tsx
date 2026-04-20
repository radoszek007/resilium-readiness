"use client";

import React, { useState } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';

export function LeadCapture() {
  const { userData, setUserData, setStep, answers } = useReadinessStore();
  const [loading, setLoading] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SEM VLOŽ SVŮJ FORMSPREE ODKAZ
      const FORMSPREE_URL = "https://formspree.io/f/maqabdgg"

      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jmeno: userData.name,
          email: userData.email,
          firma: userData.company,
          skore: totalScore,
        }),
      });
      setStep('results');
    } catch (error) {
      setStep('results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#2d3e4f] p-10 rounded-3xl shadow-2xl text-white border border-white/10">
      <h2 className="text-3xl font-bold mb-4 text-[#f57c15]">Audit dokončen</h2>
      <p className="mb-8 opacity-70 text-sm leading-relaxed">
        Zadejte své údaje pro vygenerování kompletního PDF auditu a strategického doporučení.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          placeholder="Jméno a příjmení"
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Pracovní e-mail"
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          placeholder="Firma"
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.company}
          onChange={(e) => setUserData({ ...userData, company: e.target.value })}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#f57c15] text-white font-bold rounded-xl hover:bg-[#e66a00] transition-all shadow-lg uppercase tracking-widest text-sm"
        >
          {loading ? "Odesílám..." : "Zobrazit analýzu"}
        </button>
      </form>
    </div>
  );
}