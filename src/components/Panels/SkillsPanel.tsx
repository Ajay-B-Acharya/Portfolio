import { portfolio } from "../../data/portfolio";

export function SkillsPanel() {
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
        {portfolio.skills.title}
      </h3>
      {portfolio.skills.categories.map((category, i) => (
        <div key={i} style={{ marginTop: i === 0 ? 0 : "1rem" }}>
          <p
            style={{
              margin: "0 0 0.5rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#A5ACB7",
              letterSpacing: "0.08em",
            }}
          >
            {category.name}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {category.items.map((skill, j) => (
              <span
                key={j}
                style={{
                  padding: "0.35rem 0.7rem",
                  background: "rgba(217, 222, 231, 0.08)",
                  border: "1px solid rgba(217, 222, 231, 0.18)",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  color: "#F2F4F7",
                  fontWeight: 500,
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
