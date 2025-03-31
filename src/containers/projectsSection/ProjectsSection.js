import React, { useContext, useState, useMemo } from "react";
import "./ProjectsSection.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import Button from "../../components/button/Button";
import { projectsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectsSection() {
  const { isDark } = useContext(StyleContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const allCategories = useMemo(() => {
    const cats = new Set();
    projectsSection.achievementsCards.forEach((card) =>
      card.category?.forEach((cat) => cats.add(cat))
    );
    return [...cats];
  }, []);

  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projectsSection.achievementsCards.forEach((card) =>
      card.technologies?.forEach((tech) => techs.add(tech))
    );
    return [...techs];
  }, []);

  const toggleFilter = (item, type) => {
    if (type === "category") {
      setSelectedCategories((prev) => (prev[0] === item ? [] : [item]));
      setSelectedTechnologies([]); // clear tech if category selected
    } else {
      setSelectedTechnologies((prev) => (prev[0] === item ? [] : [item]));
      setSelectedCategories([]); // clear category if tech selected
    }
  };
  

  const filteredProjects = useMemo(() => {
    if (selectedCategories.length === 0 && selectedTechnologies.length === 0) {
      return projectsSection.achievementsCards;
    }
    return projectsSection.achievementsCards.filter((project) => {
      const matchCategory = selectedCategories.every((cat) =>
        project.category?.includes(cat)
      );
      const matchTechnology = selectedTechnologies.every((tech) =>
        project.technologies?.includes(tech)
      );
      return matchCategory && matchTechnology;
    });
  }, [selectedCategories, selectedTechnologies]);

  if (!projectsSection.display) return null;

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

          {/* 🔘 FILTER CHIPS */}
          <div className="filter-chips">
            {/* ALL Button */}
            <Button
              text="All"
              className={`filter-chip-button ${
                selectedCategories.length === 0 && selectedTechnologies.length === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              newTab={false}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategories([]);
                setSelectedTechnologies([]);
              }}
            />

            {/* Categories */}
            {allCategories.map((cat, i) => {
              const isActive = selectedCategories.includes(cat);
              return (
                <Button
                  key={`cat-${i}`}
                  text={cat}
                  className={`filter-chip-button ${isActive ? "active" : ""}`}
                  href="#"
                  newTab={false}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFilter(cat, "category");
                  }}
                />
              );
            })}

            {/* Technologies */}
            {allTechnologies.map((tech, i) => {
              const isActive = selectedTechnologies.includes(tech);
              return (
                <Button
                  key={`tech-${i}`}
                  text={tech}
                  className={`filter-chip-button ${isActive ? "active" : ""}`}
                  href="#"
                  newTab={false}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFilter(tech, "technology");
                  }}
                />
              );
            })}
          </div>

          {/* 🧠 FILTERED PROJECT CARDS */}
          <div className="projects-cards-grid">
            {filteredProjects.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
