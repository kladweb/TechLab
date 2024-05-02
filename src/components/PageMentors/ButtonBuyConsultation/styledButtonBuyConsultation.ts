import styled from "styled-components";
import { backgroundColor, buttonGradient, colors, } from "../../../styledConstantsColors";

export const StyledButtonBuy = styled.button<{ $buyBackground: string[] }>`
  position: relative;
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${props => props.$buyBackground[1]};
  border: ${props => (props.$buyBackground[0] === backgroundColor.champagne) ? '1px solid #111' : 'none'};
  transition: background-color 0.5s ease-in-out;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-image: ${props => props.$buyBackground[0]};
    border-radius: 100px;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    background-color: ${props => props.$buyBackground[2]};
  }

  &:hover:before {
    opacity: ${props => (props.$buyBackground[0] === buttonGradient.orange) ? 0 : 'unset'};
  }
  
  & p {
    color: ${colors.neutral.darkBlack};
    transition: color 0.5s ease-in-out;
  }

  &:hover p {
    color: ${colors.neutral.darkBlack};
    color: ${props => (props.$buyBackground[0] === backgroundColor.champagne) ? colors.neutral.white : 'unset'};
  }
  
`

export const StyledButtonText = styled.p`
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  z-index: 1;
`