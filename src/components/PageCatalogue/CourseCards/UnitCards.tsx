import React, { useEffect, useState } from "react";
import { dataUnits } from "../../../data/dataUnits";
import type { IdataUnit } from "../../../data/dataUnits";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { UnitCard } from "../CourseCard/UnitCard";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";

interface UnitCardsProps {
  nameGroup: string
}

export const UnitCards: React.FC<UnitCardsProps> = ({nameGroup}) => {
  const cards = dataUnits;
  const {width = 0} = useWindowSize();
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [dataCardsView, setCardsView] = useState<IdataUnit[]>(cards.slice(0, nCardsAdd));
  const [isAllCards, setIsAllCards] = useState<boolean>(false);

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    setCardsView(dataUnits.slice(0, nCardsAdd));
  }, [nCardsAdd]);

  useEffect(() => {
    if (dataUnits.length <= dataCardsView.length) {
      setIsAllCards(true);
    }
  }, [dataCardsView]);

  const handlerAll = () => {
    setCardsView(dataUnits);
  }

  const handlerLess = () => {
    setCardsView(dataUnits.slice(0, nCardsAdd));
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
        (nameGroup === 'All Units') &&
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