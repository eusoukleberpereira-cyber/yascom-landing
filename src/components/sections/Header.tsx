"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { WA } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(244,241,236,0.95)" : "var(--color-bg-primary)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all var(--transition-normal)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "var(--text-xl)",
              color: "var(--color-text-primary)",
              lineHeight: 1,
            }}
          >
            YASCOM
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Inteligência Digital
          </span>
        </div>

        {/* CTA Desktop */}
        <a
          href={WA.header}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: "var(--text-sm)", padding: "12px 24px" }}
          id="header-cta"
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-primary)",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Menu"
          id="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-bg-primary)",
            borderTop: "1px solid var(--color-border)",
            padding: "16px 24px 24px",
          }}
          id="mobile-menu"
        >
          <a
            href={WA.header}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          #header-cta { display: inline-flex !important; }
          #mobile-menu-btn { display: none !important; }
          #mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          #header-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
