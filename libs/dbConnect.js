import mongoose from 'mongoose';
import env from "dotenv"

// Setting the connection string
const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI){
    throw new Error("Please provide the connection string in the .env.local file")
}

// accessing  mongoose form the global variable
let cached = global.mongoose;

// Checking if mongoose is not in the global variable then add mongoose connetion to it 
if (!cached) {
    cached = global.mongoose = {conn: null, promise: null};
}

async function dbConnect(){ 
    // Checking if connection is already established, then return
    if(cached.conn){
        return cached.conn;
    }


    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose
            .connect(MONGO_URI, opts)
            .then((mongoose) => mongoose)

        cached.conn = await cached.promise;
        return cached.conn;
    }
}

export default dbConnect;