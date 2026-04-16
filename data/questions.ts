export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Klient na vás začne bez varování křičet v zaplněné místnosti. Jaká je vaše první reakce?",
    options: [
      { text: "Okamžitě zvyšuji hlas, abych si sjednal respekt.", score: 1 },
      { text: "Cítím stažené hrdlo a čekám, až situaci vyřeší někdo jiný.", score: 2 },
      { text: "Snažím se ho logicky uklidnit, i když cítím silný vnitřní třes.", score: 3 },
      { text: "Vědomě stabilizuji postoj a dech, dříve než udělám cokoli jiného.", score: 5 },
    ]
  },
  {
    id: 2,
    text: "Dostáváte protichůdné instrukce pod extrémním časovým tlakem. Co děláte?",
    options: [
      { text: "Zastavím se a žádám o jasnou prioritu (CORE proces).", score: 5 },
      { text: "Pracuji na všem naráz s vysokou mírou chybovosti.", score: 1 },
      { text: "Vybírám si úkol, který je mi nejpříjemnější.", score: 2 },
      { text: "Pokračuji v práci, ale cítím narůstající chaos a frustraci.", score: 3 },
    ]
  },
  {
    id: 3,
    text: "Jak vnímáte svou schopnost odpojit se od emocí po náročném incidentu?",
    options: [
      { text: "Incident v sobě nosím několik dní a ovlivňuje můj další výkon.", score: 1 },
      { text: "Mám naučený konkrétní protokol pro psychický 'reset'.", score: 5 },
      { text: "Snažím se na to nemyslet, ale cítím únavu a vyčerpání.", score: 3 },
      { text: "Okamžitě si jdu postěžovat kolegům, abych si ulevil.", score: 2 },
    ]
  },
  {
    id: 4,
    text: "Během vypjaté komunikace s agresivním člověkem:",
    options: [
      { text: "Udržuji tunelové vidění a soustředím se jen na hrozbu.", score: 2 },
      { text: "Vnímám své tělo a sleduji i okolí (situační vědomí).", score: 5 },
      { text: "Dívám se do země a vyhýbám se kontaktu.", score: 1 },
      { text: "Analyzuji logické argumenty, ale nevnímám řeč těla.", score: 3 },
    ]
  },
  {
    id: 5,
    text: "Vaše schopnost rozhodovat v nejistotě (když nemáte všechna data):",
    options: [
      { text: "Rozhodnutí odkládám, dokud nemám 100% jistotu.", score: 2 },
      { text: "Rozhoduji se impulzivně na základě intuice.", score: 1 },
      { text: "Používám strukturovaný model (Check-Observe-Resolve).", score: 5 },
      { text: "Deleguji rozhodnutí na někoho jiného, abych nenesl vinu.", score: 2 },
    ]
  },
  {
    id: 6,
    text: "Když cítíte nastupující stres, jak pracujete se svým dechem?",
    options: [
      { text: "Dech neřeším, dýchám povrchně a rychle.", score: 1 },
      { text: "Snažím se dýchat zhluboka, ale v křeči.", score: 3 },
      { text: "Využívám techniku regulovaného výdechu pro zklidnění tepu.", score: 5 },
      { text: "Zadržuji dech, dokud největší nápor nepřejde.", score: 2 },
    ]
  },
  {
    id: 7,
    text: "Pokud vidíte, že kolega pod tlakem destabilizuje, jak reagujete?",
    options: [
      { text: "Začnu panikařit spolu s ním.", score: 1 },
      { text: "Ignoruji to a dělám si svou práci.", score: 2 },
      { text: "Přebírám kontrolu klidným hlasem a jasným pokynem.", score: 5 },
      { text: "Křičím na něj, ať se uklidní.", score: 1 },
    ]
  },
  {
    id: 8,
    text: "Při verbální konfrontaci je vaším hlavním cílem:",
    options: [
      { text: "Vyhrát spor a dokázat svou pravdu.", score: 1 },
      { text: "Ukončit situaci co nejrychleji jakýmkoli ústupkem.", score: 2 },
      { text: "Stabilizovat situaci a ochránit hranice (Deeskalace).", score: 5 },
      { text: "Předat incident policii nebo ochrance bez vlastního zásahu.", score: 3 },
    ]
  },
  {
    id: 9,
    text: "Víte přesně, co dělat v prvních 10 sekundách po vypuknutí krize?",
    options: [
      { text: "Mám naučený a zautomatizovaný drill reakce.", score: 5 },
      { text: "Mám hrubou představu, ale musím o tom přemýšlet.", score: 3 },
      { text: "Netuším, reaguji podle okolností.", score: 1 },
      { text: "Spoléhám na to, že mě někdo povede.", score: 2 },
    ]
  },
  {
    id: 10,
    text: "Jak hodnotíte svou schopnost udržet profesionální tón pod palbou urážek?",
    options: [
      { text: "Beru si to osobně a vracím úder stejnou mincí.", score: 1 },
      { text: "Udržím masku, ale uvnitř mě to ničí.", score: 3 },
      { text: "Vnímám to jako operační hluk a držím protokol komunikace.", score: 5 },
      { text: "Situaci raději opouštím bez slova.", score: 2 },
    ]
  }
];