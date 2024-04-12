import styled from "styled-components";
import { backgroundColor, typographyColor } from "../../styledConstantsColors";

export const StyledAccordeon = styled.ul`
  width: 793px;
  min-height: 560px;
  margin: 0 auto;
  background-color: transparent;
  @media (max-width: 1023.5px) {
    width: 620px;
  }
  @media (max-width: 767.5px) {
    width: 434px;
  }
  @media (max-width: 479.5px) {
    width: 100%;
    // padding-right: 16px;
  }
`;
export const StyledAccordeonPanel = styled.div<{
  $isOpen: boolean;
  $blackAcc?: boolean;
}>`
  width: 100%;
  position: relative;
  cursor: pointer;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  color: ${(props) =>
    props.$blackAcc
      ? typographyColor.lightBG.black
      : typographyColor.darkBG.white};
  border-bottom: ${(props) =>
    props.$isOpen
      ? "none"
      : `1px solid ${
          props.$blackAcc
            ? typographyColor.lightBG.darkGray
            : typographyColor.darkBG.white
        }`};
  transition: color 0.5s;
  &:hover {
    color: ${typographyColor.lightBG.darkGray};
  }

  & div {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
  }
  @media (max-width: 1439.5px) {
    & h3 {
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media (max-width: 1023.5px) {
    & h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }
  @media (max-width: 767.5px) {
    & h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
      letter-spacing: 0.36px;
    }
  }
  @media (max-width: 479.5px) {
    & h3 {
      font-weight: 500;
    }
  }
  & button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  & img {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    transform: rotate(${(props) => (props.$isOpen ? "-45deg" : "0deg")});
  }
  @media (max-width: 1023.5px) {
    & button {
      width: 24px;
      height: 24px;
    }
    & img {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: 767.5px) {
    & button {
      width: 18px;
      height: 18px;
    }
    & img {
      width: 18px;
      height: 18px;
    }
  }
`;
export const StyledAccordeonContent = styled.li<{
  $isOpen?: boolean;
  $blackAcc?: boolean;
}>`
  white-space: pre-wrap;
  padding: 20px 30px;
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
  color: ${(props) =>
    props.$blackAcc
      ? typographyColor.lightBG.black
      : typographyColor.darkBG.white};
  @media (max-width: 1439.5px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
  @media (max-width: 1023.5px) {
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }
  @media (max-width: 767.5px) {
    line-height: 22px;
  }
  @media (max-width: 479.5px) {
    margin-right: 16px;
  }
`;

export const StyledAccordeonCollapse = styled.div<{
  $isOpen?: boolean;
  $blackAcc?: boolean;
}>`
  height: ${(props) => (props.$isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.5s;
  background-color: ${(props) =>
    props.$blackAcc ? backgroundColor.violet5 : backgroundColor.violet20};
  border-radius: 16px;
`;
