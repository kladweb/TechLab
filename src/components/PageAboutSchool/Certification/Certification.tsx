import React from "react";
import {
  StyledCertificateContainer, StyledCertificateImage,
  StyledCertificationBlock, StyledFeature,
  StyledFeatureContainer, StyledFeatureDescription, StyledFeatureName,
  StyledFeaturesContainer
} from "./styledCertification";
import { StyledContainer, StyledFrameHeader, StyledFrameText } from "../../../styledConstants";
import { ReactComponent as TickViolet } from '../../../assets/icons/tick_violet.svg';
import certificate from '../../../assets/img/Certificate2.png'
import { useAppSelector } from "../../../store/store";

interface IcertificateFeature {
  name: string,
  description: string
}

export const Certification = () => {
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const certificateFeatures: IcertificateFeature[] = [
    {
      name: 'Career advancement',
      description: 'It is a valuable asset when seeking new opportunities.'
    },
    {
      name: 'Industry-relevant skills',
      description: 'The certificate indicates that the recipient has gained proficiency in the most relevant topics.'
    },
    {
      name: 'Practical learning experience',
      description: 'The certificate signifies practical skills acquired through real-world projects.'
    },
    {
      name: 'Recognition of achievement',
      description: 'Earning a certificate from TechLab is a testament to the recipient\'s dedication, hard work, and commitment to excellence.'
    },
  ]

  return (
    <StyledCertificationBlock id='certification' $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader>
          <span>Certification</span>
        </StyledFrameHeader>
        <StyledFrameText $black>
          It is a symbol of achievement, a mark of proficiency, and a key to unlocking exciting opportunities in the
          ever-evolving field of programming and technology.
        </StyledFrameText>
        <StyledCertificateContainer>
          <StyledFeaturesContainer>
            {
              certificateFeatures.map((feature: IcertificateFeature, index: number) =>
                <StyledFeatureContainer key={index}>
                  <TickViolet />
                  <StyledFeature>
                    <StyledFeatureName>{feature.name}</StyledFeatureName>
                    <StyledFeatureDescription>{feature.description}</StyledFeatureDescription>
                  </StyledFeature>
                </StyledFeatureContainer>
              )
            }
          </StyledFeaturesContainer>
          <StyledCertificateImage src={certificate} alt='certificate' />
        </StyledCertificateContainer>
      </StyledContainer>
    </StyledCertificationBlock>
  );
}