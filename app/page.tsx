"use client";

import ReadinessCheck from "@/components/assessment/ReadinessCheck";

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#3d5266', 
      minHeight: '100vh', 
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
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
          PSYCHOFYZICKÉ TRÉNOVÁNÍ REAKCÍ
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: 900, 
          lineHeight: 1.1, 
          marginBottom: '1.5rem' 
        }}>
          Dělejte správná <br />
          <span style={{ color: '#f57c15' }}>rozhodnutí</span> <br />
          i pod tlakem
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '600px', 
          margin: '0 auto 3rem auto', 
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Zjistěte svou úroveň psychofyzické odolnosti v kritických situacích. 
          Tam, kde ostatní chybují, vy zachováte klid.
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
        © 2026 RESILIUM. Všechna práva vyhrazena.
      </footer>
    </main>
  );
}