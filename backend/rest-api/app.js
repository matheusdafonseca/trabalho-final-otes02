const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// COLOCANDO A ROTA DA URL
const rotaCartaoTarefas = require('./routes/cartao-tarefas');
const { RESOURCE_CACHE_PROVIDER } = require('@angular/platform-browser-dynamic');
//

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    req.header('Origin');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

// NO APP USE POSSO DEFINIR QUALQUER NOME /produtos /xiroi etc
app.use('/cartao-tarefas', rotaCartaoTarefas);

module.exports = app;