const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb://localhost:27017/web-paint';
const MONGO_URI = 'mongodb+srv://ajaysheokand:nFXnOiBUuub4Igjf@cluster0.zzgh3iy.mongodb.net/web-paint';

// mongodb+srv://ajaysheokand:Ajay12345@cluster0.yk7wj8a.mongodb.net/

const dbConnection = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = dbConnection 

