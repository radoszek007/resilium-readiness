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
    text: "Když se situace náhle změní a všichni čekají na vaši reakci, jak rychle se vracíte k jasnému uvažování?",
    options: [
      {
        text: "V řádu několika vteřin. Zastavím první impuls, zorientuji se a jednám.",
        score: 4
      },
      {
        text: "Chvíli cítím tlak, ale obvykle se rychle vrátím k věcnému postupu.",
        score: 3
      },
      {
        text: "Několik desítek vteřin jednám spíš automaticky, než se znovu srovnám.",
        score: 2
      },
      {
        text: "Situace mě na chvíli vyhodí z provozu. Reaguji pozdě, zkratkovitě nebo chaoticky.",
        score: 1
      }
    ]
  },
  {
    id: 2,
    text: "Co se stane s vaším vnímáním, když se tlak zvedne a přibývá podnětů?",
    options: [
      {
        text: "Udržím hlavní cíl, lidi, prostor i rizika v jednom obrazu.",
        score: 4
      },
      {
        text: "Držím hlavní problém, ale musím si vědomě hlídat okolnosti.",
        score: 3
      },
      {
        text: "Zúžím pozornost na jednu věc a ostatní mi začíná unikat.",
        score: 2
      },
      {
        text: "Vidím jen největší problém před sebou. Kontext, lidé a alternativy mizí.",
        score: 1
      }
    ]
  },
  {
    id: 3,
    text: "Když se na vás sesype více požadavků najednou, máte jasný způsob, jak určit pořadí reakcí?",
    options: [
      {
        text: "Ano. Řídím se prioritou dopadu, rizika a času.",
        score: 4
      },
      {
        text: "Většinou ano, ale někdy přepínám podle toho, co nejvíc tlačí.",
        score: 3
      },
      {
        text: "Spíš hasím to, co je nejhlasitější nebo nejviditelnější.",
        score: 2
      },
      {
        text: "Nemám jasný postup. Situace mě zahltí a ztrácím pořadí kroků.",
        score: 1
      }
    ]
  },
  {
    id: 4,
    text: "Když vás někdo vyprovokuje nebo zpochybní před ostatními, co rozhoduje o vaší odpovědi?",
    options: [
      {
        text: "Cíl situace. Nejprve si hlídám výsledek, potom emoci.",
        score: 4
      },
      {
        text: "Snažím se zůstat věcný, i když se mě to vnitřně dotkne.",
        score: 3
      },
      {
        text: "Reaguji rychleji, ostřeji nebo osobněji, než je užitečné.",
        score: 2
      },
      {
        text: "Emoce převezme řízení a dopad řeším až později.",
        score: 1
      }
    ]
  },
  {
    id: 5,
    text: "Jak se mění vaše komunikace, když tým, klient nebo kolega začne ztrácet klid?",
    options: [
      {
        text: "Zpřesním sdělení, zpomalím tempo a držím věcný rámec.",
        score: 4
      },
      {
        text: "Mluvím důrazněji, ale stále se snažím udržet směr.",
        score: 3
      },
      {
        text: "Začnu komunikaci zkracovat, přeskakovat nebo přebírat věci na sebe.",
        score: 2
      },
      {
        text: "Můj tlak se přenáší na ostatní. Tón, tempo nebo podráždění situaci zhoršují.",
        score: 1
      }
    ]
  },
  {
    id: 6,
    text: "Připravený plán selže. Jak rychle obnovíte schopnost rozhodovat podle nové reality?",
    options: [
      {
        text: "Rychle přepnu z obhajoby plánu na hledání další použitelné varianty.",
        score: 4
      },
      {
        text: "Potřebuji krátké ověření, co přesně selhalo, pak měním postup.",
        score: 3
      },
      {
        text: "Držím původní plán déle, než je praktické.",
        score: 2
      },
      {
        text: "Zaseknu se v chybě, vysvětlování nebo hledání viníka.",
        score: 1
      }
    ]
  },
  {
    id: 7,
    text: "Když se v napjaté situaci ukáže, že někdo jiný má lepší návrh než vy, co uděláte?",
    options: [
      {
        text: "Přijmu funkční řešení bez ohledu na to, od koho přišlo.",
        score: 4
      },
      {
        text: "Vnitřně mě to zasáhne, ale dokážu se vrátit k cíli.",
        score: 3
      },
      {
        text: "Mám tendenci svůj postup bránit, i když už ztrácí účinnost.",
        score: 2
      },
      {
        text: "Beru to osobně a konflikt o pozici začne převažovat nad řešením.",
        score: 1
      }
    ]
  },
  {
    id: 8,
    text: "Když nemáte dost informací, ale čekání zvyšuje riziko, jak reagujete?",
    options: [
      {
        text: "Rozhodnu podle priorit, dostupných dat a přijmu odpovědnost za další krok.",
        score: 4
      },
      {
        text: "Volím bezpečnější variantu, která omezuje největší škodu.",
        score: 3
      },
      {
        text: "Odkládám rozhodnutí, protože chci ještě jistotu.",
        score: 2
      },
      {
        text: "Nejistota mě blokuje a rozhodnutí přesouvám, oddaluji nebo nechávám na jiných.",
        score: 1
      }
    ]
  }
];