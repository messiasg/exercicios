// objeto que represente um carro com propriedades para a marca, modelo, ano e velocidade atual.

const carro = {
  marca: "fusca",
  modelo: "Volkswagen",
  ano: 1940,
  velocidadeAtual: -10,
};

// Método aumentar a velocidade atual

function aumentarVelocidade() {
  return (carro.velocidadeAtual += 10);
}

// Método diminuir a velocidade atual

function diminuirVelocidade() {
  if (carro.velocidadeAtual <= 0) {
    return (carro.velocidadeAtual = 0);
  } else {
    return (carro.velocidadeAtual -= 10);
  }
}

//  Método velocidade atual

function velocidadeAtualDoVeiculo() {
  return carro.velocidadeAtual;
}

// Resultados no console

console.log(aumentarVelocidade())
console.log(diminuirVelocidade())
