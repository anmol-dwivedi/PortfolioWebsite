import React, { useContext } from "react";
import "./ProjectsSection.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { projectsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectsSection() {
  const { isDark } = useContext(StyleContext);

  if (!projectsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects-section">
        <div className="projects-main-div">
          <div className="projects-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading projects-heading"
                  : "heading projects-heading"
              }
            >
              {projectsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle projects-subtitle"
                  : "subTitle projects-subtitle"
              }
            >
              {projectsSection.subtitle}
            </p>
          </div>

          <div className="projects-cards-grid">
            {projectsSection.achievementsCards.map((card, i) => {
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
