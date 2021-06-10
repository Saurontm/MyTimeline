import "react-vertical-timeline-component/style.min.css";
import TimeLine from "./TimeLine";
import { Title, Subtitle } from "../styles";

const HomePage = () => {
  return (
    <div>
      <Title>Sarah's life</Title>
      <Subtitle>A timeline of some of Sarah's favorite years</Subtitle>
      <TimeLine />
    </div>
  );
};

export default HomePage;
