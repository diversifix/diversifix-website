import styled from "styled-components";
import { ReactNode, FC } from "react";
import { NavigationBar } from "./NavigationBar";
import { ImpressumAndDatenschutzLinks } from "./ImpressumAndDatenschutzLinks";

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

function computeScrollbarWidth() {
  const oldOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = oldOverflow;
  return width;
}

export const scrollbarWidth = computeScrollbarWidth();

const centeredSidePaddingPx = 35;
export const CenteredContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${centeredSidePaddingPx - scrollbarWidth}px 0
    ${centeredSidePaddingPx}px;
  height: 100%;
`;
