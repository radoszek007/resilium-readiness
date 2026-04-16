export interface ResiliumProfile {
  title: string;
  description: string;
  risks: string[];
  recommendation: string;
  detailedAnalysis: string;
}

export const calculateResults = (totalScore: number): ResiliumProfile => {
  // Škála pro 10 otázek (Max 40 bodů)
  if (totalScore >= 34) {
    return {
      title: "Resilium Ready (Vzorová stabilita)",
      description: "Vykazujete mimořádnou kognitivní kontrolu. V kritických momentech nedochází k zahlcení pracovní paměti, což vám umožňuje provádět komplexní rozhodnutí pod palbou stresorů.",
      detailedAnalysis: "Vaše neurofyziologická odezva je charakteristická vysokou variabilitou srdečního tepu (HRV) a rychlou aktivací prefrontálního kortexu, který tlumí instinktivní panické reakce. V praxi to znamená, že vteřinová pauza mezi podnětem a reakcí je u vás dostatečně široká pro volbu optimálního řešení, nikoliv pouze reaktivního přežití.",
      risks: ["Kognitivní tunelování u známých úkolů", "Tendence k izolovanému rozhodování", "Vysoké nároky na kognitivní kapacitu podřízených"],
      recommendation: "Udržujte status quo pomocí pokročilých simulací s prvky 'překvapení'. Zaměřte se na delegování v krizi, aby vaše kognitivní kapacita nebyla vyčerpána mikro-managementem."
    };
  } else if (totalScore >= 24) {
    return {
      title: "Stabilní profesionál",
      description: "Pod tlakem fungujete spolehlivě, ale proces vnitřní stabilizace vás stojí značné množství metabolické energie.",
      detailedAnalysis: "Detekujeme funkční stabilitu s mírnou tendencí k reaktivitě při kumulaci více stresorů najednou. Vaše tělo vykazuje známky zvýšeného kortizolu, což při dlouhodobé expozici vede k tunelovému vidění. Dokážete situaci vyřešit, ale cena za tento výkon je vysoká míra post-incidentní únavy.",
      risks: ["Ztráta jemné motoriky při únavě", "Sklon k agresivní komunikaci pod tlakem", "Riziko rozhodovací paralýzy u neznámých scénářů"],
      recommendation: "Implementujte 'Tactical Breath' protokol ihned po detekci prvního stresoru. Cílem je udržet srdeční tep v zóně, kde zůstává zachována jemná motorika a komplexní myšlení (pod 145 BPM)."
    };
  } else {
    return {
      title: "Reaktivní status (Vysoké riziko)",
      description: "Vaše reakce jsou řízeny limbickým systémem. V kritickém momentě dochází k odpojení exekutivních funkcí mozku ve prospěch instinktů.",
      detailedAnalysis: "Analýza ukazuje na nízký práh pro 'amygdala hijack'. Jakmile zátěž překročí určitou mez, váš mozek přepne do režimu přežití (boj/útěk/strnutí). V tomto stavu nejste schopni vnímat širší kontext a vaše rozhodnutí jsou chaotická, což v operačním prostředí představuje vysoké bezpečnostní riziko.",
      risks: ["Úplná ztráta situačního povědomí", "Fyzické zamrznutí (Freeze)", "Ohrožení integrity týmu"],
      recommendation: "Nezbytný základní trénink v kontrolovaném prostředí. Musíte vybudovat 'neokortexové kotvy' – jednoduché, zautomatizované postupy, které provedete dříve, než vás stres zcela zahltí. Doporučujeme kurz Resilium Základy."
    };
  }
};