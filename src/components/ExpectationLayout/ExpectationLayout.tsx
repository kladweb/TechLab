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

const ourAccordeonData = [
  {
    title: "Course enrollment with a group",
    content:
      "Over 50 courses across 3 domains that will help you master the profession under the guidance of attentive educators.  Intermediate assignments, teamwork, and individual support from our teachers.",
  },
  { title: "Self-paced learning", content: "Содержимое строки 2" },
  { title: "Mentored learning", content: "Содержимое строки 3" },
  { title: "Skill enhancement lessons", content: "Содержимое строки 4" },
];

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
              <Accordeon accordeonData={ourAccordeonData} isBlack={false} />
            </StyledFlex>
          ) : (
            <>
              <StyledExpectationText>
                Our school provides a wide range of learning options. You can
                study in groups, individually, purchase lessons, or seek
                assistance from a mentor.
              </StyledExpectationText>
              <Accordeon accordeonData={ourAccordeonData} isBlack={false} />
            </>
          )}
        </StyledContainer>
      </StyledExpectation>
    </>
  );
};

export default ExpectationLayout;
