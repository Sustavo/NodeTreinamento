const connectToDatabase = require('./src/database/connect');
const express = require("express");
const app = express();
const { Person } = require("./person");
const UserModel = require("./src/models/user.model")
const dotenv = require("dotenv");

dotenv.config();

connectToDatabase();


// require("./modules/path")
// require("./modules/fs");
// require("./modules/http")

// const person = new Person("Felipe");



app.use(express.json());

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

app.post('/users', async (req,res) => {
    try {
        console.log(req.body);
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));