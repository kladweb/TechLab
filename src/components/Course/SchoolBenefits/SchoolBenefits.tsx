import {
  StyledSchoolContainer,
  StyledSchoolWrap,
} from "./StyledSchoolBenefits";
import { SchoolBenefitsItem } from "./SchoolBenefitsItem";

const schoolBenefitsList = [
  {
    title: "Course Speakers",
    text: "Experts in our school are practicing designers who come from companies such as Google, Amazon, Meta.",
  },
  {
    title: "Actual Challenges",
    text: "The IT field is one of the most rapidly evolving sectors, and that's why our courses are constantly updated.",
  },
  {
    title: "Hands-on Practice",
    text: "Tackle assignments from actual companies and gain experience in working through a project starting from the briefing stage.",
  },
  {
    title: "High-Quality Lessons",
    text: "We carefully craft the quality of our videos, refining both visuals and sound.",
  },
];

export const SchoolBenefits = () => {
  return (
    <>
      <StyledSchoolContainer>
        <StyledSchoolWrap>
          {schoolBenefitsList.map((item, index) => (
            <SchoolBenefitsItem
              key={index}
              title={item.title}
              text={item.text}
            ></SchoolBenefitsItem>
          ))}
        </StyledSchoolWrap>
      </StyledSchoolContainer>
    </>
  );
};
