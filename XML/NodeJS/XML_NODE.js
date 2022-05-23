import xml from "xml"

const objeto1 = [ { toys: [ { toy: 'Transformers' } , { toy: 'GI Joe' }, { toy: 'He-man' } ] } ];
const objeto2 = {a: 1}
const objeto3 = {a: { _cdata: "i'm not escaped: <xml>!"}}
const objeto4 = { url: 'http://www.google.com/search?aq=f&sourceid=chrome&ie=UTF-8&q=opower' }
const objeto5 = `lalalala`

console.log(xml(objeto4)) 


