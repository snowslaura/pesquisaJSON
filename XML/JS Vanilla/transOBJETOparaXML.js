// const parser = new DOMParser();

const xmlStr = '<a id="a"><b id="b">hey!</b></a>';

const doc = parser.parseFromString(xmlStr, "application/xml");

const errorNode = doc.querySelector("demo");
if (errorNode) {
  console.log("error while parsing");
} else {
  console.log(doc.documentElement.nodeName);
}

