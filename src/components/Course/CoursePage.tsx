// import { useWindowSize } from "../../hooks/useWindowSize";
import { useAppSelector } from "../../store/store";
import { StyledFlex } from "../../styledConstants";
import {
  StyledMainInfoWrap,
  StyledInfoWrap,
  StyledTitle,
} from "./StyledCourse";

export const CoursePage = () => {
  //   const { width = 0 } = useWindowSize();
  const isClosedRunLine = useAppSelector((state) => state.runline.isClosed);
  return (
    <>
      <StyledMainInfoWrap
        $isClosedRunline={isClosedRunLine}
      ></StyledMainInfoWrap>
      <StyledFlex>
        <StyledInfoWrap>
          <StyledTitle>UX/UI design</StyledTitle>
        </StyledInfoWrap>
      </StyledFlex>
    </>
  );
};
