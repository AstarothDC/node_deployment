const mongoose = require('mongoose')

const MONGO_URL = "mongodb://localhost/productos"
//const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))