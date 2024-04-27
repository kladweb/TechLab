import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import { StyledCourseSelectionContainer } from "./StyledCourseSelection";
export const CourseSelection = () => {
  return (
    <StyledCourseSelectionContainer>
      <StyledContainer>
        <StyledFrameHeader>
          <span>Choose or create</span>your course
        </StyledFrameHeader>
        <StyledFrameText $black>
          You can choose the most suitable learning format with us.
          <br />
          Also to see if online learning works for you, try out our free
          lessons.
        </StyledFrameText>
      </StyledContainer>
    </StyledCourseSelectionContainer>
  );
};
