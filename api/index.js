// Chamada do express
const express = require('express');

// Inicializando o express
const app = express();

// Irá ficar ouvindo o navegador, ao acessar está porta irá retornar o que definirmos
app.listen('3000');

// Middleware - Ponte entre a requisição
// Dentro do use passamos a instrução para transformar tudo em JSON
app.use(express.json());

// ### GET
let author = "Thiago";
app.route('/').get((req, res) => res.send(author));
app.route('/sobre').get((req, res) => res.send("Hello sobre"));

// ### POST
// Parâmetro para receber informações de fora para dentro da API
// Antes de toda a execução o imsomnia irá executar o middleware e depois continuar
app.route('/').post((req, res) => res.send(req.body));

// ### PUT
app.route('/').put((req, res) => {
    // Dessa forma a variável passa a guardar somente o nome do author e não a estrutura JSON inteira
    author = req.body.author;
    res.send(author);
})

// ### DELETE
// Recebe o identificador (:/) e deleta o usuário
let author1 = "Thiago";
app.route("/:identificador").delete((req, res) => {
    author1 = "";
    res.send(`O usuário ${req.params.identificador} foi deletado!`);
});