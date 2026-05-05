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
          title: "Stabilní reakce",
          description:
            "Zachování funkčnosti pod tlakem. Vaše odpovědi naznačují, že i při vysoké zátěži si zachováváte přístup k racionálnímu uvažování. Dokážete oddělit emoce od úkolu. Vaše rozhodování je konzistentní a komunikace věcná.",
          impact:
            "Pravděpodobně stabilizujete své okolí. Rizikem je pouze falešná jistota v extrémních situacích, které jste dosud nezažil/a.",
          nextStep:
            "Doporučujeme ověřit reakce ve scénářovém tréninku pro upevnění protokolů v komplexních krizích.",
          program: "Doporučený program: Resilium Advanced",
          zone: "green",
          zoneLabel: "Zelená zóna",
          percentage,
      };
    } else if (lang === "pl") {
      return {
          title: "Stabilna reakcja",
          description:
            "Utrzymanie funkcjonalności pod presją. Twoje odpowiedzi wskazują, że nawet przy dużym obciążeniu zachowujesz dostęp do racjonalnego myślenia. Potrafisz oddzielić emocje od zadania. Twoje podejmowanie decyzji jest spójne, a komunikacja rzeczowa.",
          impact:
            "Prawdopodobnie stabilizujesz swoje otoczenie. Ryzykiem jest jedynie fałszywa pewność siebie w ekstremalnych sytuacjach, których jeszcze nie doświadczyłeś/aś.",
          nextStep:
            "Zalecamy zweryfikowanie reakcji podczas treningu opartego na scenariuszach w celu utrwalenia protokołów w złożonych kryzysach.",
          program: "Rekomendowany program: Resilium Advanced",
          zone: "green",
          zoneLabel: "Zielona strefa",
          percentage,
      };
    } else {
      return {
          title: "Stable Reaction",
          description:
            "Maintaining functionality under pressure. Your answers suggest that even under high load, you maintain access to rational thinking. You can separate emotions from the task. Your decision-making is consistent and your communication is objective.",
          impact:
            "You likely stabilize your surroundings. The only risk is false confidence in extreme situations you haven't experienced yet.",
          nextStep:
            "We recommend verifying your reactions in scenario-based training to consolidate protocols in complex crises.",
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
          title: "Kolísavá stabilita",
          description:
            "Výkon závislý na intenzitě zátěže. V běžném provozu reagujete stabilně. Pokud se však sejde více stresových faktorů najednou, vaše efektivita klesá. Dochází k zúžení pozornosti nebo k přenosu napětí do komunikace.",
          impact:
            "Výkon je proměnlivý. Vědomě víte, jak jednat, ale v reálné zátěži se vaše reakce stávají méně předvídatelnými a sklouzáváte k improvizaci.",
          nextStep:
            "Vhodný je trénink základních stabilizačních technik a vytvoření jednoduchých reakčních schémat.",
          program: "Doporučený program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Žlutá zóna",
          percentage,
      };
    } else if (lang === "pl") {
      return {
          title: "Zmienna stabilność",
          description:
            "Wydajność zależna od intensywności obciążenia. W normalnych warunkach reagujesz stabilnie. Jeśli jednak nałoży się na siebie kilka czynników stresogennych, Twoja efektywność spada. Dochodzi do zawężenia uwagi lub przeniesienia napięcia na komunikację.",
          impact:
            "Wydajność jest zmienna. Świadomie wiesz, jak działać, ale w warunkach rzeczywistego obciążenia Twoje reakcje stają się mniej przewidywalne i uciekasz się do improwizacji.",
          nextStep:
            "Odpowiedni będzie trening podstawowych technik stabilizacji oraz stworzenie prostych schematów reagowania.",
          program: "Rekomendowany program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Żółta strefa",
          percentage,
      };
    } else {
      return {
          title: "Fluctuating Stability",
          description:
            "Performance dependent on load intensity. In normal operations, you react stably. However, when multiple stress factors combine, your efficiency drops. This leads to narrowed attention or transferring tension into communication.",
          impact:
            "Performance is variable. You consciously know how to act, but under real load, your reactions become less predictable and you slip into improvisation.",
          nextStep:
            "We recommend training in basic stabilization techniques and creating simple reaction schemas.",
          program: "Recommended program: Resilium Start",
          zone: "yellow",
          zoneLabel: "Yellow zone",
          percentage,
      };
    }
  }

  if (lang === "cs") {
    return {
        title: "Nízká tolerance k zátěži",
        description:
          "Riziko ztráty kontroly nad reakcí. Na zátěžové podněty reagujete citlivě. Při tlaku dochází k potlačení logického uvažování ve prospěch automatických reakcí (útěk, útok nebo ustrnutí).",
        impact:
          "Pod tlakem ztrácíte přístup ke svým schopnostem a znalostem. Situace vás snadno zahltí, což vede k rozhodovací paralýze nebo impulzivním chybám.",
        nextStep:
          "Doporučujeme individuální konzultaci a praktický nácvik první reakce a práce s pozorností v zátěži.",
        program: "Doporučený program: Resilium Pro",
        zone: "red",
        zoneLabel: "Červená zóna",
        percentage,
    };
  } else if (lang === "pl") {
    return {
        title: "Niska tolerancja na obciążenie",
        description:
          "Ryzyko utraty kontroli nad reakcją. Wrażliwie reagujesz na bodźce stresowe. Pod presją logiczne myślenie zostaje wyparte na rzecz automatycznych reakcji (walka, ucieczka lub zamrożenie).",
        impact:
          "Pod presją tracisz dostęp do swoich umiejętności i wiedzy. Sytuacja łatwo Cię przytłacza, co prowadzi do paraliżu decyzyjnego lub impulsywnych błędów.",
        nextStep:
          "Zalecamy indywidualną konsultację oraz praktyczny trening pierwszej reakcji i pracy z uwagą pod obciążeniem.",
        program: "Rekomendowany program: Resilium Pro",
        zone: "red",
        zoneLabel: "Czerwona strefa",
        percentage,
    };
  } else {
    return {
        title: "Low Tolerance to Pressure",
        description:
          "Risk of losing control over the reaction. You react sensitively to stress stimuli. Under pressure, logical reasoning is suppressed in favor of automatic reactions (fight, flight, or freeze).",
        impact:
          "Under pressure, you lose access to your abilities and knowledge. Situations easily overwhelm you, leading to decision paralysis or impulsive mistakes.",
        nextStep:
          "We recommend an individual consultation and practical training of the first reaction and attention management under pressure.",
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