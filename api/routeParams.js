// Pegando parâmetros pela rota
const express = require('express');
const app = express();
app.listen('3000');

// ('/:nome') Isso define que o que eu escrever após a barra irá se tornar uma variável
app.route('/').get((req, res) => res.send("Oi."));
app.route('/:variavel').get((req, res) => res.send(req.params.variavel));
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome));