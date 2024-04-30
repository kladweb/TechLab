import React from "react";
import { useAppSelector } from "../../../store/store";
import {
  StyledButtonBuy, StyledButtonText,
  StyledInfoBlock, StyledInfoDesc, StyledInfoExperience, StyledLinkedin,
  StyledMainInfo, StyledMentorContainer, StyledMentorFoto, StyledMentorFotoGroup,
  StyledMentorGeneral,
  StyledMentorInfo,
  StyledMentorName
} from "./styledMentorGeneral";
import { StyledContainer } from "../../../styledConstants";

import lingedin from '../../../assets/img/linkedin.svg';
import mentorBackground from '../../../assets/img/backgrounds/Ellipse_violet2.svg';

import { ReactComponent as MentorBackground } from "../../../assets/img/backgrounds/Ellipse_violet2.svg"

interface MentorGeneralProps {
  name: string,
  id: string,
  desc: string,
  experience: string,
  expItems: string,
  src: string
}

export const MentorGeneral: React.FC<MentorGeneralProps> =
  ({
     name, id,
     desc,
     experience,
     expItems,
     src
   }) => {
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);

    return (
      <StyledMentorGeneral $isRunlineClosed={isRunlineClosed}>
        <StyledContainer>
          <StyledMentorContainer>
            <StyledMentorInfo>
              <StyledMentorName>{name}</StyledMentorName>
              <StyledMainInfo>
                <StyledInfoBlock>
                  <StyledInfoDesc>{desc}</StyledInfoDesc>
                  <StyledInfoExperience>{experience}</StyledInfoExperience>
                </StyledInfoBlock>
                <StyledInfoExperience>{expItems}</StyledInfoExperience>
                <StyledLinkedin src={lingedin} alt='linkedin' />
              </StyledMainInfo>
              <StyledButtonBuy>
                <StyledButtonText>Buy a consultation</StyledButtonText>
              </StyledButtonBuy>
            </StyledMentorInfo>
            <StyledMentorFotoGroup>
              <MentorBackground />
              <StyledMentorFoto src={src} alt={name} />
            </StyledMentorFotoGroup>
          </StyledMentorContainer>
        </StyledContainer>
      </StyledMentorGeneral>
    )
  }