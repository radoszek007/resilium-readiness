"use client";

import React, { useState } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';

export function LeadCapture() {
  const { userData, setUserData, setStep, answers, language } = useReadinessStore();
  const [loading, setLoading] = useState(false);

  const t = {
    cs: {
      title: "Audit dokončen",
      desc: "Zadejte své údaje pro vygenerování kompletního PDF auditu a strategického doporučení.",
      name: "Jméno a příjmení",
      email: "Pracovní e-mail",
      company: "Firma",
      btnGenerating: "Odesílám...",
      btnSubmit: "Zobrazit analýzu",
    },
    pl: {
      title: "Audyt ukończony",
      desc: "Wprowadź swoje dane, aby wygenerować pełny audyt PDF i rekomendacje strategiczne.",
      name: "Imię i nazwisko",
      email: "Służbowy adres e-mail",
      company: "Firma",
      btnGenerating: "Wysyłanie...",
      btnSubmit: "Pokaż analizę",
    },
    en: {
      title: "Audit completed",
      desc: "Enter your details to generate the full PDF audit and strategic recommendation.",
      name: "Full name",
      email: "Work email",
      company: "Company",
      btnGenerating: "Sending...",
      btnSubmit: "Show analysis",
    }
  }[language];

  const totalScore = answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
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
      <h2 className="text-3xl font-bold mb-4 text-[#f57c15]">{t.title}</h2>
      <p className="mb-8 opacity-70 text-sm leading-relaxed">
        {t.desc}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          placeholder={t.name}
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder={t.email}
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          placeholder={t.company}
          className="w-full p-4 rounded-xl bg-[#3d5266] border border-white/10 outline-none focus:border-[#f57c15]"
          value={userData.company}
          onChange={(e) => setUserData({ ...userData, company: e.target.value })}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#f57c15] text-white font-bold rounded-xl hover:bg-[#e66a00] transition-all shadow-lg uppercase tracking-widest text-sm"
        >
          {loading ? t.btnGenerating : t.btnSubmit}
        </button>
      </form>
    </div>
  );
}