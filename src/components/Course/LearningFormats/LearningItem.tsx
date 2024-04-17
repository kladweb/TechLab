import {
  StyledLearningFormatItem,
  StyledLearningFormatItemTitle,
  StyledLearningFormatList,
  StyledLearningFormatListItem,
} from "./StyledLearningFormat";

type LearningFormatItemType = {
  title: string;
  links: string[];
};

export const LearningItem = ({ title, links }: LearningFormatItemType) => {
  return (
    <StyledLearningFormatItem>
      <StyledLearningFormatItemTitle>{title}</StyledLearningFormatItemTitle>
      <StyledLearningFormatList>
        {links.map((item) => (
          <StyledLearningFormatListItem key={item}>
            {item}
          </StyledLearningFormatListItem>
        ))}
      </StyledLearningFormatList>
    </StyledLearningFormatItem>
  );
};
