var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

let entrada = valores.shift().split(" ");

var entrada1 = entrada[0];
var entrada2 = entrada[1];
var entrada3 = entrada[2];

function ordenarLista(lista) {
    const listaOrdenada = lista.sort(function (a, b) { return a - b });

    return listaOrdenada;
}

// var exibirLista = ordenarLista(entrada);
// console.log(`${exibirLista[0]}\n${exibirLista[1]}\n${exibirLista[2]}\n\n${entrada1}\n${entrada2}\n${entrada3}`);

var exibirLista = ordenarLista(entrada);
console.log(exibirLista[0]);
console.log(exibirLista[1]);
console.log(exibirLista[2]);
console.log();
console.log(entrada1);
console.log(entrada2);
console.log(entrada3);