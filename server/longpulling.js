const express = require('express');
const cors = require('cors'); // библиотека, чтобы не падали корс ошибки
const events = require('events');

const PORT = 5000;

const emitter = new events.EventEmitter();

const app = express()

app.use(cors())

app.get('get-messages', (req, res) => {
    emitter.once('new-mwssage', (message) => {
        res.json(message)
    })
})

app.post('new-messages', (req, res) => {
    const message = req.body;

    res.status(200)
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)) // запуск сервера

