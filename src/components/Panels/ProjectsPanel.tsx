import { portfolio } from "../../data/portfolio";

export function ProjectsPanel() {
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
        {portfolio.projects.title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {portfolio.projects.items.map((project, i) => (
          <div key={i}>
            <p
              style={{
                margin: "0 0 0.3rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#F2F4F7",
              }}
            >
              {project.name}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.75rem",
                color: "#A5ACB7",
                lineHeight: "1.55",
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
