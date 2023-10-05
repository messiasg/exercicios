let opcao = ""

// Usuário selecionar o menu

do { opcao = parseFloat(prompt("Escolha uma opção: \n" +
"1. Opção 1 \n" + 
"2. Opção 2 \n" +
"3. Opção 3 \n" +
"4. Opção 4 \n" +
"5. Encerrar"
))

// Mensagem apresentadas ao usuário


  switch (opcao) {
    case 1: 
    alert("Você escolheu a opção 1")
    break
    case 2: 
    alert("Você escolheu a opção 2")
    break
    case 3: 
    alert("Você escolheu a opção 3")
    break
    case 4: 
    alert("Você escolheu a opção 4")
    break
    case 5:
    alert("O sistema está sendo encerrado")
    break
    default:
    alert("Selecione uma opção válida")
  }
} while (opcao !== 5)

// Mensagem encerramento

alert("Fim do programa!")