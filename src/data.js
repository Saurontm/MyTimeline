import {
  FaBirthdayCake,
  FaBaby,
  FaNotesMedical,
  FaGraduationCap,
  FaTooth,
  FaUniversity,
} from "react-icons/fa";

import { BiGlasses } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { GiDeathSkull } from "react-icons/gi";

const years = [
  {
    year: "1997",
    eventTitle: "Birthday",
    event: "Sarah was born at 1:00am on the second of December in 1997",
    color: "#E91E63",
    icon: <FaBirthdayCake />,
  },
  {
    year: "2000",
    eventTitle: "Became a sister",
    event:
      "Sarah's only brother, Yousef, was born on the second of October in the year 2000",
    color: "#C2185B",
    icon: <FaBaby />,
  },
  {
    year: "2002",
    eventTitle: "Removed tonsils",
    event:
      "The tonsils (palatine tonsils) are a pair of soft tissue masses located at the rear of the throat (pharynx). Sarah had to go through surgery because she kept getting sick and had recurrent tonsillitis (inflammation of the tonsils).",
    color: "#9C27B0",
    icon: <FaNotesMedical />,
  },
  {
    year: "2008",
    eventTitle: "Started wearing glasses",
    event:
      "This was the year Sarah found out that she can't see very well and went to the eye doctor for the first time. Her mom said it was from playing video games but the doctor said 'malah sh'3l, hatha weratha'. Today Sarah wears -2.00 and -2.75 lenses.",
    color: "#5727B0",
    icon: <BiGlasses />,
  },
  {
    year: "2009",
    eventTitle: "Met her Best friend",
    event:
      "Sarah met her best friend in the 7th grade. Til today, they are the bestest friends in the whole wide world, even after having to go to separate highschools and universities.",
    color: "#272AB0",
    icon: <AiFillHeart />,
  },
  {
    year: "2015",
    eventTitle: "Got into University",
    event:
      "In 2015, Sarah graduated from her highschool and joined Kuwait Univeristy and fell in love with her major, computer engineering.",
    color: "#276BB0",
    icon: <FaUniversity />,
  },
  {
    year: "2019",
    eventTitle: "Capstone project",
    event:
      "Sarah finally took the courses 395 and 495 to work on her senior capstone project. Her proud work was an iOS application aiding specialized schools for children with cochlear implants, with the help of automation, child-friendly interfaces and machine learning.",
    color: "#57ACDC",
    icon: <GiDeathSkull />,
  },
  {
    year: "2020",
    eventTitle: "4 wisdom teeth removals",
    event:
      "You read that right, not one, not two or three, but ALL 4 TEETH were extracted in one sitting. She didn't know what she was thinking.",
    color: "#57DCBE",
    icon: <FaTooth />,
  },
  {
    year: "2021",
    eventTitle: "Graduated from uni",
    event:
      "Finally Sarah got her Bachelor's in Computer Engineering. She also decided to join CODED because she already started missing programming so much.",
    color: "#60C689",
    icon: <FaGraduationCap />,
  },
];

export default years;
