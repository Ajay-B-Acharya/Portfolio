import { portfolio } from "../../data/portfolio";

export function ContactPanel() {
  return (
    <div>
      <h3
        style={{
          margin: "0 0 0.85rem",
          fontSize: "0.82rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#a8b4ba",
        }}
      >
        {portfolio.contact.title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {portfolio.contact.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            style={{
              color: "#c5ced2",
              fontSize: "0.72rem",
              textDecoration: "none",
              padding: "0.35rem 0.65rem",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "3px",
              transition: "all 0.2s",
              display: "inline-block",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
