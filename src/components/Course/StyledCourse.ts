import styled from "styled-components";
import { colors, gradient } from "../../styledConstantsColors";
import lineLeft from "../../assets/img/lineLeft.png";
import lineRight from "../../assets/img/lineRight.png";

export const StyledMainInfoWrap = styled.div<{ $isClosedRunline: boolean }>`
  position: relative;
  padding: ${(props) =>
    props.$isClosedRunline ? "188px 0 100px" : "238px 0 100px"};
  background: ${gradient.violetDark};
  border-radius: 0px 0px 80px 80px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background: url(${lineLeft});
    background-repeat: no-repeat;
    top: 78px;
    left: 0;
    width: 50%;
    height: 100%;

    @media (max-width: 1439.5px) {
      width: 43%;
      left: -60px;
    }
    @media (max-width: 1023.5px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    transform: rotate(360deg);
    background: url(${lineRight});
    background-repeat: no-repeat;
    top: 78px;
    right: 0;
    width: 50%;
    height: 100%;

    @media (max-width: 1439.5px) {
      width: 57%;
    }
    @media (max-width: 767.5px) {
      width: 100%;
      top: 160px;
      right: 125px;
    }
    @media (max-width: 479.5px) {
      display: none;
    }
  }
  @media (max-width: 1439.5px) {
    padding: ${(props) =>
      props.$isClosedRunline ? "128px 0 75px" : "163px 0 75px"};
  }
  @media (max-width: 1024px) {
    padding: ${(props) =>
      props.$isClosedRunline ? "132px 0 89px" : "174px 0 89px"};
    border-radius: 0px 0px 0px 0px;
  }
  @media (max-width: 767.5px) {
    padding: ${(props) =>
      props.$isClosedRunline ? "104px 0 52px" : "146px 0 52px"};
  }
  @media (max-width: 479.5px) {
    padding: ${(props) =>
      props.$isClosedRunline ? "124px 0 67px" : "158px 0 67px"};
  }
`;

export const StyledInfoWrap = styled.div`
  position: relative;
  z-index: 2;
`;

export const StyledTitle = styled.h2`
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  line-height: 80px;
  color: ${colors.brand.violet};
`;
