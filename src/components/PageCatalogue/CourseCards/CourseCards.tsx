import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { dataCourses } from "../../../data/dataCourses";
import type { IdataCourse } from "../../../data/dataCourses";
import { CourseCard } from "../CourseCard/CourseCard";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";

interface CourseCardsProps {
  nameGroup: string
}

export const CourseCards: React.FC<CourseCardsProps> = ({nameGroup}) => {
  const cards = dataCourses;
  const {width = 0} = useWindowSize();
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [dataCardsView, setCardsView] = useState<IdataCourse[]>(cards.slice(0, nCardsAdd));
  const [isAllCards, setIsAllCards] = useState<boolean>(false);

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    setCardsView(dataCourses.slice(0, nCardsAdd));
  }, [nCardsAdd]);

  useEffect(() => {
    if (dataCourses.length <= dataCardsView.length) {
      setIsAllCards(true);
    }
  }, [dataCardsView]);

  const handlerAll = () => {
    setCardsView(dataCourses);
  }

  const handlerLess = () => {
    setCardsView(dataCourses.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  return (
    <>
      <StyledCourseHead>{nameGroup}</StyledCourseHead>
      <StyledCoursesContainer>
        {
          dataCardsView.map((course: IdataCourse) =>
            <CourseCard
              key={course.id}
              {...course}
            />
          )
        }
      </StyledCoursesContainer>
      {
        (nameGroup === 'All Courses') &&
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