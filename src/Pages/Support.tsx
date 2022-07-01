import { InputAreaContainer } from "../Components";
import { TextContainer } from "./Verein";
import { Page } from "../Components";

export const Support = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <h1>Support für das Diversifix Office Add-In</h1>
        <p>
          Mit Fragen, Problemen, Kritik und Ideen wende dich bitte an{" "}
          <a href="mailto:feedback@diversifix.org">feedback@diversifix.org</a>.
        </p>
        <section>
          <h2>Häufige Fragen</h2>
          <p>
            Bisher wurden noch gar keine Fragen gestellt, weder seltene, noch
            häufige. Deshalb schreibe uns gerne eine Mail!
          </p>
        </section>
      </TextContainer>
    </InputAreaContainer>
  </Page>
);
