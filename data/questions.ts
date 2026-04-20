export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Situace náhle eskaluje a vy se dostáváte pod vysoký tlak. Co udělá váš organismus jako první?",
    options: [
      { text: "Provedu vědomý výdech a okamžitě stabilizuji vnitřní napětí.", score: 4 },
      { text: "Cítím nárůst napětí, ale dokážu se rychle zklidnit.", score: 3 },
      { text: "Zrychlí se mi tep a vnímám mírnou svalovou ztuhlost.", score: 2 },
      { text: "Cítím nával horka/chladu a dochází ke zkrácení dechu.", score: 1 }
    ]
  },
  {
    id: 2,
    text: "Jakým způsobem monitorujete okolí při řešení kritického a časově náročného úkolu?",
    options: [
      { text: "Udržuji si situační přehled (scanning), vnímám souvislosti i detaily.", score: 4 },
      { text: "Soustředím se na prioritní problém, ale periodicky kontroluji okolí.", score: 3 },
      { text: "Plně se fixuji na nejdůležitější úkol, ztrácím přehled o periferii.", score: 2 },
      { text: "Podléhám tunelovému vidění – vnímám pouze epicentrum stresu.", score: 1 }
    ]
  },
  {
    id: 3,
    text: "Čelíte informačnímu přetížení a protichůdným podnětům. Jak pracujete s prioritami?",
    options: [
      { text: "Metodicky určím klíčové priority a nepodstatné faktory filtruji.", score: 4 },
      { text: "Reaguji na nejurgentnější podnět, zbytek řeším operativně.", score: 3 },
      { text: "Snažím se o multitasking, což vede k fragmentaci pozornosti.", score: 2 },
      { text: "Pociťuji zahlcení a nedaří se mi stanovit hierarchii úkolů.", score: 1 }
    ]
  },
  {
    id: 4,
    text: "Jaká je vaše bezprostřední odpověď na náhlou provokaci nebo negativní informaci?",
    options: [
      { text: "Dokážu odložit reaktivní impulz a jednat vědomě podle záměru.", score: 4 },
      { text: "Reaguji rychle, ale snažím se zachovat profesionální tón.", score: 3 },
      { text: "Často vyjádřím impulzivní reakci, které později lituji.", score: 2 },
      { text: "Reaguji instinktivně, emoce dominují nad racionálním úsudkem.", score: 1 }
    ]
  },
  {
    id: 5,
    text: "Jak se mění vaše komunikační protokoly v momentě vysokého týmového napětí?",
    options: [
      { text: "Zůstávám u věcného, stručného a stabilizujícího projevu.", score: 4 },
      { text: "Komunikuji důrazněji a s vyšší kadencí pro úsporu času.", score: 3 },
      { text: "Omezuji komunikaci na minimum a řeším situaci izolovaně.", score: 2 },
      { text: "Podléhám podráždění a přenáším vnitřní stres na zbytek týmu.", score: 1 }
    ]
  },
  {
    id: 6,
    text: "Plánovaný scénář přestal odpovídat realitě. Jak rychle adaptujete svůj mentální model?",
    options: [
      { text: "Akceptuji fakta a okamžitě přecházím k realizaci náhradního řešení.", score: 4 },
      { text: "Reorientace mi trvá delší dobu, poté začínám jednat.", score: 3 },
      { text: "Snažím se o záchranu původního plánu navzdory jeho nefunkčnosti.", score: 2 },
      { text: "Fixuji se na analýzu příčiny selhání a ztrácím čas pro nutnou akci.", score: 1 }
    ]
  },
  {
    id: 7,
    text: "Váš postup je v kritické fázi zpochybněn. Jakým způsobem zpracujete kritiku?",
    options: [
      { text: "Izoluji ego od problému a soustředím se výhradně na objektivní výsledek.", score: 4 },
      { text: "Kritiku vnímám, ale snažím se o zachování objektivity.", score: 3 },
      { text: "Mám tendenci obhajovat svou pozici i na úkor efektivity řešení.", score: 2 },
      { text: "Kritiku interpretuji osobně a reaguji defenzivním postojem.", score: 1 }
    ]
  },
  {
    id: 8,
    text: "Rozhodujete v podmínkách časového deficitu a neúplných dat. Jaký je váš proces?",
    options: [
      { text: "Rozhoduji na základě klíčových priorit a přijímám plnou odpovědnost.", score: 4 },
      { text: "Volím nejméně rizikovou cestu, která se v daný moment nabízí.", score: 3 },
      { text: "Rozhodovací proces odkládám a snažím se získat další data.", score: 2 },
      { text: "Pociťuji vnitřní nejistotu, která vede k rozhodovací paralýze.", score: 1 }
    ]
  }
];