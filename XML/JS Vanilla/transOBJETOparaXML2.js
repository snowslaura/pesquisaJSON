const parser = new DOMParser();

const text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

const anotherText=
`<feira>
  <frutas>
    -maçã
    -uva
    -morango
  </frutas>
  <legumes>
    -batata
  </legumes>
</feira>`

// let objeto = "{nome: "laura", idade: 29, cidade: "Seropédica"}"


const xmlDoc = parser.parseFromString(anotherText,"text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("legumes")[0].childNodes[0].nodeValue;

console.log(xmlDoc)