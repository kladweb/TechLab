import { useLayoutEffect, useState } from "react";
import ScrollToHashElement from "../services/ScrollToHashElement";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import { experts } from "../components/OurExperts/experts";
import type { Iexpert } from "../components/OurExperts/experts";
import { useParams } from "react-router-dom";
import { MentorGeneral } from "../components/PageMentors/MentorGeneral/MentorGeneral";
import { MentorInfo } from "../components/PageMentors/MentorInfo/MentorInfo";
import { FooterApart } from "../components/PageMentors/FooterApart/FooterApart";

export const Mentors = () => {
  const params = useParams();
  const [expert, setExpert] = useState<Iexpert>(experts[0]);

  useLayoutEffect(() => {
    experts.forEach((expert: Iexpert) => {
      if (expert.id === params.mentor) {
        setExpert(expert);
        document.title = expert.name;
      }
    });
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
      <MentorInfo about={expert.about} />
      <FooterApart />
    </>
  )
}