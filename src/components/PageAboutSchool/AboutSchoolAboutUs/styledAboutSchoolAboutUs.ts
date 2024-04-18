import styled from "styled-components";
import { backgroundColor, colors } from "../../../styledConstantsColors";

export const StyledAboutUsBlock = styled.div<{ $isRunlineClosed: boolean }>`
  width: 100%;
  padding: 100px 0 120px;
  margin-top: ${props => props.$isRunlineClosed ? '116px' : '166px'};
  background: #FFF;
  scroll-margin-top: ${props => props.$isRunlineClosed ? '-20px' : '30px'};

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

export const StyledAboutSubTitle = styled.h4`
  margin: 50px 0 24px;
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;

  @media (max-width: 1439.5px) {
    margin: 40px 0 16px;
    font-size: 26px;
    line-height: 36px; /* 138.462% */
    letter-spacing: 1.04px;
  }

  @media (max-width: 1023.5px) {
    margin: 24px 0 10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
  }

  @media (max-width: 767.5px) {
    margin: 20px 0 10px;
    font-size: 20px;
    line-height: 26px; /* 130% */
  }

  @media (max-width: 479.5px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px; /* 127.273% */
  }
`

export const StyledWelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: 1439.5px) {
    gap: 20px;
  }

  @media (max-width: 1023.5px) {
    gap: 16px;
  }

  @media (max-width: 767.5px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }

  @media (max-width: 479.5px) {
    gap: 10px;
  }
`

export const StyledWelcomeText = styled.div<{ $width: string }>`
  width: ${props => props.$width};
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  letter-spacing: 0.56px;

  @media (max-width: 1439.5px) {
    font-size: 18px;
    line-height: 27px; /* 150% */
    letter-spacing: 0.36px;
  }

  @media (max-width: 1023.5px) {
    width: ${props => props.$width === '100%' ? props.$width : '48.9%'};
    font-size: 20px;
    font-weight: 300;
    line-height: 24px; /* 120% */
    letter-spacing: 0.6px;
  }

  @media (max-width: 767.5px) {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`

export const StyledWelcomeImage = styled.img`
  width: 57.5%;
  height: 408px;
  transform: scale(-1, 1);
  object-fit: cover;
  object-position: 50% 54%;
  border-radius: 50px;

  @media (max-width: 1439.5px) {
    height: 285px;
    object-position: 50% 43%;
  }

  @media (max-width: 1023.5px) {
    width: 48.9%;
    height: 307px;
  }

  @media (max-width: 767.5px) {
    width: 100%;
    min-width: 320px;
    height: 240px;
    flex: 1 0 0;
    align-self: stretch;
    object-position: 50% 36%;
  }

  @media (max-width: 479.5px) {
    height: 240px;
    object-position: 50% 50%;
  }
`

export const StyledWillFindTitle = styled.h4`
  margin: 0;
  width: 49%;
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;

  @media (max-width: 1439.5px) {
    width: 400px;
    font-size: 26px;
    line-height: 36px; /* 138.462% */
    letter-spacing: 1.04px;
  }

  @media (max-width: 1023.5px) {
    width: 360px;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
  }

  @media (max-width: 767.5px) {
    width: 100%;
    font-size: 20px;
    line-height: 26px; /* 130% */
  }

  @media (max-width: 479.5px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px; /* 127.273% */
  }
`

export const StyledWillFindContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  @media (max-width: 1439.5px) {
    margin-top: 40px;
    gap: 20px;
  }

  @media (max-width: 1023.5px) {
    margin-top: 24px;
    gap: 16px;
  }

  @media (max-width: 767.5px) {
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    align-self: stretch;
    flex-wrap: wrap;
  }

  @media (max-width: 479.5px) {
    flex-direction: column;
  }
`

export const StyledFindElementsContainer = styled.div`
  width: 49%;
  display: flex;
  align-items: stretch;
  gap: 24px;
  flex: 1 0 0;

  @media (max-width: 1439.5px) {
    width: 57.4%;
    gap: 20px;
  }

  @media (max-width: 1023.5px) {
    width: auto;
  }

  @media (max-width: 767.5px) {
    width: 440px;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }

  @media (max-width: 479.5px) {
    width: 100%;
    gap: 10px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`

export const StyledYellowCard = styled.div`
  display: flex;
  width: 184px;
  height: 128px;
  padding: 8px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  border-radius: 20px;
  background: ${backgroundColor.yellow};

  @media (max-width: 1439.5px) {
    width: 140px;
    height: 88px;
    padding: 12px 24px;
  }

  @media (max-width: 1023.5px) {
    border-radius: 14px;
    width: 74px;
    height: 60px;
    padding: 6px 10px;
  }

  @media (max-width: 767.5px) {
    width: 136px;
    height: 67px;
    padding: 4px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  @media (max-width: 479.5px) {
    width: 100px;
    align-self: stretch;
  }
`

export const StyledWhatYouFindName = styled.p`
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */

  @media (max-width: 1439.5px) {
    line-height: 24px; /* 133.333% */
  }

  @media (max-width: 1023.5px) {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px; /* 114.286% */
  }

  @media (max-width: 767.5px) {
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.28px;
  }

  @media (max-width: 479.5px) {
    line-height: 20px; /* 142.857% */
  }
`

export const StyledWhatYouFindAmount = styled.p`
  color: ${colors.neutral.darkBlack};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;

  @media (max-width: 1439.5px) {
    font-size: 26px;
    line-height: 36px; /* 138.462% */
    letter-spacing: 1.04px;
  }

  @media (max-width: 1023.5px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }

  @media (max-width: 767.5px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px; /* 130% */
  }

  @media (max-width: 479.5px) {
    font-size: 18px;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.36px;
  }
`