export interface ReadinessResult {
  title: string;
  description: string;
  impact: string;
  nextStep: string;
  program: string;
  zone: "green" | "yellow" | "red";
  zoneLabel: string;
  percentage: number;
}

export function calculateResults(score: number, lang: "cs" | "pl" | "en" = "cs"): ReadinessResult {
  const maxScore = 32;
  const percentage = Math.round((score / maxScore) * 100);

  if (score >= 27) {
    if (lang === "cs") {
      return {
          title: "Funkční reakce pod tlakem",
          description:
            "Vaše odpovědi ukazují dobrou schopnost obnovit jasné uvažování, udržet orientaci a rozhodovat i při zvýšené zátěži.",
          impact:
            "V praxi pravděpodobně dokážete držet směr i ve chvíli, kdy ostatní ztrácejí klid. Rizikem této úrovně bývá falešná jistota: při vyšší intenzitě tlaku, časové tísni nebo odpovědnosti za tým se mohou objevit slabá místa, která běžný provoz neodhalí.",
          nextStep:
            "Doporučujeme ověřit vaše reakce ve scénářovém tréninku. Cílem není začínat od nuly, ale zpevnit rozhodování, komunikaci a reakce v komplexnějších situacích.",
          program: "Doporučený program: Resilium Advanced",
          zone: "green",
          zoneLabel: "Zelená zóna",
          percentage,
      };
    } else if (lang === "pl") {
      return {
          title: "Funkcjonalna reakcja pod presją",
          description:
            "Twoje odpowiedzi wskazują na dobrą zdolność do odzyskiwania jasności myślenia, utrzymywania orientacji i podejmowania decyzji nawet przy zwiększonym obciążeniu.",
          impact:
            "W praktyce prawdopodobnie potrafisz utrzymać obrany kierunek, nawet gdy inni tracą spokój. Ryzykiem na tym poziomie jest często fałszywe poczucie bezpieczeństwa: przy wyższej intensywności presji, presji czasu lub odpowiedzialności za zespół mogą pojawić się słabe punkty, których codzienne działanie nie ujawnia.",
          nextStep:
            "Zalecamy zweryfikowanie Twoich reakcji podczas treningu opartego na scenariuszach. Celem nie jest zaczynanie od zera, ale wzmocnienie procesu podejmowania decyzji, komunikacji i reakcji w bardziej złożonych sytuacjach.",
          program: "Rekomendowany program: Resilium Advanced",
          zone: "green",
          zoneLabel: "Zielona strefa",
          percentage,
      };
    } else {
      return {
          title: "Functional Reaction Under Pressure",
          description:
            "Your answers show a good ability to restore clear thinking, maintain orientation, and make decisions even under increased load.",
          impact:
            "In practice, you can likely hold your course even when others lose their calm. The risk at this level is often false confidence: at higher pressure intensity, time constraints, or team responsibility, weak spots may appear that normal operations don't reveal.",
          nextStep:
            "We recommend verifying your reactions in scenario-based training. The goal isn't to start from scratch, but to solidify decision-making, communication, and reactions in more complex situations.",
          program: "Recommended program: Resilium Advanced",
          zone: "green",
          zoneLabel: "Green zone",
          percentage,
      };
    }
  }

  if (score >= 19) {
    if (lang === "cs") {
      return {
          title: "Nestabilní výkon v zátěži",
          description:
            "Vaše odpovědi ukazují, že v běžných podmínkách pravděpodobně fungujete dobře, ale při vyšším tlaku může docházet ke zúžení pozornosti, zpomalení rozhodování nebo přenosu stresu do komunikace.",
          impact:
            "Toto je nejčastější profil. Člověk ví, co by měl dělat, ale v ostré chvíli se kvalita reakce mění. Výkon začne kolísat: někdy rozhodnete dobře, jindy přepnete do improvizace, zkratky nebo snahy vše vyřešit silou vůle.",
          nextStep:
            "Doporučujeme základní trénink stabilizace, orientace a rozhodování pod tlakem. Cílem je vytvořit jednoduchý použitelný protokol, který se dá spustit i ve chvíli, kdy roste stres.",
          program: "Doporučený program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Žlutá zóna",
          percentage,
      };
    } else if (lang === "pl") {
      return {
          title: "Niestabilna wydajność pod obciążeniem",
          description:
            "Twoje odpowiedzi wskazują, że w normalnych warunkach prawdopodobnie funkcjonujesz dobrze, ale przy większej presji może dojść do zawężenia uwagi, spowolnienia podejmowania decyzji lub przenoszenia stresu na komunikację.",
          impact:
            "Jest to najczęstszy profil. Człowiek wie, co powinien zrobić, ale w kluczowym momencie jakość reakcji ulega zmianie. Wydajność zaczyna się wahać: czasem podejmujesz dobre decyzje, innym razem przechodzisz do improwizacji, skrótów lub próbujesz rozwiązać wszystko siłą woli.",
          nextStep:
            "Zalecamy podstawowy trening stabilizacji, orientacji i podejmowania decyzji pod presją. Celem jest stworzenie prostego, użytecznego protokołu, który można uruchomić nawet wtedy, gdy rośnie stres.",
          program: "Rekomendowany program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Żółta strefa",
          percentage,
      };
    } else {
      return {
          title: "Unstable Performance Under Load",
          description:
            "Your answers show that you likely function well under normal conditions, but under higher pressure, you may experience narrowed attention, slowed decision-making, or transfer of stress to communication.",
          impact:
            "This is the most common profile. You know what you should do, but in the heat of the moment, the quality of your reaction changes. Performance starts to fluctuate: sometimes you decide well, other times you switch to improvisation, shortcuts, or trying to solve everything with willpower.",
          nextStep:
            "We recommend basic training in stabilization, orientation, and decision-making under pressure. The goal is to create a simple, usable protocol that can be triggered even when stress rises.",
          program: "Recommended program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Yellow zone",
          percentage,
      };
    }
  }

  if (lang === "cs") {
    return {
        title: "Riziko ztráty rozhodovací kapacity pod tlakem",
        description:
          "Vaše odpovědi ukazují zvýšené riziko zahlcení, impulzivní reakce nebo rozhodovacího zablokování ve chvíli, kdy situace vyžaduje klidný a funkční postup.",
        impact:
          "V praxi to může znamenat, že pod tlakem ztrácíte přístup ke svým běžným schopnostem. Nejde nutně o nedostatek znalostí. Problém je v tom, že ve chvíli vysoké zátěže se tělo, pozornost a rozhodování mohou rozjet různými směry.",
        nextStep:
          "Doporučujeme cílenou konzultaci a návrh tréninku zaměřeného na první reakci, stabilitu, rozhodování a komunikaci v zátěži. V této úrovni nestačí další informace. Je potřeba praktický nácvik reakce.",
        program: "Doporučený program: Resilium Pro",
        zone: "red",
        zoneLabel: "Červená zóna",
        percentage,
    };
  } else if (lang === "pl") {
    return {
        title: "Ryzyko utraty zdolności decyzyjnych pod presją",
        description:
          "Twoje odpowiedzi wskazują na podwyższone ryzyko przytłoczenia, impulsywnych reakcji lub blokady decyzyjnej w momencie, gdy sytuacja wymaga spokojnego i funkcjonalnego podejścia.",
        impact:
          "W praktyce może to oznaczać, że pod presją tracisz dostęp do swoich standardowych umiejętności. Nie chodzi tu koniecznie o brak wiedzy. Problem polega na tym, że w momencie dużego obciążenia ciało, uwaga i proces podejmowania decyzji mogą podążać w różnych kierunkach.",
        nextStep:
          "Zalecamy ukierunkowaną konsultację i propozycję treningu skupionego na pierwszej reakcji, stabilności, podejmowaniu decyzji i komunikacji pod obciążeniem. Na tym poziomie same informacje to za mało. Konieczny jest praktyczny trening reakcji.",
        program: "Rekomendowany program: Resilium Pro",
        zone: "red",
        zoneLabel: "Czerwona strefa",
        percentage,
    };
  } else {
    return {
        title: "Risk of Losing Decision Capacity Under Pressure",
        description:
          "Your answers show an increased risk of being overwhelmed, impulsive reactions, or decision-making blocks when the situation requires a calm and functional approach.",
        impact:
          "In practice, this can mean losing access to your normal abilities under pressure. It's not necessarily a lack of knowledge. The problem is that under high load, the body, attention, and decision-making can go in different directions.",
        nextStep:
          "We recommend a targeted consultation and a training proposal focused on first reaction, stability, decision-making, and communication under load. At this level, more information isn't enough. Practical reaction training is required.",
        program: "Recommended program: Resilium Pro",
        zone: "red",
        zoneLabel: "Red zone",
        percentage,
    };
  }
}

export function getReadinessLevel(score: number, lang: "cs" | "pl" | "en" = "cs"): ReadinessResult {
  return calculateResults(score, lang);
}