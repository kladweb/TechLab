import { StyledFrameHeader } from "../../../styledConstants";
import {
  StyledLearningContainer,
  StyledLearningFormatContainer,
  StyledLearningWrap,
  StyledLearningSubtitle,
  StyledLearningSubtitleText,
  StyledLearningList,
} from "./StyledLearningFormat";
import { LearningItem } from "./LearningItem";
import Accordeon from "../../Accordeon/Accordeon";

const learningFormatList = [
  {
    title: "Learning in Group",
    links: [
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
    links: [
      "Flexible learning format",
      "Online video lessons",
      "Course upgrade",
    ],
  },
  {
    title: "Unit of lessons",
    links: [
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
            <StyledLearningList>
              {learningFormatList.map((item) => (
                // <LearningItem
                //   key={item.title}
                //   title={item.title}
                //   links={item.links}
                // ></LearningItem>
                <Accordeon
                  key={item.title}
                  accordeonData={item}
                  isBlack={true}
                />
              ))}
            </StyledLearningList>
          </StyledLearningFormatContainer>
        </StyledLearningWrap>
      </StyledLearningContainer>
    </>
  );
};
