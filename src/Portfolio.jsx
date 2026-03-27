import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "PawFind",
    tag: "UX Design · Full Stack",
    label: "Full Stack Case Study",
    type: ["design", "dev"],
    featured: true,
    desc: "Full-stack pet adoption platform built from real frustration. Next.js App Router, PostgreSQL, Clerk auth, Stripe donations, Cloudinary uploads, and a 4-step adoption application flow. Not a tutorial project — a real product.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Stripe", "Tailwind", "Vercel"],
    year: "2026",
    url: "https://pawfind-xi.vercel.app/",
    caseStudy: "/files/PawFind_CaseStudy.pdf",
    figma: null,
  },
  {
    id: 2,
    title: "Swell",
    tag: "UX Design · Frontend Dev",
    label: "Full Stack Case Study",
    type: ["design", "dev"],
    featured: true,
    desc: "Mobile-first surf session tracker. Went from research and wireframes all the way to a shipped React app with a custom design system. The full loop.",
    stack: ["React", "TailwindCSS", "Vite", "Vercel", "Figma"],
    year: "2026",
    url: "https://swell-beta.vercel.app/",
    caseStudy: "/files/SwellV2_Case_Study.pdf",
    figma: null,
  },
  {
    id: 2,
    title: "TipTrack",
    tag: "UX Design · Case Study",
    label: "UX Case Study",
    type: ["design"],
    featured: true,
    desc: "Tip tracking app designed for service industry workers. Full research-to-prototype process — problem framing, lo-fi wireframes, hi-fi Figma mockups, usability testing.",
    stack: ["Figma", "UX Research", "Wireframing", "Prototyping"],
    year: "2024 - 2025",
    url: null,
    caseStudy: "/files/TipTrack_CaseStudy.pdf", // replace with actual PDF path
    figma: null,
  },
  {
    id: 3,
    title: "EarlyDrop",
    tag: "UX Design · Case Study",
    label: "UX Case Study",
    type: ["design"],
    featured: true,
    desc: "Music preview app concept focused on early album discovery. Lo-fi to hi-fi UX flow, interaction design, and a full Figma prototype.",
    stack: ["Figma", "UX Research", "Prototyping"],
    year: "2024 - 2025",
    url: null,
    caseStudy: "/files/EarlyDrop_CaseStudy.pdf",
    figma: null,
  },
  {
    id: 4,
    title: "Skinstric",
    tag: "Frontend Dev",
    label: "Dev Project",
    type: ["dev"],
    featured: false,
    desc: "AI-powered skin analysis app. Camera and file-upload flow, demographics prediction, and animated results UI built in React.",
    stack: ["React", "TailwindCSS", "REST API", "Vite"],
    year: "2025",
    url: "https://skinstricapp.vercel.app/",
    caseStudy: null,
    figma: null,
  },
  {
    id: 5,
    title: "FlowSync",
    tag: "Frontend Dev",
    label: "Dev Project",
    type: ["dev"],
    featured: false,
    desc: "SaaS landing page with animated sections, a conversion-focused layout, and clean HTML/CSS/JS architecture. Production-ready.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    url: "https://saaslandingpage-three.vercel.app/",
    caseStudy: null,
    figma: null,
  },
  {
    id: 6,
    title: "Clouse Photography",
    tag: "Frontend Dev · Client Work",
    label: "Dev Project",
    type: ["dev"],
    featured: false,
    desc: "Client portfolio site built in React. Reusable component architecture, scalable gallery layout, and fully responsive across devices.",
    stack: ["React", "CSS", "GitHub Pages"],
    year: "2026",
    url: "https://clouse.vercel.app/",
    caseStudy: null,
    figma: null,
  },
  {
    id: 7,
    title: "Cinescope",
    tag: "Frontend Dev",
    label: "Dev Project",
    type: ["dev"],
    featured: false,
    desc: "Movie, TV, and games discovery app powered by live API data. Search and filter by type, year, and genre. Dark UI with poster-grid layout built in React.",
    stack: ["React", "REST API", "CSS", "Vercel"],
    year: "2025",
    url: "https://cinescope-project.vercel.app",
    caseStudy: null,
    figma: null,
  },
   {
    id: 9,
    title: "Happy Hour Austin",
    tag: "UX Design · Full Stack",
    label: "Full Stack Project",
    type: ["design", "dev"],
    featured: false,
    desc: "Austin happy hour finder built by a bartender who knows the scene. Map-first layout with live deal pins, countdown timers, neighborhood filters, and auth. Built with React, Firebase, and Google Maps API.",
    stack: ["React", "Firebase", "Google Maps API", "Vite", "Vercel"],
    year: "2026",
    url: "https://happyhour-austin.vercel.app/",
    caseStudy: "/files/HappyHour_Austin_CaseStudy.pdf",
    figma: null,
  },
  {
    id: 10,
    title: "The Lone Ranger and Tonto Fistfight in Heaven",
    tag: "UX Design · Frontend Dev · Client Work",
    label: "Dev Project",
    type: ["dev", "design"],
    featured: false,
    desc: "Band site for an Austin desert-noir act. Sepia-toned aesthetic, show calendar, about and contact modals. Designed and built start to finish.",
    stack: ["React", "CSS", "Vercel", "Figma"],
    year: "2026",
    url: "https://rios-band.vercel.app",
    caseStudy: null,
    figma: null,
  },
];

const navLinks = ["Work", "About", "Contact"];

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-photo { display: none !important; }
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 0 2rem !important;
            padding-top: 6rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "1.25rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(2, 6, 23, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.4rem",
            letterSpacing: "0.12em",
            padding: 0,
          }}
        >
          JUSTIN ADAME
        </button>

        {/* desktop links */}
        <ul className="nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeSection === link.toLowerCase() ? "#fff" : "rgba(255,255,255,0.45)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  padding: 0,
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* hamburger button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff",
            transition: "all 0.3s",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff",
            transition: "all 0.3s",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(2, 6, 23, 0.97)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "3rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Typewriter({ lines, speed = 35, pauseBetween = 500 }) {
  const [displayed, setDisplayed] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    if (pausing) {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, ""]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setPausing(false);
      }, pauseBetween);
      return () => clearTimeout(t);
    }
    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayed((d) => {
          const next = [...d];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else if (lineIndex < lines.length - 1) {
      setPausing(true);
    }
  }, [charIndex, lineIndex, pausing, lines, speed, pauseBetween]);

  return (
    <p style={{
      fontFamily: "'Lora', serif",
      fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
      color: "rgba(255,255,255,0.55)",
      maxWidth: "440px",
      marginTop: "2rem",
      lineHeight: 1.7,
    }}>
      {displayed.map((line, i) => (
        <span key={i} style={{ display: "block" }}>
          {line}
          {i === lineIndex && lineIndex < lines.length && (
            <span style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "rgba(255,255,255,0.55)",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              animation: "blink 0.8s step-end infinite",
            }} />
          )}
        </span>
      ))}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </p>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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
      {/* grain overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        opacity: 0.6,
      }} />

      {/* left: text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.6s ease 0.1s",
        }}>
          UX Designer &amp; Frontend Developer — Austin, TX
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(4.5rem, 10vw, 9rem)",
          lineHeight: 0.88,
          letterSpacing: "0.01em",
          color: "#fff",
          margin: 0,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 0.2s",
        }}>
          JUSTIN<br />
          <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}>
            ADAME
          </span>
        </h1>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.4s",
        }}>
          <Typewriter
            lines={[
              "I design interfaces people actually want to use,",
              "and build the code to back it up.",
            ]}
            speed={32}
            pauseBetween={400}
          />
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: "0.75rem",
          marginTop: "3rem",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 1s",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#fff",
            textTransform: "uppercase",
          }}>
            Scroll
          </span>
          <div style={{ width: "40px", height: "1px", background: "#fff" }} />
        </div>
      </div>

      {/* right: photo */}
      <div className="hero-photo" style={{
        position: "relative", zIndex: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1s ease 0.5s",
      }}>
        <div style={{
          width: "100%",
          maxWidth: "420px",
          maxHeight: "480px",
          overflow: "hidden",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            border: "1px solid rgba(255,255,255,0.08)",
            zIndex: 2,
            pointerEvents: "none",
          }} />
          <img
            src="/images/headshot.jpg"
            alt="Justin Adame"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              filter: "grayscale(100%) contrast(1.05)",
            }}
          />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "35%",
            background: "linear-gradient(to top, #020617, transparent)",
            zIndex: 1,
          }} />
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type.includes(filter));

  return (
    <section id="work" style={{ padding: "6rem 2.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}>
          01 / Work
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "3.5rem" }}>
        {["all", "design", "dev"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              background: filter === f ? "#fff" : "transparent",
              color: filter === f ? "#020617" : "rgba(255,255,255,0.45)",
              border: "1px solid",
              borderColor: filter === f ? "#fff" : "rgba(255,255,255,0.15)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f === "all" ? "All" : f === "design" ? "Design" : "Dev"}
          </button>
        ))}
      </div>

      <div className="projects-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "0",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        {filtered.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === project.id ? "#0f172a" : "#111827",
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "background 0.25s ease",
              position: "relative",
              overflow: "hidden",
              isolation: "isolate",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{
              position: "absolute", top: "1.5rem", right: "1.5rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
            }}>
              {project.year}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
              }}>
                {project.tag}
              </p>
              {project.featured && (
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#020617",
                  background: "rgba(255,255,255,0.75)",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "2px",
                }}>
                  UX
                </span>
              )}
            </div>

            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.4rem",
              letterSpacing: "0.04em",
              color: "#fff",
              margin: 0,
              lineHeight: 1,
            }}>
              {project.title}
            </h2>

            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              margin: 0,
              flex: 1,
            }}>
              {project.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.stack.map((s) => (
                <span key={s} style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "#e5e7eb",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "3px",
                  fontWeight: "500",
                }}>
                  {s}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1.25rem", paddingTop: "0.5rem", flexWrap: "wrap" }}>
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "1px",
                }}>
                  Live Site →
                </a>
              )}
              {project.caseStudy && (
                <a href={project.caseStudy} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  paddingBottom: "1px",
                }}>
                  Case Study →
                </a>
              )}
              {project.figma && (
                <a href={project.figma} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  paddingBottom: "1px",
                }}>
                  Figma Prototype →
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const skills = [
    "Figma", "React", "TypeScript", "Next.js", "TailwindCSS", "HTML/CSS", "JavaScript",
    "Vite", "Git/GitHub", "UX Research", "Wireframing", "Prototyping",
    "Vercel", "Responsive Design",
  ];

  return (
    <section id="about" style={{ padding: "6rem 2.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}>
          02 / About
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div className="about-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#fff",
            margin: "0 0 2rem",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
          }}>
            BARTENDER<br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
              TURNED
            </span><br />
            DESIGNER
          </h2>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}>
            Twenty years behind a bar in Austin — Emo's, The Ritz, Liberty Bar, and multiple SXSW runs — teaches you things no design course will. You read people in seconds. You solve problems before they become complaints. You design every interaction to feel effortless even when the chaos behind the bar is anything but. I didn't realize that was UX until I started studying it.
          </p>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
          }}>
            Now I build the things I used to wish existed — apps for bartenders tracking tips, surfers logging sessions, music fans getting early access. I've got the Google UX Design Certificate, completed Frontend Simplified, and I build in React, TypeScript, Next.js, Figma, and whatever else the project needs. I'm based in Austin and looking for a team that builds things worth using.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            Tools &amp; Skills
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {skills.map((s) => (
              <span key={s} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "#e5e7eb",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "0.45rem 0.85rem",
                borderRadius: "3px",
                fontWeight: "500",
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2.5rem 8rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}>
          03 / Contact
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* full-width heading */}
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(4rem, 12vw, 10rem)",
        color: "#fff",
        margin: "0 0 4rem",
        lineHeight: 0.9,
        letterSpacing: "0.02em",
      }}>
        LET'S{" "}
        <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
          WORK
        </span>{" "}
        TOGETHER
      </h2>

      {/* three column row */}
      <div className="contact-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "3rem",
        alignItems: "start",
      }}>
        {/* col 1 — copy */}
        <p style={{
          fontFamily: "'Lora', serif",
          fontSize: "1rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.8,
          margin: 0,
        }}>
          Open to UX design roles, frontend dev positions, freelance projects, and apprenticeships. Based in Austin, TX — remote friendly.
        </p>

        {/* col 2 — buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <a
            href="mailto:jradame@gmail.com"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#020617",
              background: "#fff",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              borderRadius: "2px",
              textAlign: "center",
            }}
          >
            Say Hello
          </a>
          <a
            href="/files/Justin_Adame_Dev_Main_Resume.pdf"
            download
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#fff",
              background: "transparent",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "2px",
              textAlign: "center",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* col 3 — social links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { label: "GitHub", url: "https://github.com/jradame" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/justin-adame/" },
          ].map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "0.5rem",
            }}>
              {s.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #020617;
          color: #fff;
          -webkit-font-smoothing: antialiased;
          scroll-behavior: smooth;
        }

        #root { width: 100%; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }

        a:hover { opacity: 0.75; }
      `}</style>

      <Nav activeSection={activeSection} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
