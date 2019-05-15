import React, { Component } from 'react';
import { post } from '../../util.js';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {connect} from 'react-redux';
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
        let postContent = {
            "content":this.state.content,
            "title":this.state.title
        }
        post("/api/blog/createPost",postContent,(response)=>{
            console.log("Response is:", response);
            this.props.dispatch({
                "type":"HIDE_EDITOR"
            })
            this.props.dispatch({
                "type":"ADD_POSTS",
                "posts":[postContent]
            })
        })
        event.preventDefault();
    }
    render(){
        return <div>
            <form className="post-editor-container">
                <div>
                <input placeholder="Title Goes Here" id="title" className="post-title" value={this.state.title} onChange={this.handleTitle}></input>
                </div>
                <div className="editor-container">
                    <ReactQuill className="editor" value={this.state.content}
                    onChange={this.handleContent} />
                    <button onClick={this.handleSubmit} className="post-button shadow">Post</button>
                </div>
            </form>
        </div>
    }
}

function mapStateToProps(state){
    return {
        editorVisible:state.editor.editorVisible
    }
}

export default connect(mapStateToProps)(PostEditor);