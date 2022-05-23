const texto = '{"atributo1": "valor 1", "atributo2": 23}';

var objeto = JSON.parse(texto);

console.log(objeto); // { atributo1: 'valor 1', atributo2: 23 }