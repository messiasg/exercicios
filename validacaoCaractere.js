// Função para processar o caractere digitado
function caractere() {
  // Obtendo o valor do input de caractere
  const caractere = document.getElementById("caractere").value;

  // Limpando o input de caractere
  document.getElementById("caractere").value = "";

  // Verificando se o caractere é um número e adicionando ao input correspondente
  switch (caractere) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      document.getElementById("number").value += caractere;
      break;

    // Se não for um número, adiciona ao input de letras
    default:
      document.getElementById("letter").value += caractere;
      break;
  }
}
