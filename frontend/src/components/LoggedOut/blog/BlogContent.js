import React, {Component} from 'react';
import BlogPost from './BlogPost';
import {connect} from 'react-redux';
import {post} from '../../../util';
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
            return <BlogPost {...post}></BlogPost>
        })
        return <div className="content-container">
            {posts}
        </div>
    }
}

let mapStateToProps = (state)=>{
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(BlogContent);