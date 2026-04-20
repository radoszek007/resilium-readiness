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
    text: "Situace náhle přituhne. Co udělá váš organismus jako první?",
    options: [
      { text: "Zhluboka vydechnu a rychle se „srovnám“.", score: 4 },
      { text: "Cítím napětí, ale dokážu se rychle zklidnit.", score: 3 },
      { text: "Zrychlí se mi tep a vnímám svalovou ztuhlost.", score: 2 },
      { text: "Cítím nával horka/chladu a zkrátí se mi dech.", score: 1 }
    ]
  },
  {
    id: 2,
    text: "Jak vnímáte prostor kolem sebe, když se na vás sype jeden problém za druhým?",
    options: [
      { text: "Vidím „celou šachovnici“, vnímám souvislosti i detaily.", score: 4 },
      { text: "Soustředím se na problém, ale občas zkontroluji okolí.", score: 3 },
      { text: "Plně se fixuji na nejdůležitější úkol, zbytek mi uniká.", score: 2 },
      { text: "Mám pocit tunelového vidění – vnímám jen epicentrum stresu.", score: 1 }
    ]
  },
  {
    id: 3,
    text: "Přichází příliš mnoho informací a podnětů najednou. Jak s nimi pracujete?",
    options: [
      { text: "Klidně si určím priority a nepodstatné věci odkládám.", score: 4 },
      { text: "Reaguji na to, co hoří nejvíc, zbytek řeším za běhu.", score: 3 },
      { text: "Snažím se stihnout všechno, což mi tříští pozornost.", score: 2 },
      { text: "Cítím zahlcení a nedaří se mi určit, co má přednost.", score: 1 }
    ]
  },
  {
    id: 4,
    text: "Došlo k provokaci nebo nečekané špatné zprávě. Jak reagujete?",
    options: [
      { text: "Dokážu odložit první impulz a jednat vědomě.", score: 4 },
      { text: "Reaguji rychle, ale snažím se držet profesionální tón.", score: 3 },
      { text: "Často vyhrknu něco, co mě později mrzí.", score: 2 },
      { text: "Reaguji instinktivně, emoce jdou ven jako první.", score: 1 }
    ]
  },
  {
    id: 5,
    text: "Jak se pod tlakem mění váš tón a způsob komunikace s lidmi?",
    options: [
      { text: "Zůstávám věcný, stručný a klidný.", score: 4 },
      { text: "Mluvím důrazněji a rychleji, abychom neztráceli čas.", score: 3 },
      { text: "Přestávám mluvit a začnu věci řešit raději sám.", score: 2 },
      { text: "Jsem podrážděný a přenáším vnitřní stres na ostatní.", score: 1 }
    ]
  },
  {
    id: 6,
    text: "Pečlivě připravený plán přestane odpovídat realitě. Co uděláte?",
    options: [
      { text: "Přijímám fakta a okamžitě hledám náhradní cestu.", score: 4 },
      { text: "Chvíli mi trvá se přeorientovat, ale pak začnu jednat.", score: 3 },
      { text: "Snažím se původní plán zachránit, i když drhne.", score: 2 },
      { text: "Zaseknu se na hledání příčiny a ztratím čas, který je třeba věnovat nové situaci.", score: 1 }
    ]
  },
  {
    id: 7,
    text: "V situaci jde o hodně a někdo zpochybní váš postup. Jak se zachováte?",
    options: [
      { text: "Dokážu odložit osobní spor stranou a soustředit se na výsledek.", score: 4 },
      { text: "Trochu mě to zasáhne, ale snažím se o objektivitu.", score: 3 },
      { text: "Mám tendenci si svou pozici obhajovat za každou cenu.", score: 2 },
      { text: "Beru si kritiku osobně a reaguji defenzivně.", score: 1 }
    ]
  },
  {
    id: 8,
    text: "Máte kriticky málo času a neúplné informace. Jak se rozhodujete?",
    options: [
      { text: "Rozhodnu se na základě priorit a přijímám plnou odpovědnost.", score: 4 },
      { text: "Volím cestu, která se v daný moment zdá nejbezpečnější.", score: 3 },
      { text: "Rozhodnutí odkládám a snažím se získat další data.", score: 2 },
      { text: "Cítím nejistotu a rozhodování mě vnitřně paralyzuje.", score: 1 }
    ]
  }
];