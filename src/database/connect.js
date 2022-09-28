const mongoose = require('mongoose');

const connectToDatabase = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERANME}:${process.env.MONGODB_PASSWORD}@nodejsprimeiroprojeto.y47kag0.mongodb.net/database?retryWrites=true&w=majority`, 
    (error) => {
        if (error) {
            return console.log("Ocorreu um erro ao tentar se conectar ao banco de dados: ", error);
        }

        return console.log('Conexão ao banco de dados realizada com sucesso!');
    });
};

module.exports = connectToDatabase;