import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.9epss.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;