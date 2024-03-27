import styled from "styled-components";
import {
  backgroundColor,
  typographyColor,
  typographyGradient,
} from "../../styledConstantsColors";

export const StyledExpectation = styled.div`
  position: relative;
  width: 100%;
  padding: 180px 0 120px;
  /* padding: 180px 251px 120px 251px; - паддинги из макета */
  border-radius: 0px 0px 80px 80px;
  background: ${backgroundColor.black};
  @media (max-width: 767.5px) {
    padding-top: 60px;
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledExpectationText = styled.p`
  max-width: 413px;
  margin: 30px 20px auto auto;
  padding-right: 30px;
  color: ${typographyColor.darkBG.white};
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  @media (max-width: 1439.5px) {
    font-size: 18px;
    line-height: 27px; /* 150% */
    letter-spacing: 0.36px;
  }
  @media (max-width: 1023.5px) {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
  }
  @media (max-width: 767.5px) {
    max-width: 254px;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledH2 = styled.h2`
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
  line-height: 60px; /* 107.143% */
  letter-spacing: 1.68px;
  background: ${typographyGradient.G3};
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 1439.5px) {
    font-size: 36px;
    line-height: 45px; /* 125% */
    letter-spacing: 1.08px;
  }
  @media (max-width: 1023.5px) {
    font-size: 40px;
    line-height: 48px; /* 120% */
    letter-spacing: 1.2px;
  }
  @media (max-width: 767.5px) {
    font-size: 30px;
    line-height: 32px;
  }
`;
