import { useState } from "react";
import { theme } from "../theme";
import { projects } from "../data/projects";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "dev", label: "Dev" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type.includes(filter));

  return (
    <section id="work" style={{ padding: "6rem 2.5rem" }}>
      <SectionHeader number="01" title="Work" />

      {/* Filter pills */}
      <div
        role="tablist"
        aria-label="Filter projects"
        style={{ display: "flex", gap: "0.75rem", marginBottom: "3.5rem" }}
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              style={{
                background: active ? theme.colors.text : "transparent",
                color: active ? theme.colors.bg : theme.colors.textDim,
                border: `1px solid ${active ? theme.colors.text : theme.colors.borderMid}`,
                fontFamily: theme.fonts.mono,
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "0",
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}