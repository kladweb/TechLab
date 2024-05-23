import React, { useEffect, useState } from "react";
import { dataCourses } from "../../../data/dataCourses";
import { dataUnits } from "../../../data/dataUnits";
import type { IdataCourse } from "../../../data/dataCourses";
import type { IdataUnit } from "../../../data/dataUnits";
import { CourseCard } from "../CourseCard/CourseCard";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { UnitCard } from "../CourseCard/UnitCard";
import { filterCourseLevel } from '../FiltersItems/filtersCourses'

interface ResultCardsProps {
  nameGroup: string,
  checkedItems: string[]
}

export const ResultCards: React.FC<ResultCardsProps> = ({nameGroup, checkedItems}) => {
  const [coursesResult, setCoursesResult] = useState<IdataCourse[]>([]);
  const [unitsResult, setUnitsResult] = useState<IdataUnit[]>([]);

  useEffect(() => {
    if (checkedItems.includes('Course') && (checkedItems.includes('Self-paced') || checkedItems.includes('In group'))) {
      setCoursesResult(filterCourseLevel(dataCourses, checkedItems));
    } else {
      setCoursesResult([]);
    }
    if (checkedItems.includes('Lesson') && checkedItems.includes('Self-paced')) {
      setUnitsResult(filterCourseLevel(dataUnits, checkedItems));
    } else {
      setUnitsResult([]);
    }
  }, [checkedItems]);


  return (
    <>
      <StyledCourseHead>{nameGroup}</StyledCourseHead>
      <StyledCoursesContainer>
        {
          coursesResult.map((course: IdataCourse) =>
            <CourseCard
              key={course.id}
              {...course}
            />
          )
        }
        {
          unitsResult.map((course: IdataUnit) =>
            <UnitCard
              key={course.id}
              {...course}
            />
          )
        }
      </StyledCoursesContainer>
    </>
  )
}