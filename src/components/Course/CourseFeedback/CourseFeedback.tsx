import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import {
  StyledCourseFeedback,
  StyledCourseFeedbackTitle,
} from "./StyledCourseFeedback";

export const feedbacks = [
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
  {
    stars: 4,
    avatar: "",
    text: "",
    name: "",
    place: "",
  },
];

export const CourseFeedback = () => {
  return (
    <StyledCourseFeedback>
      <StyledContainer>
        <StyledCourseFeedbackTitle>
          <StyledFrameHeader>
            Students<span>who got a job</span>in UX/UI
          </StyledFrameHeader>
          <StyledFrameText $black>
            With a true international community of students and mentors, we are
            proud to be a diverse and highly rated group of UX professionals
          </StyledFrameText>
        </StyledCourseFeedbackTitle>
      </StyledContainer>
    </StyledCourseFeedback>
  );
};
