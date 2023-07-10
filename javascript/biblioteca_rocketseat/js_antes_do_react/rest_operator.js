// Rest Operator - Retorna o resto do objeto

const user = {
  name: "Thiago",
  idade: 27,
  address: {
    street: "José Cleto",
    number: 1765,
  },
};

// Retorna o restante do array após o valor informado (name)
const { name, ...rest } = user;
console.log(JSON.stringify(rest));

// Caso de uso em arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...resto] = array;
console.log(JSON.stringify({ first, second, ...resto }));

// Pulando elemento
const [first1, , third, ...resto1] = array;
console.log(JSON.stringify({ first1, third, ...resto1 }));
