const mongoose = require('mongoose');

const BlogSchema= new mongoose.Schema({
    Title: {type: 'string', required: true},
    Body:{type:'string', required: true},
},
{
    versionKey: false,
    timestamps: true
});

module.exports= mongoose.model('Blog', BlogSchema);