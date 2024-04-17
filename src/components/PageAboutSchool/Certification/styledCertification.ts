import styled from "styled-components";
import { backgroundColor, colors } from "../../../styledConstantsColors";

export const StyledCertificationBlock = styled.div<{ $isRunlineClosed: boolean }>`
  width: 100%;
  padding: 100px 0 120px;
  background: ${backgroundColor.white};
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
export const StyledCertificateContainer = styled.div`
  display: flex;
  width: 1224px;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const StyledFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`

export const StyledFeatureContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

export const StyledFeatureName = styled.div`
  color: #000;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
`

export const StyledFeatureDescription = styled.div`
  color: ${colors.neutral.darkGray};
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
`

export const StyledCertificateImage = styled.img`
  border-radius: 20px;
`