import React, { Component } from 'react';
import { post } from '../../util.js';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

class PostEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            "content":"",
            "title":""
        }
        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
    }
    handleContent(value){
        this.setState({content: value});
    }

    handleTitle(event){
        this.setState({title:event.target.value});
    }

    handleSubmit(event){
        alert(this.state.content);

        post("/api/blog/createPost",{
            "content":this.state.content,
            "title":this.state.title
        },(response)=>{
            console.log("Response is:", response);
        })
        event.preventDefault();
    }
    render(){
        return <div>
            <form className="post-editor-container">
                <div>
                <label for="title">Title:</label>
                <input id="title" value={this.state.title} onChange={this.handleTitle}></input>
                </div>
                {/* <textarea value={this.state.content} onChange={this.handleContent} className="postInput shadow"></textarea> */}
                <ReactQuill value={this.state.content}
                  onChange={this.handleContent} />
                <button onClick={this.handleSubmit} className="post-button shadow">Post</button>
            </form>
        </div>
    }
}

export default PostEditor;