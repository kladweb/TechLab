import React, { useEffect, useLayoutEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { StyledCatalogue } from "./styledCatalogueContent";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import { CourseCards } from "../CourseCards/CourseCards";
import { UnitCards } from "../CourseCards/UnitCards";
import { FiltersItems } from "../FiltersItems/FiltersItems";
import { ResultCards } from "../CourseCards/ResultCards";
import { dataCourses } from "../../../data/dataCourses";
import type { IdataCourse } from "../../../data/dataCourses";
import { dataUnits } from "../../../data/dataUnits";
import type { IdataUnit } from "../../../data/dataUnits";
import { getTypeCourses } from "../FiltersItems/filtersCourses";
import { setDataCourses } from "../../../store/courses";

export const CatalogueContent = () => {
  const dispatch = useAppDispatch();
  const params: Readonly<Params> = useParams();
  const param: string = params.catalogue as string;
  const typeLearning: string = (param === 'all') ? param : param.split(' ').reverse()[0];
  const name: string = (param === 'all') ? param : param.split(typeLearning)[0].trim();
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<string[]>([]);
  // const [cardsCourse, setCardsCourse] = useState<IdataCourse[]>(dataCourses);
  const [cardsUnit, setCardsUnit] = useState<IdataUnit[]>(dataUnits);

  const handlerToggleChecked = (item: string) => {
    if (filterItems.includes(item)) {
      const newCheckedItems: string[] = [...filterItems];
      setFilterItems(newCheckedItems.filter(elem => elem !== item));
    } else {
      setFilterItems([...filterItems, item]);
    }
  }

  const toggleFilterMenu = () => {
    setIsFiltersOpen(prevState => !prevState);
  }

  useEffect(() => {
    if (typeLearning === 'courses') {
      if (name !== 'All') {
        dispatch(setDataCourses(getTypeCourses(dataCourses, name)));
        // setCardsCourse(() => getTypeCourses(dataCourses, name));
      } else {
        // setCardsCourse(() => dataCourses);
        dispatch(setDataCourses(dataCourses));
      }
    }
    if (typeLearning === 'lessons') {
      if (name !== 'All') {
        setCardsUnit(getTypeCourses(dataUnits, name));
      } else {
        setCardsUnit(dataUnits);
      }
    }
  }, [param]);

  return (
    <StyledCatalogue $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader><span>Catalogue</span></StyledFrameHeader>
        <FiltersItems
          toggleFilterMenu={toggleFilterMenu}
          isFiltersOpen={isFiltersOpen}
          checkedItems={filterItems}
          handlerToggleChecked={handlerToggleChecked}
        />
        {
          isFiltersOpen ?
            <ResultCards nameGroup={'Results'} checkedItems={filterItems} />
            :
            <>
              {
                (typeLearning === 'all' || typeLearning === 'courses') &&
                <CourseCards nameGroup={(param === 'all' ? 'All Courses' : param)} />
              }
              {
                (typeLearning === 'all' || typeLearning === 'lessons') &&
                <UnitCards cardsUnit={cardsUnit} nameGroup={(param === 'all' ? 'All Lessons' : param)} />
              }
            </>
        }
      </StyledContainer>
    </StyledCatalogue>
  );
}