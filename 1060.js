var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());
var D = parseInt(valores.shift());
var E = parseInt(valores.shift());
var F = parseInt(valores.shift());

var positivos = [];
var negativos = [];

if(A < 0 & A !== 0) {
    negativos.push(A);
} else {
    positivos.push(A);
}

if(B < 0 & B !== 0) {
    negativos.push(B);
} else {
    positivos.push(B);
}

if(C < 0 & C !== 0) {
    negativos.push(C);
} else {
    positivos.push(C);
}

if(D < 0 & D !== 0) {
    negativos.push(D);
} else {
    positivos.push(D);
}

if(E < 0 & E !== 0) {
    negativos.push(E);
} else {
    positivos.push(E);
}

if(F < 0 & F !== 0) {
    negativos.push(F);
} else {
    positivos.push(F);
}

console.log(positivos.length + " valores positivos");