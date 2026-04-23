import { theme } from "../theme";

// Reusable section header: "01 / Work" + horizontal line
// Was duplicated 3x in the original code
export default function SectionHeader({ number, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        marginBottom: "3rem",
      }}
    >
      <span style={theme.text.eyebrow}>
        {number} / {title}
      </span>
      <div style={{ flex: 1, height: "1px", background: theme.colors.border }} />
    </div>
  );
}