import { InputAreaContainer } from "../Components";
import { TextContainer } from "./Verein";
import { Page } from "../Components";

export const Mitmachen = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <h1>Mitmachen & Tool verbessern</h1>
        <div>
          <iframe
            title="Eintragsformular für die Mitmach-Datenbank"
            src="https://airtable.com/embed/shrmGk7w3QsM3FsWt?backgroundColor=blue"
            width="100%"
            height="1302"
            style={{
              background: "transparent",
              border: " 1px solid #ccc",
            }}
          />
        </div>
        <div>
          <iframe
            title="Eintragsformular für die Quellen-Datenbank"
            src="https://airtable.com/embed/shruApnoQO9nWODd9?backgroundColor=blue"
            // frameborder="0"
            // onmousewheel=""
            width="100%"
            height="950"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </TextContainer>
    </InputAreaContainer>
  </Page>
);
