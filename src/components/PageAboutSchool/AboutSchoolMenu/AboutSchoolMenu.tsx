import { useAppSelector } from "../../../store/store";
import { StyledContainer } from "../../../styledConstants";
import { StyledMenuContainer, StyledMenuItems, StyledMenuItem, StyledMenuName } from "./styledAboutSchoolMenu";

export const AboutSchoolMenu = () => {
  const menuItems: string[] = ['About school', 'Our experts', 'Certification', 'Contacts'];
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);

  return (
    <StyledMenuContainer $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledMenuItems>
          {
            menuItems.map((item: string, index: number) =>
              <StyledMenuItem
                key={index} href={`#${item.replace(' ', '').toLowerCase()}`}>
                <StyledMenuName>
                  {item}
                </StyledMenuName>
              </StyledMenuItem>
            )
          }
        </StyledMenuItems>
      </StyledContainer>
    </StyledMenuContainer>
  );
}