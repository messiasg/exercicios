const imoveis = []
let opcao = ""

do {

    // menu interativo
    opcao = prompt(
    "Bem-vindo ao cadastro de imóveis!" +
    "\nImóveis cadastrados: " + imoveis.length + 
    "\n\n1.Cadastrar um novo imóvel" + 
    "\n2.Mostrar todos os imóveis cadastrados" + 
    "\n3.Sair"
    )

    // opções
    switch(opcao) {
        // cadastro novo imovel
        case "1":
            imovel = {}

                imovel.proprietario = prompt("Digite o nome do proprietário do imóvel:")
                imovel.quartos = prompt("Digite a quantidade de quartos do imóvel:")
                imovel.banheiros = prompt("Digite a quantidade de banheiros do imóvel:")
                imovel.garagem = prompt("Digite SIM/NAO se o imóvel possui garragem:")

            const confirmar = confirm(
                "Você confirma essas informações:\n" + 
                "Nome do proprietário: " + imovel.proprietario + "\nNúmero de quartos: " + imovel.quartos + "\nNúmero de banheiros: " + imovel.banheiros + "\nPossui garagem: " + imovel.garagem 
            )

            if (confirmar) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu.")
            }

            break
        
        // mostrar imóveis cadastrados
        case "2":
        for (let i=0; i < imoveis.length; i++){
            alert(
                "Imóvel " + (i+1) + 
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nGaragem: " + imoveis[i].garagem
                )
        }
            break

        case "3":
            alert("O programa está sendo encerrado!")
            break
        
        default:
            alert("Opção inválida.")
    }

} while (opcao !== "3")
