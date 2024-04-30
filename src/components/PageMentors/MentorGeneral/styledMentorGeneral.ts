import styled from "styled-components";
import { backgroundColor, colors, gradient, typographyColor, typographyGradient } from "../../../styledConstantsColors";
import backgroundMentor from "../../../assets/img/backgrounds/Ellipse_violet2.svg";

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

export const StyledMentorName = styled.h2`
  color: ${typographyColor.darkBG.violet};
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

export const StyledLinkedin = styled.img`
  width: 48px;
  height: 48px;
`

export const StyledButtonBuy = styled.button`
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${typographyGradient.G1};
`

export const StyledButtonText = styled.p`
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
`

export const StyledMentorFotoGroup = styled.div`
  width: 588px;
  height: 550px;
  //position: relative;
  //overflow: hidden;
  clip-path: url(#myPath);
  background: ${gradient.violetLight};

  // & svg {
  //   //position: absolute;
  //   //z-index: 0;
    //     //fill: ${colors.neutral.white};
  // }
  //


`

export const StyledMentorFoto = styled.img`
  position: relative;
  top: 13px;
  left: 53px;
  width: 560px;
  height: 594px;
  flex-shrink: 0;
  //z-index: 2;
  //background-color: aqua;
  
`

// export const StyledMentorBackground = styled.object`
//   position: absolute;
//   width: 588px;
//   height: 550px;
//   flex-shrink: 0;
//
//   & svg {
//     width: 100%;
//     height: 100%;
//     fill: wheat !important;
//   }
// `