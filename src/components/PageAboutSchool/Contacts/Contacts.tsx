import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import {
  StyledContactItem, StyledContactName,
  StyledContactsBlock,
  StyledContactsElement,
  StyledContactsElements
} from "./styledContacts";

interface Icontact {
  item: string,
  name: string
}

export const Contacts = () => {

  const contacts: Icontact[] = [
    {item: 'help@techlab.com', name: 'General questions'},
    {item: 'pr@techlab.com', name: 'Press office'},
    {item: 'work@techlab.com', name: 'Work in TechLab'},
    {item: '+112233445566', name: 'Call us'},
  ];

  return (
    <StyledContactsBlock id='contacts'>
      <StyledContainer>
        <StyledFrameHeader>
          <span>Contact</span> us
        </StyledFrameHeader>
        <StyledContactsElements>
          {
            contacts.map((contact: Icontact, index: number) =>
              <StyledContactsElement key={index}>
                <StyledContactItem>{contact.item}</StyledContactItem>
                <StyledContactName>{contact.name}</StyledContactName>
              </StyledContactsElement>
            )
          }
        </StyledContactsElements>
      </StyledContainer>
    </StyledContactsBlock>
  );
}