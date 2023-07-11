/* Difereças
    Axios é uma biblioteca que precisa ser importada, porém oferece mais vantagens como sintaxe mais fácil, possibilidade de cancelar solicitações e tratar erros com mais facilidade.
*/
const axios = require("axios");
// GET Fetch
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// GET Axios
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// POST Fetch
const data = {
  title: "Algum título",
  content: "Algum conteúdo",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  // Cabeçalho para definir o tipo de conteúdo que está trafegando
  headers: {
    "Content-Type": "application/json",
  },
  // Configura o dado que está sendo enviado, deve ser convertido para JSON
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// POST Axios
// A configuração padrão de header é application/json e o verbo hhtp está configurado no método, sendo assim basta passar os dados como parâmetro para obter o mesmo resultado
axios
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((response) => response.data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
