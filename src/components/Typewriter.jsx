import { useState, useEffect } from "react";
import { theme } from "../theme";

// Typewriter effect: types lines one at a time with a blinking cursor
export default function Typewriter({ lines, speed = 35, pauseBetween = 500 }) {
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

  // Accessible version - screen readers get the full text immediately
  const fullText = lines.join(" ");

  return (
    <>
      <p
        aria-hidden="true"
        style={{
          fontFamily: theme.fonts.serif,
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          color: "rgba(255,255,255,0.55)",
          maxWidth: "440px",
          marginTop: "2rem",
          lineHeight: 1.7,
        }}
      >
        {displayed.map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
            {i === lineIndex && lineIndex < lines.length && (
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: "rgba(255,255,255,0.55)",
                  marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  animation: "blink 0.8s step-end infinite",
                }}
              />
            )}
          </span>
        ))}
      </p>
      {/* Screen-reader-only version for accessibility */}
      <span className="sr-only">{fullText}</span>
    </>
  );
}