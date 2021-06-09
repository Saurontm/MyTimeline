import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import years from "../data";
import Year from "./Year";

const TimeLine = () => {
  const timeLine = years.map((year) => <Year year={year} />);
  return <VerticalTimeline> {timeLine} </VerticalTimeline>;
};

export default TimeLine;
