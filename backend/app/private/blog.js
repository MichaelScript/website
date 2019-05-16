const express = require('express');

module.exports = function(app,db){
    const router = express.Router();

    /* Create blog post */
    let createPost = function(req,res){
        let title = db.escape(req.body.title);
        let content = db.escape(req.body.content);
        let query = `
            INSERT INTO posts (user_id,title,content)
            VALUES (${req.auth.user_id},${title},${content})
        `
        db.query(query,function(err,results,fields){
            if(!err){
                console.log(results);
                console.log(fields);
                res.send({"success":true, "id":results.insertId});
            } else{
                console.log("Error while creating blog post: ", err);
                res.send({"Error":"Error creating blog post"});
            }
        });
    }
    router.post('/createPost',createPost);

    let deletePost = function(req,res){
        let id = db.escape(req.body.id);
        let query = `DELETE FROM posts WHERE id=${id}`
        db.query(query,function(err,results,fields){
            if(!err){
                res.send({"success":true})
            } else{
                res.send({"success":false,"error":"Error Deleting post"})
            }
        })
    }
    router.post('/deletePost',deletePost);

    let updatePost = function(req,res){
        console.log("Got update request");
        let id = db.escape(req.body.id);
        let title = db.escape(req.body.title);
        let content = db.escape(req.body.content);
        let query = `
            UPDATE posts
            SET title = ${title}, content = ${content}
            WHERE id = ${id}
        `
        db.query(query,function(err,results,fields){
            if(!err){
                res.send({'success':true,'id':id});
            } else{
                console.log("Error updating post: ", err);
                res.send({"success":false, "error":"Error updating post"});
            }
        })
    }

    router.post('/updatePost',updatePost);



    return router;
}