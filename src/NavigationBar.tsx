import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fonts } from "./styles/Fonts";
import { CenteredContainer } from "./StandaloneApp";
import diversifixLogoSrc from "./icons/diversifix-logo.png";

export const NavigationBar = () => (
  <NavBarContainer>
    <CenteredContainer>
      <NavBarItemsContainer>
        <NavBarAppIconRowForIcon to="/">
          <NavBarAppIcon />
          <NavBarAppIconSmallText>
            EINFACH DIVERSITÄTSSENSIBEL
          </NavBarAppIconSmallText>
        </NavBarAppIconRowForIcon>
        <NavBarSpacer />

        <NavBarLinkItemInternal to="/verein">
          <NavBarLinkText>Diversifix e. V.</NavBarLinkText>
          <NavBarLinkSubtitle>Über den Verein</NavBarLinkSubtitle>
        </NavBarLinkItemInternal>

        <NavBarLinkItemInternal to="/mitmachen">
          <NavBarLinkText>Datenbank</NavBarLinkText>
          <NavBarLinkSubtitle>Zum Mitmachen</NavBarLinkSubtitle>
        </NavBarLinkItemInternal>

        <NavBarLinkItemExternal
          href="https://github.com/diversifix"
          target="_blank"
        >
          <NavBarLinkText>Code</NavBarLinkText>
          <NavBarLinkSubtitle>Auf Github</NavBarLinkSubtitle>
        </NavBarLinkItemExternal>
      </NavBarItemsContainer>
    </CenteredContainer>
  </NavBarContainer>
);

const NavBarContainer = styled.div`
  background: white;
`;
const rightMargin = 0; // TODO
const NavBarItemsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: ${rightMargin};

  height: 100px;
  font-size: 20px;

  @media (max-width: 650px) {
    height: 50px;
    font-size: 14px;
  }
`;
const NavBarSpacer = styled.div`
  flex-grow: 1;
`;

const NavBarAppIconRowForIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 9px;

  @media (max-width: 650px) {
    gap: 4px;
    padding-bottom: 4px;
  }
  color: inherit;
  text-decoration: inherit;
`;

const NavBarAppIconSmallText = styled.div`
  font-family: ${Fonts.bam.family};
  font-weight: ${Fonts.bam.weights.bold};
  font-size: 75%;
  line-height: 1.2;
  letter-spacing: 0px;
  font-style: italic;
`;

const NavBarAppIcon = () => (
  <NavBarAppIconContainer>
    <img src={diversifixLogoSrc} alt="Diversifix Logo" width="" height="" />
  </NavBarAppIconContainer>
);

const NavBarAppIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 44px;

  @media (max-width: 650px) {
    height: 22px;
  }
  > svg {
    height: 100%;
    width: auto;
  }
`;

const navBarLinkItemStyle = `
  padding: 0 30px;
  text-decoration: none;
  color: #1b9cd8;
  background: white;

  height: 100%;
  min-width: 100px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1b9cd8;
    background: #e3f6ff;
  }
`;
const NavBarLinkItemInternal = styled(Link)`
  ${navBarLinkItemStyle}
`;
const NavBarLinkItemExternal = styled.a`
  ${navBarLinkItemStyle}
`;
const NavBarLinkText = styled.div`
  font-family: ${Fonts.bam.family};
  font-weight: ${Fonts.bam.weights.normal};
  font-size: 100%;
  line-height: 1.4;
  letter-spacing: 0px;
`;

const NavBarLinkSubtitle = styled.div`
  font-family: ${Fonts.bam.family};
  font-weight: ${Fonts.bam.weights.normal};
  font-size: 75%;
  line-height: 1.2;
  letter-spacing: 0px;
`;
