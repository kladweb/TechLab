import styled from "styled-components";
import { colors, typographyColor } from "../../../styledConstantsColors";

export const StyledSchoolContainer = styled.div`
  height: 368px;
  background: ${colors.shades.violet6};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSchoolWrap = styled.div`
  height: 148px;
  width: 1224px;
  display: flex;
  justify-content: space-between;
`;

export const StyledBenefitContainer = styled.div`
  height: 148px;
  width: 288px;
`;

export const StyledBenefitTitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  color: ${typographyColor.lightBG.violet};
  margin-bottom: 20px;
`;

export const StyledBenefitText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
  color: ${colors.neutral.darkBlack};
`;
