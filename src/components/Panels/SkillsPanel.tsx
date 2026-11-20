import { portfolio } from "../../data/portfolio";

export function SkillsPanel() {
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
        {portfolio.skills.title}
      </h3>
      {portfolio.skills.categories.map((category, i) => (
        <div key={i} style={{ marginTop: i === 0 ? 0 : "0.85rem" }}>
          <p
            style={{
              margin: "0 0 0.4rem",
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "#96a3a9",
              letterSpacing: "0.08em",
            }}
          >
            {category.name}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
            }}
          >
            {category.items.map((skill, j) => (
              <span
                key={j}
                style={{
                  padding: "0.25rem 0.55rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "3px",
                  fontSize: "0.65rem",
                  color: "#c5ced2",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
