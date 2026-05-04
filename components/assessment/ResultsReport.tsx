"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';
import { calculateResults } from '@/lib/calculateResults';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

export function ResultsReport() {
  const { answers, userData, language } = useReadinessStore();
  const [isClient, setIsClient] = useState(false);

  // Prevence chyb při SSR u PDF knihovny
  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalScore = useMemo(() => {
    if (!answers) return 0;
    return answers.reduce((sum, a) => sum + (Number(a.score) || 0), 0);
  }, [answers]);

  const result = calculateResults(totalScore, language);

  const t = {
    cs: {
      profileLabel: "Váš diagnostický profil",
      pointsLabel: "Body / 32",
      analysisLabel: "Analýza stavu",
      impactLabel: "Dopad v praxi",
      recommendationLabel: "Strategické doporučení",
      pdfGenLabel: "Generuji audit...",
      pdfDownloadLabel: "Stáhnout kompletní PDF audit",
      consultationBtn: "Poptat konzultaci výsledků",
      footerCopy: "© 2026 Resilium – Profesionální diagnostika stability pod tlakem.",
      mailSubject: `Resilium Audit: Poptávka konzultace (${userData.name})`,
      mailBody: `Dobrý den,\n\nmám zájem o konzultaci výsledků mého Resilium Auditu.\n\nSOUHRN VÝSLEDKŮ:\nJméno: ${userData.name}\nFirma: ${userData.company || 'Neuvedeno'}\nDosažené skóre: ${totalScore} / 32\nDiagnostický profil: ${result.title}\n\nProsím o návrh termínu krátkého hovoru pro probrání dalšího postupu.`,
    },
    pl: {
      profileLabel: "Twój profil diagnostyczny",
      pointsLabel: "Punkty / 32",
      analysisLabel: "Analiza stanu",
      impactLabel: "Wpływ w praktyce",
      recommendationLabel: "Rekomendacja strategiczna",
      pdfGenLabel: "Generowanie audytu...",
      pdfDownloadLabel: "Pobierz pełny audyt PDF",
      consultationBtn: "Poproś o konsultację wyników",
      footerCopy: "© 2026 Resilium – Profesjonalna diagnostyka stabilności pod presją.",
      mailSubject: `Audyt Resilium: Prośba o konsultację (${userData.name})`,
      mailBody: `Dzień dobry,\n\njestem zainteresowany/a konsultacją wyników mojego Audytu Resilium.\n\nPODSUMOWANIE WYNIKÓW:\nImię: ${userData.name}\nFirma: ${userData.company || 'Nie podano'}\nUzyskany wynik: ${totalScore} / 32\nProfil diagnostyczny: ${result.title}\n\nProszę o propozycję terminu krótkiej rozmowy w celu omówienia dalszych kroków.`,
    },
    en: {
      profileLabel: "Your diagnostic profile",
      pointsLabel: "Points / 32",
      analysisLabel: "Status Analysis",
      impactLabel: "Impact in Practice",
      recommendationLabel: "Strategic Recommendation",
      pdfGenLabel: "Generating audit...",
      pdfDownloadLabel: "Download full PDF audit",
      consultationBtn: "Request results consultation",
      footerCopy: "© 2026 Resilium – Professional diagnosis of stability under pressure.",
      mailSubject: `Resilium Audit: Consultation request (${userData.name})`,
      mailBody: `Hello,\n\nI am interested in a consultation regarding the results of my Resilium Audit.\n\nRESULTS SUMMARY:\nName: ${userData.name}\nCompany: ${userData.company || 'Not provided'}\nScore achieved: ${totalScore} / 32\nDiagnostic profile: ${result.title}\n\nPlease suggest a time for a short call to discuss the next steps.`,
    }
  }[language];

  const handleConsultation = () => {
    const subject = encodeURIComponent(t.mailSubject);
    const body = encodeURIComponent(t.mailBody);
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
      <div className="bg-[#2d3e4f] rounded-3xl p-8 md:p-12 border-l-[12px] border-[#f57c15] shadow-2xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
            <div>
              <span className="text-[#f57c15] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
                {t.profileLabel}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{result.title}</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center min-w-[120px] border border-white/10">
              <span className="block text-4xl font-bold text-[#f57c15] leading-none">{totalScore}</span>
              <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest mt-2 block">{t.pointsLabel}</span>
            </div>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 border-t border-white/10 pt-10">
            <div className="space-y-4">
              <h3 className="text-[#f57c15] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f57c15] rounded-full"></span>
                {t.analysisLabel}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed font-light italic">
                "{result.description}"
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#f57c15] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f57c15] rounded-full"></span>
                {t.impactLabel}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed font-light">
                {result.impact}
              </p>
            </div>
          </div>
        </div>
        {/* Element dekoracyjny w tle */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#f57c15] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* KARTA NASTĘPNYCH KROKÓW */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-[#3d5266] font-bold text-2xl mb-3 uppercase tracking-tight">
              {t.recommendationLabel}
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
            document={<ReportPDF profile={result} userName={userData.name} company={userData.company} score={totalScore} language={language} />} 
            fileName={`Resilium_Audit_${userData.name.replace(/\s/g, '_')}.pdf`}
            className="w-full"
          >
            {({ loading }) => (
              <button className="w-full py-5 bg-[#3d5266] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg uppercase text-xs tracking-[0.2em]">
                {loading ? t.pdfGenLabel : t.pdfDownloadLabel}
              </button>
            )}
          </PDFDownloadLink>

          <button 
            onClick={handleConsultation}
            className="w-full py-5 bg-[#f57c15] text-white font-bold rounded-2xl hover:bg-[#e66a00] transition-all shadow-lg shadow-[#f57c15]/20 uppercase text-xs tracking-[0.2em]"
          >
            {t.consultationBtn}
          </button>
        </div>
      </div>
      
      <p className="text-center text-gray-400 text-sm italic">
        {t.footerCopy}
      </p>
    </div>
  );
}