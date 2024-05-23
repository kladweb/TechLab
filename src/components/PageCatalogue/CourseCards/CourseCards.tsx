import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import type { IdataCourse } from "../../../data/dataCourses";
import { CourseCard } from "../CourseCard/CourseCard";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";
import { Params, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../store/store";

interface CourseCardsProps {
  // cardsCourse: IdataCourse[],
  nameGroup: string
}

export const CourseCards: React.FC<CourseCardsProps> = ({nameGroup}) => {
  const params: Readonly<Params> = useParams();
  // const cards: IdataCourse[] = [...cardsCourse]
  const cards: IdataCourse[] = useAppSelector(state => state.dataCourses.courses);
  const {width = 0} = useWindowSize();
  const [nCardsAdd, setNCardsAdd] = useState<number>(3);
  const [dataCardsView, setCardsView] = useState<IdataCourse[]>(cards.slice(0, nCardsAdd));
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

  useEffect(() => {
    setCardsView(cards.slice(0, nCardsAdd));
  }, [params]);

  const handlerAll = () => {
    setCardsView(cards);
  }

  const handlerLess = () => {
    setCardsView(cards.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  console.log(cards);
  console.log(dataCardsView);

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