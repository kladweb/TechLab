import {
  StyledExpertWrap,
  StyledIconWrap,
  StyledExpertName,
  StyledExpertDesc,
} from "./StyledOurExperts"

type ExpertProps = {
  id: string,
  src: string,
  color: string,
  name: string,
  desc: string
}

export const ExpertCard = ({id, src, color, name, desc}: ExpertProps) => {
  return (
    <StyledExpertWrap to={`/mentors/${id}`}>
      <StyledIconWrap $color={color}>
        <img src={src} alt={name} />
      </StyledIconWrap>
      <StyledExpertName>{name}</StyledExpertName>
      <StyledExpertDesc>{desc}</StyledExpertDesc>
    </StyledExpertWrap>
  )
}