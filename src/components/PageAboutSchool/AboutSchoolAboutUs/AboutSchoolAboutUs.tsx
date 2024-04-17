import React from "react";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import {
  StyledAboutSubTitle,
  StyledAboutUsBlock,
  StyledFindElementsContainer,
  StyledWelcomeContainer,
  StyledWelcomeImage,
  StyledWelcomeText,
  StyledWhatYouFindAmount,
  StyledWhatYouFindName,
  StyledWillFindContainer,
  StyledWillFindTitle,
  StyledYellowCard
} from "./styledAboutSchoolAboutUs";

import aboutUs from '../../../assets/img/AboutUs.png'
import { useAppSelector } from "../../../store/store";

interface IwhatYouFind {
  courses: 100,
  lessons: 3000,
  users: 5000
}

export const AboutSchoolAboutUs = () => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);

  const whatYouFind: IwhatYouFind = {
    courses: 100,
    lessons: 3000,
    users: 5000
  };

  return (
    <StyledAboutUsBlock id='aboutschool' $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader>
          <span>About</span> us
        </StyledFrameHeader>
        <StyledAboutSubTitle>Welcome to TechLab – Where Innovation Meets Education!</StyledAboutSubTitle>
        <StyledWelcomeContainer>
          <StyledWelcomeText $width={'40.5%'}>
            At TechLab, we believe in empowering the next generation of tech enthusiasts, innovators, and problem
            solvers. Our programming school is a dynamic learning environment designed to cultivate a passion for
            coding
            and technology. Whether you're a beginner exploring the world of programming or an experienced coder
            looking
            to enhance your skills, TechLab is the place where ideas come to life.
          </StyledWelcomeText>
          <StyledWelcomeImage src={aboutUs} alt='team' />
        </StyledWelcomeContainer>
        <StyledAboutSubTitle>Our mission</StyledAboutSubTitle>
        <StyledWelcomeText $width={'100%'}>
          At the core of TechLab's mission is the commitment to providing high-quality, hands-on education in
          programming and technology. We aim to bridge the gap between traditional education and the rapidly evolving
          tech industry. Our dedicated team of experienced instructors is passionate about fostering a creative and
          collaborative learning environment, where students can thrive and build the skills they need to succeed in
          the
          digital era.
        </StyledWelcomeText>
        <StyledWillFindContainer>
          <StyledWillFindTitle>At our platform you will find</StyledWillFindTitle>
          <StyledFindElementsContainer>
            {
              Object.entries(whatYouFind).map((item: [string, number], index: number) =>
                <StyledYellowCard key={index}>
                  <StyledWhatYouFindAmount>
                    {item[1] + '+'}
                  </StyledWhatYouFindAmount>
                  <StyledWhatYouFindName>
                    {item[0]}
                  </StyledWhatYouFindName>
                </StyledYellowCard>
              )
            }
          </StyledFindElementsContainer>
        </StyledWillFindContainer>
      </StyledContainer>
    </StyledAboutUsBlock>
  );
}
