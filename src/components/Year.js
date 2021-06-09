import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Year = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: props.year.color, color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid " + props.year.color }}
      date={props.year.year}
      iconStyle={{ background: props.year.color, color: "#fff" }}
      icon={props.year.icon}
    >
      <h3 className="vertical-timeline-element-title">
        {props.year.eventTitle}
      </h3>
      <p>{props.year.event}</p>
    </VerticalTimelineElement>
  );
};

export default Year;
