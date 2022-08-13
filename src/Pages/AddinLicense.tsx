import { Page, InputAreaContainer, ResultsAreaContainer } from "../Components";
import { TextContainer } from "./Verein";
import styled from "styled-components";
export const AddinLicense = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <div>
          <h1>End User License Agreement</h1>
          <h2>For the Diversifix Office Add-In</h2>
          <p>The Diversifix Office Add-In is provided under a mixed license.</p>
          The core software is provided under the MIT license:
          <Indent>
            <p>Copyright (c) 2022 Diversifix e. V.</p>

            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </Indent>
          <p>
            Many gender-inclusive suggestions are from the{" "}
            <a href="https://geschicktgendern.de/">geschicktgendern</a> word
            list by Johanna Usinger and are subject to the{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC-BY-NC-SA 4.0 International License
            </a>
            .
          </p>
          <p>
            We use the morphological dictionary{" "}
            <a href="https://morphy.wolfganglezius.de/download/">Morphy</a> by
            Wolfgang Lezius, whose content is subject to the{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC-BY-NC-SA 4.0 International License
            </a>{" "}
            .
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

const Indent = styled.div`
  margin-left: 40px;
`;
