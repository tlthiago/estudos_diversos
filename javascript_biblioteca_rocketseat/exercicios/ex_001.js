// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/* 3. Declare uma variável e atribua valores para cada um dos dados:
 * name: String;
 * age: Number (integer);
 * stars: Number (float);
 * isSubscribed: Boolean;
 */
let name = "Thiago";
let age = 26;
let stars = 5.0;
isSubscribed = true;

/*  4. A variável student abaixo é de que tipo de dados?
    4.1 Atribua a elas as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/
let student = {
  name: "Thiago",
  age: 26,
  isSubscribed: true,
  weight: 60,
};
console.log(typeof student);
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight}kg.`
);

/*  5. Declare uma variável do tipo Array, de nome students
    e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/
let meuArray = [];

/*  6. Reatribua valor para a variável acima, colocando
    dentro dela o objeto student da questão 4. (Não
    copiar e colar o objeto, mas usar o objeto criado 
    e inserir ele no Array);
*/
meuArray.push(student);
console.log(meuArray[0]);

//  8. Crie um novo student e coloque na posição 1 do Array students
let student1 = {
  name: "Paulo",
  age: 29,
  weight: 70,
  isSubscribed: true,
};
meuArray.push(student1);
console.log(meuArray[1]);

/*  9. Sem rodar o código responda qual é a resposta do
código abaixo e porque? Após sua resposta, rode o 
código e veja se você acertou.

    console.log(a)
    var a = 1;

    Resposta:
    console.log irá retornar um valor undefined, após isso a 
    variável a será inicializada e tera o valor 1 atribuído à ela
*/
console.log(a)
var a = 1;