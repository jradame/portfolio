import { useState, useEffect } from "react";
import { theme } from "../theme";

// Replace this with your Formspree endpoint after you create the form
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdqwyaz";

export default function ContactFormModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle open: mount with slide-in-from-left animation
  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);
      // Tiny delay to trigger CSS transition after mount
      const t = setTimeout(() => setClosing(false), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Handle close: slide out to right, then unmount
  const handleClose = () => {
    if (status === "sending") return; // Don't close mid-submit
    setClosing(true);
    setTimeout(() => {
      setMounted(false);
      // Reset form state for next open
      setForm({ name: "", email: "", company: "", message: "" });
      setStatus("idle");
      setErrorMsg("");
      onClose();
    }, 400); // Match transition duration
  };

  // Lock body scroll when open
  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Name, email, and message are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        // Auto-close after 2 seconds on success
        setTimeout(() => handleClose(), 2000);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Try emailing directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try emailing directly at jradame@gmail.com.");
    }
  };

  if (!mounted && !open) return null;

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${theme.colors.borderMid}`,
    borderRadius: "2px",
    color: theme.colors.text,
    fontFamily: theme.fonts.serif,
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    ...theme.text.eyebrow,
    fontSize: "0.6rem",
    color: theme.colors.textDim,
    marginBottom: "0.5rem",
    display: "block",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: closing ? "rgba(2,6,23,0)" : "rgba(2,6,23,0.75)",
        backdropFilter: closing ? "blur(0px)" : "blur(6px)",
        WebkitBackdropFilter: closing ? "blur(0px)" : "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: theme.colors.bgCard,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: "4px",
          padding: "2.5rem",
          // Slide in from left, slide out to right
          transform: closing
            ? "translateX(100vw)"
            : mounted
            ? "translateX(0)"
            : "translateX(-100vw)",
          opacity: closing ? 0 : 1,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close contact form"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            color: theme.colors.textDim,
            cursor: "pointer",
            padding: "0.5rem",
            fontSize: "1.25rem",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <h2
          id="contact-form-title"
          style={{
            fontFamily: theme.fonts.display,
            fontSize: "2.25rem",
            letterSpacing: "0.02em",
            color: theme.colors.text,
            margin: "0 0 0.5rem",
          }}
        >
          GET IN TOUCH
        </h2>
        <p
          style={{
            fontFamily: theme.fonts.serif,
            fontSize: "0.9rem",
            color: theme.colors.textMuted,
            margin: "0 0 2rem",
            lineHeight: 1.6,
          }}
        >
          Drop a message and I'll get back to you within 24 hours.
        </p>

        {/* Success state */}
        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: "1.75rem",
                color: theme.colors.text,
                marginBottom: "0.75rem",
              }}
            >
              MESSAGE SENT
            </div>
            <p
              style={{
                fontFamily: theme.fonts.serif,
                fontSize: "0.9rem",
                color: theme.colors.textMuted,
                margin: 0,
              }}
            >
              Thanks. I'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: "1.25rem" }}>
              <label htmlFor="cf-name" style={labelStyle}>Name *</label>
              <input
                id="cf-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={status === "sending"}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label htmlFor="cf-email" style={labelStyle}>Email *</label>
              <input
                id="cf-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                disabled={status === "sending"}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label htmlFor="cf-company" style={labelStyle}>Company</label>
              <input
                id="cf-company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                disabled={status === "sending"}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="cf-message" style={labelStyle}>Message *</label>
              <textarea
                id="cf-message"
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                disabled={status === "sending"}
                style={{ ...inputStyle, resize: "vertical", fontFamily: theme.fonts.serif }}
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: "0.75rem",
                  color: "#f87171",
                  marginBottom: "1rem",
                }}
              >
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                ...theme.text.label,
                width: "100%",
                background: theme.colors.text,
                color: theme.colors.bg,
                border: "none",
                padding: "0.95rem 2rem",
                borderRadius: "2px",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}