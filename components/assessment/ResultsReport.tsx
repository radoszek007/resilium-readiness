"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';
import { calculateResults } from '@/lib/calculateResults';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReportPDF } from './ReportPDF';

export function ResultsReport() {
  const { answers, userData } = useReadinessStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ROBUSTNÍ VÝPOČET SKÓRE (Oprava NaN)
  const totalScore = useMemo(() => {
    if (!answers || answers.length === 0) return 0;
    return answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);
  }, [answers]);

  const result = calculateResults(totalScore);

  const handleConsultation = () => {
    const subject = encodeURIComponent(`Resilium Audit: Poptávka konzultace (${userData.name})`);
    const body = encodeURIComponent(`Dobrý den,\n\nna základě výsledků mého Readiness Auditu (${totalScore} bodů - ${result.title}) mám zájem o odbornou konzultaci.\n\nJméno: ${userData.name}\nFirma: ${userData.company}`);
    window.location.href = `mailto:info@resilium.cz?subject=${subject}&body=${body}`;
  };

  if (!isClient) return <div className="p-20 text-center text-white">Načítání výsledků...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 animate-in fade-in duration-1000">
      {/* Hlavní karta */}
      <div className="bg-[#2d3e4f] rounded-xl p-8 border-l-8 border-[#f57c15] shadow-2xl text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[#f57c15] font-bold text-sm uppercase tracking-widest">Diagnostický závěr</span>
            <h2 className="text-4xl font-bold mt-2">{result.title}</h2>
          </div>
          <div className="bg-black/30 p-4 rounded-lg text-center min-w-[100px]">
            <span className="block text-3xl font-bold text-[#f57c15]">{totalScore}</span>
            <span className="text-[10px] opacity-50 uppercase">Body / 40</span>
          </div>
        </div>
        <p className="text-lg opacity-90 leading-relaxed mb-6 border-t border-white/10 pt-6">{result.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* PDF Box */}
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between border-t-4 border-[#3d5266]">
          <div>
            <h3 className="font-bold text-[#3d5266] text-xl mb-4">Komplexní PDF Audit</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Váš report obsahuje hloubkovou neurofyziologickou analýzu, mapu operačních rizik a strategický plán rozvoje stability.
            </p>
          </div>
          
          <PDFDownloadLink 
            document={<ReportPDF profile={result} userName={userData.name} company={userData.company} />} 
            fileName={`Resilium_Audit_${userData.name.replace(/\s/g, '_')}.pdf`}
          >
            {({ loading }) => (
              <button className="w-full py-4 bg-[#3d5266] text-white font-bold rounded-lg hover:bg-black transition-all shadow-md uppercase text-sm tracking-wider">
                {loading ? "Generuji dokument..." : "STÁHNOUT PDF REPORT"}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        {/* Konzultace Box */}
        <div className="bg-[#f57c15] p-8 rounded-xl shadow-lg text-white flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Odborná intervence</h3>
            <p className="text-sm opacity-90 mb-6 text-white/90 leading-relaxed">
              Výsledky naznačují specifické oblasti pro zlepšení. Poptáním konzultace získáte konkrétní tréninkovou cestu pro zvýšení vašeho operačního prahu.
            </p>
          </div>
          <button 
            onClick={handleConsultation}
            className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-zinc-900 transition-all shadow-md uppercase text-sm tracking-wider"
          >
            POPTAT KONZULTACI
          </button>
        </div>
      </div>
    </div>
  );
}