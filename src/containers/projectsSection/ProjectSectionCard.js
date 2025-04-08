import React from "react";
import "./ProjectSectionCard.scss";

export default function ProjectSectionCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div
      className={
        isDark
          ? "project-card dark-mode certificate-card"
          : "project-card certificate-card"
      }
    >
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>

      {/* 🔖 Technology Hashtags */}
      {cardInfo.technologies && cardInfo.technologies.length > 0 && (
        <div className="tech-tags-container">
          {cardInfo.technologies.map((tech, idx) => (
            <span className="tech-tag" key={idx}>
              #{tech}
            </span>
          ))}
        </div>
      )}

      {/* 🔗 Footer Buttons */}
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
