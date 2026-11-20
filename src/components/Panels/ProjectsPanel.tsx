import { portfolio } from "../../data/portfolio";

export function ProjectsPanel() {
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
        {portfolio.projects.title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
        {portfolio.projects.items.map((project, i) => (
          <div key={i}>
            <p
              style={{
                margin: "0 0 0.2rem",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#d0d8dc",
              }}
            >
              {project.name}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.66rem",
                color: "#9ca8ae",
                lineHeight: "1.45",
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
