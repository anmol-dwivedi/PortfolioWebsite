import React, { useContext } from "react";
import "./CertificationsSection.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { certificationsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CertificationsSection() {
  const { isDark } = useContext(StyleContext);

  if (!certificationsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certifications-section">
        <div className="certifications-main-div">
          <div className="certifications-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading certifications-heading"
                  : "heading certifications-heading"
              }
            >
              {certificationsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle certifications-subtitle"
                  : "subTitle certifications-subtitle"
              }
            >
              {certificationsSection.subtitle}
            </p>
          </div>

          <div className="certifications-cards-grid">
            {certificationsSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
