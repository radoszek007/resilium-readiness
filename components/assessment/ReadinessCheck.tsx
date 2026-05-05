"use client";

import React from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';
import { questions } from '@/data/questions';
import { LeadCapture } from './LeadCapture';
import { ResultsReport } from './ResultsReport';

// TUTAJ BYŁ BŁĄD - musi tu być "export default function"
export default function ReadinessCheck() {
  const { 
    step, 
    currentQuestionIndex, 
    addAnswer, 
    nextQuestion, 
    setStep,
    language
  } = useReadinessStore();

  // Jazykový slovník pro samotný test
  const t = {
    cs: {
      introTitle: "Připraveni na diagnostiku?",
        introDesc: "Ověřte si úroveň své stability v zátěžových situacích.",
        introBtn: "SPUSTIT DIAGNOSTIKU",
      auditPoint: "Auditní bod",
    },
    pl: {
      introTitle: "Gotowi na diagnozę?",
        introDesc: "Sprawdź poziom swojej stabilności pod obciążeniem.",
        introBtn: "ROZPOCZNIJ DIAGNOSTYKĘ",
      auditPoint: "Punkt audytu",
    },
    en: {
      introTitle: "Ready for the diagnosis?",
        introDesc: "Verify your stability level under pressure.",
        introBtn: "START DIAGNOSTICS",
      auditPoint: "Audit point",
    }
  }[language];

  // 1. Úvodní obrazovka
  if (step === 'intro') {
    return (
      <div className="text-center p-8 bg-[#2d3e4f] rounded-xl shadow-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-white">{t.introTitle}</h2>
        <p className="mb-8 opacity-80 text-gray-300">{t.introDesc}</p>
        <div className="flex justify-center">
          <button 
            onClick={() => setStep('questions')}
            className="bg-[#f57c15] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e66a00] transition-colors shadow-lg"
          >
            {t.introBtn}
          </button>
        </div>
      </div>
    );
  }

  // 2. Samotný test (Otázky)
  if (step === 'questions') {
    const currentLangQuestions = questions[language];
    const currentQuestion = currentLangQuestions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const progress = (currentQuestionIndex / currentLangQuestions.length) * 100;

    return (
      <div className="w-full max-w-2xl mx-auto bg-[#2d3e4f] p-8 rounded-xl shadow-2xl border border-white/10">
        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-8">
          <div 
            className="bg-[#f57c15] h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mb-8">
          <span className="text-[#f57c15] font-mono text-sm mb-2 block uppercase tracking-widest">
            {t.auditPoint} {currentQuestionIndex + 1} / {currentLangQuestions.length}
          </span>
          <h2 className="text-2xl font-bold text-white leading-tight">
            {currentQuestion.text}
          </h2>
        </div>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                addAnswer(currentQuestion.id, option.score);
                if (currentQuestionIndex < currentLangQuestions.length - 1) {
                  nextQuestion();
                } else {
                  setStep('lead-capture');
                }
              }}
              className="w-full text-left p-5 rounded-lg bg-[#3d5266] hover:bg-[#f57c15] transition-all duration-200 border border-white/5 text-white group"
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 3. Sběr kontaktů
  if (step === 'lead-capture') {
    return (
      <LeadCapture />
    );
  }

  // 4. Výsledky a PDF
  if (step === 'results') {
    return (
      <ResultsReport />
    );
  }

  return null;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useReadinessStore();
  
  return (
    <div className="absolute top-4 right-4 flex gap-1 z-50 bg-[#3d5266] p-1 rounded-lg border border-white/10 shadow-lg">
      <button onClick={() => setLanguage('cs')} className={`px-3 py-1 flex items-center gap-1.5 rounded text-xs font-bold transition-all ${language === 'cs' ? 'bg-[#f57c15] text-white shadow' : 'text-gray-400 hover:text-white'}`}>
        <span className="text-sm leading-none">🇨🇿</span> CZ
      </button>
      <button onClick={() => setLanguage('pl')} className={`px-3 py-1 flex items-center gap-1.5 rounded text-xs font-bold transition-all ${language === 'pl' ? 'bg-[#f57c15] text-white shadow' : 'text-gray-400 hover:text-white'}`}>
        <span className="text-sm leading-none">🇵🇱</span> PL
      </button>
      <button onClick={() => setLanguage('en')} className={`px-3 py-1 flex items-center gap-1.5 rounded text-xs font-bold transition-all ${language === 'en' ? 'bg-[#f57c15] text-white shadow' : 'text-gray-400 hover:text-white'}`}>
        <span className="text-sm leading-none">🇬🇧</span> EN
      </button>
    </div>
  );
}