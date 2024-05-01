import React from "react";
import { StyledButtonBuy, StyledButtonText } from "./styledButtonBuyConsultation";

interface ButtonProps {
  buttonBackground: string[]
}

export const ButtonBuyConsultation: React.FC<ButtonProps> = ({buttonBackground}) => {
  return (
    <StyledButtonBuy $buyBackground={buttonBackground}>
      <StyledButtonText>Buy a consultation</StyledButtonText>
    </StyledButtonBuy>
  )
}