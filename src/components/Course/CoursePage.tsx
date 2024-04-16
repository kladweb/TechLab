// import { useWindowSize } from "../../hooks/useWindowSize";
import { useAppSelector } from "../../store/store";
import { StyledContainer, StyledFlex } from "../../styledConstants";
import {
  StyledMainInfoWrap,
  StyledMainWrap,
  StyledInfoWrap,
  StyledTitle,
  StyledTitleText,
  StyledInfoContainer,
  StyledInfoCourse,
  StyledInfoCourseFormat,
  StyledInfoCourseTitle,
  StyledInfoCourseText,
  StyledInfoContainerDuration,
  StyledInfoCourseDuration,
  StyledFlexCourse,
  StyledTodayButton,
  StyledViewButton,
  StyledImgWrap,
} from "./StyledCourse";
import image from "../../assets/img/womanWithNoute.png";
// import imageMobile from "../../assets/img/womanWithNoute1.png";

export const CoursePage = () => {
  // const { width = 0 } = useWindowSize();
  const isClosedRunLine = useAppSelector((state) => state.runline.isClosed);
  return (
    <>
      <StyledMainInfoWrap $isClosedRunline={isClosedRunLine}>
        <StyledContainer>
          <StyledMainWrap>
            <StyledInfoWrap>
              <StyledFlex>
                <StyledTitle>UX/UI design</StyledTitle>
                <StyledTitleText>From 0 to Middle +</StyledTitleText>
              </StyledFlex>
              <StyledInfoContainer>
                <StyledInfoCourseFormat>
                  <StyledInfoCourseTitle>Format: online</StyledInfoCourseTitle>
                  <StyledInfoCourseText>
                    video lessons and workshops
                  </StyledInfoCourseText>
                </StyledInfoCourseFormat>
                <StyledInfoContainerDuration>
                  <StyledInfoCourseTitle>
                    Duration:
                    <StyledInfoCourseDuration>
                      {" "}
                      12 months
                    </StyledInfoCourseDuration>
                  </StyledInfoCourseTitle>
                  <StyledInfoCourseText>20 hours per week</StyledInfoCourseText>
                </StyledInfoContainerDuration>
                <StyledInfoCourse>
                  <StyledInfoCourseTitle>Date: 20.12</StyledInfoCourseTitle>
                  <StyledInfoCourseText>
                    Or any convenient time during self-study
                  </StyledInfoCourseText>
                </StyledInfoCourse>
              </StyledInfoContainer>
              <StyledFlexCourse>
                <StyledTodayButton>Enroll today</StyledTodayButton>
                <StyledViewButton>View curriculum</StyledViewButton>
              </StyledFlexCourse>
            </StyledInfoWrap>
            <StyledImgWrap>
              {/* {width > 767 ? ( */}
              <img src={image} alt="mainback"></img>
              {/* ) : (
              <img src={imageMobile} alt="mainback"></img>
            )} */}
            </StyledImgWrap>
          </StyledMainWrap>
        </StyledContainer>
      </StyledMainInfoWrap>
    </>
  );
};
