import { MongoClient } from "mongodb";
const url = 'mongodb+srv://jiseok:ljs14070327@leejiseok.1ws0w9j.mongodb.net/?retryWrites=true&w=majority&appName=leejiseok';
const options = {useNewUrlParser:true};
let connectDB;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url,options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options),connect();
}
export (connectDB);