// Design tokens - change colors/fonts here, they update everywhere
export const theme = {
  colors: {
    bg: "#020617",
    bgCard: "#111827",
    bgCardHover: "#0f172a",
    text: "#fff",
    textMuted: "rgba(255,255,255,0.65)",
    textDim: "rgba(255,255,255,0.45)",
    textFaint: "rgba(255,255,255,0.35)",
    textGhost: "rgba(255,255,255,0.2)",
    border: "rgba(255,255,255,0.08)",
    borderMid: "rgba(255,255,255,0.15)",
    borderStrong: "rgba(255,255,255,0.25)",
    chipBg: "rgba(255,255,255,0.08)",
  },
  fonts: {
    display: "'Bebas Neue', sans-serif",
    mono: "'DM Mono', monospace",
    serif: "'Lora', serif",
  },
  // Reusable text style presets
  text: {
    eyebrow: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.65rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.35)",
    },
    label: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.75rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
    },
    body: {
      fontFamily: "'Lora', serif",
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.65)",
    },
  },
};