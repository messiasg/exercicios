let pilhaDeCartas = [];
let opcao = [];

do {
    // let carta = ""
    // for (i = 0; i < pilhaDeCartas.length; i++) {
    //     carta += " - " + pilhaDeCartas[i] + "\n"
    // }

    opcao = prompt(
        "Cartas no baralho: " + pilhaDeCartas.length + "\n 1 - Adicionar uma carta \n 2 - Puxar uma carta \n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            let novaCarta = prompt("Digite o nome da carta:");
            pilhaDeCartas.push(novaCarta);
            break

        case "2":
           let cartaRetirada = pilhaDeCartas.pop();
            if (!cartaRetirada) {
                alert("Não há carta no baralho!")
            } else {
                alert("A carta puxada é " + cartaRetirada)
            }
            break
        case "3":
            alert("O programa está sendo encerrado!")
            break
        default:
            alert("Opção inválida!")   

    }} while (opcao !== "3");
