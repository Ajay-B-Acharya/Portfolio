import { portfolio } from "../../data/portfolio";

export function ContactPanel() {
  return (
    <div>
      <h3
        style={{
          margin: "0 0 1rem",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#D9DEE7",
        }}
      >
        {portfolio.contact.title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {portfolio.contact.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            style={{
              color: "#F2F4F7",
              fontSize: "0.8rem",
              textDecoration: "none",
              padding: "0.45rem 0.8rem",
              background: "rgba(217, 222, 231, 0.06)",
              border: "1px solid rgba(217, 222, 231, 0.15)",
              borderRadius: "4px",
              transition: "all 0.2s",
              display: "inline-block",
              fontWeight: 500,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
