import styled from "styled-components";
import { StyledFrameText } from "../../styledConstants";
import { backgroundColor } from "../../styledConstantsColors";

export const StyledQuestions = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 100px 0px 120px 0px;
  border-radius: 0px 0px 80px 80px;
  background: ${backgroundColor.champagne};
`;

export const StyledQuestionsText = styled(StyledFrameText)`
  // расширение стиля
  width: 1043px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  // @media (max-width: 1440px) {

  // }
  @media (max-width: 1439.5px) {
    width: 934px;
    font-size: 20px;
    line-height: 26px;
  }
  @media (max-width: 1023.5px) {
    width: 614px;
    font-weight: 500;
    line-height: 24px;
  }
  @media (max-width: 767.5px) {
    width: 435px;
    font-weight: 300;
    line-height: 26px;
  }
  @media (max-width: 479.5px) {
    width: 320px;
    font-size: 18px;
    line-height: 24px;
  }
`;
