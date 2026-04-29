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

export function calculateResults(score: number): ReadinessResult {
  const maxScore = 32;
  const percentage = Math.round((score / maxScore) * 100);

  if (score >= 27) {
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
      percentage
    };
  }

  if (score >= 19) {
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
      percentage
    };
  }

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
    percentage
  };
}

export function getReadinessLevel(score: number): ReadinessResult {
  return calculateResults(score);
}