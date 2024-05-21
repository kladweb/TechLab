import React, { useEffect, useState } from "react";
import { dataCourses } from "../../../data/dataCourses";
import { dataUnits } from "../../../data/dataUnits";
import type { IdataCourse } from "../../../data/dataCourses";
import type { IdataUnit } from "../../../data/dataUnits";
import { CourseCard } from "../CourseCard/CourseCard";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { UnitCard } from "../CourseCard/UnitCard";

interface ResultCardsProps {
  nameGroup: string,
  checkedItems: string[]
}

export const ResultCards: React.FC<ResultCardsProps> = ({nameGroup, checkedItems}) => {
  const [coursesResult, setCoursesResult] = useState<IdataCourse[]>([]);
  const [unitsResult, setUnitsResult] = useState<IdataUnit[]>([]);

  useEffect(() => {
    if (checkedItems.includes('Course') && (checkedItems.includes('Self-paced') || checkedItems.includes('In group'))) {
      setCoursesResult(filterCourseLevel(dataCourses));
    } else {
      setCoursesResult([]);
    }
    if (checkedItems.includes('Lesson') && checkedItems.includes('Self-paced')) {
      setUnitsResult(filterCourseLevel(dataUnits));
    } else {
      setUnitsResult([]);
    }
  }, [checkedItems]);

  const filterCourseLevel = (dataArr: any) => {
    let newDataCourses: any[] = [];
    if (checkedItems.includes('Data science')) {
      newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) =>
        (course.course === 'Data science')));
    }
    if (checkedItems.includes('Design')) {
      newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) => (course.course === 'Design')));
    }
    if (checkedItems.includes('Programming')) {
      newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) => (course.course === 'Programming')));
    }
    let newDataCourses2: any[] = [];
    if (checkedItems.includes('Beginner')) {
      newDataCourses2 = newDataCourses2.concat(newDataCourses.filter((course) => (course.level.includes('Beginner'))));
    }
    if (checkedItems.includes('Intermediate')) {
      newDataCourses2 = newDataCourses2.concat(newDataCourses.filter((course) => (course.level.includes('Intermediate'))));
    }
    return newDataCourses2;
  }

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