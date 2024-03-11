import { useWindowSize } from "../../hooks/useWindowSize";
import { StyledCopyright, StyledFooter, StyledFooterContainer, StyledFooterLink, StyledFooterLogosWrap, StyledFooterSection, StyledFooterSectionTitle, StyledLogoLink } from "./StyledFeedbackSection"
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'

const footerSections = [
    { name: 'Company', links: [{ name: 'Our experts', path: '/' }, { name: 'About school', path: '/' }, { name: 'Contacts', path: '/' }] },
    { name: 'Catalog', links: [{ name: 'Courses', path: '/' }, { name: 'Lessons', path: '/' }, { name: 'Free lessons', path: '/' }] },
    { name: 'Career building', links: [{ name: 'Career test', path: '/' }, { name: 'Mentoring', path: '/' }] }]

export const Footer = () => {
    const { width = 0 } = useWindowSize()

    return (<StyledFooter>
        {width < 768 && <StyledFooterLogosWrap>
            <StyledLogoLink href={'/'}><LinkedIn /></StyledLogoLink>
            <StyledLogoLink href={'/'}><Facebook /></StyledLogoLink>
            <StyledLogoLink href={'/'}><Instagram /></StyledLogoLink>
        </StyledFooterLogosWrap>}
        <StyledFooterContainer>
            {footerSections.map((section) => <StyledFooterSection key={section.name}>
                <StyledFooterSectionTitle>{section.name}</StyledFooterSectionTitle>
                {section.links.map((section) =>
                    <StyledFooterLink to={section.path} $isTest={section.name === 'Career test' ? true : false} key={section.name}>{section.name}</StyledFooterLink>
                )}
            </StyledFooterSection>)}
            {width > 767 && <StyledFooterSection>
                <StyledFooterLogosWrap>
                    <StyledLogoLink href={'/'}><LinkedIn /></StyledLogoLink>
                    <StyledLogoLink href={'/'}><Facebook /></StyledLogoLink>
                    <StyledLogoLink href={'/'}><Instagram /></StyledLogoLink>
                </StyledFooterLogosWrap>
                <StyledCopyright>© TechLab — online school 2023</StyledCopyright>
            </StyledFooterSection>}
        </StyledFooterContainer>
        {width < 768 && <StyledCopyright>© TechLab — online school 2023</StyledCopyright>}
    </StyledFooter>)
}

