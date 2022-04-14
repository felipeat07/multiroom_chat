// importar o módulo do framework express
var express = require('express');

// importar o módulo do consign
var consign = require('consign');

// importar o módulo do body-parser
var bodyParser = require('body-parser');

//importar o módulo do express-validator
var expressValidator = require('express-validator');

// Iniciando o objeto do express
var app = express();

// Setando as variáveis View e View Engine do Express
app.set('view engine', 'ejs');
app.set('view', './app/views');

//configurando o middleware express.static
app.use(express.static('./app/public'));

// configurando o middleware body-parser
//consegue recuperar os dados da requisição via json através da propriedade body
app.use(bodyParser.urlencoded({extended : true}));

//configurar o middleware express-validator
app.use(expressValidator());

//efetua o autoload de routes,models e controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('controllers')
    .into(app);


// Exportando o objeto app
module.exports = app;