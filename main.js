const express= require("express");
const Connect= require('./src/config/config');

const BlogController= require('./src/controllers/BlogController');
const ReviewController= require('./src/controllers/ReviewController');

const app= express();
app.use(express.json());

app.use('/blog', BlogController);
app.use('/review', ReviewController);

app.listen(7492, async()=>{
    try {
        await Connect();
        console.log("Listening on port 7492");
    } catch (error) {
        console.log(error.messege);
    }
});