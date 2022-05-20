import { InputAreaContainer } from "../StandaloneApp";
import { TextContainer } from "./Verein";
import { Page } from "../StandaloneApp";
export const Mitmachen = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <h1>Mitmachen & Tool verbessern</h1>
        <div>
          <iframe
            title="Airtable Datenbank: Eintragsformular"
            src="https://airtable.com/embed/shrmGk7w3QsM3FsWt?backgroundColor=blue"
            width="100%"
            height="1302"
            style={{
              background: "transparent",
              border: " 1px solid #ccc",
            }}
          ></iframe>
          <iframe
            title="Airtable Datenbank: Ansicht"
            src="https://airtable.com/embed/shrgE8O92dEbDODkF?backgroundColor=blue"
            // frameborder="0"
            // onmousewheel=""
            width="100%"
            height="533"
            style={{
              background: "transparent",
              border: " 1px solid #ccc",
            }}
          ></iframe>
        </div>
        <div>
          <iframe
            title="Airtable Datenbank: Eintragsformular"
            src="https://airtable.com/embed/shruApnoQO9nWODd9?backgroundColor=blue"
            // frameborder="0"
            // onmousewheel=""
            width="100%"
            height="950"
            style={{
              background: "transparent",
              border: " 1px solid #ccc",
            }}
          ></iframe>
          <iframe
            title="Airtable Datenbank: Ansicht"
            src="https://airtable.com/embed/shrQj7VltjyWkQPww?backgroundColor=blue"
            width="100%"
            height="300"
            style={{
              background: "transparent",
              border: " 1px solid #ccc",
            }}
          ></iframe>
        </div>
      </TextContainer>
    </InputAreaContainer>
  </Page>
);
