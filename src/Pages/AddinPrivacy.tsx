import { Page, InputAreaContainer, ResultsAreaContainer } from "../Components";
import { TextContainer } from "./Verein";

export const AddinPrivacy = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <div>
          <h1>Privacy Policy</h1>
          <h2>For the Diversifix Office Add-In</h2>
          <p>
            Data protection matters to us. We only collect and use personal data
            to the extent required for the provision of our services. We do not
            pass on your personal data to third parties. We do not use your
            personal data for advertising purposes.
          </p>
          <p>
            When you use the Diversifix Office Add-In, the text content of your
            document will be transferred to our servers. This is necessary to
            provide the service and generate suggestions. Neither the text nor
            any data related to the text is stored permanently on our servers.
            For performance reasons, suggestions relating to your text may be
            cached, that is, they may be stored in the working memory of our
            servers for a short time, together with a hash that identifies parts
            of your text. This is necessary to speed up the repeated processing
            of the same text or of text with only minor changes.
          </p>
          <p>
            We suggest that you should not use the Diversifix Office Add-In on
            documents that contain sensitive personal data. We are not
            responsible for the use of the Diversifix Office Add-In on documents
            that contain sensitive personal data.
          </p>
          <p>
            Your individual preferences are stored locally (in Local Storage) in
            the embedded web browser that is used by your Office application to
            display the Diversifix Office Add-In. Your preferences are not
            stored on our servers.
          </p>
          <p>
            For further information and for contacting us, please check our{" "}
            <a href="impressum">imprint</a>.
          </p>
        </div>
      </TextContainer>
    </InputAreaContainer>
    <ResultsAreaContainer></ResultsAreaContainer>
  </Page>
);
