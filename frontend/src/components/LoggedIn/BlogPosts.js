import React, {Component} from 'react';
import { post } from '../../util.js';
import Post from './Post.js';
class BlogPosts extends Component{
    constructor(props){
        super(props);
        this.state = {
            'posts':[]
        }
    }
    componentDidMount(){
        post('/api/data/getPosts',{"limit":5},(data)=>{
            this.setState({
                "posts":data["posts"]
            })
        })
    }
    render(){
        let posts = this.state.posts.map((item,index)=>{
            return <Post key={item.id} id={item.id} title={item.title} content={item.content}></Post>
        });
        return <div>{posts}</div>
    }
}

export default BlogPosts;