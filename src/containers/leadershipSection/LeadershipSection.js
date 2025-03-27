import React, { useContext } from "react";
import "./LeadershipSection.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { leadershipSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LeadershipSection() {
  const { isDark } = useContext(StyleContext);

  if (!leadershipSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="leadership">
        <div className="leadership-main-div">
          <div className="leadership-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading leadership-heading"
                  : "heading leadership-heading"
              }
            >
              {leadershipSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle leadership-subtitle"
                  : "subTitle leadership-subtitle"
              }
            >
              {leadershipSection.subtitle}
            </p>
          </div>

          <div className="leadership-cards-grid">
            {leadershipSection.leadershipCards.map((card, i) => {
              return (
                <div className="leadership-card-wrapper" key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
