// Arrays
const array = [1, 2, 3, 4, 5, "6"];

// For of
for (const i of array) {
  console.log(i);
}

// forEach
array.forEach((item) => {
  console.log(item);
});

// Map
// Utilizando map é possível percorrer o array e retornar um novo array com o mesmo tamanho do original, contendo a lógica desejada
// Com map não é possível remover dados, filtrar... Só devo usar para transformar os dados do array
// Com forEach seria necessário inicializar um novo Array e dentro do forEach utilizar array.push(lógica)
const novoArray = array.map((item) => {
  if (item % 2 === 0) {
    return item * 10;
  }

  return item * 2;
});

console.log(novoArray);

// Filter
// Retonar um novo array contendo os itens com base na condição
console.log(array.filter((item) => item % 2 !== 0));
// Também é possível concatenar os métodos
console.log(array.filter((item) => item % 2 !== 0).map((item) => item * 10));

// Every
// Retorna um boolean caso todos os itens satisfaçam a condição
const todosItenSaoNumeros = array.every((item) => typeof item === "number");
console.log(todosItenSaoNumeros);

// Some
// Retorna um boolean caso pelo menos um dos itens satisfaça a condição
const peloMenosUmItemNaoehUmNumero = array.some((item) => item !== "number");
console.log(peloMenosUmItemNaoehUmNumero);

// Find
// Utilizado para encontrar UM item no array, caso mais de um item satisfaça a condição ele retorna o primeiro encontrado
const par = array.find((item) => item % 2 === 0);
console.log(par);

// FindIndex
// Exatamente como o find, porém retorna o indice do valor no array
const parIndice = array.findIndex((item) => item % 2 === 0);
console.log(parIndice);

// Reduce
// Muito usado quando queremos pegar um array e criar uma nova estrutura de dados com base nesse array
const soma = array.reduce((acc, item) => {
  // Estrutura da sintaxe do reduce
  // 1º parâmetro - Função
  // 2º parâmetro - Qual é o valor incial da nova estrutura que quero criar a partir do array
  // Nesse exemplo vamos realizar uma soma, ela se iniciará com o valor 0
  // 3º parâmetro - A função deverá receber dois parâmetros, o acc (accumulator) objeto que estamos criando e cada informação do array
  // 4º parâmetro - Retornar o novo valor do acc a cada iteração;
  return console.log(acc + "," + item);
}, 0);
