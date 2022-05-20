import styled from "styled-components";
import { ReactNode, FC } from "react";
import { NavigationBar } from "./NavigationBar";
import { Colors } from "./styles/Colors";
import { Fonts } from "./styles/Fonts";

export const Page: FC<{ children: ReactNode }> = ({ children }) => (
  <StandaloneAppContainer>
    <NavigationBar />

    <div>
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

export const ImpressumAndDatenschutzLinks: FC<{ isAddin?: boolean }> = ({
  isAddin,
}) => (
  <IDLinksRow>
    <a href="./impressum-datenschutz.html">Impressum &amp; Datenschutz</a>
    <IDLinkDivider />

    <a href="./lizenzen.html">Lizenzen</a>
  </IDLinksRow>
);

const IDLinksRow = styled.div`
  margin: 0 0 10px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const IDLinkDivider = styled.div`
  border-left: 1px solid #aaa;
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
