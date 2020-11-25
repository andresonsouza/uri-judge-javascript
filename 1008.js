var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var numeroFuncionario = parseInt(valores.shift());
var horasTrabalhadas = parseInt(valores.shift());
var valorHoraTrabalhada = parseFloat(valores.shift());

var salario = (horasTrabalhadas * valorHoraTrabalhada).toFixed(2);

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + salario);