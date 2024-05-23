import { useAppDispatch, useAppSelector } from "../../../store/store"
import { setClickedTab } from "../../../store/navigation"
import { StyledLinkContainer, StyledLinkMain, StyledLinkWrap } from "./StyledMenu"
import { DownArrow } from "../../../assets/icons/Arrows"
import { LinksWrap } from "../LinksWrap/LinksWrap"
import { useNavigate } from "react-router-dom";

type NavLinkProps = {
  path?: string;
  title: string;
  hasLinks: boolean;
}

export const NavLink = ({path, title, hasLinks}: NavLinkProps) => {
  const clickedTab = useAppSelector((state) => state.nav.clickedTab)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  return (
    <>
      <StyledLinkWrap onClick={() => {
        if (clickedTab === title) {
          dispatch(setClickedTab(''))
        } else {
          dispatch(setClickedTab(title))
        }
      }}>
        {!hasLinks && path && <StyledLinkMain to={path}>{title}</StyledLinkMain>}
        {hasLinks &&
          <StyledLinkContainer to={path as string} $clickedTab={clickedTab}
                               $title={title}>{title}</StyledLinkContainer>}
        {hasLinks && <DownArrow isClicked={clickedTab === title}></DownArrow>}
      </StyledLinkWrap>
      {hasLinks && <LinksWrap isClicked={clickedTab === title}></LinksWrap>}
    </>
  )
}
