import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { CoursePage } from "../components/Course/CoursePage";

export const Course = () => {
  useEffect(() => {
    document.title = "Course";
  }, []);

  return (
    <>
      <RunLine />
      <Header />
      <CoursePage />
    </>
  );
};
