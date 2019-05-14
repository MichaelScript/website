const express = require('express');

module.exports = function(app,db){
    const router = express.Router();

    /* Create blog post */
    router.post('/createPost',function(req,res){
        console.log(req.body);
        res.send({"status":"Success"});
    })

    return router;
}