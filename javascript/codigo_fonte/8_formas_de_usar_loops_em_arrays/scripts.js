// 1 - For
const bolsaVanessa = [
  "cartão de crédito",
  "chaves",
  "dinheiro",
  "escova de cabelo",
  "lenço de papel",
  "perfume",
  "alcool gel",
];

for (let index = 0; index < bolsaVanessa.length; index++) {
  console.log(`${index + 1}. ${bolsaVanessa[index]}`);
  if (bolsaVanessa[index] == "dinheiro") break;
}

// 2 - For in
const familia = [
  {
    nome: "Gabriel",
    papel: "pai",
  },
  {
    nome: "Vanessa",
    papel: "mae",
  },
  {
    nome: "Gabriel",
    papel: "filho",
  },
  {
    nome: "Felipe",
    papel: "filho",
  },
];

for (let pessoa in familia) {
  console.log(familia[pessoa]);
}

// 3 - While
let index = 0;
while (index < bolsaVanessa.length) {
  console.log(`${index + 1}. ${bolsaVanessa[index]}`);
  index++;
}

// 4 - forEach
bolsaVanessa.forEach((value) => {
  console.log(`${index + 1}. ${value}`);
});
