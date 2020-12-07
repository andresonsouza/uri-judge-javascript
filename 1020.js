var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = valores.shift();
var B = valores.shift();
var C = valores.shift();
var D = valores.shift();
var E = valores.shift();
var F = valores.shift();

var positivos = [];
var negativos = [];

if(A < 0 & A !== 0) {
    negativos.push(A * 1.0);
} else {
    positivos.push(A * 1.0);
}

if(B < 0 & B !== 0) {
    negativos.push(B * 1.0);
} else {
    positivos.push(B * 1.0);
}

if(C < 0 & C !== 0) {
    negativos.push(C * 1.0);
} else {
    positivos.push(C * 1.0);
}

if(D < 0 & D !== 0) {
    negativos.push(D * 1.0);
} else {
    positivos.push(D * 1.0);
}

if(E < 0 & E !== 0) {
    negativos.push(E * 1.0);
} else {
    positivos.push(E * 1.0);
}

if(F < 0 & F !== 0) {
    negativos.push(F * 1.0);
} else {
    positivos.push(F * 1.0);
}

var total = positivos.reduce((total, numero) => total + numero, 0);
var media = total / positivos.length;

console.log(positivos.length + " valores positivos");
console.log(media);