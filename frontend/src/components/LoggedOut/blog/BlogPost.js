import React, {Component} from 'react';

class BlogPost extends Component{
    render(){
        let link = "/blog/" + this.props.id;
        return <div className="blog-post shadow">
            <div className="post-header">
                <a href={link}>
                    {this.props.title}
                </a>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </div>
    }
}

export default BlogPost;