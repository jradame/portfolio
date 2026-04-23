import { useState } from "react";
import { theme } from "../theme";

// Styled link used for Live Site, App Store, Case Study, Figma
function ProjectLink({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: theme.fonts.mono,
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: primary ? theme.colors.text : "rgba(255,255,255,0.55)",
        textDecoration: "none",
        borderBottom: `1px solid ${primary ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.2)"}`,
        paddingBottom: "1px",
      }}
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? theme.colors.bgCardHover : theme.colors.bgCard,
        padding: "2.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "background 0.25s ease",
        position: "relative",
        overflow: "hidden",
        borderRight: `1px solid ${theme.colors.border}`,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      {/* Year badge in top-right corner */}
      <span
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          fontFamily: theme.fonts.mono,
          fontSize: "0.6rem",
          color: theme.colors.textGhost,
          letterSpacing: "0.1em",
        }}
      >
        {project.year}
      </span>

      {/* Project tag */}
      <p
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: "0.62rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: theme.colors.textFaint,
          margin: 0,
        }}
      >
        {project.tag}
      </p>

      <h3
        style={{
          fontFamily: theme.fonts.display,
          fontSize: "2.4rem",
          letterSpacing: "0.04em",
          color: theme.colors.text,
          margin: 0,
          lineHeight: 1,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: theme.fonts.serif,
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      {/* Tech stack chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "#e5e7eb",
              background: theme.colors.chipBg,
              border: `1px solid ${theme.colors.borderStrong}`,
              padding: "0.25rem 0.6rem",
              borderRadius: "3px",
              fontWeight: 500,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Links row */}
      <div style={{ display: "flex", gap: "1.25rem", paddingTop: "0.5rem", flexWrap: "wrap" }}>
        {project.url && <ProjectLink href={project.url} primary>Live Site →</ProjectLink>}
        {project.appStore && <ProjectLink href={project.appStore}>App Store →</ProjectLink>}
        {project.caseStudy && <ProjectLink href={project.caseStudy}>Case Study →</ProjectLink>}
        {project.figma && <ProjectLink href={project.figma}>Figma Prototype →</ProjectLink>}
      </div>
    </div>
  );
}