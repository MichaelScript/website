import React, {Component} from 'react';
import BlogPost from './BlogPost';
import {post} from '../../../util';

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

export default BlogPostPage;