import React, { Component } from 'react';
import { post } from '../../util.js';

class PostEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            "content":""
        }
        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleContent(event){
        this.setState({content: event.target.value});
    }

    handleSubmit(event){
        alert(this.state.content);
        post("/api/blog/createPost",{
            "content":this.state.content
        },(response)=>{
            console.log("Response is:", response);
        })
        event.preventDefault();
    }
    render(){
        return <div className="post-editor-container">
            <textarea value={this.state.content} onChange={this.handleContent} className="postInput shadow"></textarea>
            <button onClick={this.handleSubmit} className="post-button shadow">Post</button>
        </div>
    }
}

export default PostEditor;