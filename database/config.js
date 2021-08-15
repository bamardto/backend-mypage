const mongoose = require('mongoose');

const connection = async () => {
    try{
        await mongoose.connect('mongodb://localhost/bastianmardones', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('db ready');

    }catch (error) {
        console.log(error);
        throw new Error('error al iniciar db')
    }
}

module.exports = {
    connection
}