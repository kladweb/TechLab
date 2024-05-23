import React, { useEffect, useState } from "react";
import type { IdataUnit } from "../../../data/dataUnits";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { UnitCard } from "../CourseCard/UnitCard";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";

interface UnitCardsProps {
  cardsUnit: IdataUnit[],
  nameGroup: string
}

export const UnitCards: React.FC<UnitCardsProps> = ({cardsUnit, nameGroup}) => {
  const cards = [...cardsUnit];
  const {width = 0} = useWindowSize();
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [dataCardsView, setCardsView] = useState<IdataUnit[]>(cards.slice(0, nCardsAdd));
  const [isAllCards, setIsAllCards] = useState<boolean>(false);

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    setCardsView(cards.slice(0, nCardsAdd));
  }, [nCardsAdd]);

  useEffect(() => {
    if (cards.length <= dataCardsView.length) {
      setIsAllCards(true);
    }
  }, [dataCardsView]);

  const handlerAll = () => {
    setCardsView(cards);
  }

  const handlerLess = () => {
    setCardsView(cards.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      window.scrollBy(0, -400);
    }, 0);
  }

  return (
    <>
      <StyledCourseHead>{nameGroup}</StyledCourseHead>
      <StyledCoursesContainer>
        {
          dataCardsView.map((course: IdataUnit) =>
            <UnitCard
              key={course.id}
              {...course}
            />
          )
        }
      </StyledCoursesContainer>
      {
        (cards.length > nCardsAdd) &&
        <>
          {
            (!isAllCards) ?
              <StyledViewMoreBtn onClick={handlerAll}>
                <StyledViewMoreText>See all</StyledViewMoreText>
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
    </>
  )
}