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
  { title: "How are online courses taught?", content: "Содержимое строки 2" },
  { title: "How to save money on education?", content: "Содержимое строки 3" },
  {
    title: "What should I so if I don’t like the course?",
    content: "Содержимое строки 4",
  },
  { title: "How often courses start?", content: "Содержимое строки 4" },
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
