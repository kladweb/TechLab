import styled from "styled-components";
import { colors, typographyColor } from "../../../styledConstantsColors";

export const StyledCourseTeachers = styled.div`
  height: 902px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.neutral.lightGray};
  border-radius: 0px 0px 80px 80px;
  overflow: hidden;
`;

export const StyledCourseTeachersContainer = styled.div`
  display: flex;
  width: 1224px;
  padding-bottom: 50px;
  flex-direction: column;
  //   align-items: center;
  & > h3 {
    margin: 0;
  }
  & p {
    margin: 16px 0 8px 0;
  }
`;
export const StyledCourseTeachersText = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
  color: ${typographyColor.lightBG.violet};
`;
export const StyledCourseTeachersCards = styled.div`
  width: 100%;
  max-height: 402px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;
`;
export const StyledCourseTeachersCardsContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding-top: 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 182px;
`;
export const StyledCourseTeachersCardsButton = styled.button`
  height: 48px;
  width: 299px;
  border: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: 0.6px;
  display: flex;
  //flex-direction: column;
  // justify-content: flex-end;
  //align-items: center;
  flex-wrap: no-wrap;
  gap: 10px;
  & img {
    width: 48px;
    height: 48px;
  }
`;
