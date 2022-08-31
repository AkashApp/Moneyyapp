const mongoose= require("mongoose");


module.exports= () => mongoose.connect(
    "mongodb+srv://Akash:Akash_7492@cluster0.vsjzw.mongodb.net/mvc?retryWrites=true&w=majority"
);