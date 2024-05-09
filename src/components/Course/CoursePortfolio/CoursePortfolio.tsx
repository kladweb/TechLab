import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
  StyledSectionSeparator,
} from "../../../styledConstants";
import { StyledCoursePotfolio } from "./StyledCoursePortfolio";
import avatarka from "../../../assets/img/avatarkaWomanCoursePage.png";
import project1 from "../../../assets/img/projects1.png";
import project2 from "../../../assets/img/projects2.png";
import project3 from "../../../assets/img/projects3.png";
import project4 from "../../../assets/img/projects4.png";
import project5 from "../../../assets/img/projects5.png";
import project6 from "../../../assets/img/projects6.png";
import project7 from "../../../assets/img/projects7.png";
import project8 from "../../../assets/img/projects8.png";
import project9 from "../../../assets/img/projects9.png";
import project10 from "../../../assets/img/projects10.png";
import project11 from "../../../assets/img/projects11.png";
import project12 from "../../../assets/img/projects12.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { backgroundColor } from "../../../styledConstantsColors";

export const projects = [
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project1,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project2,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project3,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project4,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project5,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project6,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project7,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project8,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project9,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project10,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project11,
  },
  {
    avararka: avatarka,
    title: "Anna Deriega - UX/UI design Protect card mobile animation",
    image: project12,
  },
];

export const CoursePortfolio = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledCoursePotfolio>
        <StyledContainer>
          <StyledFrameHeader>
            <span>Projects</span> of our graduates
          </StyledFrameHeader>
          <StyledFrameText $black={false}>
            Hundreds of our students have started rewarding careers with great
            companies.
          </StyledFrameText>
        </StyledContainer>
      </StyledCoursePotfolio>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={backgroundColor.champagne}
        ></StyledSectionSeparator>
      )}
    </>
  );
};
