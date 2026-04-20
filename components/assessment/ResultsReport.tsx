"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';
import { calculateResults } from '@/lib/calculateResults';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

export function ResultsReport() {
  const { answers, userData } = useReadinessStore();
  const [isClient, setIsClient] = useState(false);

  // Prevence chyb při SSR (Server Side Rendering) u PDF knihovny
  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalScore = useMemo(() => {
    if (!answers) return 0;
    return answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);
  }, [answers]);

  const result = calculateResults(totalScore);

  const handleConsultation = () => {
    const subject = encodeURIComponent(`Resilium Audit: Poptávka konzultace (${userData.name})`);
    const body = encodeURIComponent(
      `Dobrý den,\n\nmám zájem o konzultaci výsledků mého Resilium Auditu.\n\n` +
      `SOUHRN VÝSLEDKŮ:\n` +
      `Jméno: ${userData.name}\n` +
      `Firma: ${userData.company || 'Neuvedeno'}\n` +
      `Dosažené skóre: ${totalScore} / 32\n` +
      `Diagnostický profil: ${result.title}\n\n` +
      `Prosím o návrh termínu krátkého hovoru pro probrání dalšího postupu.`
    );
    window.location.href = `mailto:info@resilium.cz?subject=${subject}&body=${body}`;
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f57c15]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HLAVNÍ KARTA VÝSLEDKU */}
      <div className="bg-[#2d3e4f] rounded-3xl p-8 md:p-12 border-l-[12px] border-[#f57c15] shadow-2xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
            <div>
              <span className="text-[#f57c15] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
                Váš diagnostický profil
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{result.title}</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center min-w-[120px] border border-white/10">
              <span className="block text-4xl font-bold text-[#f57c15] leading-none">{totalScore}</span>
              <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest mt-2 block">Body / 32</span>
            </div>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 border-t border-white/10 pt-10">
            <div className="space-y-4">
              <h3 className="text-[#f57c15] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f57c15] rounded-full"></span>
                Analýza stavu
              </h3>
              <p className="text-lg opacity-90 leading-relaxed font-light italic">
                "{result.description}"
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#f57c15] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f57c15] rounded-full"></span>
                Dopad v praxi
              </h3>
              <p className="text-lg opacity-90 leading-relaxed font-light">
                {result.impact}
              </p>
            </div>
          </div>
        </div>
        {/* Dekorativní prvek na pozadí */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#f57c15] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* KARTA DALŠÍCH KROKŮ */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-[#3d5266] font-bold text-2xl mb-3 uppercase tracking-tight">
              Strategické doporučení
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {result.nextStep}
            </p>
          </div>
          
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#F1F5F9] rounded-xl text-[#3d5266] font-bold text-sm">
            <span className="w-2 h-2 bg-[#f57c15] rounded-full animate-pulse"></span>
            {result.program}
          </div>
        </div>
        
        <div className="w-full md:w-80 space-y-4">
          <PDFDownloadLink 
            document={<ReportPDF profile={result} userName={userData.name} company={userData.company} score={totalScore} />} 
            fileName={`Resilium_Audit_${userData.name.replace(/\s/g, '_')}.pdf`}
            className="w-full"
          >
            {({ loading }) => (
              <button className="w-full py-5 bg-[#3d5266] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg uppercase text-xs tracking-[0.2em]">
                {loading ? "Generuji audit..." : "Stáhnout kompletní PDF audit"}
              </button>
            )}
          </PDFDownloadLink>

          <button 
            onClick={handleConsultation}
            className="w-full py-5 bg-[#f57c15] text-white font-bold rounded-2xl hover:bg-[#e66a00] transition-all shadow-lg shadow-[#f57c15]/20 uppercase text-xs tracking-[0.2em]"
          >
            Poptat konzultaci výsledků
          </button>
        </div>
      </div>
      
      <p className="text-center text-gray-400 text-sm italic">
        © 2026 Resilium – Profesionální diagnostika stability pod tlakem.
      </p>
    </div>
  );
}