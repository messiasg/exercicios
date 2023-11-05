function inverterOrdem(stringDigitada) {

    let novaOrdem = "";

    for (var i = stringDigitada.length - 1; i >= 0; i--) {
        novaOrdem += stringDigitada[i];
    }
    return novaOrdem;
}

const resultado = inverterOrdem("Gato")
console.log(resultado)
