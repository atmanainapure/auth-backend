//connect to mongodb
const mongoose = require('mongoose');
const mongoURI="mongodb+srv://atmanainapure:cccZnlEdDdGN64NP@cluster0.uptyu3x.mongodb.net/?authSource=Cluster0&authMechanism=SCRAM-SHA-1";
mongoose.connect(mongoURI);
const connectMongo =()=>{ 
    console.log("connecting to mongo");
    mongoose.connect(mongoURI)
    console.log(mongoose.connection.readyState);
}
module.exports = connectMongo;
