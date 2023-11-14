// objeto cachorro com as propriedades raça, nome, idade

const cachorro = {
  nome: "Madonna",
  raca: "caramelo",
  idade: 3,
};

// método que converta a idade do cachorro em anos humanos (idade cachorro * 7)

function idadeSerHumano(idade) {
  return idade * 7;
}

console.log(
  "Eu tenho uma cachorra, o nome dela é " +
    cachorro.nome +
    " ela faz parte da família dos " +
    cachorro.raca +
    " a idade atual da minha cachorrinha é de " +
    cachorro.idade +
    " anos. Em idades humanas, isso seria " +
    idadeSerHumano(cachorro.idade) +
    " anos."
);
