import mongoose from "mongoose";

const uri = "mongodb+srv://CoderHasan66:muXObt2CVpGBwwFs@cluster0.wx4v7lb.mongodb.net/Cluster0?retryWrites=true&w=majority"
  

const connectDb = () => {
    console.log('data base connected')
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        // useUnifiedTopology : true,
    });
}

export{ connectDb}
