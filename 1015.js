// OPÇÃO 01

// var input = require('fs').readFileSync('stdin', 'utf8');

// var valores = input.split('\n');

// var entrada1 = valores.shift().split(" ");
// var entrada2 = valores.shift().split(" ");

// var x1 = entrada1.shift();
// var y1 = entrada1.shift();
// var x2 = entrada2.shift();
// var y2 = entrada2.shift();

// var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// console.log(distancia.toFixed(4));


// OPÇÃO 02

// var input = require('fs').readFileSync('stdin', 'utf8');

// var valores = input.split('\n');

// var entrada1 = valores.shift().split(" ");
// var entrada2 = valores.shift().split(" ");

// var x1 = entrada1.shift();
// var y1 = entrada1.shift();
// var x2 = entrada2.shift();
// var y2 = entrada2.shift();

// var pot1 = Math.pow(x2 - x1, 2);
// var pot2 = Math.pow(y2 - y1, 2)

// var distancia = (Math.sqrt(pot1 + pot2)).toFixed(4);
// console.log(distancia);

// OPÇÃO 03

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var [x1, y1] = valores.shift().split(" ");
var [x2, y2] = valores.shift().split(" ");

var distancia = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);
console.log(distancia);
