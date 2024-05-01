import React from "react";
import { useAppSelector } from "../../../store/store";
import {
  StyledInfoBlock, StyledInfoDesc, StyledInfoExperience, StyledLinkedin, StyledLinkedinLink,
  StyledMainInfo, StyledMentorContainer, StyledMentorFoto, StyledMentorFotoGroup,
  StyledMentorGeneral, StyledMentorInfo, StyledMentorName
} from "./styledMentorGeneral";
import { StyledContainer } from "../../../styledConstants";
import lingedin from '../../../assets/img/linkedin.svg';
import { ReactComponent as MentorBackground } from "../../../assets/img/backgrounds/Ellipse.svg"
import { buttonColorHover, buttonGradient, mentorGradient, typographyColor } from "../../../styledConstantsColors";
import { ButtonBuyConsultation } from "../ButtonBuyConsultation/ButtonBuyConsultation";

interface MentorGeneralProps {
  name: string,
  id: string,
  desc: string,
  experience: string,
  expItems: string,
  src: string,
  course: string
}

export const MentorGeneral: React.FC<MentorGeneralProps> = (
  {
    name,
    id,
    desc,
    experience,
    expItems,
    src,
    course
  }) => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const mentorBackground = {
    programming: mentorGradient.green,
    datascience: mentorGradient.orange,
    design: mentorGradient.violet,
  }

  const mentorColor = {
    programming: typographyColor.darkBG.green,
    datascience: typographyColor.darkBG.orange,
    design: typographyColor.darkBG.violet,
  }

  const mentorBuyGradient = {
    programming: [buttonGradient.green, typographyColor.darkBG.green, buttonColorHover.green],
    datascience: [buttonGradient.orange, buttonColorHover.orange, buttonColorHover.violet],
    design: [buttonGradient.violet, typographyColor.lightBG.violet, buttonColorHover.violet],
  }

  // [width, height, left, top]
  const mentorSizes = {
    andruskask: [508, 527, 40, 23],
    juriratas: [567, 616, 21, 32],
    tomwatson: [550, 584, 38, 35],
    aliceberg: [509, 540, 39, 10],
    gerlitusik: [517, 549, 69, 25],
    tuomasartman: [498, 528, 56, 22],
    karolakarlson: [517, 548, 34, 3],
    ksenianikkel: [505, 536, 41, 36],
    zanderwhitehurst: [560, 594, 28, 26],
    annalaur: [485, 515, 83, 35]
  }

  const courseKey: string = course.replace(' ', '').toLowerCase();

  return (
    <StyledMentorGeneral $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledMentorContainer>
          <StyledMentorInfo>
            <StyledMentorName $mentorColor={mentorColor[courseKey as keyof (typeof mentorBackground)]}>
              {name}
            </StyledMentorName>
            <StyledMainInfo>
              <StyledInfoBlock>
                <StyledInfoDesc>
                  {desc}
                </StyledInfoDesc>
                <StyledInfoExperience>{experience}</StyledInfoExperience>
              </StyledInfoBlock>
              <StyledInfoExperience>{expItems}</StyledInfoExperience>
              <StyledLinkedinLink href='https://www.linkedin.com/' target='_blank'>
                <StyledLinkedin src={lingedin} alt='linkedin' />
              </StyledLinkedinLink>
            </StyledMainInfo>
            <ButtonBuyConsultation buttonBackground={mentorBuyGradient[courseKey as keyof (typeof mentorBackground)]} />
          </StyledMentorInfo>
          <StyledMentorFotoGroup $mentorGradient={mentorBackground[courseKey as keyof (typeof mentorBackground)]}>
            <MentorBackground />
            <StyledMentorFoto
              src={src}
              alt={name}
              $mentorSizes={mentorSizes[((id) || 'andruskask') as keyof (typeof mentorSizes)]}
            />
          </StyledMentorFotoGroup>
        </StyledMentorContainer>
      </StyledContainer>
    </StyledMentorGeneral>
  )
}