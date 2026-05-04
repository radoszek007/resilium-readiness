import { create } from 'zustand';

// Definice možných stavů aplikace
export type Step = 'intro' | 'questions' | 'lead-capture' | 'results';

// Struktura jedné odpovědi
interface Answer {
  questionId: number;
  score: number;
}

// Struktura dat uživatele (pro lead a PDF)
interface UserData {
  name: string;
  email: string;
  company: string;
}

// Definice celého stavu (Store)
interface ReadinessState {
  language: "cs" | "pl";
  step: Step;
  currentQuestionIndex: number;
  answers: Answer[];
  userData: UserData;
  
  // AKCE (Funkce pro změnu stavu)
  setLanguage: (lang: "cs" | "pl") => void;
  setStep: (step: Step) => void;
  addAnswer: (questionId: number, score: number) => void;
  nextQuestion: () => void;
  setUserData: (data: UserData) => void;
  reset: () => void;
}

export const useReadinessStore = create<ReadinessState>((set) => ({
  // Výchozí hodnoty
  language: "cs",
  step: 'intro',
  currentQuestionIndex: 0,
  answers: [],
  userData: { name: '', email: '', company: '' },

  // Změna jazyka
  setLanguage: (language) => set({ language }),

  // Změna fáze (např. z otázek na formulář)
  setStep: (step) => set({ step }),

  // Uložení odpovědi (pokud už existuje, přepíše ji)
  addAnswer: (questionId, score) => set((state) => ({
    answers: [
      ...state.answers.filter(a => a.questionId !== questionId), 
      { questionId, score }
    ]
  })),

  // Posun na další otázku
  nextQuestion: () => set((state) => ({
    currentQuestionIndex: state.currentQuestionIndex + 1
  })),

  // Uložení dat z formuláře (Jméno, Email, Firma)
  setUserData: (userData) => set({ userData }),

  // Reset celého testu do původního stavu
  reset: () => set({
    step: 'intro',
    currentQuestionIndex: 0,
    answers: [],
    userData: { name: '', email: '', company: '' }
  }),
}));