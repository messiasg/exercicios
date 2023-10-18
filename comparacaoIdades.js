// solicitação de informações pessoa mais velha

const nomePessoaMaisVelha = prompt("Digite o nome da pessoa mais velha:")
const idadePessoasMaisVelha = parseFloat(prompt("Digite a idade da pessoa mais velha:"))

// soliicitação de informações pessoa mais nova
const nomePessoaMaisNova = prompt("Digite o nome da pessoa mais nova:")
const idadePessoasMaisNova = parseFloat(prompt("Digite a idade da pessoa mais nova:"))

// exibição de dados

alert("Pessoa mais velha:  \n"+ "Nome: "+ nomePessoaMaisVelha + "\nIdade: " + idadePessoasMaisVelha +
"\n\nPessoa mais nova:  \n"+ "Nome: "+ nomePessoaMaisNova + "\nIdade: " + idadePessoasMaisNova + "\n\nA diferença de idade entre "+ nomePessoaMaisVelha + " e " + nomePessoaMaisNova + " é: " + (idadePessoasMaisVelha-idadePessoasMaisNova))
