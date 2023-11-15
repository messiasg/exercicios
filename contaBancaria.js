// Valor para transação financeira

let valor = 200.0;

// Objeto conta bancária

let contaBancaria = {
  saldo: 190.8,

  // Depósito

  depositoConta: function () {
    return (this.saldo += valor);
  },

  // Saque

  saqueConta: function () {
    if (valor <= this.saldo) {
      return (this.saldo -= valor);
    } else {
      return "Saldo insuficiente";
    }
  },
};

// console transações financeiras da conta bancária

console.log(contaBancaria.depositoConta());
console.log(contaBancaria.saqueConta());
