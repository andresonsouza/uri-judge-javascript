var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');
var entrada = valores.shift().split(" ");

var a = parseInt(entrada.shift());
var b = parseInt(entrada.shift());
var c = parseInt(entrada.shift());

var abs = Math.abs(a - b);
var MaiorAB = ((a + b + abs) / 2);

if(MaiorAB > c) {
    console.log(MaiorAB + " eh o maior");
} else console.log(c + " eh o maior");
