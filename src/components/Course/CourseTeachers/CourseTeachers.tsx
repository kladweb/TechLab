import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import {
  StyledCourseTeachers,
  StyledCourseTeachersContainer,
  StyledCourseTeachersText,
  StyledCourseTeachersCards,
  StyledCourseTeachersCardsContainerButton,
  StyledCourseTeachersCardsButton,
} from "./StyledCourseTeachers";
import ArrowRight from "../../../assets/img/lineRightDir.svg";

export const CourseTeachers = () => {
  return (
    <StyledCourseTeachers>
      <StyledContainer>
        <StyledCourseTeachersContainer>
          <StyledFrameHeader>
            Meet<span>your team</span>
          </StyledFrameHeader>
          <StyledFrameText $black>
            Get to know the course instructors.
          </StyledFrameText>
          <StyledCourseTeachersText>
            On the Mentors page, you can purchase a consultation with each of
            our mentors.
          </StyledCourseTeachersText>
        </StyledCourseTeachersContainer>
        <StyledCourseTeachersCards></StyledCourseTeachersCards>
        <StyledCourseTeachersCardsContainerButton>
          <StyledCourseTeachersCardsButton>
            Go to the mentors' page <img src={ArrowRight} alt="arrow"></img>
          </StyledCourseTeachersCardsButton>
        </StyledCourseTeachersCardsContainerButton>
      </StyledContainer>
    </StyledCourseTeachers>
  );
};
