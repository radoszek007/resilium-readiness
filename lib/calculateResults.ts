export interface ResiliumProfile {
  title: string;
  description: string;
  impact: string;
  nextStep: string;
  program: string;
}

export const calculateResults = (totalScore: number): ResiliumProfile => {
  // Škála pro 8 otázek (Max 32 bodů)
  if (totalScore >= 26) {
    return {
      title: "Stabilní pod tlakem",
      description: "Dokážete udržet nadhled i ve chvíli, kdy ostatní ztrácejí orientaci. Vaše schopnost odložit první impulz a vnímat souvislosti je pro tým vzácná stabilizační síla. Snižujete pravděpodobnost zbytečné eskalace a komunikačních chyb.",
      impact: "V konfliktní situaci fungujete jako přirozená kotva. Vaše stabilita brání šíření nervozity a udržuje efektivitu okolí.",
      nextStep: "I špičkový systém potřebuje údržbu. Zaměřte se na techniky mikrodoplnění energie, abyste předešli kognitivnímu vyhoření.",
      program: "Vhodný program: Resilium Advance nebo Pro"
    };
  } else if (totalScore >= 18) {
    return {
      title: "Výkonný, ale reaktivní",
      description: "Pod tlakem situace zvládáte, ale za cenu vysokého vnitřního napětí. Vaše reaktivita se nenápadně přenáší na okolí, což může u týmu vyvolávat váhavost nebo strach z chyby.",
      impact: "Pravděpodobně neztrácíte motivaci, ale spíše klid a schopnost efektivní prioritizace. Tým od vás přebírá nervozitu, což zvyšuje riziko chyb.",
      nextStep: "Potřebujete zkrátit dobu návratu do klidového stavu. Vaším cílem je trénink první reakce pro snížení metabolické daně za váš výkon.",
      program: "Vhodný program: Resilium Start"
    };
  } else {
    return {
      title: "Přetížená reakce",
      description: "Pod tlakem se vám zhoršuje přístup k vlastním schopnostem právě ve chvíli, kdy je nejvíc potřebujete. Stres u vás dominuje nad záměrem, což vede k nechtěné impulzivitě nebo paralýze.",
      impact: "Tohle není otázka charakteru, ale chybějícího tréninku stability. V krizové situaci pravděpodobně neřešíte primární úkol, ale bojujete s vlastní fyziologií.",
      nextStep: "Prvním krokem je stabilizace první reakce pomocí Protokolu 10 sekund. Bez tohoto základu nemá smysl řešit vyšší patra výkonu.",
      program: "Vhodný program: Resilium Start"
    };
  }
};