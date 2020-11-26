var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');
var entrada = valores.shift().split(" ");

const pi = 3.14159;
var A = parseFloat(entrada.shift());
var B = parseFloat(entrada.shift());
var C = parseFloat(entrada.shift());

var areaTrianguloRetangulo = (A * C / 2).toFixed(3);
var areaCirculo = (pi * Math.pow(C, 2)).toFixed(3);
var areaTrapezio = (((A + B) * C) / 2).toFixed(3);
var areaQuadrado = Math.pow(B, 2).toFixed(3);
var areaRetangulo = (A * B).toFixed(3);

console.log("TRIANGULO: " + areaTrianguloRetangulo);
console.log("CIRCULO: " + areaCirculo);
console.log("TRAPEZIO: " + areaTrapezio);
console.log("QUADRADO: " + areaQuadrado);
console.log("RETANGULO: " + areaRetangulo);
