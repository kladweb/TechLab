import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { CoursePage } from "../components/Course/CoursePage";
import { SchoolBenefits } from "../components/Course/SchoolBenefits/SchoolBenefits";
import { LearningFormat } from "../components/Course/LearningFormats/LearningFormat";
import { CourseBanner } from "../components/Course/CourseBanner/CourseBanner";

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
    </>
  );
};
