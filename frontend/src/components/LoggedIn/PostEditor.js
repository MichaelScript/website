import React, { Component } from 'react';
import { post } from '../../util.js';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {connect} from 'react-redux';
class PostEditor extends Component {
    constructor(props){
        super(props);
        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
    }

    componentDidMount(){
    }
    handleContent(value){
        this.props.dispatch({
            type:'CHANGE_CONTENT',
            content:value
        })
    }

    handleTitle(event){
        this.props.dispatch({
            type:'CHANGE_TITLE',
            title:event.target.value
        })
    }

    handleSubmit(event){
        let postContent = {
            "content":this.props.content,
            "title":this.props.title,
            "id":this.props.id
        }
        if(this.props.id === -1){
            post("/api/blog/createPost",postContent,(response)=>{
                console.log("Response is:", response);
                this.props.dispatch({
                    "type":"HIDE_EDITOR"
                })
                postContent['id'] = response.id;
                this.props.dispatch({
                    "type":"ADD_POSTS",
                    "posts":[postContent]
                })
            })
        } else{
            /* Update post */
            post("/api/blog/updatePost",postContent,(response)=>{
                this.props.dispatch({
                    "type":"HIDE_EDITOR"
                })
                this.props.dispatch({
                    "type":"EDIT_POST",
                    "title":postContent.title,
                    "content":postContent.content,
                    "id":postContent.id
                })
            })
        }
        event.preventDefault();
    }
    render(){
        return <div>
            <form className="post-editor-container">
                <div>
                <div className="post-id">{this.props.id}</div>
                <input placeholder="Title Goes Here" id="title" className="post-title" value={this.props.title} onChange={this.handleTitle}></input>
                </div>
                <div className="editor-container">
                    <ReactQuill className="editor" value={this.props.content}
                    onChange={this.handleContent} />
                    <button onClick={this.handleSubmit} className="post-button shadow">Post</button>
                </div>
            </form>
        </div>
    }
}

function mapStateToProps(state){
    return {
        editorVisible:state.editor.editorVisible,
        title:state.editor.title,
        content:state.editor.content,
        id: state.editor.id
    }
}

export default connect(mapStateToProps)(PostEditor);