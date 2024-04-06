import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { AboutSchoolMenu } from "../components/AboutSchoolMenu/AboutSchoolMenu";
import { AboutSchoolAboutUs } from "../components/AboutSchoolAboutUs/AboutSchoolAboutUs";

export const AboutSchool = () => {

  useEffect(() => {
    document.title = 'About school';
  }, []);

  return (
    <>
      <RunLine/>
      <Header/>
      <AboutSchoolMenu/>
      <AboutSchoolAboutUs/>
    </>
  )
}