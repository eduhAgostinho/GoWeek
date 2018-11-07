const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const url = 'mongodb://localhost:27017/goweek-backend';
    try {
        mongoose.connect(url, { useNewUrlParser: true });

        app.use((req, res, next) => {
            req.io = io;

            return next();
        });

        app.use(corS());
        app.use(express.json());
        app.use(require('./routes'));

        const readonly = 3000;
        server.listen(3000, () => {
          console.log('Servidor rodando na porta 3000');
        });

    } catch (erro) {
        console.log(erro);
    }   
