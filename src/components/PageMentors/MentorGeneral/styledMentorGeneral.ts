import styled from "styled-components";
import { backgroundColor, colors } from "../../../styledConstantsColors";

export const StyledMentorGeneral = styled.div<{ $isRunlineClosed: boolean }>`
  margin-top: ${props => props.$isRunlineClosed ? '82px' : '132px'};
  padding: 100px 0 120px 0;
  border-radius: 0 0 80px 80px;
  background: ${backgroundColor.black};

  @media (max-width: 1439.5px) {

  }

  @media (max-width: 1023.5px) {

  }

  @media (max-width: 767.5px) {

  }
`

export const StyledMentorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`

export const StyledMentorInfo = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export const StyledMentorName = styled.h2<{ $mentorColor: string }>`
  color: ${props => props.$mentorColor};
  font-family: Raleway;
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  line-height: 100px; /* 138.889% */
`

export const StyledMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

export const StyledInfoDesc = styled.h4`
  color: ${colors.neutral.white};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;
`

export const StyledInfoExperience = styled.p`
  color: ${colors.neutral.white};
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
`

export const StyledLinkedinLink = styled.a`
  width: min-content;
  height: min-content;
`
export const StyledLinkedin = styled.img`
  width: 48px;
  height: 48px;
`

export const StyledMentorFotoGroup = styled.div<{ $mentorGradient: string }>`
  position: relative;
  width: 588px;
  height: 550px;
  clip-path: url(#myPath);
  background-color: #FFF;

  &::before {
    content: '';
    position: absolute;
    width: 588px;
    height: 550px;
    background: ${props => props.$mentorGradient};
  }
`

export const StyledMentorFoto = styled.img<{ $mentorSizes: number[] }>`
  position: absolute;
  top: ${props => props.$mentorSizes[3] + 'px'};
  left: ${props => props.$mentorSizes[2] + 'px'};
  width: ${props => props.$mentorSizes[0] + 'px'};
  height: ${props => props.$mentorSizes[1] + 'px'};
  flex-shrink: 0;
`