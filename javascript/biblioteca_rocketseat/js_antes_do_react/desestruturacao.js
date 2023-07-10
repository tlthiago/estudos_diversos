// Desestruturação
const user = {
  name: "Thiago",
  idade: 27,
  address: {
    street: "José Cleto",
    number: 1765,
  },
};

// Forma comum de pegar um elemento de um array e armazenar em uma variável
const userAddress = user.address;
console.log(JSON.stringify(userAddress));

// Forma de desestruturar o elemento para pegar o seu valor, a variável possui o mesmo nome da chave do objeto
const { address, idade } = user;
console.log(JSON.stringify({ address, idade }));

// Dessa forma eu posso renomear o nome da variável
const { idade: age } = user;
console.log(JSON.stringify({ age }));

// Setar valor default para variáveis, caso ela não seja encontrada no objeto
const { nickname = "Alves" } = user;
console.log(JSON.stringify({ nickname }));

// Uso em função, no parâmetro podemos colocar {} e desestruturar o usuário
function mostraIdade({ idade, nickname: name, age = 12 }) {
  return idade;
}
console.log(mostraIdade(user));
