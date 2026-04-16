"use client";

import React from 'react';
import { useReadinessStore } from '@/store/useReadinessStore';
import { questions } from '@/data/questions';
import { LeadCapture } from './LeadCapture';
import { ResultsReport } from './ResultsReport';

// TADY BYLA CHYBA - musí tu být "export default function"
export default function ReadinessCheck() {
  const { 
    step, 
    currentQuestionIndex, 
    addAnswer, 
    nextQuestion, 
    setStep 
  } = useReadinessStore();

  // 1. Úvodní obrazovka
  if (step === 'intro') {
    return (
      <div className="text-center p-8 bg-[#2d3e4f] rounded-xl shadow-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-white">Připraveni na diagnostiku?</h2>
        <p className="mb-8 opacity-80 text-gray-300">Zjistěte, jak reagujete pod vysokým operačním tlakem.</p>
        <button 
          onClick={() => setStep('questions')}
          className="bg-[#f57c15] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e66a00] transition-colors shadow-lg"
        >
          ZAČÍT TEST
        </button>
      </div>
    );
  }

  // 2. Samotný test (Otázky)
  if (step === 'questions') {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const progress = (currentQuestionIndex / questions.length) * 100;

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
            Auditní bod {currentQuestionIndex + 1} / {questions.length}
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
                if (currentQuestionIndex < questions.length - 1) {
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
    return <LeadCapture />;
  }

  // 4. Výsledky a PDF
  if (step === 'results') {
    return <ResultsReport />;
  }

  return null;
}