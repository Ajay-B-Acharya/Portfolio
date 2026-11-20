import { portfolio } from "../../data/portfolio";

export function AchievementsPanel() {
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
        {portfolio.achievements.title}
      </h3>
      <ul
        style={{
          margin: 0,
          padding: "0 0 0 1.1rem",
          listStyle: "none",
        }}
      >
        {portfolio.achievements.items.map((item, i) => (
          <li
            key={i}
            style={{
              position: "relative",
              marginTop: i === 0 ? 0 : "0.5rem",
              paddingLeft: "0.15rem",
              fontSize: "0.72rem",
              color: "#bcc6cb",
              lineHeight: "1.5",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "-1.1rem",
                color: "#6d7a81",
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
