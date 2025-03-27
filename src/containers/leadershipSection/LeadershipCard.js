import React from "react";
import "./LeadershipCard.scss";

export default function LeadershipCard({ cardInfo, isDark }) {
  return (
    <div className={isDark ? "dark-mode leadership-card" : "leadership-card"}>
      <div className="leadership-card-inner">
        <div className="leadership-card-image">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Leadership logo"}
          />
        </div>
        <div className="leadership-card-content">
          <h3 className="leadership-card-title">{cardInfo.title}</h3>
          <p className="leadership-card-description">{cardInfo.description}</p>
        </div>
      </div>
    </div>
  );
}
