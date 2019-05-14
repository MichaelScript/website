const express = require('express');

module.exports = function(app,db){
    const router = express.Router();

    /* Create blog post */
    router.post('/createPost',function(req,res){
        console.log(req.body);
        let title = req.body.title;
        let content = req.body.content;
        console.log("Title is:", title);
        console.log("Content is: ",content);
        res.send({"status":"Success"});
    })

    return router;
}