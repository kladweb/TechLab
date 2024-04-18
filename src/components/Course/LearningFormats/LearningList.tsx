import LearningAccordeon from "./LearningAccordeon";
import { StyledLearningItemConainer } from "./StyledLearningFormat";

interface AccordionItem {
  title: string;
  links: string[];
}

interface LearningListProps {
  items: AccordionItem[];
}

const LearningList: React.FC<LearningListProps> = ({ items }) => {
  return (
    <StyledLearningItemConainer>
      {items.map((item, index) => (
        <LearningAccordeon key={index} item={item} />
      ))}
    </StyledLearningItemConainer>
  );
};

export default LearningList;
