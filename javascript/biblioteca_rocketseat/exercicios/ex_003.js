/*  ### Sistema de gastos familiar
    Crie um objeto que possuirá 2 propriedades, ambas do tipo
    array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo.
*/

let meuObj = {
  receitas: [50, 108],
  despesas: [100, 986],
};

function sum(meuObj) {
  let total = 0;

  for (let valor of meuObj) {
    total += valor;
  }

  return total;
}

function calculaTotal() {
  const totalReceitas = sum(meuObj.receitas);
  const totalDespesas = sum(meuObj.despesas);
  let saldo = totalReceitas - totalDespesas;

  if (saldo > 0) {
    return `Saldo positivo no valor de ${saldo.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}.`;
  } else {
    return `Saldo negativo no valor de ${saldo.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}.`;
  }
}

console.log(calculaTotal());
