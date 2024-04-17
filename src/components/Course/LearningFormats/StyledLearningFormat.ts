import styled from "styled-components";
import { colors } from "../../../styledConstantsColors";

export const StyledLearningContainer = styled.div`
  height: 715px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLearningWrap = styled.div`
  width: 1224px;
  display: flex;
  justify-content: space-between;
`;

export const StyledLearningFormatContainer = styled.div`
  width: 100%;
  height: 495px;
  border: 1px solid black;
`;

export const StyledLearningSubtitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: ${colors.neutral.darkBlack};
  margin: 16px 0 9px 0;

  & span {
    color: ${colors.brand.violet};
  }
`;

export const StyledLearningSubtitleText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
  color: ${colors.brand.violet};
`;

export const StyledLearningList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLearningFormatItem = styled.div``;
export const StyledLearningFormatItemTitle = styled.div``;
export const StyledLearningFormatList = styled.div``;
export const StyledLearningFormatListItem = styled.div``;
