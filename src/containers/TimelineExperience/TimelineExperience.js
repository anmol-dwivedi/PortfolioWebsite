import React from "react";
import "./TimelineExperience.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineExperience } from "../../portfolio";
// import { MdWork } from "react-icons/md";

const TimelineExperience = () => {
  return (
    <div className="timeline-container" id="experience">
      <h1 className="timeline-title">Experience</h1>
      <VerticalTimeline>
        {timelineExperience.map((item, index) => (
          <VerticalTimelineElement
          key={index}
          contentStyle={{ background: "#1f1f1f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #23283e" }}
          date={item.date}
          dateClassName="timeline-date"
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
  );
};

export default TimelineExperience;
