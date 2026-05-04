"use client";

import { useEffect, useState } from "react";
import ReadinessCheck, { LanguageSwitcher } from "@/components/assessment/ReadinessCheck";
import { useReadinessStore } from "@/store/useReadinessStore";

export default function Home() {
  const { language, setLanguage } = useReadinessStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Přečtení parametru z URL při načtení stránky
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    if (langParam === "cs" || langParam === "pl" || langParam === "en") {
      setLanguage(langParam as "cs" | "pl" | "en");
    }
    setIsClient(true);
  }, [setLanguage]);

  const t = {
    cs: {
      tag: "PSYCHOFYZICKÉ TRÉNOVÁNÍ REAKCÍ",
      title1: "Dělejte správná",
      titleHighlight: "rozhodnutí",
      title2: "i pod tlakem",
      desc: "Zjistěte svou úroveň psychofyzické odolnosti v kritických situacích. Tam, kde ostatní chybují, vy zachováte klid.",
      footer: "© 2026 RESILIUM. Všechna práva vyhrazena.",
    },
    pl: {
      tag: "PSYCHOFIZYCZNY TRENING REAKCJI",
      title1: "Podejmuj właściwe",
      titleHighlight: "decyzje",
      title2: "nawet pod presją",
      desc: "Sprawdź swój poziom odporności psychofizycznej w sytuacjach krytycznych. Tam, gdzie inni popełniają błędy, Ty zachowasz spokój.",
      footer: "© 2026 RESILIUM. Wszelkie prawa zastrzeżone.",
    },
    en: {
      tag: "PSYCHOPHYSICAL REACTION TRAINING",
      title1: "Make the right",
      titleHighlight: "decisions",
      title2: "even under pressure",
      desc: "Discover your psychophysical resilience level in critical situations. Where others fail, you stay calm.",
      footer: "© 2026 RESILIUM. All rights reserved.",
    }
  }[language];

  // Zabrání zobrazení špatného jazyka (než se přečte URL)
  if (!isClient) {
    return <main style={{ backgroundColor: '#3d5266', minHeight: '100vh' }} />;
  }

  return (
    <main style={{ 
      backgroundColor: '#3d5266', 
      minHeight: '100vh', 
      color: 'white',
      fontFamily: 'sans-serif',
      position: 'relative'
    }}>
      <LanguageSwitcher />

      {/* 1. HERO SEKCE - vizuální úvod */}
      <section style={{ 
        padding: '6rem 2rem 4rem 2rem', 
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'inline-block', 
          backgroundColor: 'rgba(245, 124, 21, 0.15)', 
          color: '#f57c15', 
          padding: '4px 12px', 
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          marginBottom: '1.5rem',
          border: '1px solid #f57c15'
        }}>
          {t.tag}
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: 900, 
          lineHeight: 1.1, 
          marginBottom: '1.5rem' 
        }}>
          {t.title1} <br />
          <span style={{ color: '#f57c15' }}>{t.titleHighlight}</span> <br />
          {t.title2}
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '600px', 
          margin: '0 auto 3rem auto', 
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          {t.desc}
        </p>
      </section>

      {/* 2. DIAGNOSTICKÝ MODUL - ten box co už máš */}
      <section style={{ paddingBottom: '8rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ReadinessCheck />
        </div>
      </section>

      {/* 3. FOOTER (volitelné) */}
      <footer style={{ textAlign: 'center', paddingBottom: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
        {t.footer}
      </footer>
    </main>
  );
}