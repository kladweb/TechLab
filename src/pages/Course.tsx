import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { CoursePage } from "../components/Course/CoursePage";
import { SchoolBenefits } from "../components/Course/SchoolBenefits/SchoolBenefits";
import { LearningFormat } from "../components/Course/LearningFormats/LearningFormat";
import { CourseBanner } from "../components/Course/CourseBanner/CourseBanner";
import { CoursePrices } from "../components/Course/CoursePrices/CoursePrices";
import { Rating } from "../components/Course/Rating/Rating";
import { StudentsWorkplace } from "../components/Course/StudentsWorkplace/StudentsWorkplace";
import { CourseTeachers } from "../components/Course/CourseTeachers/CourseTeachers";
import { CourseSelection } from "../components/Course/CourseSelection/CourseSelection";
import { CourseWorks } from "../components/Course/CourseWorks/CourseWorks";
import { Coursefaq } from "../components/Course/Coursefaq/Coursefaq";
import { CoursePortfolio } from "../components/Course/CoursePortfolio/CoursePortfolio";

export const Course = () => {
  useEffect(() => {
    document.title = "Course";
  }, []);

  return (
    <>
      <RunLine />
      <Header />
      <CoursePage />
      <SchoolBenefits />
      <LearningFormat />
      <CourseBanner />
      <CoursePrices />
      <Rating />
      <CourseSelection />
      <CourseTeachers />
      <StudentsWorkplace />
      <CourseWorks />
      <CoursePortfolio />
      <Coursefaq />
    </>
  );
};
