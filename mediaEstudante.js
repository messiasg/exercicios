// Dados do estudante

let dadosEstudante = {
  nome: "Joaquim", 
  notas: [10,8,9,7],

  
  // Método para calculo de média das notas do estudante
  
calcularMedia: function() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  }
};

  // Resultado no console
  
  console.log(dadosEstudante.calcularMedia());

