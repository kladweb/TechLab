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
          <Accordeon isBlack={true} />
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
