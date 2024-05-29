import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import { useState } from "react";
import { SelectGroup } from "../CourseWorks/SelectGroup";
import {
  StyledCourseSelectionContainer,
  StyledCourseSelectionArea,
} from "./StyledCourseSelection";

const CourseSelect = ["Group", "Self-paced", "Customize the course"];

export const CourseSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <StyledCourseSelectionContainer>
      <StyledContainer>
        <StyledFrameHeader>
          <span>Choose or create</span> your course
        </StyledFrameHeader>
        <StyledFrameText $black>
          You can choose the most suitable learning format with us.
          <br />
          Also to see if online learning works for you, try out our free
          lessons.
        </StyledFrameText>
        <StyledCourseSelectionArea>
          <SelectGroup
            words={CourseSelect}
            goToIndex={goToIndex}
            activeIndex={currentIndex}
          />
        </StyledCourseSelectionArea>
      </StyledContainer>
    </StyledCourseSelectionContainer>
  );
};
