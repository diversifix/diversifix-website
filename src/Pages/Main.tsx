import styled from "styled-components";
import { Page } from "../Components";

export const Main = () => (
  <Page fillHeight={true}>
    <Frame
      src="/diversifix-app/?hideHeader=true&hideFooter=true"
      title="Diversifix Web App, um Vorschläge für inklusive Sprache zu eigenen Texten zu erhalten."
      frameBorder="0"
    ></Frame>
  </Page>
);

const Frame = styled.iframe`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 15px;
  margin: 0 -15px;
  min-height: 200px;
`;
