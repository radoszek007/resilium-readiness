export type Language = "cs" | "pl" | "en";

export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Record<Language, Question[]> = {
  cs: [
    {
      id: 1,
      text: "Představte si, že se situace v průběhu práce náhle změní a okolí čeká na váš další krok. Co se ve vás děje v prvních sekundách?",
      options: [
        { text: "Cítím tělesné napětí. Potřebuji krátkou pauzu, abych si znovu srovnal/a fakta.", score: 2 },
        { text: "Ihned se soustředím na nová data. Překvapení v tu chvíli vědomě neregistruji.", score: 4 },
        { text: "Cítím nejistotu a zmatek. Moje reakce bývá příliš rychlá, nebo naopak pasivní.", score: 1 },
        { text: "Vnímám tlak situace, ale dokážu se rychle vrátit k věcnému postupu.", score: 3 }
      ]
    },
    {
      id: 2,
      text: "Jak se mění vaše vnímání okolí, když se zvýší počet požadavků a zkrátí termíny?",
      options: [
        { text: "Soustředím se výhradně na jeden problém. Ostatní souvislosti a lidé mi unikají.", score: 2 },
        { text: "Udržím si přehled o celku. Sleduji priority, lidi v týmu i možná rizika.", score: 4 },
        { text: "Začínám být zahlcen/a. Přeskakuji mezi úkoly a těžko udržím pozornost u jedné věci.", score: 1 },
        { text: "Snažím se držet směr, ale vyžaduje to ode mě velkou dávku vědomé kontroly.", score: 3 }
      ]
    },
    {
      id: 3,
      text: "Když se na vás sejde více naléhavých požadavků najednou, podle čeho volíte pořadí reakcí?",
      options: [
        { text: "Reaguji na to, co je v danou chvíli nejvíce vidět nebo kdo nejvíce naléhá.", score: 2 },
        { text: "Řídím se pevným schématem: vyhodnotím dopad, riziko a časovou dotaci.", score: 4 },
        { text: "Nemám jasný postup. Pocit zahlcení mi znemožňuje logicky seřadit kroky.", score: 1 },
        { text: "Většinou pořadí určím správně, ale pod tlakem někdy sklouznu k řešení drobností.", score: 3 }
      ]
    },
    {
      id: 4,
      text: "Kolega nebo klient veřejně zpochybní váš postup. Co je hlavním motorem vaší okamžité odpovědi?",
      options: [
        { text: "Snaha okamžitě vysvětlit svůj postoj, protože se mě to osobně dotklo.", score: 2 },
        { text: "Cíl dané situace. Oddělím kritiku od své osoby a řeším pouze věcný výsledek.", score: 4 },
        { text: "Vnitřní neklid, který mi brání v pohotové a věcné argumentaci.", score: 1 },
        { text: "Snaha udržet profesionální tón, i když vnitřně cítím silné podráždění.", score: 3 }
      ]
    },
    {
      id: 5,
      text: "Jak se mění váš způsob mluvy, když tým nebo okolí začne pod vlivem stresu ztrácet klid?",
      options: [
        { text: "Začnu mluvit důrazněji a rychleji. Moje podráždění situaci spíše zhoršuje.", score: 1 },
        { text: "Zpomalím tempo řeči a zpřesním informace. Snažím se komunikaci zklidnit.", score: 4 },
        { text: "Začnu sdělení zkracovat nebo přebírám úkoly na sebe, abych se vyhnul/a diskuzi.", score: 2 },
        { text: "Mluvím důrazně, ale snažím se stále držet věcnou rovinu a směr.", score: 3 }
      ]
    },
    {
      id: 6,
      text: "Připravený postup selže a vy musíte okamžitě reagovat na novou realitu. Jak vypadá vaše adaptace?",
      options: [
        { text: "Mám tendenci analyzovat, proč to selhalo, místo abych hledal/a nové řešení.", score: 2 },
        { text: "Okamžitě opouštím nefunkční plán a hledám další použitelnou variantu.", score: 4 },
        { text: "Snažím se původní plán ještě chvíli opravovat, i když už není efektivní.", score: 1 },
        { text: "Potřebuji krátké ověření faktů, co přesně nevyšlo, a pak měním postup.", score: 3 }
      ]
    },
    {
      id: 7,
      text: "Uprostřed řešení krize přijde někdo jiný s lepším návrhem, než je váš. Jak reagujete?",
      options: [
        { text: "Mám tendenci svůj postup bránit, protože jsem do něj už investoval/a energii.", score: 2 },
        { text: "Pokud je návrh funkční, okamžitě ho přijmu. Moje ego v tu chvíli není prioritou.", score: 4 },
        { text: "Souhlasím, ale vnitřně mě to rozhodí a ztratím na chvíli jistotu v rozhodování.", score: 1 },
        { text: "Návrh přijmu, ale vnitřně mě mrzí, že jsem na něj nepřišel/přišla sám/sama.", score: 3 }
      ]
    },
    {
      id: 8,
      text: "Musíte udělat zásadní krok, ale nemáte kompletní informace. Čekání však zvyšuje riziko. Jak postupujete?",
      options: [
        { text: "Rozhodnutí odkládám. Riziko chyby z nedostatku dat je pro mě nepřijatelné.", score: 2 },
        { text: "Vyhodnotím dostupná fakta, určím priority a rozhodnu. Přijímám odpovědnost.", score: 4 },
        { text: "Pod tlakem nejistoty se rozhoduji impulzivně, jen abych tu fázi ukončil/a.", score: 1 },
        { text: "Volím nejméně rizikovou variantu, která situaci zakonzervuje.", score: 3 }
      ]
    }
  ],
  pl: [
    {
      id: 1,
      text: "Gdy sytuacja nagle się zmienia i wszyscy czekają na Twoją reakcję, jak szybko odzyskujesz jasność myślenia?",
      options: [
        { text: "Przez kilkadziesiąt sekund działam automatycznie, zanim znów się odnajdę.", score: 2 },
        { text: "W ciągu kilku sekund. Zatrzymuję pierwszy impuls, orientuję się w sytuacji i działam.", score: 4 },
        { text: "Sytuacja na chwilę wytrąca mnie z równowagi. Reaguję z opóźnieniem, powierzchownie lub chaotycznie.", score: 1 },
        { text: "Przez chwilę czuję presję, ale zazwyczaj szybko wracam do rzeczowego działania.", score: 3 }
      ]
    },
    {
      id: 2,
      text: "Co dzieje się z Twoim postrzeganiem, gdy presja rośnie i przybywa bodźców?",
      options: [
        { text: "Skupiam się na głównym problemie, ale muszę świadomie pilnować kontekstu.", score: 3 },
        { text: "Widzę tylko największy problem przed sobą. Kontekst, ludzie i alternatywy znikają.", score: 1 },
        { text: "Utrzymuję główny cel, ludzi, przestrzeń i ryzyka w jednym pełnym obrazie.", score: 4 },
        { text: "Zawężam uwagę do jednej rzeczy, a reszta zaczyna mi umykać.", score: 2 }
      ]
    },
    {
      id: 3,
      text: "Kiedy spada na Ciebie wiele wymagań jednocześnie, czy masz jasny sposób określania kolejności działań?",
      options: [
        { text: "Raczej gaszę pożary tam, gdzie jest najgłośniej lub problem jest najbardziej widoczny.", score: 2 },
        { text: "Nie mam jasnego sposobu. Sytuacja mnie przytłacza i gubię kolejność kroków.", score: 1 },
        { text: "Tak. Kieruję się priorytetem wpływu, ryzyka i czasu.", score: 4 },
        { text: "Zazwyczaj tak, ale czasami zmieniam priorytety w zależności od tego, co wywiera największą presję.", score: 3 }
      ]
    },
    {
      id: 4,
      text: "Gdy ktoś sprowokuje Cię lub podważy Twoje zdanie przy innych, co decyduje o Twojej odpowiedzi?",
      options: [
        { text: "Staram się pozostać rzeczowy, nawet jeśli wewnętrznie mnie to dotyka.", score: 3 },
        { text: "Emocje przejmują kontrolę, a skutkami martwię się później.", score: 1 },
        { text: "Cel sytuacji. Najpierw pilnuję wyniku, a dopiero potem emocji.", score: 4 },
        { text: "Reaguję szybciej, ostrzej lub bardziej osobiście, niż byłoby to użyteczne.", score: 2 }
      ]
    },
    {
      id: 5,
      text: "Jak zmienia się Twoja komunikacja, gdy zespół, klient lub współpracownik zaczyna tracić spokój?",
      options: [
        { text: "Moje napięcie przenosi się na innych. Ton, tempo lub rozdrażnienie pogarszają sytuację.", score: 1 },
        { text: "Precyzuję komunikat, zwalniam tempo i trzymam się rzeczowych ram.", score: 4 },
        { text: "Zaczynam skracać komunikaty, pomijać szczegóły lub brać wszystko na siebie.", score: 2 },
        { text: "Mówię bardziej stanowczo, ale wciąż staram się utrzymać obrany kierunek.", score: 3 }
      ]
    },
    {
      id: 6,
      text: "Przygotowany plan zawodzi. Jak szybko odzyskujesz zdolność decyzyjną w nowej rzeczywistości?",
      options: [
        { text: "Potrzebuję krótkiej analizy, co dokładnie zawiodło, a potem zmieniam sposób działania.", score: 3 },
        { text: "Zacinam się na błędzie, tłumaczeniu lub szukaniu winnego.", score: 1 },
        { text: "Trzymam się pierwotnego planu dłużej, niż to ma sens.", score: 2 },
        { text: "Szybko przechodzę od obrony planu do szukania kolejnego użytecznego wariantu.", score: 4 }
      ]
    },
    {
      id: 7,
      text: "Gdy w napiętej sytuacji okazuje się, że ktoś inny ma lepszy pomysł od Ciebie, co robisz?",
      options: [
        { text: "Mam tendencję do bronienia swojego rozwiązania, nawet gdy traci na skuteczności.", score: 2 },
        { text: "Przyjmuję funkcjonalne rozwiązanie bez względu na to, od kogo pochodzi.", score: 4 },
        { text: "Biorę to do siebie i konflikt o pozycję zaczyna przeważać nad rozwiązaniem.", score: 1 },
        { text: "Wewnętrznie mnie to dotyka, ale potrafię wrócić do realizacji celu.", score: 3 }
      ]
    },
    {
      id: 8,
      text: "Kiedy brakuje Ci informacji, a czekanie zwiększa ryzyko, jak reagujesz?",
      options: [
        { text: "Odkładam decyzję, ponieważ potrzebuję więcej pewności.", score: 2 },
        { text: "Decyduję na podstawie priorytetów i dostępnych danych oraz biorę odpowiedzialność za kolejny krok.", score: 4 },
        { text: "Niepewność mnie blokuje i przenoszę decyzję, opóźniam ją lub zostawiam innym.", score: 1 },
        { text: "Wybieram najbezpieczniejszy wariant, który ogranicza największe straty.", score: 3 }
      ]
    }
  ],
  en: [
    {
      id: 1,
      text: "When the situation suddenly changes and everyone is waiting for your reaction, how quickly do you return to clear thinking?",
      options: [
        { text: "For several dozens of seconds, I act more automatically before pulling myself together.", score: 2 },
        { text: "Within a few seconds. I stop the first impulse, orient myself, and act.", score: 4 },
        { text: "The situation throws me off completely for a while. I react late, impulsively, or chaotically.", score: 1 },
        { text: "I feel the pressure for a moment, but usually return quickly to a pragmatic approach.", score: 3 }
      ]
    },
    {
      id: 2,
      text: "What happens to your perception when the pressure rises and stimuli increase?",
      options: [
        { text: "I hold on to the main problem, but I have to consciously monitor the context.", score: 3 },
        { text: "I only see the biggest problem in front of me. Context, people, and alternatives disappear.", score: 1 },
        { text: "I maintain the main goal, people, space, and risks in a single picture.", score: 4 },
        { text: "I narrow my attention to one thing and start missing the rest.", score: 2 }
      ]
    },
    {
      id: 3,
      text: "When multiple demands fall on you at once, do you have a clear way to prioritize your reactions?",
      options: [
        { text: "I tend to put out whatever is loudest or most visible.", score: 2 },
        { text: "I don't have a clear process. The situation overwhelms me and I lose the sequence of steps.", score: 1 },
        { text: "Yes. I'm guided by the priority of impact, risk, and time.", score: 4 },
        { text: "Usually yes, but sometimes I switch based on what presses the most.", score: 3 }
      ]
    },
    {
      id: 4,
      text: "When someone provokes or questions you in front of others, what determines your response?",
      options: [
        { text: "I try to stay objective, even if it affects me internally.", score: 3 },
        { text: "Emotion takes the wheel and I deal with the impact later.", score: 1 },
        { text: "The goal of the situation. First I guard the outcome, then the emotion.", score: 4 },
        { text: "I react faster, sharper, or more personally than is useful.", score: 2 }
      ]
    },
    {
      id: 5,
      text: "How does your communication change when the team, client, or colleague starts losing their calm?",
      options: [
        { text: "My pressure transfers to others. My tone, pace, or irritation makes the situation worse.", score: 1 },
        { text: "I refine the message, slow the pace, and keep a pragmatic framework.", score: 4 },
        { text: "I start shortening communication, skipping details, or taking things upon myself.", score: 2 },
        { text: "I speak more emphatically, but still try to maintain direction.", score: 3 }
      ]
    },
    {
      id: 6,
      text: "A prepared plan fails. How quickly do you restore the ability to decide based on the new reality?",
      options: [
        { text: "I need a brief verification of what exactly failed, then I change the procedure.", score: 3 },
        { text: "I get stuck on the error, explaining it or looking for who is to blame.", score: 1 },
        { text: "I hold onto the original plan longer than is practical.", score: 2 },
        { text: "I quickly switch from defending the plan to searching for another viable option.", score: 4 }
      ]
    },
    {
      id: 7,
      text: "When a tense situation reveals that someone else has a better proposal than you, what do you do?",
      options: [
        { text: "I have a tendency to defend my approach, even if it's losing effectiveness.", score: 2 },
        { text: "I accept the functional solution regardless of who it came from.", score: 4 },
        { text: "I take it personally and the conflict over position overrides the solution.", score: 1 },
        { text: "It hits me internally, but I manage to return to the goal.", score: 3 }
      ]
    },
    {
      id: 8,
      text: "When you don't have enough information, but waiting increases risk, how do you react?",
      options: [
        { text: "I postpone the decision because I still want certainty.", score: 2 },
        { text: "I decide based on priorities and available data, and take responsibility for the next step.", score: 4 },
        { text: "Uncertainty blocks me and I shift, delay, or leave the decision to others.", score: 1 },
        { text: "I choose the safer option that limits the greatest damage.", score: 3 }
      ]
    }
  ]
};