function inverterOrdem(stringDigitada) {

    let novaOrdem = "";

    for (var i = stringDigitada.length - 1; i >= 0; i--) {
        novaOrdem += stringDigitada[i];
    }
    return novaOrdem;
}

const resultado = inverterOrdem("Gato")
console.log(resultado)

/////////////////////////////////////////////////

function comparacaoDeStrings() {
  let palavra = "corredor";
  let palavraInversa = "";
  for (i = palavra.length - 1; i >= 0; i--) {
    palavraInversa += palavra[i];
  }
  if (palavra == palavraInversa) {
    return console.log("Palavra inversa: " + palavraInversa + "\nEstão a resposta é Sim");
  } else {
    return console.log("Palavra inversa: " + palavraInversa + "\nEstão a resposta é Não");
  }
}

comparacaoDeStrings()
