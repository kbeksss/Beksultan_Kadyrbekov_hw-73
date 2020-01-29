const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.send('<h2>Please write a word after the slash</h2>')
});
app.get('/:word', (req, res) => {
    res.send(`<h2>${req.params.word}</h2>`);
});

app.listen(port, () => {
    console.log('Server is running on ', port);
});

