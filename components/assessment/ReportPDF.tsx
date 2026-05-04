"use client";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

Font.register({
  family: "RobotoBold",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#f57c15",
    paddingBottom: 15,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontFamily: "RobotoBold",
    color: "#3d5266",
    letterSpacing: 1,
  },
  mainTitle: {
    fontSize: 26,
    fontFamily: "RobotoBold",
    color: "#3d5266",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 9,
    color: "#f57c15",
    fontFamily: "RobotoBold",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingBottom: 10,
  },
  infoLabel: {
    width: 80,
    color: "#64748B",
    fontSize: 8,
    textTransform: "uppercase",
  },
  infoValue: {
    fontFamily: "RobotoBold",
    color: "#3d5266",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: "RobotoBold",
    fontSize: 12,
    color: "#3d5266",
    textTransform: "uppercase",
    marginBottom: 10,
    backgroundColor: "#F1F5F9",
    padding: 5,
  },
  contentBox: {
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#f57c15",
    backgroundColor: "#F8FAFC",
    marginBottom: 10,
  },
  methodologyTitle: {
    fontFamily: "RobotoBold",
    fontSize: 10,
    color: "#f57c15",
    marginTop: 15,
    marginBottom: 5,
  },
  highlightText: {
    fontFamily: "RobotoBold",
    color: "#3d5266",
  },
  bodyText: {
    textAlign: "justify",
    marginBottom: 8,
    color: "#334155",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 0.5,
    borderTopColor: "#CBD5E1",
    paddingTop: 10,
    fontSize: 7,
    color: "#94A3B8",
    textAlign: "center",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 40,
    fontSize: 8,
    color: "#94A3B8",
  },
});

const pdfTranslations = {
  cs: {
    auditTitle: "Audit připravenosti jednat pod tlakem",
    client: "Klient",
    organization: "Organizace",
    individualAudit: "Individuální audit",
    profile: "1. Diagnostický profil:",
    impact: "2. Dopad v praxi",
    impactDesc: "Výsledek ukazuje, jak pravděpodobně reagujete ve chvíli, kdy se zvyšuje tlak, přibývá podnětů a rozhodování musí proběhnout bez ideálních podmínek. Readiness Index není lékařské ani psychologické vyšetření. Slouží jako praktický orientační nástroj pro práci s reakcí, komunikací a rozhodováním v zátěži.",
    strategy: "3. Strategické doporučení",
    confidential: "Důvěrné - Určeno pouze pro vnitřní potřebu klienta.",
    methodology: "Metodický rámec Resilium Readiness",
    meth1Title: "Tlak mění kvalitu reakce",
    meth1Desc: "Resilium vychází z jednoduchého principu: v zátěži nestačí vědět, co by měl člověk udělat. Rozhodující je, zda si k této schopnosti dokáže udržet přístup i ve chvíli, kdy se mění dech, napětí v těle, pozornost, emoce a vnímání rizika.",
    meth2Title: "První reakce rozhoduje o dalším vývoji",
    meth2Desc: "Audit sleduje zejména schopnost zastavit první impuls, obnovit orientaci a přejít k použitelnému postupu. Krátká prodleva mezi podnětem a reakcí není pasivita. Je to prostor, ve kterém vzniká kvalitnější rozhodnutí.",
    meth3Title: "Protokol místo improvizace",
    meth3Desc: "Bez trénovaného postupu člověk často spoléhá na návyk, temperament nebo momentální energii. To může stačit v běžném provozu, ale v zátěži se výkon stává nestabilním. Cílem Resilia je vytvořit jednoduché a opakovatelné reakční protokoly použitelné v reálných situacích.",
    domainsTitle: "Domény auditu",
    domainsIntro: "Váš Readiness Index skóre {score}/32 odráží odpovědi v několika klíčových oblastech:",
    d1: "První reakce:", d1d: "Jak rychle se vracíte k jasnému uvažování po náhlém narušení.",
    d2: "Orientace:", d2d: "Jak dobře udržujete přehled, když roste tlak a přibývá podnětů.",
    d3: "Priority:", d3d: "Jak určujete pořadí kroků, když vše vypadá naléhavě.",
    d4: "Kontrola impulsu:", d4d: "Jak zvládáte provokaci, zpochybnění nebo emoční tlak.",
    d5: "Komunikace:", d5d: "Jak váš tón, tempo a způsob vedení ovlivňuje ostatní pod tlakem.",
    d6: "Adaptace:", d6d: "Jak rychle obnovíte rozhodování, když původní plán přestane fungovat.",
    d7: "Ego a zpětná vazba:", d7d: "Jak dobře oddělujete osobní pozici od funkčního řešení.",
    d8: "Rozhodování:", d8d: "Jak jednáte ve chvíli, kdy informace nejsou úplné a čekání zvyšuje riziko.",
    disclaimerTitle: "Závěrečné upozornění:",
    disclaimer: "Výsledky tohoto auditu vycházejí ze sebehodnotícího schématu. Nejde o klinickou diagnostiku, psychologické vyšetření ani garantovanou predikci chování v krizové situaci. Výstup slouží jako praktický podklad pro rozhodnutí, zda má smysl navázat cíleným tréninkem reakce, komunikace a rozhodování pod tlakem.",
    footerText: "Resilium - Profesionální trénink stability a rozhodování pod tlakem. Více na www.resilium.cz"
  },
  pl: {
    auditTitle: "Audyt gotowości do działania pod presją",
    client: "Klient",
    organization: "Organizacja",
    individualAudit: "Audyt indywidualny",
    profile: "1. Profil diagnostyczny:",
    impact: "2. Wpływ w praktyce",
    impactDesc: "Wynik pokazuje, jak prawdopodobnie reagujesz w momencie, gdy wzrasta presja, przybywa bodźców, a decyzje muszą być podejmowane bez idealnych warunków. Indeks Gotowości nie jest badaniem medycznym ani psychologicznym. Służy jako praktyczne narzędzie orientacyjne do pracy z reakcją, komunikacją i podejmowaniem decyzji pod obciążeniem.",
    strategy: "3. Rekomendacja strategiczna",
    confidential: "Poufne - Przeznaczone wyłącznie do użytku wewnętrznego klienta.",
    methodology: "Ramy metodologiczne Resilium Readiness",
    meth1Title: "Presja zmienia jakość reakcji",
    meth1Desc: "Resilium opiera się na prostej zasadzie: pod obciążeniem nie wystarczy wiedzieć, co należy zrobić. Decydujące jest to, czy dana osoba potrafi utrzymać dostęp do tej umiejętności nawet wtedy, gdy zmienia się oddech, napięcie w ciele, uwaga, emocje i postrzeganie ryzyka.",
    meth2Title: "Pierwsza reakcja decyduje o dalszym rozwoju",
    meth2Desc: "Audyt monitoruje przede wszystkim zdolność do zatrzymania pierwszego impulsu, odzyskania orientacji i przejścia do użytecznej procedury. Krótkie opóźnienie między bodźcem a reakcją nie jest biernością. To przestrzeń, w której powstaje decyzja o wyższej jakości.",
    meth3Title: "Protokół zamiast improwizacji",
    meth3Desc: "Bez wytrenowanej procedury człowiek często polega na nawyku, temperamencie lub chwilowej energii. Może to wystarczyć w normalnym trybie pracy, ale pod obciążeniem wydajność staje się niestabilna. Celem Resilium jest stworzenie prostych i powtarzalnych protokołów reakcji, które można zastosować w rzeczywistych sytuacjach.",
    domainsTitle: "Domeny audytu",
    domainsIntro: "Twój wynik Indeksu Gotowości {score}/32 odzwierciedla odpowiedzi w kilku kluczowych obszarach:",
    d1: "Pierwsza reakcja:", d1d: "Jak szybko wracasz do jasnego myślenia po nagłym zakłóceniu.",
    d2: "Orientacja:", d2d: "Jak dobrze utrzymujesz orientację, gdy rośnie presja i przybywa bodźców.",
    d3: "Priorytety:", d3d: "Jak ustalasz kolejność kroków, gdy wszystko wydaje się pilne.",
    d4: "Kontrola impulsów:", d4d: "Jak radzisz sobie z prowokacją, kwestionowaniem lub presją emocjonalną.",
    d5: "Komunikacja:", d5d: "Jak Twój ton, tempo i sposób przewodzenia wpływają na innych pod presją.",
    d6: "Adaptacja:", d6d: "Jak szybko wznawiasz podejmowanie decyzji, gdy pierwotny plan przestaje działać.",
    d7: "Ego i informacja zwrotna:", d7d: "Jak dobrze oddzielasz osobiste stanowisko od funkcjonalnego rozwiązania.",
    d8: "Podejmowanie decyzji:", d8d: "Jak działasz w sytuacji, gdy informacje są niekompletne, a oczekiwanie zwiększa ryzyko.",
    disclaimerTitle: "Uwaga końcowa:",
    disclaimer: "Wyniki tego audytu opierają się na schemacie samooceny. Nie jest to diagnoza kliniczna, badanie psychologiczne ani gwarantowana prognoza zachowania w sytuacji kryzysowej. Wynik służy jako praktyczna podstawa do podjęcia decyzji, czy warto kontynuować ukierunkowanym treningiem reakcji, komunikacji i podejmowania decyzji pod presją.",
    footerText: "Resilium - Profesjonalny trening stabilności i podejmowania decyzji pod presją. Więcej na www.resilium.cz"
  }
};

interface ReportPDFProps {
  profile: {
    title: string;
    description: string;
    impact: string;
    nextStep: string;
    program: string;
    zone?: "green" | "yellow" | "red";
    zoneLabel?: string;
    percentage?: number;
  };
  userName: string;
  company?: string;
  score: number;
  language?: "cs" | "pl";
}

export default function ReportPDF({
  profile,
  userName,
  company,
  score,
  language = "cs"
}: ReportPDFProps) {
  const t = pdfTranslations[language];

  return (
    <Document title={`Resilium Audit - ${userName}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM®</Text>
          <View style={{ textAlign: "right" }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "RobotoBold",
                color: "#f57c15",
              }}
            >
              {score} / 32
            </Text>
            <Text style={{ fontSize: 7, color: "#64748B" }}>
              READINESS INDEX
            </Text>
          </View>
        </View>

        <Text style={styles.subTitle}>
          {t.auditTitle}
        </Text>

        <View style={styles.infoRow}>
          <View style={{ width: "50%" }}>
            <Text style={styles.infoLabel}>{t.client}</Text>
            <Text style={styles.infoValue}>{userName}</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.infoLabel}>{t.organization}</Text>
            <Text style={styles.infoValue}>
              {company || t.individualAudit}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t.profile} {profile.title}
          </Text>
          <View style={styles.contentBox}>
            <Text style={styles.bodyText}>{profile.description}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.impact}</Text>
          <Text style={styles.bodyText}>{profile.impact}</Text>
          <Text style={styles.bodyText}>
            {t.impactDesc}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.strategy}</Text>
          <View
            style={{
              backgroundColor: "#3d5266",
              padding: 15,
              borderRadius: 2,
            }}
          >
            <Text style={{ color: "#FFFFFF", marginBottom: 10 }}>
              {profile.nextStep}
            </Text>
            <Text
              style={{
                color: "#f57c15",
                fontFamily: "RobotoBold",
                fontSize: 11,
              }}
            >
              {profile.program}
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          {t.confidential} © 2026 Resilium
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber}`}
        />
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM® METHODOLOGY</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t.methodology}
          </Text>

          <Text style={styles.methodologyTitle}>
            {t.meth1Title}
          </Text>
          <Text style={styles.bodyText}>
            {t.meth1Desc}
          </Text>

          <Text style={styles.methodologyTitle}>
            {t.meth2Title}
          </Text>
          <Text style={styles.bodyText}>
            {t.meth2Desc}
          </Text>

          <Text style={styles.methodologyTitle}>
            {t.meth3Title}
          </Text>
          <Text style={styles.bodyText}>
            {t.meth3Desc}
          </Text>

          <Text style={styles.methodologyTitle}>{t.domainsTitle}</Text>
          <Text style={styles.bodyText}>
            {t.domainsIntro.replace("{score}", score.toString())}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d1}</Text> {t.d1d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d2}</Text> {t.d2d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d3}</Text> {t.d3d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d4}</Text> {t.d4d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d5}</Text> {t.d5d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d6}</Text> {t.d6d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d7}</Text> {t.d7d}
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>{t.d8}</Text> {t.d8d}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            padding: 15,
            borderTopWidth: 1,
            borderTopColor: "#f57c15",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#3d5266",
              marginBottom: 5,
            }}
          >
            {t.disclaimerTitle}
          </Text>
          <Text style={{ fontSize: 8, color: "#64748B" }}>
            {t.disclaimer}
          </Text>
        </View>

        <Text style={styles.footer}>
          {t.footerText}
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber}`}
        />
      </Page>
    </Document>
  );
}