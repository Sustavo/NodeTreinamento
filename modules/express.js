const express = require("express");

const app = express();

app.get('/home', (req,res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Olá Mundo<h1>");
});

app.get('/users', (req,res) => {
    const users = [
        {
            nome: "Gustavo Sousa",
            email: "gust4v0309@gmail.com"
        },
        {
            nome: "Matheus Macedo",
            email: "matheusmacedo@gmail.com"
        }
    ];

    res.status(200).json(users);

});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));