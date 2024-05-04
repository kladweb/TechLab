import { useLayoutEffect } from "react";
import { useParams, Params } from "react-router-dom";
import ScrollToHashElement from "../services/ScrollToHashElement";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { experts } from "../components/OurExperts/experts";
import type { Iexpert } from "../components/OurExperts/experts";
import { MentorGeneral } from "../components/PageMentors/MentorGeneral/MentorGeneral";
import { MentorInfo } from "../components/PageMentors/MentorInfo/MentorInfo";
import { FooterApart } from "../components/PageMentors/FooterApart/FooterApart";

export const Mentors = () => {
  const params: Readonly<Params> = useParams();
  const expert: Iexpert = experts.find(item => item.id === params.mentor) as Iexpert;

  useLayoutEffect(() => {
    document.title = expert.name;
  }, []);

  return (
    <>
      <ScrollToHashElement />
      <RunLine />
      <Header />
      <MentorGeneral
        name={expert.name}
        id={expert.id}
        desc={expert.desc}
        experience={expert.experience}
        expItems={expert.expItems}
        src={expert.src}
        course={expert.course}
      />
      <MentorInfo about={expert.about} course={expert.course} />
      <FooterApart />
    </>
  )
}