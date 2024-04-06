import styled from "styled-components";
import { colors } from "../../styledConstantsColors";
export const StyledAboutUsBlock = styled.div`
  width: 100%;
  padding: 100px 0 120px;
  background: #FFF;
`

export const StyledAboutSubTitle = styled.h4`
  margin: 50px 0 24px;
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;
`

export const StyledWelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`

export const StyledWelcomeText = styled.div`
  width: 40.5%;
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  letter-spacing: 0.56px;
`

export const StyledWelcomeImage = styled.img`
  width: 57.5%;
  height: 408px;
  transform: scale(-1, 1);
  object-fit: cover;
  object-position: 50% 54%;
  border-radius: 50px;
`