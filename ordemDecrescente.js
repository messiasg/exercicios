function numerosOrdemDecrescente(numeros) {
    return numeros.sort(function (a, b) {
        return b - a;
    });
}

console.log(numerosOrdemDecrescente([3, 5, 8, 9, 12]));
