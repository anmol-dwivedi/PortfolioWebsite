import React, { useContext } from "react";
import "./TimelineExperience.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineExperience } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const TimelineExperience = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="experience">
        <div className="timeline-main-div">
          <div className="timeline-header">
            <h1 className={isDark ? "dark-mode heading timeline-heading" : "heading timeline-heading"}>
              Experience 💼
            </h1>
            <p className={isDark ? "dark-mode subTitle timeline-subtitle" : "subTitle timeline-subtitle"}>
              Roles I have held across industries and institutions
            </p>
          </div>

          <VerticalTimeline>
            {timelineExperience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: isDark ? "#23283e" : "#f5f5f5",
                  color: isDark ? "#fff" : "#000"
                }}
                contentArrowStyle={{
                  borderRight: isDark ? "7px solid #23283e" : "7px solid #f5f5f5"
                }}
                date={item.date}
                iconStyle={{
                  background: "#ffffff",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 0 4px #00bfff",
                  padding: "1px"
                }}
                icon={
                  <img
                    src={item.icon}
                    alt={item.company}
                    className="timeline-logo"
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company} – {item.location}
                </h4>

                {item.summary && (
                  <p className="timeline-summary">{item.summary}</p>
                )}

                <ul>
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </Fade>
  );
};

export default TimelineExperience;
