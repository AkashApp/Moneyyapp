const express= require("express");

const app= express();
app.use(express.json());

app.listen(7492, async()=>{
    try {
        await Connect();
        console.log("Listening on port 7492");
    } catch (error) {
        console.log(error.massage);
    }
});