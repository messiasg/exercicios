function numerosOrdemDecrescente(numeros) {
    return numeros.sort(function (a, b) {
        return b - a;
    });
}

let numeros = [3, 5, 8, 9, 12];
let numerosDecrescente = numerosOrdemDecrescente(numeros);
console.log(numerosDecrescente);
