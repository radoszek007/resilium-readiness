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

// Registrace fontů pro profesionální vzhled
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
}

export default function ReportPDF({
  profile,
  userName,
  company,
  score,
}: ReportPDFProps) {
  return (
    <Document title={`Resilium Audit - ${userName}`}>
      {/* STRANA 1: INDIVIDUÁLNÍ ANALÝZA */}
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
          Audit připravenosti jednat pod tlakem
        </Text>

        <View style={styles.infoRow}>
          <View style={{ width: "50%" }}>
            <Text style={styles.infoLabel}>Klient</Text>
            <Text style={styles.infoValue}>{userName}</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.infoLabel}>Organizace</Text>
            <Text style={styles.infoValue}>
              {company || "Individuální audit"}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            1. Diagnostický profil: {profile.title}
          </Text>
          <View style={styles.contentBox}>
            <Text style={styles.bodyText}>{profile.description}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Dopad v praxi</Text>
          <Text style={styles.bodyText}>{profile.impact}</Text>
          <Text style={styles.bodyText}>
            Výsledek ukazuje, jak pravděpodobně reagujete ve chvíli, kdy se
            zvyšuje tlak, přibývá podnětů a rozhodování musí proběhnout bez
            ideálních podmínek. Readiness Index není lékařské ani
            psychologické vyšetření. Slouží jako praktický orientační nástroj
            pro práci s reakcí, komunikací a rozhodováním v zátěži.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Strategické doporučení</Text>
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
          Důvěrné - Určeno pouze pro vnitřní potřebu klienta. © 2026 Resilium
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber}`}
        />
      </Page>

      {/* STRANA 2: METODICKÝ RÁMEC */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM® METHODOLOGY</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Metodický rámec Resilium Readiness
          </Text>

          <Text style={styles.methodologyTitle}>Tlak mění kvalitu reakce</Text>
          <Text style={styles.bodyText}>
            Resilium vychází z jednoduchého principu: v zátěži nestačí vědět,
            co by měl člověk udělat. Rozhodující je, zda si k této schopnosti
            dokáže udržet přístup i ve chvíli, kdy se mění dech, napětí v těle,
            pozornost, emoce a vnímání rizika.
          </Text>

          <Text style={styles.methodologyTitle}>
            První reakce rozhoduje o dalším vývoji
          </Text>
          <Text style={styles.bodyText}>
            Audit sleduje zejména schopnost zastavit první impuls, obnovit
            orientaci a přejít k použitelnému postupu. Krátká prodleva mezi
            podnětem a reakcí není pasivita. Je to prostor, ve kterém vzniká
            kvalitnější rozhodnutí.
          </Text>

          <Text style={styles.methodologyTitle}>Protokol místo improvizace</Text>
          <Text style={styles.bodyText}>
            Bez trénovaného postupu člověk často spoléhá na návyk, temperament
            nebo momentální energii. To může stačit v běžném provozu, ale v
            zátěži se výkon stává nestabilním. Cílem Resilia je vytvořit
            jednoduché a opakovatelné reakční protokoly použitelné v reálných
            situacích.
          </Text>

          <Text style={styles.methodologyTitle}>Domény auditu</Text>
          <Text style={styles.bodyText}>
            Váš Readiness Index skóre {score}/32 odráží odpovědi v několika
            klíčových oblastech:
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>První reakce:</Text> Jak rychle
            se vracíte k jasnému uvažování po náhlém narušení.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Orientace:</Text> Jak dobře
            udržujete přehled, když roste tlak a přibývá podnětů.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Priority:</Text> Jak určujete
            pořadí kroků, když vše vypadá naléhavě.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Kontrola impulsu:</Text> Jak
            zvládáte provokaci, zpochybnění nebo emoční tlak.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Komunikace:</Text> Jak váš tón,
            tempo a způsob vedení ovlivňuje ostatní pod tlakem.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Adaptace:</Text> Jak rychle
            obnovíte rozhodování, když původní plán přestane fungovat.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Ego a zpětná vazba:</Text> Jak
            dobře oddělujete osobní pozici od funkčního řešení.
          </Text>

          <Text style={styles.bodyText}>
            • <Text style={styles.highlightText}>Rozhodování:</Text> Jak jednáte
            ve chvíli, kdy informace nejsou úplné a čekání zvyšuje riziko.
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
            Závěrečné upozornění:
          </Text>
          <Text style={{ fontSize: 8, color: "#64748B" }}>
            Výsledky tohoto auditu vycházejí ze sebehodnotícího schématu. Nejde
            o klinickou diagnostiku, psychologické vyšetření ani garantovanou
            predikci chování v krizové situaci. Výstup slouží jako praktický
            podklad pro rozhodnutí, zda má smysl navázat cíleným tréninkem
            reakce, komunikace a rozhodování pod tlakem.
          </Text>
        </View>

        <Text style={styles.footer}>
          Resilium - Profesionální trénink stability a rozhodování pod tlakem.
          Více na www.resilium.cz
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber}`}
        />
      </Page>
    </Document>
  );
}