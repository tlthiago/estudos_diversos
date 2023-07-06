const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - Reverse - Retorna o array em ordem inversa, do último elemento para o primeiro
// Exemplo de aplicação: ordenação em filtro do menor para o maior
const reverseData = data.reverse();
console.log(reverseData);

// 2 - Find - Utilizado para encontrar algo dentro do Array
// O find retorna apenas um usuário, o último encontrado com base na condição informada
const highSallary = 5000;
const highestSallary = data.find((user) => user.sallary > highSallary);
console.log(highestSallary);

// 3 - findIndex
// Retorna o indice do item com base na lógica
// Dessa forma podemos identificar o usuário e realizar uma atualização
const lowerSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);
console.log(lowerSallary);
data[lowerSallary].sallary += 200;
console.log(data);

// 4 - Includes - Retorna true ou false informando se o item existe
const numbers = [1, 2, 3, 4, 5];
const hasFour = numbers.includes(4);
console.log(hasFour);

// 5 - Map - Utilizado quando desejamos modificar algo em nosso array original
data.map((user) => user.newsletter = false);
console.log(data);

// 6 - Filter - Realiza um filtro baseado em uma condição
const drivers = data.filter((user) => user.driverLicense);
console.log(drivers);

// 7 - Reduce - Reduz algum dado a um dado só
// Exemplo de aplicação: Somar todos os salários
const sallariesSum = data.reduce((totalSallary, user) => totalSallary += user.sallary, 0);
console.log(sallariesSum);

// 8 - forEach - Geralemente utilizado para exibir algo na tela
// Mostrar o nome de todos os usuários que receber
const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}!`);
    });
};

showUserNames(data);

// 9 - Some - Verifica se alguma coisa dentro do nosso array corresponde ao que estamos buscando, retorna um boolean
let someoneWithNewsLetter = data.some((user) => user.newsletter);
console.log(someoneWithNewsLetter);
data[0].newsletter = true;
someoneWithNewsLetter = data.some((user) => user.newsletter);
console.log(someoneWithNewsLetter);

// 10 - Every - O contrário de some - retorna se todos atendem a minha condição
const everyUserHasName = data.every((user) => user.name);
console.log(everyUserHasName);

const everyUserHasGoodSallary = data.every((user) => user.sallary > 2000);
console.log(everyUserHasGoodSallary);