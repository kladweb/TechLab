import styled from "styled-components";
import { colors, hoverBtnColor } from "../../styledConstantsColors";

export const StyledMenuContainer = styled.div`
  position: relative;
  margin-top: 132px;
  background: ${colors.neutral.white};
  border-top: 1px solid ${colors.neutral.mediumGray};
  border-bottom: 1px solid ${colors.neutral.mediumGray};

  @media (max-width: 1439.5px) {
    margin-top: 110px;
  }

  @media (max-width: 1023.5px) {
    margin-top: 106px;
  }

  @media (max-width: 767.5px) {
    margin-top: 90px;
  }

  @media (max-width: 479.5px) {
    margin-top: 90px;
    border: none;
  }
`

export const StyledMenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 108px;

  @media (max-width: 1439.5px) {
    height: 64px;
    justify-content: center;
  }

  @media (max-width: 1023.5px) {
    height: 48px;
    justify-content: space-between;
  }

  @media (max-width: 767.5px) {
    height: 40px;
  }

  @media (max-width: 479.5px) {
    width: calc(100% + 40px);
    margin-left: -20px;
    flex-flow: column wrap;
    height: 64px;
  }
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

  @media (hover: hover) {
    &:hover {
      p {
        color: ${hoverBtnColor.violet};
        transition: 0.6s ease-out;
      }
    }
  }

  @media (max-width: 1439.5px) {
    width: 160px;
  }

  @media (max-width: 1023.5px) {
    width: 25%;
  }

  @media (max-width: 479.5px) {
    width: 50%;
    height: 32px;
    border-bottom: 1px solid ${colors.neutral.mediumGray};

    &:not(:last-child) {
      border-right: none;
    }

    &:nth-child(1), &:nth-child(2) {
      border-right: 1px solid ${colors.neutral.mediumGray};
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

  @media (max-width: 1439.5px) {
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.32px;
  }

  @media (max-width: 1023.5px) {
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  @media (max-width: 767.5px) {
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.28px;
  }

  @media (max-width: 479.5px) {
    line-height: 20px; /* 142.857% */
  }
`
