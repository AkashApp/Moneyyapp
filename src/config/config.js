const mongoose= require("mongoose");


module.exports= () => mongoose.connect(
    "mongodb+srv://akash:akash_7492@cluster0.im3s0hs.mongodb.net/?retryWrites=true&w=majority"
);