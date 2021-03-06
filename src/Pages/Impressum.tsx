import { Page, InputAreaContainer } from "../Components";
import { TextContainer } from "./Verein";
export const Impressum = () => (
  <Page>
    <InputAreaContainer>
      <TextContainer>
        <div>
          <h2>Impressum</h2>

          <p>Angaben gemäß § 5 TMG</p>
          <p style={{ fontWeight: "bold" }}>Diversifix e. V.</p>
          <p>
            Nazarethkirchstr. 51 A.26.1
            <br />
            13347 Berlin
            <br />
            Deutschland
          </p>
          <p>
            E-Mail: vorstand@diversifix.org
            <br />
          </p>

          <h3>Vorstand</h3>
          <p>
            Sonja Möbius
            <br />
            David Pomerenke
          </p>

          <h3>Sonstige Pflichtangaben</h3>
          <p>Registergericht: Berlin Charlottenburg</p>

          <h3>Verweise und Links</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Diversifix e. V.
            <br />
            Nazarethkirchstr. 51 A.26.1
            <br />
            13347 Berlin
            <br />
            Deutschland
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2>Datenschutz</h2>
          <p>
            Datenschutz ist uns sehr wichtig, daher verarbeiten wir persönliche
            Daten nur soweit es wirklich nötig und erforderlich ist.
          </p>
          <ul>
            <li>
              Die Textprüfung hat als allgemeine Formulierungshilfe keine
              persönlichen Daten zum Gegenstand. Die Texte im Eingabefeld werden
              für die Analyse an unsere Server übermittelt und entsprechende
              Formulierungsvorschläge übertragen. Wir weisen darauf hin, dass
              hier keine persönlichen oder sensiblen Daten eingeben werden
              müssen und sollen, da es sich lediglich um generelle
              Formulierungen handelt. Die Texte werden nicht gespeichert, und es
              werden keine Daten im Zusammenhang mit den Texten gespeichert.
            </li>
            <li>
              Individuelle Einstellungen werden im lokalen Speicher im Browser
              (LocalStorage) gespeichert, diese Informationen werden lediglich
              für die Applikation benutzt.
            </li>
          </ul>

          <h2>Lizenzen</h2>
          <ul>
            <li>
              Die überwiegende Zahl der genderneutralen Diversitätshinweise sind
              von <a href="https://geschicktgendern.de/">geschicktgendern</a>{" "}
              von Johanna Usinger und stehen unter der{" "}
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC-BY-NC-SA 4.0 International License
              </a>
              .
            </li>
            <li>
              Wir benutzen zur grammatischen Anpassung das morphologische
              Wörterbuch{" "}
              <a href="https://morphy.wolfganglezius.de/download/">Morphy</a>{" "}
              von Wolfgang Lezius, dessen Inhalt unter der{" "}
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC-BY-NC-SA 4.0 International License
              </a>{" "}
              steht.
            </li>
            <li>
              Unser Quellcode mit den dazugehörigen Lizenzen ist{" "}
              <a href="https://github.com/diversifix/diversifix">auf Github</a>{" "}
              zu finden.
            </li>
          </ul>
        </div>
      </TextContainer>
    </InputAreaContainer>
  </Page>
);
