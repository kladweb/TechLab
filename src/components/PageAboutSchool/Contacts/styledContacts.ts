import styled from "styled-components";
import { backgroundColor, colors } from "../../../styledConstantsColors";

export const StyledContactsBlock = styled.div<{ $isRunlineClosed: boolean }>`
  width: 100%;
  padding: 100px 0 120px;
  background: ${backgroundColor.champagne};
  scroll-margin-top: ${props => props.$isRunlineClosed ? '120px' : '160px'};

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

export const StyledContactsElements = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const StyledContactsElement = styled.div`
  display: flex;
  width: 288px;
  flex-direction: column;
  align-items: center;
`

export const StyledContactItem = styled.p`
  color: ${colors.neutral.darkBlack};
  text-align: center;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px; /* 125% */

  @media (max-width: 1439.5px) {
    
  }

  @media (max-width: 1023.5px) {
    
  }

  @media (max-width: 767.5px) {
    
  }

  @media (max-width: 479.5px) {
    
  }
`

export const StyledContactName = styled.p`
  color: ${colors.neutral.darkGray};
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
`