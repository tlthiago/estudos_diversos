// Optional Chaining
const user = {
  name: "Thiago",
  age: 27,
  address: {
    street: "José Cleto",
    number: 1765,
    zip: {
      code: 31155290,
    },
    showFullAddress() {
      return "OK";
    },
  },
};

console.log(user.address.street);

// Caso a propriedade não exista no objeto, o js retorna um erro, podemos contornar o erro da seguinte forma
console.log(user.address ? user.address.street : "Não contém endereço");

// Consistindo para propriedades mais complexas
console.log(
  user.address
    ? user.address.zip
      ? user.address.zip.code
      : "Não contém cep"
    : "Não informado"
);

// Usando optional chaining a sintaxe fica dessa forma, somada com o uso do nullish coalecing
console.log(user.address?.zip?.code ?? "Não contém endereço");

// Para uso em funções dentro do objeto
console.log(user.address?.showFullAddress?.());

// Passando propriedade com colchetes
const key = "street";
console.log(user.address?.[key]);
