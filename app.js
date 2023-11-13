const express = require('express')
const path = require('path')
const app = express();
exports.app = app;
const port = process.env.PORT || 3030;

app.use(express.static('public'));

app.listen(port,() => console.log('servidor corriendo' + port));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'/views/home.html')));

app.get('/register', (req, res) => res.sendFile(path.join(__dirname,'/views/register.html')));

app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'/views/login.html')));


