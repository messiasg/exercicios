let filaDeESpera = [];
let opcao = [];

do {
    let pacientes = ""
    for (i = 0; i < filaDeESpera.length; i++) {
        pacientes += (i + 1) + " ° - " + filaDeESpera[i] + "\n"
    }

    opcao = prompt(
        "Pacientes: \n" + pacientes + "\n 1 - Novo paciente \n 2 - Consultar Paciente \n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            let novoPaciente = prompt("Digite o nome do paciente:");
            filaDeESpera.push(novoPaciente);
            break

        case "2":
           let pacienteConsultado = filaDeESpera.shift();
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert("O próximo paciente a ser consultado é " + pacienteConsultado)
            }
            break
        case "3":
            alert("O programa está sendo encerrado!")
            break
        default:
            alert("Opção inválida!")   

    }} while (opcao !== "3");
