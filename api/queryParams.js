// Pegando parâmetros pela rota
const express = require('express');
const app = express();
app.listen('3000');

// Os query são identificados na URL através do caractere ?, & usado para separar as variáveis
// Exemplo: localhost:3000?nome=Thiago&cidade=Belo Horizonte
app.route('/').get((req, res) => res.send(req.query.nome));
app.route('/about/user').get((req, res) => res.send(req.query));