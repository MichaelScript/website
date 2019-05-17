import React, {Component} from 'react';
import BlogHeader from './blog/BlogHeader';
import BlogContent from './blog/BlogContent';
class BlogContainer extends Component{
    render(){
        return <div className="blog-container">
            <BlogHeader></BlogHeader>
            <BlogContent></BlogContent>
        </div>
    }
}

export default BlogContainer;