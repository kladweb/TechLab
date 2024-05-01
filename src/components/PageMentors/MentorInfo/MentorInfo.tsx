import React from "react";
import {
  StyledInfoCard, StyledInfoContainer, StyledInfoImage, StyledInfoMain,
  StyledMentorInfo, StyledTextContainer, StyledTextInfo
} from "./styledMentorInfo";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import manMentor from '../../../assets/img/ManMentor.png';
import { ButtonBuyConsultation } from "../ButtonBuyConsultation/ButtonBuyConsultation";
import { backgroundColor } from "../../../styledConstantsColors";

interface PropsAbout {
  about: string
}

export const MentorInfo: React.FC<PropsAbout> = ({about}) => {
  return (
    <StyledMentorInfo>
      <StyledContainer>
        <StyledInfoContainer>
          <StyledInfoCard>
            <StyledInfoImage src={manMentor} alt='Man Mentor' />
            <StyledInfoMain>
              <StyledFrameHeader>
                About <span>me</span>
              </StyledFrameHeader>
              <StyledTextContainer>
                <StyledTextInfo>
                  {about}
                </StyledTextInfo>
                <ButtonBuyConsultation
                  buttonBackground={[backgroundColor.champagne, backgroundColor.champagne, backgroundColor.black]}
                />
              </StyledTextContainer>
            </StyledInfoMain>
          </StyledInfoCard>
        </StyledInfoContainer>
      </StyledContainer>
    </StyledMentorInfo>
  )
}