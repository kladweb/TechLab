import {
  StyledBenefitContainer,
  StyledBenefitTitle,
  StyledBenefitText,
} from "./StyledSchoolBenefits";
type BenefitsItemType = {
  title: string;
  text: string;
};

export const SchoolBenefitsItem = ({ title, text }: BenefitsItemType) => {
  return (
    <>
      <StyledBenefitContainer>
        <StyledBenefitTitle>{title}</StyledBenefitTitle>
        <StyledBenefitText>{text}</StyledBenefitText>
      </StyledBenefitContainer>
    </>
  );
};
