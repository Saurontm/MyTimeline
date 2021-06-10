import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EventTitle, EventContent } from "../styles";

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
      <EventTitle className="vertical-timeline-element-title">
        {props.year.eventTitle}
      </EventTitle>
      <EventContent>{props.year.event}</EventContent>
    </VerticalTimelineElement>
  );
};

export default Year;
