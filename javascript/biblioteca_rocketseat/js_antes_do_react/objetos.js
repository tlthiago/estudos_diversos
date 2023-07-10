// Objetos
const user = {
    name: "Thiago",
    idade: 27,
    address: {
        street: "José Cleto",
        number: 1765
    },
};

// Verifica se a propriedade existe dentro do objeto e retorna true ou false
console.log(("name" in user));
console.log(("nickname" in user));

// Retorna um vetor com todas as chaves do objeto
console.log(Object.keys(user));

// Retorna um vetor com todos os valores do objeto
console.log(Object.values(user));

// Retorno com formatação no formato JSON
console.log(JSON.stringify(Object.values(user)));

// Retorna um vetor com subvetores, seus subvetores tem duas informações, a primeira informação é a chave e a segunda é o valor
console.log(JSON.stringify(Object.entries(user)));