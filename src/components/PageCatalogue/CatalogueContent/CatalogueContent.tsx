import React from "react";
import { useAppSelector } from "../../../store/store";
import { StyledCatalogue, StyledFiltersBlock, StyledFiltersHead, StyledIconFilters } from "./styledCatalogueContent";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import { CourseCards } from "../CourseCards/CourseCards";
import { UnitCards } from "../CourseCards/UnitCards";
import filtersIcon from '../../../assets/icons/filtersIcon.svg';

export const CatalogueContent = () => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);

  return (
    <StyledCatalogue $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader><span>Catalogue</span></StyledFrameHeader>
        <StyledFiltersBlock>
          <StyledIconFilters src={filtersIcon} alt='filters icon' />
          <StyledFiltersHead>Filters</StyledFiltersHead>
        </StyledFiltersBlock>
        <CourseCards nameGroup={'All Courses'} />
        <UnitCards nameGroup={'All Units'} />
      </StyledContainer>
    </StyledCatalogue>
  );
}