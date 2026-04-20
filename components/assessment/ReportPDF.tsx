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

  const totalScore = useMemo(() => {
    if (!answers) return 0;
    return answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);
  }, [answers]);

  const result = calculateResults(totalScore);

  const handleConsultation = () => {
    const subject = encodeURIComponent(`Resilium Audit: Poptávka konzultace (${userData.name})`);
    const body = encodeURIComponent(`Dobrý den,\n\nmám zájem o konzultaci výsledků auditu.\nSkóre: ${totalScore}/32\nProfil: ${result.title}\n\nJméno: ${userData.name}\nFirma: ${userData.company}`);
    window.location.href = `mailto:info@resilium.cz?subject=${subject}&body=${body}`;
  };

  if (!isClient) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pb-20 animate-in fade-in duration-700">
      <div className="bg-[#2d3e4f] rounded-2xl p-8 border-l-8 border-[#f57c15] shadow-2xl text-white">
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="text-[#f57c15] font-bold text-xs uppercase tracking-[0.2em]">Váš diagnostický profil</span>
            <h2 className="text-4xl font-bold mt-2">{result.title}</h2>
          </div>
          <div className="bg-black/20 p-4 rounded-xl text-center">
            <span className="block text-3xl font-bold text-[#f57c15]">{totalScore}</span>
            <span className="text-[10px] opacity-50 uppercase font-bold">Body / 32</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-[#f57c15] font-bold text-sm uppercase">Analýza stavu</h3>
            <p className="opacity-90 leading-relaxed">{result.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[#f57c15] font-bold text-sm uppercase">Dopad v praxi</h3>
            <p className="opacity-90 leading-relaxed">{result.impact}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-[#3d5266] font-bold text-xl mb-4 uppercase tracking-tight">Další doporučený krok</h3>
        <p className="text-gray-600 mb-6">{result.nextStep}</p>
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-[#3d5266] font-bold text-sm mb-8">
          {result.program}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <PDFDownloadLink 
            document={<ReportPDF profile={result} userName={userData.name} company={userData.company} score={totalScore} />} 
            fileName={`Resilium_Audit_${userData.name.replace(/\s/g, '_')}.pdf`}
            className="w-full"
          >
            {({ loading }) => (
              <button className="w-full py-4 bg-[#3d5266] text-white font-bold rounded-xl hover:bg-black transition-all uppercase text-sm tracking-widest">
                {loading ? "Připravuji PDF..." : "Stáhnout kompletní audit"}
              </button>
            )}
          </PDFDownloadLink>

          <button 
            onClick={handleConsultation}
            className="w-full py-4 bg-[#f57c15] text-white font-bold rounded-xl hover:bg-[#e66a00] transition-all uppercase text-sm tracking-widest"
          >
            Poptat konzultaci
          </button>
        </div>
      </div>
    </div>
  );
}