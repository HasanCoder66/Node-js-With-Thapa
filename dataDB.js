import { connectDb} from "./db/database.js";

import Product from "./models/schema.js"

import productJson from './data.json' assert { type : "json"}

const uri = "mongodb+srv://CoderHasan66:muXObt2CVpGBwwFs@cluster0.wx4v7lb.mongodb.net/Cluster0?retryWrites=true&w=majority"
  
const start = async () => {
    
try {
    await connectDb()
    await Product.create(productJson)
    console.log("success")
} catch (error) {
    console.log(error);
}

}

start ()