import React, {Component} from 'react';
import PostEditor from './PostEditor.js';
import BlogPosts from './BlogPosts.js';
import {connect} from 'react-redux';
class DashboardContainer extends Component{
    constructor(props){
        super(props);
        this.showEditor = this.showEditor.bind(this);
        this.hideEditor = this.hideEditor.bind(this);
    }

    showEditor(){
        this.props.dispatch({
            type:"SHOW_EDITOR"
        })
    }

    hideEditor(){
        this.props.dispatch({
            type:"HIDE_EDITOR"
        })
    }

    render(){
        let editor;
        if(this.props.editorVisible){
            editor = <div className="overlay">
                <button onClick={this.hideEditor} className="close-overlay shadow">Close</button>
                <PostEditor></PostEditor>
            </div>
        } else{
            editor = null;
        }
        return (<div className="dashboard-container">
            <BlogPosts></BlogPosts>
            {editor}
            <button onClick={this.showEditor} className="fab shadow">Create Post +</button>
        </div>)
    }
}

function mapStateToProps(state){
    return {
        editorVisible:state.editorVisible
    };
}

export default connect(mapStateToProps)(DashboardContainer);