const express = require('express');

module.exports = function(app,db){
    const router = express.Router();

    /* Create blog post */
    router.post('/createPost',function(req,res){
        console.log(req.body);
        let title = db.escape(req.body.title);
        let content = db.escape(req.body.content);
        let query = `
            INSERT INTO posts (user_id,title,content)
            VALUES (${req.auth.user_id},${title},${content})
        `
        db.query(query,function(err,results,fields){
            if(!err){
                res.send({"Success":true});
            } else{
                console.log("Error while creating blog post: ", err);
                res.send({"Error":"Error creating blog post"});
            }
        });
    })

    return router;
}