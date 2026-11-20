import { portfolio } from "../../data/portfolio";

export function AboutPanel() {
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
        {portfolio.about.title}
      </h3>
      {portfolio.about.description.map((line, i) => (
        <p
          key={i}
          style={{
            margin: i === 0 ? 0 : "0.6rem 0 0",
            color: "#bcc6cb",
            fontSize: "0.72rem",
            lineHeight: "1.55",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
