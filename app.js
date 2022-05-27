const data = require('./dados')

const express = require("express");
const packs = require('./dados');

//Construir a app
const app = express();

app.use(express.static('public'));

var port = process.env.PORT || 5000;

//Porta local
app.listen(port);

//Index View
app.get("/", (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

//About View
app.get("/About", (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

//Contact View
app.get("/Contact", (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.get("/Pack", (req, res) => {
    res.sendFile('./pack.html', { root: __dirname });

});

app.get('/api/texto', (req,res) => {
    res.send(data)
})