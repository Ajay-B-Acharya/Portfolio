import { portfolio } from "../../data/portfolio";

export function AboutPanel() {
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
        {portfolio.about.title}
      </h3>
      {portfolio.about.description.map((line, i) => (
        <p
          key={i}
          style={{
            margin: i === 0 ? 0 : "0.75rem 0 0",
            color: "#F2F4F7",
            fontSize: "0.85rem",
            lineHeight: "1.65",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
