import styled from "styled-components";
import { colors } from "../../../styledConstantsColors";

export const StyledCoursePotfolio = styled.div`
  height: 763px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: ${colors.neutral.darkBlack};
  width: 100%;
  padding: 100px 0px 120px 0px;
  border-radius: 0px 0px 80px 80px;
  & div > h3 {
    color: ${colors.neutral.white};
  }
`;
