import { useState, useEffect } from "react";
import { theme } from "../theme";
import Typewriter from "./Typewriter";

// Noise overlay SVG inlined as data URI - gives that subtle grain texture
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Fade-in + slide-up animation helper
  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.8s ease ${delay}s`,
  });

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 5rem",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
        gap: "2rem",
      }}
    >
      {/* Noise texture background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: NOISE_BG,
          backgroundRepeat: "repeat",
          opacity: 0.6,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            ...theme.text.eyebrow,
            fontSize: "0.7rem",
            color: theme.colors.textDim,
            marginBottom: "1.5rem",
            ...fadeIn(0.1),
          }}
        >
          UX Designer &amp; Frontend Developer - Austin, TX
        </p>

        <h1
          style={{
            fontFamily: theme.fonts.display,
            fontSize: "clamp(4.5rem, 10vw, 9rem)",
            lineHeight: 0.88,
            letterSpacing: "0.01em",
            color: theme.colors.text,
            margin: 0,
            ...fadeIn(0.2),
          }}
        >
          JUSTIN
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.35)",
            }}
          >
            ADAME
          </span>
        </h1>

        <div style={fadeIn(0.4)}>
          <Typewriter
            lines={[
              "I design interfaces people actually want to use,",
              "and build the code to back it up.",
            ]}
            speed={32}
            pauseBetween={400}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "3rem",
            opacity: visible ? 0.4 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: theme.colors.text,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div style={{ width: "40px", height: "1px", background: theme.colors.text }} />
        </div>
      </div>

      <div
        className="hero-photo"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          ...fadeIn(0.5),
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            maxHeight: "480px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: `1px solid ${theme.colors.border}`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <img
            src="/images/headshot.jpg"
            alt="Justin Adame, UX designer and frontend developer"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              filter: "grayscale(100%) contrast(1.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "35%",
              background: `linear-gradient(to top, ${theme.colors.bg}, transparent)`,
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}