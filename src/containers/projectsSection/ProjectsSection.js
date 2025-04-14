import React, { useContext, useState, useMemo } from "react";
import "./ProjectsSection.scss";
import ProjectSectionCard from "./ProjectSectionCard";
import Button from "../../components/button/Button";
import { projectsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectsSection() {
  const { isDark } = useContext(StyleContext);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const allCategories = useMemo(() => {
    const cats = new Set();
    projectsSection.achievementsCards.forEach((card) =>
      card.category?.forEach((cat) => cats.add(cat))
    );
    return [...cats];
  }, []);

  const toggleFilter = (item) => {
    setSelectedCategories((prev) => (prev[0] === item ? [] : [item]));
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategories.length === 0) {
      return projectsSection.achievementsCards;
    }
    return projectsSection.achievementsCards.filter((project) =>
      selectedCategories.every((cat) => project.category?.includes(cat))
    );
  }, [selectedCategories]);

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
            <Button
              text="All"
              className={`filter-chip-button ${
                selectedCategories.length === 0 ? "active" : ""
              }`}
              href="#"
              newTab={false}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategories([]);
              }}
            />

            {/* Categories Only */}
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
                    toggleFilter(cat);
                  }}
                />
              );
            })}
          </div>

          {/* 🧠 FILTERED PROJECT CARDS */}
          <div className="projects-cards-grid">
            {filteredProjects.map((card, i) => (
              <ProjectSectionCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                  technologies: card.technologies || []
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
