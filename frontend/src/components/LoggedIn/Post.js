import React, {Component} from 'react';
import { post } from '../../util';

class Post extends Component{
    render(){
        return <div className="blog-post shadow">
            <div className="blog-title">{this.props.title}</div>
            <div className="blog-content">{this.props.content}</div>
        </div>
    }
}

export default Post;