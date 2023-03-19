---
title: "Mitmach-Datenbank"
toc: true
listing:
  id: database
  type: table
  contents: data.yml
  fields: [exclusive, inclusive, source]
  field-display-names:
    exclusive: Exklusiv
    inclusive: Inklusiv
    source: Quelle
  page-size: 100
  table-striped: true
---

## Vorschläge einreichen

Unser Tool erkennt aktuell noch nicht alle kritischen Wörter und umfasst bei weitem noch nicht alle passenden diversiitätssensiblen Ersatzbegriffe.

Sprache wandelt sich - deshalb brauchen wir dich! Gemeinsam können wir unser Tool auf dem aktuellen Stand halten und die Datenbank für diversitätssensible Sprache erweitern. 

Hier kannst du ganz einfach passende Wörter vorschlagen.


<form name="diversity-database" method="post" action="/datenbank-vorschlag.html" netlify>

__Diversitätsdimension \*__

<select name="dimension" required>
    <option value=""></option>
    <option value="age">Alter</option>
    <option value="ethnic">Ethnische Herkunft & Nationalität</option>
    <option value="gender">Geschlecht & Geschlechtliche Identität</option>
    <option value="ability">Körperliche und geistige Fähigkeiten</option>
    <option value="religion">Religion & Weltanschauung</option>
    <option value="sexual">Sexuelle Orientierung</option>
    <option value="social">Soziale Herkunft</option>
    <option value="other">Andere Dimension</option>
</select><br/><br/>

__Kritisches Wort \*__

Ein oder mehrere ähnliche Wörter, die besser nicht benutzt werden sollten.\
Bei mehreren Wörtern mit Komma getrennt eingeben.

<input type="text" name="exclusive" required/><br/><br/>

__Inklusive Ersatzwörter__

Ein oder mehrere Alternativen.\
Bei mehreren Alternativen mit Komma getrennt eingeben.

<input type="text" name="inclusive"/><br/><br/>

__Erklärung__

Optional:\
Warum ist das kritische Wort nicht so gut?\
Warum sind die inklusiven Wörter besser?\
Was gibt es zu beachten?

<textarea name="explanation"></textarea><br/>

<label for="agree">
<input type="checkbox" name="agree" id="agree" required> <span>Diversifix e. V. darf meinen Vorschlag speichern, anpassen, benutzen, und veröffentlichen.</span>
</label>

<input type="submit" value="Vorschlag absenden"/>
</form>

---

## Datenbank

_Die Datenbank wird hier bald integriert!_

::: {#database}
:::
