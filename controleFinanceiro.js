let dinheiroAtual = parseFloat(prompt("Qual a sua quantidade de dinheiro atual:"))
let opcao = ""

do {
  // Menu opções
  opcao = parseFloat(prompt("Sua quantidade de dinheiro atual é R$ " + dinheiroAtual + " o que você deseja realizar com essa quantidade: \n" +
  "1. Adicionar\n" +
  "2. Remover\n" +
  "3. Sair"))

  // Opções

  switch(opcao) {
    case 1:
      dinheiroAtual += parseFloat(prompt("Insira a quantidade que você deseja adicionar a sua carteira:"))
      break
    
    case 2:
      dinheiroAtual -= parseFloat(prompt("Insira a quantidade que você deseja subtrair a sua carteira:"))
      break
      
    case 3:
      alert("O programa está se encerrando")
      break
    
    default:
      alert("Opção inválida, por favor escolha outra opção")
  }

} while(opcao !== 3)