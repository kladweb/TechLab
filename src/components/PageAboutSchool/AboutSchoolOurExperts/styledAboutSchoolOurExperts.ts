import styled from "styled-components";
import { backgroundColor, hoverBtnColor } from "../../../styledConstantsColors";

export const StyledAboutSchoolOurExperts = styled.div<{ $isRunlineClosed: boolean }>`
  width: 100%;
  padding: 100px 0 120px;
  background: ${backgroundColor.champagne};
  scroll-margin-top: ${props => props.$isRunlineClosed ? '-10px' : '50px'};

  @media (max-width: 1439.5px) {
    padding: 80px 0 100px;
    scroll-margin-top: 30px;
  }

  @media (max-width: 1023.5px) {
    padding: 60px 0 80px;
    scroll-margin-top: 50px;
  }

  @media (max-width: 767.5px) {
    padding: 50px 0 70px;
    scroll-margin-top: 40px;
  }
`

export const StyledDescriptionsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`

export const StyledDescription = styled.p`
  color: #000;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
`

export const StyledMentorsHead = styled.h4`
  margin-top: 40px;
  color: #000;
  font-family: Raleway;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  letter-spacing: 0.56px;
  text-align: left;

  & span {
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: 1.6px;
  }
`

export const StyledMentorCardsContainer = styled.div<{ $isRunlineClosed: boolean }>`
  margin: 24px 0 16px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;
  scroll-margin-top: ${props => props.$isRunlineClosed ? '70px' : '130px'};
`

export const StyledViewMoreBtn = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  cursor: pointer;

  & svg {
    transform: translateY(-2px);
    fill: #111;
    width: 32px;
    height: 32px;
    transition: all 0.5s ease-out;
  }

  @media (hover: hover) {
    &:hover {
      p {
        color: ${hoverBtnColor.violet};
      }

      svg {
        fill: ${hoverBtnColor.violet};
      }
    }
  }
`

export const StyledViewMoreText = styled.p`
  margin-right: 12px;
  color: #111;
  text-align: center;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px; /* 125% */
  transition: all 0.5s ease-out;
`