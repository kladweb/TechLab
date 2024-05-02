import {
  StyledCourseContainer,
  StyledCourseWrap,
  StyledImgContainer,
  StyledCourseBannerText,
} from "./SyledCourseBanner";
import image from "../../../assets/img/ZeusUIux.png";
// import { useEffect, useState } from "react";

export const CourseBanner = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   // Функция для обработки прокрутки
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setScrollY(currentScrollY);

  //     // Устанавливаем фиксацию, если scrollY >= 0 и scrollY < 400
  //     if (currentScrollY >= 0 && currentScrollY < 400) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   // Добавляем обработчик события прокрутки
  //   window.addEventListener("scroll", handleScroll);

  //   // Удаляем обработчик события прокрутки при размонтировании компонента
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <StyledCourseContainer
      //  isFixed={isFixed}
       >
        <StyledCourseWrap>
          <StyledImgContainer>
            <img src={image} alt="zeus"></img>
          </StyledImgContainer>
          <StyledCourseBannerText>
            You can master a new profession within 12 months!
          </StyledCourseBannerText>
        </StyledCourseWrap>
      </StyledCourseContainer>
    </>
  );
};
