import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    name :{
        type : String ,
        required : true ,
    },

    
    price : {
        type : Number ,
        required : [true , "price must be provide"],
    },
    
    features : {
        type : Boolean ,
       default : false,
    },

    rating : {
        type : Number ,
        default : 4.9,
    },

    createdAt : {
        type : Date ,
        default : Date.now(),
    },

    // company : {
    //     type : String , 
    //     enum : {
    //         values : ["apple " , "oppo" ,"samsung" , "linovo"],
    //         message : `is not supported`,
    //     },
    // },
});


export default  mongoose.model('Product', productSchema)