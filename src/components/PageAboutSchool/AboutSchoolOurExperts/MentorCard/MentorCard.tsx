import React from "react";
import {
  StyledButtonBuy, StyledButtonMore, StyledButtons, StyledBuyContainer,
  StyledCourse, StyledMentorCard, StyledMentorDescription, StyledMentorHead,
  StyledMentorIcon, StyledMentorPrise, StyledName, StyledNameContainer
} from "./styledMentorCard";
import ArrowRight from "../../../../assets/icons/ArrowRight";

interface MentorCardProps {
  cardColor: string,
  mentorName: string,
  course: string,
  src: string,
  price: number
}

export const MentorCard: React.FC<MentorCardProps> =
  ({
     cardColor,
     mentorName,
     course,
     src,
     price
   }) => {

    return (
      <StyledMentorCard $cardColor={cardColor}>
        <StyledMentorHead>
          <StyledNameContainer>
            <StyledName>{mentorName}</StyledName>
            <StyledCourse $cardColor={cardColor}>{course}</StyledCourse>
          </StyledNameContainer>
          <StyledMentorIcon $cardColor={cardColor} src={src} alt={mentorName} />
        </StyledMentorHead>
        <StyledMentorDescription>
          A seasoned programming virtuoso, stands as a beacon of excellence in the field. One of Tom's standout
          qualities
          is his knack for crafting elegant and efficient code.
        </StyledMentorDescription>
        <StyledBuyContainer>
          <StyledMentorPrise>{price} eur / 1 hour</StyledMentorPrise>
          <StyledButtons>
            <StyledButtonBuy>Buy</StyledButtonBuy>
            <StyledButtonMore to="#">Learn more<ArrowRight /></StyledButtonMore>
          </StyledButtons>
        </StyledBuyContainer>
      </StyledMentorCard>
    );
  }