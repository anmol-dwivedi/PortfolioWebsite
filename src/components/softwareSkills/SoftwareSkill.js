import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

// ✅ React Icons for colorful logos
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiApacheairflow,
  SiStreamlit,
  SiFastapi,
  SiPowerbi,
  SiTableau,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiLinux,
  SiAnaconda,
  SiJirasoftware,
  SiApachespark
} from "react-icons/si";

// 🧠 Icon map for matching skills
const iconMap = {
  Python: <SiPython />,
  "Scikit-Learn": <SiScikitlearn />,
  TensorFlow: <SiTensorflow />,
  Airflow: <SiApacheairflow />,
  Streamlit: <SiStreamlit />,
  FastAPI: <SiFastapi />,
  "Power BI": <SiPowerbi />,
  Tableau: <SiTableau />,
  AWS: <SiAmazonaws />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  Linux: <SiLinux />,
  Anaconda: <SiAnaconda />,
  JIRA: <SiJirasoftware />,
  PySpark: <SiApachespark />
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {/* Use react-icon if available, else fallback to FontAwesome class */}
              {iconMap[skills.skillName] ? (
                iconMap[skills.skillName]
              ) : (
                <i className={skills.fontAwesomeClassname}></i>
              )}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
