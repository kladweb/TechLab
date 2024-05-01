import styled from "styled-components";
import { backgroundColor, colors } from "../../../styledConstantsColors";

export const StyledMentorInfo = styled.div`
  padding: 100px 0 120px 0;
  background: ${backgroundColor.champagne};
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
`

export const StyledInfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`

export const StyledInfoImage = styled.img`
  width: 496px;
  height: 491px;
`

export const StyledInfoMain = styled.div`
  display: flex;
  width: 704px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`

export const StyledTextContainer = styled.div`
  display: flex;
  width: 704px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export const StyledTextInfo = styled.p`
  color: ${colors.neutral.darkBlack};;
  font-family: Raleway;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  letter-spacing: 0.56px;
`