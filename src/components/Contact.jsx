import { theme } from "../theme";
import SectionHeader from "./SectionHeader";

const socials = [
  { label: "GitHub", url: "https://github.com/jradame" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/justin-adame/" },
];

export default function Contact({ onContactClick }) {
  return (
    <section id="contact" style={{ padding: "6rem 2.5rem 8rem" }}>
      <SectionHeader number="03" title="Contact" />

      <h2
        style={{
          fontFamily: theme.fonts.display,
          fontSize: "clamp(4rem, 12vw, 10rem)",
          color: theme.colors.text,
          margin: "0 0 4rem",
          lineHeight: 0.9,
          letterSpacing: "0.02em",
        }}
      >
        {"LET'S "}
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.3)",
          }}
        >
          WORK
        </span>
        {" TOGETHER"}
      </h2>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <p
          style={{
            fontFamily: theme.fonts.serif,
            fontSize: "1rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Open to UX design roles, frontend dev positions, freelance projects, and apprenticeships. Based in Austin, TX - remote friendly.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button
            onClick={onContactClick}
            style={{
              ...theme.text.label,
              color: theme.colors.bg,
              background: theme.colors.text,
              padding: "0.85rem 2rem",
              border: "none",
              borderRadius: "2px",
              textAlign: "center",
              cursor: "pointer",
              fontFamily: theme.fonts.mono,
            }}
          >
            Say Hello
          </button>
          <a
            href="/files/Justin_Adame_Dev_Main_Resume.pdf"
            download
            style={{
              ...theme.text.label,
              color: theme.colors.text,
              background: "transparent",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              border: `1px solid ${theme.colors.borderMid}`,
              borderRadius: "2px",
              textAlign: "center",
            }}
          >
            Download Resume
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                ...theme.text.label,
                color: theme.colors.textDim,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "0.5rem",
              }}
            >
              {s.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}