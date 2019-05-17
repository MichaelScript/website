import React, {Component} from 'react';

class BlogPost extends Component{
    render(){
        return <div className="blog-post shadow">
            <div className="post-header">{this.props.title}</div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </div>
    }
}

export default BlogPost;