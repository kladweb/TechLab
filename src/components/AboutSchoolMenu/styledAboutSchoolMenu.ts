import styled from "styled-components";
import { colors, hoverBtnColor } from "../../styledConstantsColors";

export const StyledMenuContainer = styled.div`
  position: relative;
  margin-top: 132px;
  background: ${colors.neutral.white};
  border: 1px solid ${colors.neutral.mediumGray};
`

export const StyledMenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 108px;
`

export const StyledMenuItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  text-align: center;
  vertical-align: middle;

  &:not(:last-child) {
    border-right: 1px solid ${colors.neutral.mediumGray};
  }

  &:hover {
    p {
      color: ${hoverBtnColor.violet};
      transition: 0.6s ease-out;
    }
  }
`

export const StyledMenuName = styled.p`
  color: ${colors.neutral.darkBlack};
  display: inline-block;
  text-align: center;
  font-family: Raleway, serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  transition: 0.6s ease-out;
`
