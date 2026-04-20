"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Registrace fontů pro profesionální vzhled
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});
Font.register({
  family: 'RobotoBold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: '#FFFFFF', fontFamily: 'Roboto', fontSize: 10, lineHeight: 1.5 },
  header: { borderBottomWidth: 2, borderBottomColor: '#f57c15', paddingBottom: 15, marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 22, fontFamily: 'RobotoBold', color: '#3d5266', letterSpacing: 1 },
  
  // Titulní strana
  mainTitle: { fontSize: 26, fontFamily: 'RobotoBold', color: '#3d5266', marginBottom: 5 },
  subTitle: { fontSize: 9, color: '#f57c15', fontFamily: 'RobotoBold', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 30 },
  infoRow: { flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#EEE', paddingBottom: 10 },
  infoLabel: { width: 80, color: '#64748B', fontSize: 8, textTransform: 'uppercase' },
  infoValue: { fontFamily: 'RobotoBold', color: '#3d5266' },

  // Sekce
  section: { marginBottom: 20 },
  sectionTitle: { fontFamily: 'RobotoBold', fontSize: 12, color: '#3d5266', textTransform: 'uppercase', marginBottom: 10, backgroundColor: '#F1F5F9', padding: 5 },
  contentBox: { padding: 12, borderLeftWidth: 3, borderLeftColor: '#f57c15', backgroundColor: '#F8FAFC', marginBottom: 10 },
  
  // Metodický text
  methodologyTitle: { fontFamily: 'RobotoBold', fontSize: 10, color: '#f57c15', marginTop: 15, marginBottom: 5 },
  highlightText: { fontFamily: 'RobotoBold', color: '#3d5266' },
  bodyText: { textAlign: 'justify', marginBottom: 8, color: '#334155' },

  // Footer
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, borderTopWidth: 0.5, borderTopColor: '#CBD5E1', paddingTop: 10, fontSize: 7, color: '#94A3B8', textAlign: 'center' },
  pageNumber: { position: 'absolute', bottom: 30, right: 40, fontSize: 8, color: '#94A3B8' }
});

export default function ReportPDF({ profile, userName, company, score }: any) {
  return (
    <Document title={`Resilium Audit - ${userName}`}>
      {/* STRANA 1: INDIVIDUÁLNÍ ANALÝZA */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM®</Text>
          <View style={{ textAlign: 'right' }}>
            <Text style={{ fontSize: 16, fontFamily: 'RobotoBold', color: '#f57c15' }}>{score} / 32</Text>
            <Text style={{ fontSize: 7, color: '#64748B' }}>READINESS INDEX</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Osobní audit stability a odolnosti</Text>
        
        <View style={styles.infoRow}>
          <View style={{ width: '50%' }}>
            <Text style={styles.infoLabel}>Klient</Text>
            <Text style={styles.infoValue}>{userName}</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={styles.infoLabel}>Organizace</Text>
            <Text style={styles.infoValue}>{company || 'Individuální audit'}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Diagnostický profil: {profile.title}</Text>
          <View style={styles.contentBox}>
            <Text style={styles.bodyText}>{profile.description}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Dopad na operační efektivitu</Text>
          <Text style={styles.bodyText}>{profile.impact}</Text>
          <Text style={styles.bodyText}>
            Tento výsledek indikuje, jakým způsobem váš nervový systém nakládá s kognitivními zdroji v momentě, kdy se prostředí stává nepředvídatelným. Stabilita v této oblasti přímo koreluje s kvalitou strategických rozhodnutí a schopností udržet integritu týmu pod tlakem.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Strategické doporučení</Text>
          <View style={{ backgroundColor: '#3d5266', padding: 15, borderRadius: 2 }}>
            <Text style={{ color: '#FFFFFF', marginBottom: 10 }}>{profile.nextStep}</Text>
            <Text style={{ color: '#f57c15', fontFamily: 'RobotoBold', fontSize: 11 }}>{profile.program}</Text>
          </View>
        </View>

        <Text style={styles.footer}>Důvěrné - Určeno pouze pro vnitřní potřebu klienta. © 2026 Resilium</Text>
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} />
      </Page>

      {/* STRANA 2: METODICKÝ RÁMEC (EVIDENCE BASED) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM® METHODOLOGY</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vědecký základ Resilium Stability</Text>
          
          <Text style={styles.methodologyTitle}>Biologie tlaku a metabolická daň</Text>
          <Text style={styles.bodyText}>
            Odolnost není v Resilium vnímána jako psychologická vlastnost, ale jako <Text style={styles.highlightText}>neurofyziologická dovednost</Text>. Při expozici stresu dochází k aktivaci sympatické větve autonomního nervového systému (ANS). Pokud tento proces není vědomě regulován, dochází k tzv. „Amygdala Hijack“ – stavu, kdy evolučně starší části mozku přebírají kontrolu nad prefrontálním kortexem (centrem logiky a rozhodování). Výsledkem je sice rychlá, ale často chybná reakce s vysokou metabolickou daní.
          </Text>

          <Text style={styles.methodologyTitle}>Protokol 10 sekund: Gap Control</Text>
          <Text style={styles.bodyText}>
            Klíčovým prvkem vašeho auditu byla schopnost pracovat s mezerou mezi podnětem a reakcí. Trénovaný jedinec dokáže v kritickém momentě aktivovat nervus vagus, čímž během vteřin sníží srdeční frekvenci a uvolní kognitivní kapacitu pro analýzu reality. Tento proces nazýváme <Text style={styles.highlightText}>Protokol 10 sekund</Text>. Je to nástroj, který odděluje reaktivní přežívání od vědomého řízení situace.
          </Text>

          <Text style={styles.methodologyTitle}>Domény měření v auditu</Text>
          <Text style={styles.bodyText}>
            Váš Readiness Index (skóre {score}/32) odráží rovnováhu ve čtyřech klíčových doménách:
          </Text>
          <Text style={styles.bodyText}>• <Text style={styles.highlightText}>Neuro-stabilita:</Text> Rychlost návratu k homeostáze po šoku.</Text>
          <Text style={styles.bodyText}>• <Text style={styles.highlightText}>Kognitivní scanning:</Text> Schopnost udržet periferní vnímání v tunelovém stresu.</Text>
          <Text style={styles.bodyText}>• <Text style={styles.highlightText}>Sociální integrita:</Text> Udržení věcné komunikace navzdory vnitřnímu tlaku.</Text>
          <Text style={styles.bodyText}>• <Text style={styles.highlightText}>Ego-distanc:</Text> Schopnost upřednostnit objektivní řešení před osobní defenzivou.</Text>
        </View>

        <View style={{ marginTop: 20, padding: 15, borderTopWidth: 1, borderTopColor: '#f57c15' }}>
          <Text style={{ fontFamily: 'RobotoBold', color: '#3d5266', marginBottom: 5 }}>Závěrečné upozornění:</Text>
          <Text style={{ fontSize: 8, color: '#64748B' }}>
            Výsledky tohoto auditu vycházejí ze sebehodnotícího schématu a odrážejí aktuální stav připravenosti. Stabilita pod tlakem není statická – bez pravidelného tréninku stresových vzorců dochází k její degradaci, zejména při kumulativní únavě.
          </Text>
        </View>

        <Text style={styles.footer}>Resilium - Profesionální trénink stability. Více na www.resilium.cz</Text>
        <Text style={styles.pageNumber} render={({ pageNumber }) => `${pageNumber}`} />
      </Page>
    </Document>
  );
}