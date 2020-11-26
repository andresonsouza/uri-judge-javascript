var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

const pi = 3.14159;
var R = parseFloat(valores.shift());

var volume = (4 / 3.0) * pi * Math.pow(R, 3);

console.log("VOLUME = " + (volume).toFixed(3));