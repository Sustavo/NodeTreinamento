const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejsprimeiroprojeto.y47kag0.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      client.close();
    });

    return console.log("Conexão ao banco de dados realizada com sucesso!");
};

module.exports = connectToDatabase;