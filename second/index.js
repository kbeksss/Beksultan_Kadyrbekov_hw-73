const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'somepassword';
app.get('/', (req, res) => {
    res.send('<h2>Please type the word you wan\'t to encode in the URL - "/encode/some word"</h2><h2>And if you want to to decode type - "/decode/some word"</h2> ');
});
app.get('/encode/:word', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Cipher(password).crypt(req.params.word));
});
app.get('/decode/:word', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Decipher(password).crypt(req.params.word));
});

app.listen(port, () => {
    console.log('Server is running on 8000');
});
