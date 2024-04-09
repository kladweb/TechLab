import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Accordeon from "../Accordeon/Accordeon";
import {
  StyledExpectation,
  StyledExpectationText,
  StyledH2,
} from "./styledExpectationLayout";
import {
  StyledContainer,
  StyledFlex,
  StyledSectionSeparator,
} from "../../styledConstants";
import { backgroundColor } from "../../styledConstantsColors";

const ExpectationLayout = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledSectionSeparator
        $background={backgroundColor.black}
      ></StyledSectionSeparator>
      <StyledExpectation>
        <StyledContainer>
          <StyledH2>What to expect from courses</StyledH2>
          {width > 480 ? (
            <StyledFlex>
              <StyledExpectationText>
                Our school provides a wide range of learning options. You can
                study in groups, individually, purchase lessons, or seek
                assistance from a mentor.
              </StyledExpectationText>
              <Accordeon isBlack={false} />
            </StyledFlex>
          ) : (
            <>
              <StyledExpectationText>
                Our school provides a wide range of learning options. You can
                study in groups, individually, purchase lessons, or seek
                assistance from a mentor.
              </StyledExpectationText>
              <Accordeon isBlack={false} />
            </>
          )}
        </StyledContainer>
      </StyledExpectation>
    </>
  );
};

export default ExpectationLayout;
