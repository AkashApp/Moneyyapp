const express= require('express');

const Review= require('../models/ReviewModel');

const router= express.Router();


router.post("", async(req,res)=>{
    try {
        const review= await Review.create(req.body);

        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const review= await Review.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

module.exports= router;