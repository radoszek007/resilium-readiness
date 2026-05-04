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
      text: "Když se situace náhle změní a všichni čekají na vaši reakci, jak rychle se vracíte k jasnému uvažování?",
      options: [
        { text: "Několik desítek vteřin jednám spíš automaticky, než se znovu srovnám.", score: 2 },
        { text: "V řádu několika vteřin. Zastavím první impuls, zorientuji se a jednám.", score: 4 },
        { text: "Situace mě na chvíli vyhodí z provozu. Reaguji pozdě, zkratkovitě nebo chaoticky.", score: 1 },
        { text: "Chvíli cítím tlak, ale obvykle se rychle vrátím k věcnému postupu.", score: 3 }
      ]
    },
    {
      id: 2,
      text: "Co se stane s vaším vnímáním, když se tlak zvedne a přibývá podnětů?",
      options: [
        { text: "Držím hlavní problém, ale musím si vědomě hlídat okolnosti.", score: 3 },
        { text: "Vidím jen největší problém před sebou. Kontext, lidé a alternativy mizí.", score: 1 },
        { text: "Udržím hlavní cíl, lidi, prostor i rizika v jednom obrazu.", score: 4 },
        { text: "Zúžím pozornost na jednu věc a ostatní mi začíná unikat.", score: 2 }
      ]
    },
    {
      id: 3,
      text: "Když se na vás sesype více požadavků najednou, máte jasný způsob, jak určit pořadí reakcí?",
      options: [
        { text: "Spíš hasím to, co je nejhlasitější nebo nejviditelnější.", score: 2 },
        { text: "Nemám jasný postup. Situace mě zahltí a ztrácím pořadí kroků.", score: 1 },
        { text: "Ano. Řídím se prioritou dopadu, rizika a času.", score: 4 },
        { text: "Většinou ano, ale někdy přepínám podle toho, co nejvíc tlačí.", score: 3 }
      ]
    },
    {
      id: 4,
      text: "Když vás někdo vyprovokuje nebo zpochybní před ostatními, co rozhoduje o vaší odpovědi?",
      options: [
        { text: "Snažím se zůstat věcný, i když se mě to vnitřně dotkne.", score: 3 },
        { text: "Emoce převezme řízení a dopad řeším až později.", score: 1 },
        { text: "Cíl situace. Nejprve si hlídám výsledek, potom emoci.", score: 4 },
        { text: "Reaguji rychleji, ostřeji nebo osobněji, než je užitečné.", score: 2 }
      ]
    },
    {
      id: 5,
      text: "Jak se mění vaše komunikace, když tým, klient nebo kolega začne ztrácet klid?",
      options: [
        { text: "Můj tlak se přenáší na ostatní. Tón, tempo nebo podráždění situaci zhoršují.", score: 1 },
        { text: "Zpřesním sdělení, zpomalím tempo a držím věcný rámec.", score: 4 },
        { text: "Začnu komunikaci zkracovat, přeskakovat nebo přebírat věci na sebe.", score: 2 },
        { text: "Mluvím důrazněji, ale stále se snažím udržet směr.", score: 3 }
      ]
    },
    {
      id: 6,
      text: "Připravený plán selže. Jak rychle obnovíte schopnost rozhodovat podle nové reality?",
      options: [
        { text: "Potřebuji krátké ověření, co přesně selhalo, pak měním postup.", score: 3 },
        { text: "Zaseknu se v chybě, vysvětlování nebo hledání viníka.", score: 1 },
        { text: "Držím původní plán déle, než je praktické.", score: 2 },
        { text: "Rychle přepnu z obhajoby plánu na hledání další použitelné varianty.", score: 4 }
      ]
    },
    {
      id: 7,
      text: "Když se v napjaté situaci ukáže, že někdo jiný má lepší návrh než vy, co uděláte?",
      options: [
        { text: "Mám tendenci svůj postup bránit, i když už ztrácí účinnost.", score: 2 },
        { text: "Přijmu funkční řešení bez ohledu na to, od koho přišlo.", score: 4 },
        { text: "Beru to osobně a konflikt o pozici začne převažovat nad řešením.", score: 1 },
        { text: "Vnitřně mě to zasáhne, ale dokážu se vrátit k cíli.", score: 3 }
      ]
    },
    {
      id: 8,
      text: "Když nemáte dost informací, ale čekání zvyšuje riziko, jak reagujete?",
      options: [
        { text: "Odkládám rozhodnutí, protože chci ještě jistotu.", score: 2 },
        { text: "Rozhodnu podle priorit, dostupných dat a přijmu odpovědnost za další krok.", score: 4 },
        { text: "Nejistota mě blokuje a rozhodnutí přesouvám, oddaluji nebo nechávám na jiných.", score: 1 },
        { text: "Volím bezpečnější variantu, která omezuje největší škodu.", score: 3 }
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