import styled from "styled-components";
import { backgroundColor, typographyColor } from "../../../styledConstantsColors";

export const StyledCatalogue = styled.div<{ $isRunlineClosed: boolean }>`
  margin-top: ${props => props.$isRunlineClosed ? '82px' : '132px'};
  padding: 100px 0 120px 0;
  background: ${backgroundColor.white};

  @media (max-width: 1439.5px) {
  }

  @media (max-width: 1023.5px) {
  }

  @media (max-width: 767.5px) {
  }
`

export const StyledFiltersBlock = styled.div`
  margin: 62px 0 24px;
`

export const StyledIconFilters = styled.img`
  width: 20px;
  height: 16px;
`

export const StyledFiltersHead = styled.h3`
  margin-left: 6px;
  display: inline-block;
  color: ${typographyColor.lightBG.black};
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
`