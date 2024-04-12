import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  StyledContainer,
  StyledFrameHeader,
  StyledSectionSeparator,
} from "../../styledConstants";
import Accordeon from "../Accordeon/Accordeon";
import { StyledQuestions, StyledQuestionsText } from "./styledQuestions";
import { backgroundColor } from "../../styledConstantsColors";

const ourAccordeonData = [
  {
    title: "Who teaches you?",
    content:
      "At TechLab, we take pride in our team of experts who are dedicated to nurturing the next generation of tech professionals. Our experts are not just educators; they are industry practitioners, thought leaders, and mentors, committed to providing students with the knowledge and skills needed to excel in the dynamic world of technology.",
  },
  {
    title: "How are online courses taught?",
    content:
      "Over 30 courses across 3 domains that will help you master the profession under the guidance of attentive educators. Intermediate assignments, teamwork, and individual support from our teachers.",
  },
  {
    title: "How to save money on education?",
    content:
      "If you have basic knowledge, you can purchase only the lesson sets that are relevant to you\nWhat should I do if the course doesn't suit me?\nIf the course doesn't suit you, you can consider exploring alternative  learning options or seeking a refund if available.\nAdditionally,  reaching out to the course instructor or provider for guidance or  clarification may help address any concerns or difficulties you're  experiencing.",
  },
  {
    title: "What should I do if the course doesn't suit me?",
    content:
      "If the course doesn't suit you, you can consider exploring alternative  learning options or seeking a refund if available.\nAdditionally,  reaching out to the course instructor or provider for guidance or  clarification may help address any concerns or difficulties you're  experiencing.",
  },
  {
    title: "How often do courses start?",
    content:
      "If you missed the coveted course, we recommend signing up for the next  cohort as soon as possible. New courses are typically offered  approximately every three months.",
  },
];

const QuestionsLayout = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledQuestions>
        <StyledContainer>
          <div>
            <StyledFrameHeader>
              Have a <span>question?</span> We have an answer.
            </StyledFrameHeader>
            <StyledQuestionsText $black>
              If you didn't find the answer to your question, you can contact us
              through the <a href="#feedback">feedback form</a>, and we will
              respond within 24 hours.
            </StyledQuestionsText>
          </div>
          <Accordeon accordeonData={ourAccordeonData} isBlack={true} />
        </StyledContainer>
      </StyledQuestions>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={backgroundColor.black}
        ></StyledSectionSeparator>
      )}
    </>
  );
};

export default QuestionsLayout;
