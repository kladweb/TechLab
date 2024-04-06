import { StyledContainer, StyledFrameHeader } from "../../styledConstants";
import React from "react";
import {
  StyledAboutSubTitle,
  StyledAboutUsBlock,
  StyledWelcomeContainer, StyledWelcomeImage,
  StyledWelcomeText
} from "./styledAboutSchoolAboutUs";

import aboutUs from '../../assets/img/AboutUs.png'

export const AboutSchoolAboutUs = () => {
  return (
    <StyledAboutUsBlock>
      <StyledContainer>
        <StyledFrameHeader>
          <span>About</span> us
        </StyledFrameHeader>
        <StyledAboutSubTitle>
          Welcome to TechLab – Where Innovation Meets Education!
        </StyledAboutSubTitle>

        <StyledWelcomeContainer>
          <StyledWelcomeText>
            At TechLab, we believe in empowering the next generation of tech enthusiasts, innovators, and problem
            solvers. Our programming school is a dynamic learning environment designed to cultivate a passion for coding
            and technology. Whether you're a beginner exploring the world of programming or an experienced coder looking
            to enhance your skills, TechLab is the place where ideas come to life.
          </StyledWelcomeText>
          <StyledWelcomeImage src={aboutUs} alt='team'/>
        </StyledWelcomeContainer>

      </StyledContainer>
    </StyledAboutUsBlock>
  );
}