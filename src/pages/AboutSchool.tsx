import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { AboutSchoolMenu } from "../components/PageAboutSchool/AboutSchoolMenu/AboutSchoolMenu";
import { AboutSchoolAboutUs } from "../components/PageAboutSchool/AboutSchoolAboutUs/AboutSchoolAboutUs";
import { FeedbackSection } from "../components/FeedbackFormSection/FeedbackSection";
import { Contacts } from "../components/PageAboutSchool/Contacts/Contacts";
import { Certification } from "../components/PageAboutSchool/Certification/Certification";
import { AboutSchoolOurExperts } from "../components/PageAboutSchool/AboutSchoolOurExperts/AboutSchoolOurExperts";
import ScrollToHashElement from "../services/ScrollToHashElement";

export const AboutSchool = () => {
  useEffect(() => {
    document.title = 'About school';
  }, []);

  return (
    <>
      <ScrollToHashElement />
      <RunLine />
      <Header />
      <AboutSchoolMenu />
      <AboutSchoolAboutUs />
      <AboutSchoolOurExperts />
      <Certification />
      <Contacts />
      <FeedbackSection />
    </>
  )
}