import React, { useState } from "react";
import { useAppSelector } from "../../../store/store";
import { StyledCatalogue } from "./styledCatalogueContent";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import { CourseCards } from "../CourseCards/CourseCards";
import { UnitCards } from "../CourseCards/UnitCards";
import { FiltersCards } from "../FiltersCards/FiltersCards";
import { ResultCards } from "../CourseCards/ResultCards";
import { filters } from "../../../data/filters";
import type { Ifilter } from "../../../data/filters";

export interface IitemsFilter {
  item: string,
  checked: boolean
}

export const CatalogueContent = () => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handlerToggleChecked = (item: string) => {
    if (checkedItems.includes(item)) {
      const newCheckedItems: string[] = [...checkedItems];
      setCheckedItems(newCheckedItems.filter(elem => elem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  }

  const toggleFilterMenu = () => {
    setIsFiltersOpen(prevState => !prevState);
  }

  return (
    <StyledCatalogue $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader><span>Catalogue</span></StyledFrameHeader>
        <FiltersCards
          toggleFilterMenu={toggleFilterMenu}
          isFiltersOpen={isFiltersOpen}
          checkedItems={checkedItems}
          handlerToggleChecked={handlerToggleChecked}
        />
        {
          isFiltersOpen ?
            <ResultCards nameGroup={'Results'} checkedItems={checkedItems} />
            :
            <>
              <CourseCards nameGroup={'All Courses'} />
              <UnitCards nameGroup={'All Units'} />
            </>
        }
      </StyledContainer>
    </StyledCatalogue>
  );
}