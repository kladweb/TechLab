import { StyledContainer } from "../../styledConstants";
import { StyledMenuContainer, StyledMenuItems, StyledMenuItem, StyledMenuName } from "./styledAboutSchoolMenu";

export const AboutSchoolMenu = () => {
  const menuItems: string[] = ['About school', 'Our experts', 'Certification', 'Contacts'];

  return (
    <>
      <StyledMenuContainer>
        <StyledContainer>
          <StyledMenuItems>
            {
              menuItems.map((item: string, index: number) =>
                <StyledMenuItem key={index} href='#'>
                  <StyledMenuName>
                    {item}
                  </StyledMenuName>
                </StyledMenuItem>
              )
            }
          </StyledMenuItems>
        </StyledContainer>
      </StyledMenuContainer>
    </>
  );
}