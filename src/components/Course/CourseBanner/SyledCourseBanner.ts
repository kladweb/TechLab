import styled from "styled-components";
import { colors, typographyGradient } from "../../../styledConstantsColors";
// <{ isFixed: boolean }>
export const StyledCourseContainer = styled.div`
  height: 471px;
  display: flex;
  justify-content: center;
  background: ${typographyGradient.G1};
`;

export const StyledCourseWrap = styled.div`
  width: 1224px;
  display: flex;
  justify-content: space-between;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const StyledCourseBannerText = styled.div`
  display: flex;
  width: 600px;
  height: 262px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 107.143% */
  letter-spacing: 1.68px;
  color: ${colors.neutral.white};
  margin: 77px 0 0 0;
`;
