const express= require("express");
const cors= require("cors");
const Connect= require('./src/config/config');

const BlogController= require('./src/controllers/BlogController');
const ReviewController= require('./src/controllers/ReviewController');

const app= express();
app.use(cors());
app.use(express.json());

app.use('/blog', BlogController);
app.use('/review', ReviewController);

app.listen(process.env.PORT || 7492, async()=>{
    try {
        await Connect();
        console.log("Listening on port 7492");
    } catch (error) {
        console.log(error.messege);
    }
});