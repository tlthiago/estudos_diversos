const express = require('express');
const app = express();
app.listen('3000');

app.use(express.json());

app.route("/").post((req, res) => {
    const {nome, cidade, jogos} = req.body;
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}. Meus jogos são: ${jogos}`);
});

// Não é possível enviar o corpo de uma requisição via GET
// Sempre que formos trabalhar com requisição via body, temos que usar o middleware
// Podemos receber o Body Params pelos métodos POST, PUT e PATCH