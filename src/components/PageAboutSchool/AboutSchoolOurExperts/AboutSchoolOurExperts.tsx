import React, { useEffect, useState, useRef } from "react";
import {
  StyledMentorCardsContainer, StyledAboutSchoolOurExperts, StyledDescription,
  StyledDescriptionsContainer, StyledMentorsHead, StyledViewMoreBtn, StyledViewMoreText
} from "./styledAboutSchoolOurExperts";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import { experts } from "../../OurExperts/OurExperts";
import type { Iexpert } from "../../OurExperts/OurExperts";
import { MentorCard } from "./MentorCard/MentorCard";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useAppSelector } from "../../../store/store";

export const AboutSchoolOurExperts = () => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const viewRef = useRef(null);
  const {width = 0} = useWindowSize();

  const [isCardsEnough, setIsCardsEnough] = useState<boolean>(false);
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [expertsView, setExpertsView] = useState<Iexpert[]>(experts.slice(0, nCardsAdd));
  const [isAllCards, setIsAllCards] = useState<boolean>(false);

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    setExpertsView(experts.slice(0, nCardsAdd));
    if (experts.length <= nCardsAdd) {
      setIsCardsEnough(true);
    }
  }, [nCardsAdd]);

  useEffect(() => {
    if (experts.length <= expertsView.length) {
      setIsAllCards(true);
    }
  }, [expertsView]);

  const handlerMore = () => {
    const nCardsActive = expertsView.length;
    setExpertsView([...expertsView, ...experts.slice(nCardsActive, nCardsActive + nCardsAdd)]);
    setTimeout(() => {
      window.scrollBy(0, 432);
    }, 0);
  }

  const handlerLess = () => {
    setExpertsView(experts.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      if (viewRef.current) {
        const elem: Element = viewRef.current;
        elem.scrollIntoView({block: 'center'});
      }
    }, 0);
  }

  return (
    <StyledAboutSchoolOurExperts id='ourexperts' $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader>
          Our <span>experts</span>
        </StyledFrameHeader>
        <StyledDescriptionsContainer>
          <StyledDescription>
            TechLab mentors understand that each student is unique, with distinct learning styles and goals. They work
            closely with you to create personalized learning paths that cater to your strengths and address your areas
            of improvement. This personalized approach ensures that you not only grasp the fundamentals but also delve
            into advanced topics relevant to your aspirations.
          </StyledDescription>
          <StyledDescription>
            Beyond the classroom, our mentors offer valuable insights into career development. Whether you're aiming for
            a job in a tech giant or planning to launch your startup, our mentors provide guidance on building a
            compelling portfolio, preparing for interviews, and navigating the tech job market. Additionally, TechLab
            fosters networking opportunities, connecting you with industry professionals and like-minded peers.
          </StyledDescription>
        </StyledDescriptionsContainer>
        <StyledMentorsHead>
          Choose your mentor and <span>Book a consultation</span>
        </StyledMentorsHead>
        <StyledMentorCardsContainer ref={viewRef} $isRunlineClosed={isRunlineClosed}>
          {
            expertsView.map((expert: Iexpert, index: number) =>
              <MentorCard
                key={index}
                cardColor={expert.color}
                mentorName={expert.name}
                course={expert.course}
                src={expert.src}
                price={expert.price}
              />
            )
          }
        </StyledMentorCardsContainer>
        {
          (!isCardsEnough) &&
          <>
            {
              (!isAllCards) ?
                <StyledViewMoreBtn onClick={handlerMore}>
                  <StyledViewMoreText>View more</StyledViewMoreText>
                  <DownArrow />
                </StyledViewMoreBtn>
                :
                <StyledViewMoreBtn onClick={handlerLess}>
                  <StyledViewMoreText>View less</StyledViewMoreText>
                  <UpArrow />
                </StyledViewMoreBtn>
            }
          </>
        }
      </StyledContainer>
    </StyledAboutSchoolOurExperts>
  );
}