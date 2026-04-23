import { theme } from "../theme";
import SectionHeader from "./SectionHeader";

const skills = [
  "Figma", "React", "React Native", "Expo",
  "TypeScript", "Next.js", "TailwindCSS", "HTML/CSS",
  "JavaScript", "PostgreSQL", "Prisma", "Clerk",
  "Neon", "Vite", "Git/GitHub", "Vercel",
  "UX Research", "Wireframing", "Prototyping", "Responsive Design",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2.5rem" }}>
      <SectionHeader number="02" title="About" />

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.text,
              margin: "0 0 2rem",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
            }}
          >
            BARTENDER
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              }}
            >
              TURNED
            </span>
            <br />
            DESIGNER
          </h2>
          <p
            style={{
              ...theme.text.body,
              marginBottom: "1.25rem",
            }}
          >
            Twenty years behind a bar in Austin - Emo's, The Ritz, Liberty Bar, and multiple SXSW runs - teaches you things no design course will. You read people in seconds. You solve problems before they become complaints. You design every interaction to feel effortless even when the chaos behind the bar is anything but. I didn't realize that was UX until I started studying it.
          </p>
          <p style={theme.text.body}>
            Now I build the things I used to wish existed - apps for bartenders tracking tips, surfers logging sessions, music fans getting early access. I've got the Google UX Design Certificate, completed Frontend Simplified, and I build in React, TypeScript, Next.js, Figma, and whatever else the project needs. I'm based in Austin and looking for a team that builds things worth using.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p
            style={{
              ...theme.text.eyebrow,
              marginBottom: "1.5rem",
            }}
          >
            Tools &amp; Skills
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "#e5e7eb",
                  background: theme.colors.chipBg,
                  border: `1px solid ${theme.colors.borderStrong}`,
                  padding: "0.45rem 0.85rem",
                  borderRadius: "3px",
                  fontWeight: 500,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}