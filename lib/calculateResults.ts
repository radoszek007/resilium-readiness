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

export function calculateResults(score: number, lang: "cs" | "pl" = "cs"): ReadinessResult {
  const maxScore = 32;
  const percentage = Math.round((score / maxScore) * 100);

  if (score >= 27) {
    return lang === "cs"
      ? {
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
        }
      : {
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
  }

  if (score >= 19) {
    return lang === "cs"
      ? {
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
        }
      : {
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
  }

  return lang === "cs"
    ? {
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
      }
    : {
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
}

export function getReadinessLevel(score: number, lang: "cs" | "pl" = "cs"): ReadinessResult {
  return calculateResults(score, lang);
}