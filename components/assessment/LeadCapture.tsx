"use client";

import React, { useState } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';

export function LeadCapture() {
  const { setUserData, setStep } = useReadinessStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Simulace odeslání na API (později napojíme na ostrou DB)
      // await fetch('/api/lead', { method: 'POST', body: JSON.stringify(formData) });

      // 2. Uložení dat do storu pro potřeby PDF reportu
      setUserData(formData);

      // 3. Přepnutí na výsledky
      setStep('results');
    } catch (error) {
      console.error("Chyba:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#2d3e4f] p-8 rounded-xl shadow-2xl border border-white/10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Analýza je připravena</h2>
      <p className="text-gray-300 text-center mb-8 text-sm">
        Zadejte údaje pro vygenerování vašeho osobního PDF auditu.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="Vaše jméno"
          className="w-full p-3 rounded bg-[#3d5266] border border-white/10 text-white outline-none focus:border-[#f57c15]"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="E-mail (pracovní)"
          className="w-full p-3 rounded bg-[#3d5266] border border-white/10 text-white outline-none focus:border-[#f57c15]"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          placeholder="Firma / Instituce"
          className="w-full p-3 rounded bg-[#3d5266] border border-white/10 text-white outline-none focus:border-[#f57c15]"
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        
        <button
          disabled={loading}
          className="w-full py-4 bg-[#f57c15] text-white font-bold rounded-lg hover:bg-[#e66a00] transition-colors shadow-lg uppercase tracking-wider"
        >
          {loading ? 'Zpracovávám...' : 'Získat audit v PDF'}
        </button>
      </form>
    </div>
  );
}