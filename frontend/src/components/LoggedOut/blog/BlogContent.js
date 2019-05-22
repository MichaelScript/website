import React, {Component} from 'react';
import BlogPost from './BlogPost';
import {connect} from 'react-redux';
import {post} from '../../../util';
import { BrowserRouter as Router, Route } from "react-router-dom";

class BlogPostPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount(){
        post('/api/data/getPost',{"id":this.props.match.params.id},(data)=>{
            let post = data["posts"][0];
            this.setState({
                data: post
            })
        })
    }
    render(){
        return <BlogPost {...this.state.data}></BlogPost>
    }
}

class BlogContent extends Component{
    componentDidMount(){
        post('/api/data/getPosts',{"limit":5},(data)=>{
            this.props.dispatch({
                "type":"ADD_POSTS",
                "posts":data.posts
            })
        })
        
    }
    render(){
        let posts = this.props.posts.map((post)=>{
            return <BlogPost key={post.id} {...post}></BlogPost>
        })
        return (
            <div className="content-container">
                <Router>
                    <Route exact path="/blog/" render={()=>posts}></Route>
                    <Route path="/blog/:id" component={BlogPostPage}></Route>
                </Router>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(BlogContent);