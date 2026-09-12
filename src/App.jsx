import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import './App.css';

export default function App() {
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="portfolio-shell">
      {/* Profile Header */}
      <header className="profile-header">
        <div className="profile-avatar-wrap">
          <img src="/assets/user_icon.jpg" alt="User Icon" className="profile-avatar" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Muhammad Faqih Arkan</h1>

          <a href="mailto:faqiharkan123@gmail.com" className="profile-email-link">
            <span>faqiharkan123@gmail.com ↗</span>
          </a>
        </div>
      </header>

      {/* Portfolio Feed */}
      <main className="projects-feed">

        {/* 01: AEON (Rebranding) */}
        <article className="project-item">
          <div className="project-title-bar">
            <h2 className="project-heading">AEON (Rebranding)</h2>
            <span className="project-scope-tag">01 // LOGO & POSTER</span>
          </div>
          <div className="pair-grid">
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/aeon-logo.png', caption: 'AEON (Rebranding) — Logo' })}>
              <div className="asset-preview logo-stage">
                <img src="/assets/aeon-logo.png" alt="AEON Logo" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">LOGO</span>
                <span className="asset-meta">Wordmark System</span>
              </div>
            </div>
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/aeon-poster.png', caption: 'AEON (Rebranding) — Poster' })}>
              <div className="asset-preview poster-stage">
                <img src="/assets/aeon-poster.png" alt="AEON Poster" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">POSTER</span>
                <span className="asset-meta">Watch Campaign</span>
              </div>
            </div>
          </div>
        </article>

        {/* 02: Miyu (Rebranding) */}
        <article className="project-item">
          <div className="project-title-bar">
            <h2 className="project-heading">Miyu (Rebranding)</h2>
            <span className="project-scope-tag">02 // LOGO & POSTER</span>
          </div>
          <div className="pair-grid">
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/miyu-logo.png', caption: 'Miyu (Rebranding) — Logo' })}>
              <div className="asset-preview logo-stage">
                <img src="/assets/miyu-logo.png" alt="Miyu Logo" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">LOGO</span>
                <span className="asset-meta">Script & Emblem</span>
              </div>
            </div>
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/miyu-poster.png', caption: 'Miyu (Rebranding) — Poster' })}>
              <div className="asset-preview poster-stage">
                <img src="/assets/miyu-poster.png" alt="Miyu Poster" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">POSTER</span>
                <span className="asset-meta">Cosmetic Promo</span>
              </div>
            </div>
          </div>
        </article>

        {/* 03: Crysta (Rebranding) */}
        <article className="project-item">
          <div className="project-title-bar">
            <h2 className="project-heading">Crysta (Rebranding)</h2>
            <span className="project-scope-tag">03 // LOGO & POSTER</span>
          </div>
          <div className="pair-grid">
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/crysta-logo.png', caption: 'Crysta (Rebranding) — Logo' })}>
              <div className="asset-preview logo-stage">
                <img src="/assets/crysta-logo.png" alt="Crysta Logo" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">LOGO</span>
                <span className="asset-meta">Monogram & Wordmark</span>
              </div>
            </div>
            <div className="asset-card" onClick={() => setActiveImg({ src: '/assets/crysta-poster.jpg', caption: 'Crysta (Rebranding) — Poster' })}>
              <div className="asset-preview poster-stage">
                <img src="/assets/crysta-poster.jpg" alt="Crysta Poster" />
              </div>
              <div className="asset-label-bar">
                <span className="asset-type">POSTER</span>
                <span className="asset-meta">Slim Tumbler Campaign</span>
              </div>
            </div>
          </div>
        </article>

        {/* 04: INFO BMKG App Redesign — Just the mockup image */}
        <article className="project-item">
          <div className="project-title-bar">
            <h2 className="project-heading">INFO BMKG App Redesign</h2>
            <span className="project-scope-tag">04 // UI/UX MOBILE APP</span>
          </div>
          <div
            className="bmkg-image-card"
            onClick={() => setActiveImg({ src: '/assets/bmkg-mockup.png', caption: 'INFO BMKG App Redesign — UI/UX Mobile App' })}
          >
            <div className="bmkg-image-preview">
              <img src="/assets/bmkg-mockup.png" alt="INFO BMKG App Redesign Mockup" />
            </div>
            <div className="bmkg-label-bar">
              <span className="asset-type">UI/UX MOBILE APP</span>
              <span className="asset-meta">iOS / Android</span>
            </div>
          </div>
        </article>

      </main>

      {/* Footer */}
      <footer className="minimal-foot">
        <span>© 2026 MUHAMMAD FAQIH ARKAN</span>
      </footer>

      {/* Lightbox */}
      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImg.src} alt={activeImg.caption} />
            <div className="lightbox-tag">{activeImg.caption} (Click anywhere to close)</div>
          </div>
        </div>
      )}
    </div>
  );
}
