import React, {Component} from 'react';
import { post } from '../../util';
import {connect} from 'react-redux';

class Post extends Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        let id = this.props.id;
        post('/api/blog/deletePost',{"id":id},(data)=>{
            this.props.dispatch({
                type:'DELETE_POST',
                id:id
            })
        })
    }

    render(){
        return <div className="blog-post shadow">
            <div className="blog-title">{this.props.title}</div>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
            <div className="blog-menu">
                <button className="blog-button">Edit</button>
                <button onClick={this.delete} className="blog-button">Delete</button>
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Post);