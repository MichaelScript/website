import React, {Component} from 'react';
import { post } from '../../util.js';
import Post from './Post.js';
import {connect} from 'react-redux';

class BlogPosts extends Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        post('/api/data/getPosts',{"limit":5},(data)=>{
            this.props.dispatch({
                "type":"ADD_POSTS",
                "posts":data.posts
            })
        })
    }
    render(){
        let posts = this.props.posts.map((item,index)=>{
            return <Post key={item.id} id={item.id} title={item.title} content={item.content}></Post>
        });
        return <div>{posts}</div>
    }
}

let mapStateToProps = function(state){
    return {
        posts: state.posts.posts
    }
}


export default connect(mapStateToProps)(BlogPosts);