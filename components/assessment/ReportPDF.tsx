"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});
Font.register({
  family: 'RobotoBold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 60, backgroundColor: '#FFFFFF', fontFamily: 'Roboto', fontSize: 10, lineHeight: 1.6 },
  header: { borderBottomWidth: 1, borderBottomColor: '#3d5266', paddingBottom: 15, marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 20, fontFamily: 'RobotoBold', color: '#3d5266', letterSpacing: 1 },
  confidential: { fontSize: 8, color: '#f57c15', fontFamily: 'RobotoBold', textTransform: 'uppercase' },
  meta: { marginBottom: 40, color: '#666', fontSize: 9, backgroundColor: '#f9f9f9', padding: 15, borderRadius: 3 },
  title: { fontSize: 26, fontFamily: 'RobotoBold', color: '#3d5266', marginBottom: 15 },
  subTitle: { fontSize: 11, fontFamily: 'RobotoBold', color: '#f57c15', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 },
  section: { marginBottom: 25 },
  sectionHeading: { fontFamily: 'RobotoBold', color: '#3d5266', borderBottomWidth: 1, borderBottomColor: '#EEE', marginBottom: 10, paddingBottom: 5, textTransform: 'uppercase', fontSize: 10 },
  analysisBox: { padding: 20, backgroundColor: '#f4f7f9', marginVertical: 15, borderLeftWidth: 4, borderLeftColor: '#f57c15' },
  bodyText: { marginBottom: 12, textAlign: 'justify', color: '#1a1a1a' },
  bulletItem: { marginLeft: 15, marginBottom: 6, color: '#333' },
  strategy: { marginTop: 30, padding: 25, backgroundColor: '#3d5266', color: '#FFF', borderRadius: 4 },
  strategyTitle: { fontFamily: 'RobotoBold', fontSize: 13, marginBottom: 10, color: '#f57c15' },
  footer: { position: 'absolute', bottom: 40, left: 60, right: 60, textAlign: 'center', color: '#AAA', fontSize: 7, borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 10, fontFamily: 'Roboto' }
});

export function ReportPDF({ profile, userName, company }: any) {
  return (
    <Document title={`Resilium_Audit_${userName}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>RESILIUM®</Text>
          <Text style={styles.confidential}>Operační Readiness Audit</Text>
        </View>

        <View style={styles.meta}>
          <Text>SUBJEKT: {userName}</Text>
          <Text>ORGANIZACE: {company || 'Nespecifikováno'}</Text>
          <Text>ID PROTOKOLU: RES-{Math.floor(Math.random()*1000000)}</Text>
          <Text>DATUM: {new Date().toLocaleDateString('cs-CZ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>KLASIFIKACE STAVU:</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.bodyText}>{profile.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Hloubková neurofyziologická analýza</Text>
          <View style={styles.analysisBox}>
            <Text style={styles.bodyText}>{profile.detailedAnalysis}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Identifikované faktory degradace stability</Text>
          {profile.risks.map((risk: string, i: number) => (
            <Text key={i} style={styles.bulletItem}>• {risk}</Text>
          ))}
        </View>

        <View style={styles.strategy}>
          <Text style={styles.strategyTitle}>STRATEGICKÁ DOPORUČENÍ RESILIUM</Text>
          <Text style={{ fontSize: 11, lineHeight: 1.6 }}>{profile.recommendation}</Text>
        </View>

        <Text style={styles.footer}>
          Tento dokument je duševním vlastnictvím společnosti Resilium.cz. Určeno pro interní rozvoj. 
          Všechny analýzy vycházejí z metodiky neuro-kognitivního zátěžového testování.
        </Text>
      </Page>
    </Document>
  );
}