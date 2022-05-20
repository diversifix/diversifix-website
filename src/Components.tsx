import styled from "styled-components";
import { ReactNode, FC } from "react";
import { NavigationBar } from "./NavigationBar";
import { Colors } from "./styles/Colors";
import { Fonts } from "./styles/Fonts";

export const Page: FC<{ children: ReactNode; fillHeight?: boolean }> = ({
  children,
  fillHeight = false,
}) => (
  <StandaloneAppContainer>
    <NavigationBar />

    <div style={fillHeight ? { flex: "1", overflow: "auto" } : {}}>
      <CenteredContainer>
        <MainAreaContainer style={{ marginBottom: "30px" }}>
          {children}
        </MainAreaContainer>
      </CenteredContainer>
    </div>

    <ImpressumAndDatenschutzLinks />
  </StandaloneAppContainer>
);

export const StandaloneAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MainAreaContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  box-sizing: border-box;
  padding-top: 10px;

  flex-direction: row;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const InputAreaContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 15px;
  margin: 0 -15px;
  min-height: 200px;
`;

export const ResultsAreaContainer = styled.div`
  width: 20rem;
  min-height: 200px;
`;

const centeredSidePaddingPx = 35;
export const CenteredContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${centeredSidePaddingPx}px 0 ${centeredSidePaddingPx}px;
  height: 100%;
`;

export const ImpressumAndDatenschutzLinks = () => (
  <IDLinksRow>
    <IDLinkContainer>
      <a href="./impressum">Impressum, Datenschutz &amp; Lizenzen</a>
    </IDLinkContainer>
  </IDLinksRow>
);

const IDLinksRow = styled.div`
  margin: 0 0 10px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const IDLinkContainer = styled.a`
  font-size: 10px;
  color: #aaa;
  &:link {
    color: #aaa;
  }
  &:visited {
    color: #aaa;
  }
`;

export const SideItemContainer = styled.div`
  font-family: ${Fonts.bam.family};
  font-style: italic;
  background: white;
  box-shadow: 0px 6px 12px ${Colors.dropShadow};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 330px;
`;

export const SideItemBody = styled.p`
  margin: 15px 13px;
  font-weight: ${Fonts.bam.weights.normal};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.08px;
  color: ${Colors.darkBlueText};
  display: block;
`;
