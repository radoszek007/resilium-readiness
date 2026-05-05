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
    d1: "Narušení plánu:", d1d: "Vaše reakce v prvních sekundách po náhlé změně situace.",
    d2: "Práce s pozorností:", d2d: "Jak se mění vaše vnímání okolí při zvýšeném počtu požadavků a zkrácení termínů.",
    d3: "Určování priorit v zátěži:", d3d: "Podle čeho volíte pořadí reakcí, když se sejde více naléhavých požadavků najednou.",
    d4: "Reakce na kritiku:", d4d: "Co je hlavním motorem vaší okamžité odpovědi při veřejném zpochybnění postupu.",
    d5: "Změna komunikačního stylu:", d5d: "Jak se mění váš způsob mluvy, když okolí začne pod vlivem stresu ztrácet klid.",
    d6: "Adaptace na selhání:", d6d: "Jak se dokážete adaptovat a reagovat na novou realitu, když připravený postup selže.",
    d7: "Přijetí cizího řešení:", d7d: "Jak reagujete, když někdo jiný přijde s lepším návrhem uprostřed řešení problému.",
    d8: "Rozhodování v nejistotě:", d8d: "Jak postupujete, když musíte udělat zásadní krok, ale nemáte kompletní informace.",
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
    d1: "Zakłócenie planu:", d1d: "Twoja reakcja w pierwszych sekundach po nagłej zmianie sytuacji.",
    d2: "Zarządzanie uwagą:", d2d: "Jak zmienia się Twoje postrzeganie otoczenia przy zwiększonej liczbie żądań i skróceniu terminów.",
    d3: "Ustalanie priorytetów pod presją:", d3d: "Na jakiej podstawie wybierasz kolejność reakcji, gdy pojawia się wiele pilnych żądań jednocześnie.",
    d4: "Reakcja na krytykę:", d4d: "Co jest głównym motorem Twojej natychmiastowej odpowiedzi w przypadku publicznego zakwestionowania Twoich działań.",
    d5: "Zmiana stylu komunikacji:", d5d: "Jak zmienia się Twój sposób mówienia, gdy otoczenie zaczyna tracić spokój pod wpływem stresu.",
    d6: "Adaptacja do porażki:", d6d: "Jak dostosowujesz się i reagujesz na nową rzeczywistość, gdy przygotowany plan zawodzi.",
    d7: "Akceptacja cudzego rozwiązania:", d7d: "Jak reagujesz, gdy w trakcie rozwiązywania kryzysu ktoś inny proponuje lepszy pomysł.",
    d8: "Podejmowanie decyzji w warunkach niepewności:", d8d: "Jak postępujesz, gdy musisz podjąć kluczowy krok, a nie masz pełnych informacji.",
    disclaimerTitle: "Uwaga końcowa:",
    disclaimer: "Wyniki tego audytu opierają się na schemacie samooceny. Nie jest to diagnoza kliniczna, badanie psychologiczne ani gwarantowana prognoza zachowania w sytuacji kryzysowej. Wynik służy jako praktyczna podstawa do podjęcia decyzji, czy warto kontynuować ukierunkowanym treningiem reakcji, komunikacji i podejmowania decyzji pod presją.",
    footerText: "Resilium - Profesjonalny trening stabilności i podejmowania decyzji pod presją. Więcej na www.resilium.cz"
  },
  en: {
    auditTitle: "Readiness to Act Under Pressure Audit",
    client: "Client",
    organization: "Organization",
    individualAudit: "Individual Audit",
    profile: "1. Diagnostic Profile:",
    impact: "2. Impact in Practice",
    impactDesc: "The result shows how you are likely to react when pressure rises, stimuli increase, and decisions must be made without ideal conditions. The Readiness Index is not a medical or psychological examination. It serves as a practical orientation tool for working with reaction, communication, and decision-making under load.",
    strategy: "3. Strategic Recommendation",
    confidential: "Confidential - For internal use by the client only.",
    methodology: "Resilium Readiness Methodology Framework",
    meth1Title: "Pressure changes the quality of reaction",
    meth1Desc: "Resilium is based on a simple principle: under load, it is not enough to know what one should do. The deciding factor is whether a person can maintain access to this ability even when their breath, body tension, attention, emotions, and risk perception change.",
    meth2Title: "The first reaction determines further development",
    meth2Desc: "The audit primarily monitors the ability to stop the first impulse, restore orientation, and transition to a usable procedure. A short delay between stimulus and reaction is not passivity. It is the space where a higher quality decision is formed.",
    meth3Title: "Protocol instead of improvisation",
    meth3Desc: "Without a trained procedure, a person often relies on habit, temperament, or momentary energy. This may suffice in normal operations, but under load, performance becomes unstable. The goal of Resilium is to create simple and repeatable reaction protocols applicable in real situations.",
    domainsTitle: "Audit Domains",
    domainsIntro: "Your Readiness Index score of {score}/32 reflects answers in several key areas:",
    d1: "Plan Disruption:", d1d: "Your reaction in the first seconds following a sudden change in the situation.",
    d2: "Attention Management:", d2d: "How your perception of the surroundings changes when requests increase and deadlines shorten.",
    d3: "Prioritizing Under Pressure:", d3d: "How you determine the order of your reactions when faced with multiple urgent requests at once.",
    d4: "Reaction to Criticism:", d4d: "What drives your immediate response when a colleague or client publicly questions your approach.",
    d5: "Change in Communication Style:", d5d: "How your way of speaking changes when the team or surroundings start losing their calm under stress.",
    d6: "Adaptation to Failure:", d6d: "How you adapt and react to a new reality when a prepared procedure fails.",
    d7: "Accepting an Alternative Solution:", d7d: "How you react when someone else comes up with a better proposal in the middle of solving a crisis.",
    d8: "Decision-making in Uncertainty:", d8d: "How you proceed when you have to take a major step but lack complete information.",
    disclaimerTitle: "Final notice:",
    disclaimer: "The results of this audit are based on a self-assessment framework. It is not a clinical diagnosis, psychological examination, or guaranteed prediction of behavior in a crisis situation. The output serves as a practical basis for deciding whether it makes sense to follow up with targeted training of reaction, communication, and decision-making under pressure.",
    footerText: "Resilium - Professional training for stability and decision-making under pressure. More at www.resilium.cz"
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
  language?: "cs" | "pl" | "en";
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