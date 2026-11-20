import { portfolio } from "../../data/portfolio";

export function ExperiencePanel() {
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
        {portfolio.experience.title}
      </h3>
      <ul
        style={{
          margin: 0,
          padding: "0 0 0 1.2rem",
          listStyle: "none",
        }}
      >
        {portfolio.experience.items.map((item, i) => (
          <li
            key={i}
            style={{
              position: "relative",
              marginTop: i === 0 ? 0 : "0.65rem",
              paddingLeft: "0.2rem",
              fontSize: "0.82rem",
              color: "#F2F4F7",
              lineHeight: "1.6",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "-1.2rem",
                color: "#A5ACB7",
              }}
            >
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
