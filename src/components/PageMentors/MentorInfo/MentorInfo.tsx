import React from "react";
import {
  StyledInfoCard, StyledInfoContainer, StyledInfoImage, StyledInfoMain,
  StyledMentorInfo, StyledTextContainer, StyledTextInfo
} from "./styledMentorInfo";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import manMentorViolet from '../../../assets/img/ManMentorViolet.png';
import manMentorGreen from '../../../assets/img/ManMentorGreen.png';
import manMentorOrange from '../../../assets/img/ManMentorOrange.png';
import { ButtonBuyConsultation } from "../ButtonBuyConsultation/ButtonBuyConsultation";
import { backgroundColor } from "../../../styledConstantsColors";

interface PropsAbout {
  about: string,
  course: string
}

export const MentorInfo: React.FC<PropsAbout> = ({about, course}) => {
  const manMentors = {
    programming: manMentorGreen,
    datascience: manMentorOrange,
    design: manMentorViolet,
  }
  const courseKey: string = course.replace(' ', '').toLowerCase();

  return (
    <StyledMentorInfo>
      <StyledContainer>
        <StyledInfoContainer>
          <StyledInfoCard>
            <StyledInfoImage src={manMentors[courseKey as keyof (typeof manMentors)]} alt='Man Mentor' />
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