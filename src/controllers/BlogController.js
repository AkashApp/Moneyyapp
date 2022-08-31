const express= require('express');

const Blog= require('../models/BlogModel');

const router= express.Router();

router.get("", async(req,res)=>{
    try {
        const blog= await Blog.find().lean().exec();

        return res.status(201).send(blog);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const blog= await Blog.findById(req.params.id).lean().exec();

        return res.status(201).send(blog);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

router.post("", async(req,res)=>{
    try {
        const blog= await Blog.create(req.body);

        return res.status(201).send(blog);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const blog= await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

        return res.status(201).send(blog);
        
    } catch (error) {
        return res.status(500).send(error.massage);
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const blog= await Blog.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(blog);
    } catch (error) {
        return res.status(500).send(error.massage);
    }
})

module.exports = router;
