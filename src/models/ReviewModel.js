const mongoose= require('mongoose');

const ReviewSchema= new mongoose.Schema({
    userId:{type: 'string', required: true},
    description: {type: 'string', required: true},
    BlogId:{type: mongoose.Schema.Types.ObjectId, ref:'Blog', required: true},
},{
    versionKey:false,
    timestamps:true
});

module.exports=mongoose.model('Review', ReviewSchema);