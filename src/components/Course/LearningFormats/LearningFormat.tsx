import { StyledFrameHeader } from "../../../styledConstants";
import {
  StyledLearningContainer,
  StyledLearningFormatContainer,
  StyledLearningWrap,
  StyledLearningSubtitle,
  StyledLearningSubtitleText,
} from "./StyledLearningFormat";

const learningFormatList = [
  {
    title: "Learning in Group",
    list: [
      "Interactive group learning",
      "Personal сhat support",
      "Online video lessons",
      "Community",
      "Personal consultation with mentor",
      "Professional diploma",
    ],
  },
  {
    title: "Self-paced learning",
    list: [
      "Flexible learning format",
      "Online video lessons",
      "Course upgrade",
    ],
  },
  {
    title: "Unit of lessons",
    list: [
      "Create your ideal course",
      "Flexible learning format",
      "Online video lessons",
    ],
  },
];

export const LearningFormat = () => {
  return (
    <>
      <StyledLearningContainer>
        <StyledLearningWrap>
          <StyledLearningFormatContainer>
            <StyledFrameHeader>
              Learning <span>formats</span>
            </StyledFrameHeader>
            <StyledLearningSubtitle>
              Buy the complete course or <span>customize</span> the course to
              suit your needs.
            </StyledLearningSubtitle>
            <StyledLearningSubtitleText>
              You can also elevate your professional level with the assistance
              of our mentors.
            </StyledLearningSubtitleText>
          </StyledLearningFormatContainer>
        </StyledLearningWrap>
      </StyledLearningContainer>
    </>
  );
};
